export const BIOMES = [
  {name:'THE SUNKEN CHOIR',sub:'A cathedral swallowed by the tide',floor:'#111b21',wall:'#213138',glow:'#52c8bb',accent:'#afdfc9',boss:'THE CHORISTER'},
  {name:'BRINE GARDENS',sub:'Where coral remembers every name',floor:'#191916',wall:'#343026',glow:'#d5a252',accent:'#f1cf82',boss:'MOTHER OF SALT'},
  {name:'THE BLACK TRENCH',sub:'A pressure that dreams of you',floor:'#151320',wall:'#292239',glow:'#ae86e0',accent:'#d0b1f4',boss:'THE ABYSSAL EYE'}
];
export const CHARACTERS = [
 {id:'mara',name:'MARA VENN',title:'THE WAYFINDER',desc:'A patient hunter. Her first shot seeks the nearest threat.',color:'#8ce0cb',hp:6,speed:176,damage:13,rate:.47,range:300,shot:330,luck:1,defense:0,ability:'TIDECALL',abilityDesc:'Call a spectral bolt to your current target.'},
 {id:'oss',name:'OSS',title:'THE DEEPBORN',desc:'Hard to drown. Slower, armored, and hits like a bell.',color:'#e4ad70',hp:8,speed:148,damage:19,rate:.72,range:260,shot:290,luck:0,defense:1,ability:'SHELL',abilityDesc:'Raise a shell that absorbs the next hit.'},
 {id:'nyx',name:'NYX-7',title:'THE LANTERN',desc:'A fragile machine. Her lantern bursts into branching sparks.',color:'#c6a9f3',hp:5,speed:190,damage:10,rate:.56,range:320,shot:370,luck:2,defense:0,ability:'ARC LANTERN',abilityDesc:'Release a radial burst of charged light.',unlock:'Clear a floor'}
];
const E = (name,kind,hp,speed,damage,range,color,threat,score,shape)=>({name,kind,hp,speed,damage,range,color,threat,score,shape});
export const ENEMIES = [
 E('MIRELING','chase',30,74,1,22,'#7fae98',1,1,'round'), E('GUTTER WISP','ranged',24,42,1,205,'#83c8c0',2,1.2,'wisp'),
 E('BRINE HOUND','charge',43,96,1,30,'#d29263',3,1.5,'hound'), E('SALTBACK','guard',62,38,1,40,'#b3a278',2,1.1,'shell'),
 E('ECHO LEECH','split',27,60,1,24,'#c68b9e',2,1.3,'leech'), E('DROWNED ACOLYTE','ranged',45,30,1,250,'#8e9dc0',3,1.5,'hood'),
 E('SILT BOMBER','explode',35,83,2,36,'#d5a257',3,1.5,'bomb'), E('VEIL STALKER','ambush',38,99,1,28,'#a780c4',3,1.6,'veil'),
 E('TIDE MIMIC','chase',49,56,1,25,'#79b9ab',2,1.4,'shell'), E('CATHEDRAL KNIGHT','guard',82,45,2,38,'#9babb0',4,1.8,'knight'),
 E('GLOAM JELLY','split',58,51,1,28,'#a88acf',3,1.7,'jelly'), E('RIFT HERALD','teleport',53,54,1,190,'#ca79b0',4,1.9,'eye'),
 E('PRESSURE WRAITH','ranged',66,48,2,210,'#7d9fd1',4,2,'wisp'), E('HOOKED SAINT','charge',74,76,2,30,'#d4b377',4,2,'hood'),
 E('VOID BLOOM','explode',68,35,2,75,'#bd80d0',5,2.1,'flower')
];
const I = (id,name,icon,rarity,desc,effect)=>({id,name,icon,rarity,desc,effect});
export const ITEMS = [
 I('ember','Ember Pearl','✦','common','Shots leave a burning wound.','burn'), I('choir','Choirglass','◈','rare','A second note follows every shot.','echo'), I('many','Many-Mouthed Shell','⁕','rare','Every volley splits into three.','spread'), I('needle','Saint’s Needle','↟','common','Shots pass through one more foe.','pierce'), I('undertow','Undertow Lens','◉','common','Shots tug targets toward their path.','pull'),
 I('frost','Cold Hymn','❄','rare','Hits chill and slow their target.','frost'), I('rot','Rotseed','☠','common','Your hits leave a lingering poison.','poison'), I('static','Storm Thread','ϟ','rare','Hits arc to a nearby creature.','chain'), I('glass','Glass Heart','◇','rare','Critical hits shatter into fragments.','crit'), I('orbit','Moon Barnacle','◌','common','A small moon orbits and hurts foes.','orbit'),
 I('lantern','Moth Lantern','☼','common','Shots bend toward vulnerable foes.','homing'), I('bell','Drowned Bell','♢','rare','Hits sometimes stun nearby enemies.','stun'), I('blood','Red Current','♥','rare','Recover a little health after each kill.','leech'), I('anchor','Anchor Tooth','⚓','common','Hits stagger foes; you resist knockback.','stagger'), I('salt','Salt Crown','♛','rare','Your volleys burst in a small area.','blast'),
 I('cinder','Cinder Veil','♨','common','Dodge through danger leaving fire.','dash'), I('twin','Twin Current','Ⅱ','common','A ghost shot mirrors your aim.','twin'), I('needle2','Porcupine Halo','✣','rare','Taking a hit releases a thorn ring.','thorns'), I('siphon','Siphon Cup','▽','common','Nearby drops drift toward you.','magnet'), I('tide','Tide Clock','⌛','rare','Every fifth shot briefly slows time.','slowtime'),
 I('coil','Live Coil','ϟ','common','Shots ricochet once from the walls.','bounce'), I('spore','Pale Spore','❋','common','Poisoned foes spread rot on death.','spore'), I('shell','Crab’s Promise','◒','common','A shell absorbs one hit each room.','shell'), I('flare','Sunken Flare','☀','rare','Shots burn brighter and travel farther.','flare'), I('ribbon','Trawl Ribbon','≈','common','Defeated foes leave a damaging wake.','wake'),
 I('eye','Blind Eye','◉','rare','Manual aim grants extra damage.','focus'), I('marrow','Marrow Key','⌘','common','Finish a room to restore a heart.','mend'), I('mirror','Mirror Fin','◁','rare','Every third shot fires backward too.','mirror'), I('gale','Gale Lung','〰','common','Moving quickly makes your shots faster.','gale'), I('rune','Split Rune','⟡','rare','Your projectiles fork on a kill.','fork'),
 I('ink','Ink Sac','●','common','Leave a blinding pool when hurt.','ink'), I('lure','False Pearl','◉','common','Enemies chase a decoy after you dodge.','lure'), I('prism','Prism Eye','✧','rare','Shots change element on each room.','prism'), I('bellows','Abyss Bellows','⌁','common','Knock enemies away with every hit.','push'), I('fang','Maw Fang','⌑','rare','Close targets take more damage.','fang'),
 I('map','Unfinished Map','▤','common','Reveal secret doors and the floor map.','map'), I('thread','Widow Thread','⌘','rare','Link nearby enemies; damage one, hurt both.','link'), I('glass2','Shiverglass','◇','common','Frozen enemies crack under heavy hits.','shatter'), I('wick','Last Wick','♨','rare','When low on health, attacks ignite.','lastwick'), I('compass','Bent Compass','✥','common','Your shots seek the most dangerous foe.','compass'),
 I('fang2','Crow’s Tooth','⌁','common','Moving leaves a short-lived cutting gust.','gust'), I('shell2','Pearl Armor','⬡','common','Gain a shield when entering a guardian room.','ward'), I('needle3','Void Needle','↟','rare','Shots grow stronger the farther they travel.','void'), I('moth','Mothwing','⋆','common','Dodge lasts longer and recharges faster.','dodge'), I('chime','Quiet Chime','♬','rare','A perfect room clear grants a bonus heart.','perfect'),
 I('ripple','Ripple Stone','◎','common','Shots create a second splash on impact.','ripple'), I('candle','Blue Candle','♧','common','Active relic recharges more quickly.','charge'), I('harpoon','Harpoon Crown','↗','rare','Every fourth shot marks foes for bonus damage.','mark'), I('cocoon','Cocoon of Sleep','❀','rare','First strike on a room’s foes hits harder.','ambush'), I('crown','Crown of Silt','♛','rare','A dangerous relic: faster fire, less health.','curse')
];
export const RELICS = [
 {name:'TIDECALL',icon:'ϟ',cooldown:9,desc:'A bolt finds your target.'}, {name:'BRINE VEIL',icon:'◌',cooldown:14,desc:'Become briefly untouchable.'}, {name:'SALT BLOOM',icon:'✿',cooldown:16,desc:'Burst with a ring of saltfire.'}, {name:'ECHO VIAL',icon:'♢',cooldown:18,desc:'Repeat your last volley.'}
];
