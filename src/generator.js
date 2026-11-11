import {BIOMES,ENEMIES,ITEMS} from './data.js';

export function makeRng(seed){let s=(Number(seed)>>>0)||0x51ab1e;return()=>{s+=0x6D2B79F5;let t=s;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}}
export const pick=(rng,arr)=>arr[Math.floor(rng()*arr.length)];
const key=(x,y)=>`${x},${y}`;
export function generateFloor(seed,floor=1){
 const rng=makeRng(seed+floor*7919), rooms=[], byPos=new Map();
 const add=(x,y,type,depth)=>{const r={id:key(x,y),x,y,type,depth,cleared:false,visited:false,doors:[],encounter:[],reward:null};rooms.push(r);byPos.set(r.id,r);return r};
 let cur=add(0,0,'start',0);const main=[cur],used=new Set([cur.id]);
 for(let i=1;i<=5;i++){
  let opts=[[1,0],[0,1],[0,-1]];if(i===5)opts=[[1,0]];
  let [dx,dy]=opts[Math.floor(rng()*opts.length)];let p=[cur.x+dx,cur.y+dy];let tries=0;
  while(used.has(key(...p))&&tries++<8){[dx,dy]=opts[(opts.indexOf(opts.find(v=>v[0]===dx&&v[1]===dy))+1)%opts.length];p=[cur.x+dx,cur.y+dy]}
  cur=add(p[0],p[1],i===5?'boss':'combat',i);used.add(cur.id);main.push(cur);
 }
 main[2].type='treasure';
 for(const source of [main[1],main[3]])if(rng()<.75){const opts=[[0,1],[0,-1],[1,0],[-1,0]].sort(()=>rng()-.5);for(const [dx,dy] of opts){const id=key(source.x+dx,source.y+dy);if(!used.has(id)){const type=rng()<.45?'shop':rng()<.5?'event':'combat';add(source.x+dx,source.y+dy,type,source.depth);used.add(id);break}}}
 for(let i=0;i<rooms.length;i++)for(let j=i+1;j<rooms.length;j++){let a=rooms[i],b=rooms[j];if(Math.abs(a.x-b.x)+Math.abs(a.y-b.y)===1){a.doors.push(b.id);b.doors.push(a.id)}}
 const biome=BIOMES[(floor-1)%BIOMES.length];
 for(const r of rooms){
  if(r.type==='start'){r.cleared=true;continue}
  if(r.type==='treasure'){r.reward=pick(rng,ITEMS);continue}
  if(r.type==='shop'){r.reward=pick(rng,ITEMS);continue}
  if(r.type==='event'){r.reward=pick(rng,['heal','coins','item']);continue}
  const count=r.type==='boss'?1:Math.min(5,2+Math.floor(r.depth/2)+Math.floor(rng()*2));
  for(let n=0;n<count;n++){let enemy=pick(rng,ENEMIES.slice(0,Math.min(ENEMIES.length,7+floor*2)));r.encounter.push({type:enemy.name,x:92+rng()*236,y:240+rng()*260,hp:enemy.hp*(1+(floor-1)*.18),maxHp:enemy.hp*(1+(floor-1)*.18),variant:Math.floor(rng()*9999)})}
  if(r.type==='boss')r.encounter=[{type:biome.boss,x:210,y:360,hp:260+floor*40,maxHp:260+floor*40,variant:floor}];
 }
 return {seed,floor,biome,rooms,start:main[0].id,boss:main[5].id};
}
