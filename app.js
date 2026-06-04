const CSV_URL = 'characters_v2.csv';
const FALLBACK_CSV = "character_id,name,also_known_as,kana,romaji,first_arc,role_group,gender,race_species,status,affiliations,occupation,nen_type,nen_abilities,weapons_items,eye_color,hair_color,age,height_cm,debut_manga,debut_anime_2011,emoji_hint,quote_hint_paraphrase,quote_clue,ability_clue,emoji_clue_steps,game_modes_ready,splash_url,source_url,data_quality_notes\nhxh_gon_freecss,Gon Freecss,,ゴン＝フリークス,Gon Furīkusu,Hunter Exam,Main protagonist,Male,Human,Alive,Hunter Association,Rookie Hunter,Enhancement,Jajanken: Rock|Jajanken: Paper|Jajanken: Scissors|Limitation Transformation,Fishing rod|Jajanken,Brown,Greenish Black,11 debut; 13-14 current,154,Chapter 1,Episode 1,🟢🎣👦👊🪨,No quiere aceptar quedarse en el lado perdedor.,No quiere aceptar quedarse en el lado perdedor.,\"Concentra aura en el puño para un ataque directo de impacto, con variantes a distancia y de corte.\",🟢|🎣|👦|👊|🪨,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/3/3e/HxH2011_EP147_Gon_Portrait.png/revision/latest?cb=20230904181801,https://hunterxhunter.fandom.com/wiki/Gon_Freecss,Portrait used as splash substitute; verify if game needs full-body or crop images.\nhxh_killua_zoldyck,Killua Zoldyck,Kil|Evans,キルア＝ゾルディック,Kirua Zorudikku,Hunter Exam,Main ally/deuteragonist,Male,Human,Alive,Hunter Association|former Zoldyck Family|former Chimera Ant Extermination Team,Rookie Hunter,Transmutation,Lightning Palm|Thunderbolt|Godspeed|Whirlwind|Speed of Lightning,Electric aura|Yo-yos|Assassin techniques,Blue,White,11 debut; 13-14 current,158,Chapter 6,Episode 3,⚡🛹👦🐱🔪,Quiere dejar de matar y vivir como un niño junto a Gon.,Quiere dejar de matar y vivir como un niño junto a Gon.,\"Convierte su aura en electricidad para atacar, moverse a velocidad extrema y reaccionar casi automáticamente.\",⚡|🛹|👦|🐱|🔪,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/b/bd/HxH2011_EP147_Killua_Portrait.png/revision/latest?cb=20230904181904,https://hunterxhunter.fandom.com/wiki/Killua_Zoldyck,Portrait used as splash substitute.\nhxh_kurapika,Kurapika,Chain Bastard|Rat,クラピカ,Kurapika,Hunter Exam,Main protagonist in Yorknew/Succession Contest,Male,Human|Kurta Clan,Alive,Hunter Association|Nostrade Family|Zodiacs|Oito Hui Guo Rou,Blacklist Hunter|Nostrade Family Underboss|Zodiac Rat|Royal Bodyguard|Nen Teacher,Conjuration|Specialization when scarlet eyes,Holy Chain|Steal Chain|Chain Jail|Dowsing Chain|Judgment Chain|Emperor Time|Stealth Dolphin,Chains|Scarlet Eyes,Brown|Blue|Grey|Scarlet,Blond,17 Heavens Arena; 19 current,171,Chapter 2,Episode 1,⛓️👁️🟥🕷️⚖️,Teme más perder su rabia que morir.,Teme más perder su rabia que morir.,\"Invoca cadenas con reglas estrictas: puede rastrear, curar, robar Nen, juzgar y restringir a ciertos enemigos.\",⛓️|👁️|🟥|🕷️|⚖️,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/d/d9/Kurapika_HCE_Portrait.png/revision/latest?cb=20170704123336,https://hunterxhunter.fandom.com/wiki/Kurapika,Nen type has conditional transformation; model should accept both values for Classic mode.\nhxh_leorio_paradinight,Leorio Paradinight,Rioleo|Loradio|Boar,レオリオ＝パラディナイト,Reorio Paradinaito,Hunter Exam,Main ally,Male,Human,Alive,Hunter Association|Zodiacs,Rookie Hunter|Medical Student|Zodiac Boar,Emission,Remote Punch,Medical knowledge|Remote punch,Blue|Brown,Black,19 Heavens Arena; 21 current,193,Chapter 2,Episode 1,🩺💼👓🐗👊,Quiere ser doctor y que el dinero no impida curar a otros.,Quiere ser doctor y que el dinero no impida curar a otros.,\"Emite un golpe a distancia que aparece desde otra superficie, como si el puño atravesara el espacio.\",🩺|💼|👓|🐗|👊,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/7/73/HxH2011_EP145_Leorio_Portrait.png/revision/latest?cb=20230902193715,https://hunterxhunter.fandom.com/wiki/Leorio_Paradinight,Occupation has medical and Hunter identities.\nhxh_hisoka_morow,Hisoka Morow,The Magician|Grim Reaper,ヒソカ＝モロウ,Hisoka Morou,Hunter Exam,Antagonist/rival,Male,Human,Alive,Hunter Association|Heavens Arena|former Phantom Troupe,Hunter|Floor Master|former thief|former Phantom Troupe #4,Transmutation,Bungee Gum|Texture Surprise,Playing cards|Bungee Gum,Blue|Yellow,Blue|Red/Fuchsia,Unknown,187,Chapter 5,Episode 3,🃏❤️⭐💧🎪,Disfruta enfrentar planes ajenos y verlos fallar.,Disfruta enfrentar planes ajenos y verlos fallar.,\"Su aura tiene elasticidad y adherencia al mismo tiempo, permitiéndole atraer, pegar y lanzar objetos o personas.\",🃏|❤️|⭐|💧|🎪,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/2/29/Hisoka_Morow_YC_Portrait.png/revision/latest?cb=20190123172039,https://hunterxhunter.fandom.com/wiki/Hisoka_Morow,Include both Hunter and former Phantom Troupe relationships.\nhxh_chrollo_lucilfer,Chrollo Lucilfer,Boss|Chro,クロロ＝ルシルフル,Kuroro Rushirufuru,Yorknew City,Antagonist,Male,Human,Alive,Phantom Troupe|Heavens Arena,Thief|Leader of the Phantom Troupe|Floor Master,Specialization,Skill Hunter|Double Face|Indoor Fish|Fun Fun Cloth|Teleportation|The Sun and Moon|Order Stamp|Convert Hands,Bandit's Secret book,Black|Grey,Black,26 debut; 28 current,177,Chapter 71,Episode 41,📖🕷️✝️🖤🎭,Ve placer en apropiarse de habilidades y explorar la oscuridad de sus dueños.,Ve placer en apropiarse de habilidades y explorar la oscuridad de sus dueños.,Roba habilidades Nen y las almacena en un libro; para usarlas debe cumplir condiciones específicas.,📖|🕷️|✝️|🖤|🎭,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/7/78/Chrollo_Lucilfer_GI_Portrait.png/revision/latest?cb=20130502190618,https://hunterxhunter.fandom.com/wiki/Chrollo_Lucilfer,Some stolen abilities are former; split if game needs exact current/old status.\nhxh_illumi_zoldyck,Illumi Zoldyck,Illu|Gittarackur,イルミ＝ゾルディック,Irumi Zorudikku,Hunter Exam,Antagonist,Male,Human,Alive,Zoldyck Family|Hunter Association|Phantom Troupe,Zoldyck Assassin|Hunter|Thief|Phantom Troupe #11,Manipulation,Pin and Needle Manipulation|Body Alteration|Hypnotic Spell|Corpse Control|Needle People,Needles,Black,Black,24 debut; 26 current,185,Chapter 6 disguised; Chapter 26 true appearance,Episode 3 disguised; Episode 15 true appearance,📍🪡👁️🖤🔪,Ve a Killua como alguien moldeado para ser asesino.,Ve a Killua como alguien moldeado para ser asesino.,\"Usa agujas para alterar apariencia, controlar cuerpos y manipular conductas con precisión aterradora.\",📍|🪡|👁️|🖤|🔪,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/7/72/Illumi_Zoldyck_HCE_Portrait.png/revision/latest?cb=20181227022223,https://hunterxhunter.fandom.com/wiki/Illumi_Zoldyck,Alias Gittarackur useful for advanced answer aliases.\nhxh_biscuit_krueger,Biscuit Krueger,Bisky,ビスケット＝クルーガー,Bisuketto Kurūgā,Greed Island,Mentor/ally,Female,Human,Alive,Hunter Association|Shingen-ryu School|Kurapika|Marayam Hui Guo Rou,Double-Star Stone Hunter|Shingen-ryu Master|Nen Teacher|Royal Bodyguard,Transmutation,Magical Esthetician|Magical Spa Services|Piano Massage|Body Transformation,Nen massage|Body transformation,Blue|Pink,Brown|Blonde,57 debut; 58-59 current,,Chapter 125,Episode 60,💎🎀💪🧖‍♀️🍪,\"Tras décadas mintiendo, puede detectar si alguien miente.\",\"Tras décadas mintiendo, puede detectar si alguien miente.\",Materializa una asistente que restaura el cuerpo con masajes y reduce drásticamente la fatiga.,💎|🎀|💪|🧖‍♀️|🍪,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/c/cd/Biscuit_Krueger_CA_Portrait.png/revision/latest?cb=20190630140152,https://hunterxhunter.fandom.com/wiki/Biscuit_Krueger,Has preferred childlike form and true muscular form; consider form_variant column later.\nhxh_kite,Kite,Reina,カイト,Kaito,Hunter Exam/Chimera Ant,Mentor/ally,Unknown,Human former|Chimera Ant,Deceased human|Alive as Chimera Ant,Amateur Hunters|former Ging Freecss student|former Hunter Association|former Kakin Wildlife Exploration Team,Leader/Mentor of Amateur Hunters|former Hunter|former Wildlife Exploration Team leader,Conjuration (since lost),Crazy Slots|Scythe|Silent Waltz|Staff|Carbine,Crazy Slots,Blue|Brown|Purple,Light Brown|White|Red,,,Chapter 1,Episode 1 silhouette; Episode 75 actual appearance,🎰🃏🧢✂️🐜,Exige mantener la resolución y no retroceder.,Exige mantener la resolución y no retroceder.,\"Conjura una ruleta que decide al azar el arma que usará, obligándolo a adaptarse al resultado.\",🎰|🃏|🧢|✂️|🐜,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/1/1d/Kite_CA_Portrait.png/revision/latest?cb=20190127155247,https://hunterxhunter.fandom.com/wiki/Kite,Complex identity; may need separate rows for Human Kite and Chimera Ant Kite.\nhxh_isaac_netero,Isaac Netero,,アイザック＝ネテロ,Aizakku Netero,Hunter Exam,Authority/mentor,Male,Human,Deceased,former Hunter Association|former Pure Paladin Squad|former Shingen-ryu|former Zodiacs|former Chimera Ant Extermination Team,Hunter|12th Hunter Association Chairman|Shingen-ryu Grandmaster|Extermination Team Leader,Enhancement,100-Type Guanyin Bodhisattva|Zero Hand,Prayer martial arts|Poor Man's Rose,Gray|Brown,Gray|White,110-120+,,Chapter 12,Episode 6,🙏💯🪷☢️👴,Se considera afortunado de enfrentar un rival que lo llevó al límite.,Se considera afortunado de enfrentar un rival que lo llevó al límite.,Manifiesta una entidad gigante que ataca con palmas velocísimas después de una postura de oración.,🙏|💯|🪷|☢️|👴,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/8/88/Isaac_Netero_HE_Portrait.png/revision/latest?cb=20230314041500,https://hunterxhunter.fandom.com/wiki/Isaac_Netero,Abilities list can be expanded from Nen page if needed.\nhxh_ging_freecss,Ging Freecss,The Boar,ジン＝フリークス,Jin Furīkusu,Hunter Exam/13th Hunter Chairman Election,Goal figure/mentor,Male,Human,Alive,Hunter Association|Greed Island|Beyond Netero's Dark Continent Expedition Team|former Zodiacs,Double-Star Ruins Hunter|Lead Greed Island Game Master|Dark Continent Expedition Team member|former Zodiac,Unknown,Remote Punch|Ultrasound|Phasing Bullets,Adaptable Nen combat,Blue|Brown,Black,31 debut; 34 current,,Chapter 1 image; Chapter 66 official,Episode 1 image; Episode 37 official,🧢🌍🧭🕹️🐗,Valora el viaje y las desviaciones más que solo el destino.,Valora el viaje y las desviaciones más que solo el destino.,Su dominio del Nen le permite reproducir y reinterpretar técnicas de golpe después de experimentarlas.,🧢|🌍|🧭|🕹️|🐗,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/3/3d/GingAv.png/revision/latest?cb=20181125230438,https://hunterxhunter.fandom.com/wiki/Ging_Freecss,Nen type unknown; abilities listed in Hunterpedia summaries.\nhxh_meruem,Meruem,The King,メルエム,Meruemu,Chimera Ant,Main antagonist,Male,Chimera Ant,Deceased,former Chimera Ants,King of the Chimera Ants,Emission,Aura Synthesis|Metamorphosis|Rage Blast|Photon,Royal aura|Tail,Purple,None,40 days,,Chapter 213 actual appearance,Episode 91 actual appearance,👑🐜♟️💚☢️,Se pregunta quién es y qué sentido tiene ser rey.,Se pregunta quién es y qué sentido tiene ser rey.,\"Aumenta su aura y poder al consumir a otros usuarios, absorbiendo parte de sus capacidades.\",👑|🐜|♟️|💚|☢️,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/5/58/Meruem_CA_Portrait.png/revision/latest?cb=20190419124312,https://hunterxhunter.fandom.com/wiki/Meruem,Central for quote/emoji mode; avoid spoilery hints if using early-game mode.\nhxh_neferpitou,Neferpitou,Pitou,ネフェルピトー,Neferupitō,Chimera Ant,Antagonist/Royal Guard,Unknown,Cat-humanoid Chimera Ant,Deceased,former Chimera Ant Queen|former Royal Guards|former Chimera Ant King,Chimera Ant Royal Guard,Specialization,Terpsichora|Doctor Blythe|Puppeteering,Claws|Puppet Nen,Red,White,,,Chapter 197 actual appearance,Episode 84 actual appearance,🐱👩‍⚕️🧵🎭🐜,Acepta haber recibido la ira que otros no debían cargar.,Acepta haber recibido la ira que otros no debían cargar.,\"Usa muñecos y marionetas de Nen para reparar cuerpos, controlar movimientos y potenciar su combate.\",🐱|👩‍⚕️|🧵|🎭|🐜,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/2/20/109_-_Neferpitou_portrait.png/revision/latest?cb=20131218034405,https://hunterxhunter.fandom.com/wiki/Neferpitou,Gender is listed as unknown in Hunterpedia.\nhxh_shaiapouf,Shaiapouf,Pouf|Sir Shau,シャウアプフ,Shauapufu,Chimera Ant,Antagonist/Royal Guard,Male,Butterfly-humanoid Chimera Ant,Deceased,former Chimera Ant Queen|former Royal Guards|former Chimera Ant King,Chimera Ant Royal Guard,Manipulation,Cocoon|Spiritual Message|Beelzebub|Body Reconstruction,Wings|Scales,Amber,Blond,,,Chapter 202 actual debut,Episode 86 actual debut,🦋🎻👑🐜🌀,Su identidad gira alrededor de servir y proteger al Rey.,Su identidad gira alrededor de servir y proteger al Rey.,\"Divide su cuerpo en partículas o clones, lee emociones y manipula estados mentales mediante sus escamas.\",🦋|🎻|👑|🐜|🌀,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/a/a2/109_-_Shaiapouf_portrait.png/revision/latest?cb=20150902224149,https://hunterxhunter.fandom.com/wiki/Shaiapouf,Image URL verified via Hunterpedia static asset.\nhxh_menthuthuyoupi,Menthuthuyoupi,Youpi,モントゥトゥユピー,Montutuyupī,Chimera Ant,Antagonist/Royal Guard,Male,Chimera Ant,Deceased,former Chimera Ant Queen|former Royal Guards|former Chimera Ant King,Chimera Ant Royal Guard,Transmutation,Metamorphosis|Rage Blast|Rage Incarnate,Body transformation|Rage aura,Green,Dark Brown,,,Chapter 206 debut,Episode 88,🛡️💢💪🐜👑,Se define como escudo del Rey.,Se define como escudo del Rey.,Transforma su cuerpo en formas monstruosas y descarga explosiones de aura ligadas a su ira.,🛡️|💢|💪|🐜|👑,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/7/79/109_-_Menthuthuyoupi_portrait.png/revision/latest?cb=20131218033843,https://hunterxhunter.fandom.com/wiki/Menthuthuyoupi,Good for emoji mode due to shield/rage/body transformation.\nhxh_komugi,Komugi,,コムギ,Komugi,Chimera Ant,Supporting key character,Female,Human,Deceased,,Gungi Player|World Gungi Champion,Enhancement,Rapidly Evolving Gungi Playing Skills,Gungi board|Walking stick,Brown|Green,Brown|White,,,Chapter 244,Episode 102,♟️👑👧🦯😭,Está dispuesta a apostar su vida en vez de una extremidad.,Está dispuesta a apostar su vida en vez de una extremidad.,\"Su talento despierta y crece durante el Gungi, poniendo su vida como condición para superar sus límites.\",♟️|👑|👧|🦯|😭,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/f/f1/Komugi_CA_Portrait.png/revision/latest?cb=20131121184842,https://hunterxhunter.fandom.com/wiki/Komugi,\"Nen type listed, but combat relevance is low; consider category 'non-combat Nen'.\"\nhxh_zeno_zoldyck,Zeno Zoldyck,,ゼノ＝ゾルディック,Zeno Zorudikku,Zoldyck Family/Yorknew City,Assassin/ally-antagonist,Male,Human,Alive,Zoldyck Family,Zoldyck Assassin|former Head of the Zoldyck Family,Emission,Aura Blast|Dragon Head|Dragon Lance|Dragon Dive,Dragon-shaped aura,Blue|Gray,Grey White|Ash White,67 debut; 69 current,161,Chapter 42,Episode 24,🐉👴🔪🏔️💥,No mata por placer y no quiere trabajar ni morir por nada.,No mata por placer y no quiere trabajar ni morir por nada.,\"Da forma de dragón a su aura para atacar a distancia, transportar personas o bombardear una zona.\",🐉|👴|🔪|🏔️|💥,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/4/4f/Zeno_Zoldyck_YC_Portrait.png/revision/latest?cb=20190123184544,https://hunterxhunter.fandom.com/wiki/Zeno_Zoldyck,Useful for family/affiliation and Nen ability clues.\nhxh_knuckle_bine,Knuckle Bine,,ナックル＝バイン,Nakkuru Bain,Chimera Ant,Ally/Extermination Team,Male,Human,Alive,Hunter Association|Morel Mackernasey|former Chimera Ant Extermination Team,Beast Hunter|former Extermination Team Member,Conjuration,Hakoware,A.P.R.|Interest-based aura debt,Black,Dark Green,,,Chapter 200,Episode 86,💸🐶👊📈🥺,Quiere conocer a los Ants antes de decidir exterminarlos.,Quiere conocer a los Ants antes de decidir exterminarlos.,\"Coloca una deuda de aura que acumula interés; si el rival quiebra, queda forzado a Zetsu.\",💸|🐶|👊|📈|🥺,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/6/6f/Knuckle_Bine_CA_Portrait.png/revision/latest?cb=20230613232331,https://hunterxhunter.fandom.com/wiki/Knuckle_Bine,Add A.P.R. image asset later for ability mode.\nhxh_shoot_mcmahon,Shoot McMahon,,シュート＝マクマホン,Shūto Makumahon,Chimera Ant,Ally/Extermination Team,Male,Human,Alive,Hunter Association|Morel Mackernasey|former Chimera Ant Extermination Team,Unidentified Beast Hunter|former Extermination Team Member,Manipulation,Imprint Conversion|Disembodied Hands|Hotel Rafflesia,Cage|Floating hands,Black,Olive green|Pink,28; 29 current,,Chapter 200,Episode 86,🧤🕊️🏨🔒😨,Se describe como alguien que salió de una jaula emocional.,Se describe como alguien que salió de una jaula emocional.,Captura partes del cuerpo del oponente en una jaula flotante después de tocarlas con sus manos.,🧤|🕊️|🏨|🔒|😨,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/1/17/2011_EP90_Shoot_McMahon_Portrait.png/revision/latest?cb=20230616231327,https://hunterxhunter.fandom.com/wiki/Shoot_McMahon,Nen type is marked with a note in Hunterpedia; verify if using strict canon.\nhxh_morel_mackernasey,Morel Mackernasey,Smoke Man|Shades,モラウ＝マッカーナーシ,Morau Makkānāshi,Chimera Ant,Ally/Extermination Team,Male,Human,Alive,Hunter Association|former Chimera Ant Extermination Team,Triple-Star Sea Hunter|Sea Captain|former Extermination Team Member,Manipulation,Deep Purple|Smoky Jail,Giant smoking pipe|Smoke soldiers,,Silver,,,Chapter 199,Episode 85,🚬🌫️🌊🕶️👨‍🏫,Explica que el combate Nen nunca se reduce solo a números de aura.,Explica que el combate Nen nunca se reduce solo a números de aura.,\"Manipula humo con una pipa gigante para crear clones, pantallas, cuerdas y trampas tácticas.\",🚬|🌫️|🌊|🕶️|👨‍🏫,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/5/5c/Morel_Mackernasey_CA_Portrait.png/revision/latest?cb=20190127155510,https://hunterxhunter.fandom.com/wiki/Morel_Mackernasey,Strong candidate for ability-icon mode if we add Deep Purple art.\nhxh_palm_siberia,Palm Siberia,Sinker Belle|No. 1,パーム＝シベリア,Pāmu Shiberia,Chimera Ant,Ally/Extermination Team,Female,Human former|Chimera Ant,Alive,Hunter Association|Knov|former Chimera Ant Extermination Team,Hunter|Clairvoyant|former Extermination Team Member|former Chimera Ant Experimental Soldier,Enhancement,Merman Clairvoyance|Wink Blue|Black Widow,Clairvoyance|Black Widow hair armor,Fuchsia|Dark Blue,Black|Brown,22; 23 current,,Chapter 200,Episode 86,🔮🖤👁️🐜🕷️,Reconoce que una parte de sí misma ahora es Ant.,Reconoce que una parte de sí misma ahora es Ant.,Rastrea objetivos mediante una imagen y luego usa su cabello como protección y arma tras transformarse.,🔮|🖤|👁️|🐜|🕷️,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/7/75/Palm_Siberia_%28Ant%29_CA_Portrait.png/revision/latest?cb=20140620234253,https://hunterxhunter.fandom.com/wiki/Palm_Siberia,Could split into Human Palm and Chimera Ant Palm for cleaner classic comparisons.\nhxh_nobunaga_hazama,Nobunaga Hazama,Nobu,,,Yorknew City,Phantom Troupe member,Male,Human,Alive,Phantom Troupe|Meteor City,Thief|Swordsman|Phantom Troupe #1,Enhancement,En: sword range control|Master swordsmanship,Katana|En,Black,Black,,183,Chapter 71,Episode 41,🗡️🕷️👘⭕😠,Su lealtad al grupo pesa tanto como su orgullo de espadachín.,Su lealtad al grupo pesa tanto como su orgullo de espadachín.,Combina un radio de En muy corto con una reacción de espada pensada para cortar al instante.,🗡️|🕷️|👘|⭕|😠,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/4/46/HxH2011_EP50_Nobunaga_Portrait.png/revision/latest?cb=20230122183803,https://hunterxhunter.fandom.com/wiki/Nobunaga_Hazama,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_feitan_portor,Feitan Portor,Fei,,,Yorknew City,Phantom Troupe member,Male,Human,Alive,Phantom Troupe|Meteor City,Thief|Interrogator|Phantom Troupe #2,Transmutation,Pain Packer|Rising Sun,Umbrella sword|Protective suit,Grey,Black,,155,Chapter 71,Episode 41,☂️🕷️🔥😈🩸,\"Mientras más daño recibe, más aterradora se vuelve su respuesta.\",\"Mientras más daño recibe, más aterradora se vuelve su respuesta.\",Convierte el dolor recibido en una técnica que libera calor devastador dentro de una armadura protectora.,☂️|🕷️|🔥|😈|🩸,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/8/86/HxH2011_EP50_Feitan_Portrait.png/revision/latest?cb=20230121061055,https://hunterxhunter.fandom.com/wiki/Feitan_Portor,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_machi_komacine,Machi Komacine,Machi,,,Heavens Arena,Phantom Troupe member,Female,Human,Alive,Phantom Troupe|Meteor City,Thief|Phantom Troupe #3,Transmutation,Nen Stitches|Aura threads,Needles|Nen threads,Blue,Pink/Purple,,159,Chapter 55,Episode 32,🧵🕷️💉💜🩹,Confía más en su intuición que en explicaciones largas.,Confía más en su intuición que en explicaciones largas.,\"Transmuta aura en hilos extremadamente finos para coser heridas, rastrear o inmovilizar.\",🧵|🕷️|💉|💜|🩹,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/4/4c/Machi_Komacine_HA_Portrait.png/revision/latest?cb=20131116122706,https://hunterxhunter.fandom.com/wiki/Machi_Komacine,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_phinks_magcub,Phinks Magcub,Phinks,,,Yorknew City,Phantom Troupe member,Male,Human,Alive,Phantom Troupe|Meteor City,Thief|Phantom Troupe #5,Enhancement,Ripper Cyclotron,Bare fists|Pharaoh-style outfit,Black,Blond,,185,Chapter 71,Episode 41,💪🕷️🌀👊🟨,\"Su solución favorita suele ser directa, rápida y brutal.\",\"Su solución favorita suele ser directa, rápida y brutal.\",\"Carga potencia girando el brazo: mientras más vueltas acumula, más destructivo es el golpe.\",💪|🕷️|🌀|👊|🟨,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/8/88/HxH2011_EP41_Phinks_Portrait.png/revision/latest?cb=20221008055432,https://hunterxhunter.fandom.com/wiki/Phinks_Magcub,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_franklin_bordeau,Franklin Bordeau,Franklin,,,Yorknew City,Phantom Troupe member,Male,Human,Alive,Phantom Troupe|Meteor City,Thief|Phantom Troupe #7,Emission,Double Machine Gun,Finger guns|Modified fingers,Black,Black,,219,Chapter 71,Episode 41,🔫🕷️✋🧥💥,Puede discutir con calma incluso cuando la violencia ya empezó.,Puede discutir con calma incluso cuando la violencia ya empezó.,Emite ráfagas de aura desde los dedos como si fueran ametralladoras.,🔫|🕷️|✋|🧥|💥,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/6/62/HxH2011_EP58_Franklin_Portrait.png/revision/latest?cb=20230122063251,https://hunterxhunter.fandom.com/wiki/Franklin_Bordeau,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_shizuku_murasaki,Shizuku Murasaki,Shizu,,,Yorknew City,Phantom Troupe member,Female,Human,Alive,Phantom Troupe,Thief|Phantom Troupe #8,Conjuration,Blinky,Conjured vacuum cleaner,Black,Black,,160,Chapter 71,Episode 41,🧹🕷️👓🩸🌀,\"Olvida detalles triviales, pero su arma no deja rastro de la escena.\",\"Olvida detalles triviales, pero su arma no deja rastro de la escena.\",Conjura una aspiradora viva que absorbe materia no viva y puede limpiar rastros de sangre.,🧹|🕷️|👓|🩸|🌀,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/9/9e/HxH2011_EP53_Shizuku_Portrait.png/revision/latest?cb=20230122061315,https://hunterxhunter.fandom.com/wiki/Shizuku_Murasaki,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_bonolenov_ndongo,Bonolenov Ndongo,Bono,,,Yorknew City,Phantom Troupe member,Male,Human|Gyudondond Tribe,Alive,Phantom Troupe,Thief|Warrior|Phantom Troupe #10,Conjuration,Battle Cantabile: Prologue|Battle Cantabile: Jupiter,Bandaged body|Sound holes,Unknown,Unknown,,219,Chapter 71,Episode 41,🥁🕷️🎶🩹🪐,Su cuerpo transforma heridas rituales en música de combate.,Su cuerpo transforma heridas rituales en música de combate.,Usa los orificios de su cuerpo para producir música ritual que materializa ataques.,🥁|🕷️|🎶|🩹|🪐,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/f/fc/HxH2011_EP96_Bonolenov_Portrait.png/revision/latest?cb=20230123153232,https://hunterxhunter.fandom.com/wiki/Bonolenov_Ndongo,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_pakunoda,Pakunoda,Paku,,,Yorknew City,Former Phantom Troupe member,Female,Human,Deceased,former Phantom Troupe|Meteor City,Thief|former Phantom Troupe #9,Specialization,Psychometry|Memory Bomb,Revolver|Memory bullets,Brown,Blonde,,182,Chapter 71,Episode 41,🧠🕷️🔫💌🕯️,\"Para proteger al grupo, elige entregar recuerdos antes que explicaciones.\",\"Para proteger al grupo, elige entregar recuerdos antes que explicaciones.\",Lee recuerdos al tocar a alguien y puede dispararlos como balas de memoria a otros.,🧠|🕷️|🔫|💌|🕯️,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/d/da/Pakunoda_YC_Portrait.png/revision/latest?cb=20190124184929,https://hunterxhunter.fandom.com/wiki/Pakunoda,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_uvogin,Uvogin,Uvo,,,Yorknew City,Former Phantom Troupe member,Male,Human,Deceased,former Phantom Troupe|Meteor City,Thief|former Phantom Troupe #11,Enhancement,Big Bang Impact,Bare fists|Raw strength,Black,Black,,258,Chapter 71,Episode 41,💪🕷️🦍👊💥,Su orgullo está en pelear de frente y aplastar cualquier defensa.,Su orgullo está en pelear de frente y aplastar cualquier defensa.,Potencia un puñetazo con aura hasta convertirlo en un impacto explosivo gigantesco.,💪|🕷️|🦍|👊|💥,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/6/60/HxH2011_EP41_Uvogin_Portrait.png/revision/latest?cb=20230122192913,https://hunterxhunter.fandom.com/wiki/Uvogin,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_shalnark,Shalnark,Shal,,,Yorknew City,Former Phantom Troupe member,Male,Human,Deceased,former Phantom Troupe|Hunter Association|Meteor City,Thief|Hunter|former Phantom Troupe #6,Manipulation,Black Voice|Autopilot,Cell phone|Antenna,Green,Blond,,180,Chapter 71,Episode 41,📱🕷️📡🙂⚡,Detrás de su sonrisa hay una forma muy fría de convertir personas en piezas.,Detrás de su sonrisa hay una forma muy fría de convertir personas en piezas.,Clava antenas para controlar cuerpos; también puede ponerse en modo automático de alto rendimiento.,📱|🕷️|📡|🙂|⚡,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/c/c3/HxH2011_EP53_Shalnark_Portrait.png/revision/latest?cb=20221008053250,https://hunterxhunter.fandom.com/wiki/Shalnark,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_kortopi,Kortopi,Kortopi,,,Yorknew City,Former Phantom Troupe member,Male,Human,Deceased,former Phantom Troupe,Thief|former Phantom Troupe #12,Conjuration,Gallery Fake,Hands|Copied objects,Unknown,Light Blue,,160,Chapter 71,Episode 41,🖼️🕷️📦👥🖐️,\"Puede llenar una ciudad de copias, pero ninguna dura para siempre.\",\"Puede llenar una ciudad de copias, pero ninguna dura para siempre.\",Toca un objeto con una mano y crea una copia temporal con la otra.,🖼️|🕷️|📦|👥|🖐️,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/8/8c/HxH2011_EP56_Kortopi_Portrait.png/revision/latest?cb=20230123004840,https://hunterxhunter.fandom.com/wiki/Kortopi,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_kalluto_zoldyck,Kalluto Zoldyck,Kalluto,,,Greed Island,Phantom Troupe member/Zoldyck,Male,Human,Alive,Zoldyck Family|Phantom Troupe,Assassin|Thief|Phantom Troupe #4,Manipulation,Paper Manipulation|Surveillance paper|Paper fan attacks,Paper fan|Confetti,Pink,Black,,150,Chapter 36,Episode 23,🎎🕷️📄🪭🔪,Se une a monstruos mayores para recuperar a alguien de su familia.,Se une a monstruos mayores para recuperar a alguien de su familia.,\"Manipula papel para espiar, cortar y atacar en múltiples direcciones.\",🎎|🕷️|📄|🪭|🔪,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/b/bb/HxH2011_EP97_Kalluto_Close_Up.png/revision/latest?cb=20221123201432,https://hunterxhunter.fandom.com/wiki/Kalluto_Zoldyck,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_silva_zoldyck,Silva Zoldyck,Silva,,,Zoldyck Family,Zoldyck Family,Male,Human,Alive,Zoldyck Family,Head of Zoldyck Family|Assassin,Transmutation,Explosive Orbs|Aura blasts,Assassin techniques,Blue,Silver,,198,Chapter 39,Episode 22,🌕🔪👑💥🧬,Su autoridad familiar se impone incluso entre asesinos legendarios.,Su autoridad familiar se impone incluso entre asesinos legendarios.,Transmuta aura en enormes esferas explosivas lanzadas con fuerza letal.,🌕|🔪|👑|💥|🧬,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/0/0a/HxH2011_EP117_Silva_Portrait.png/revision/latest?cb=20230215181043,https://hunterxhunter.fandom.com/wiki/Silva_Zoldyck,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_milluki_zoldyck,Milluki Zoldyck,Milluki,,,Zoldyck Family,Zoldyck Family,Male,Human,Alive,Zoldyck Family,Assassin|Inventor|Otaku,Unknown,Unknown|Technical devices,Computers|Bombs|Figurines,Black,Black,,182,Chapter 42,Episode 24,💻🍕🔪🎮🧸,Prefiere controlar desde la tecnología antes que ensuciarse las manos.,Prefiere controlar desde la tecnología antes que ensuciarse las manos.,\"No se muestra una habilidad Nen clara; destaca por dispositivos, trampas e información.\",💻|🍕|🔪|🎮|🧸,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/1/1a/Milluki_Zoldyck_2011.png/revision/latest?cb=20150111053829,https://hunterxhunter.fandom.com/wiki/Milluki_Zoldyck,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_alluka_zoldyck,Alluka Zoldyck,Nanika|Aika,,,13th Hunter Chairman Election,Zoldyck Family,Female,Human|Unknown entity host,Alive,Zoldyck Family|Nanika,Zoldyck child,Specialization/Unknown,Wish Granting|Requests and consequences,Nanika,Blue,Black,,152,Chapter 320,Episode 138,🌑🙏💖🧸⚠️,\"Su cariño puede conceder milagros, pero sus reglas pueden ser aterradoras.\",\"Su cariño puede conceder milagros, pero sus reglas pueden ser aterradoras.\",La entidad ligada a ella concede deseos después de una secuencia de peticiones con consecuencias proporcionales.,🌑|🙏|💖|🧸|⚠️,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/0/07/147_-_Alluka_face.png/revision/latest?cb=20170804080459,https://hunterxhunter.fandom.com/wiki/Alluka_Zoldyck,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_canary,Canary,Canary,,,Zoldyck Family,Zoldyck butler,Female,Human,Alive,Zoldyck Family,Apprentice Butler|Guard,Unknown,Unknown,Staff,Grey,Purple,,,Chapter 39,Episode 22,🦯🚪👧🖤🛡️,\"La puerta de los Zoldyck no se protege solo con fuerza, también con lealtad.\",\"La puerta de los Zoldyck no se protege solo con fuerza, también con lealtad.\",No se muestra una habilidad Nen clara; destaca por combate físico y disciplina como guardia.,🦯|🚪|👧|🖤|🛡️,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/f/f3/2011_canary.png/revision/latest?cb=20120319045502,https://hunterxhunter.fandom.com/wiki/Canary,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_gotoh,Gotoh,Gotoh,,,Zoldyck Family,Zoldyck butler,Male,Human,Deceased,Zoldyck Family,Head Butler,Enhancement/Emission,Coin bullets,Coins,Black,Black,,,Chapter 39,Episode 22,🪙🤵🔫🖤🎯,Su elegancia de mayordomo esconde precisión de asesino.,Su elegancia de mayordomo esconde precisión de asesino.,Dispara monedas reforzadas con aura como proyectiles de alta velocidad.,🪙|🤵|🔫|🖤|🎯,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/8/8e/Gotoh_HxH_2011.PNG/revision/latest?cb=20230321201151,https://hunterxhunter.fandom.com/wiki/Gotoh,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_hanzo,Hanzo,Hanzo,,,Hunter Exam,Hunter/exam participant,Male,Human,Alive,Hunter Association,Hunter|Ninja,Unknown,Art of the Doppelganger,Ninja tools|Katana,Black,Bald,18 debut,,Chapter 6,Episode 3,🥷🧑‍🦲🗡️📜🌀,Entrena desde niño para que rendirse no sea una opción.,Entrena desde niño para que rendirse no sea una opción.,Crea un doble de sí mismo que puede actuar mientras su cuerpo queda en trance.,🥷|🧑‍🦲|🗡️|📜|🌀,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/a/aa/HxH2011_EP3_Hanzo_Portrait.png/revision/latest?cb=20221007164354,https://hunterxhunter.fandom.com/wiki/Hanzo,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_tonpa,Tonpa,Rookie Crusher,,,Hunter Exam,Hunter Exam participant,Male,Human,Alive,Hunter Exam candidates,Perennial exam taker|Rookie crusher,Unknown,Unknown,Spiked juice,Black,Brown,,,Chapter 5,Episode 3,🥤🐍😏📝🚫,\"Su objetivo no es aprobar, sino hacer que otros fracasen.\",\"Su objetivo no es aprobar, sino hacer que otros fracasen.\",No muestra Nen; usa engaños y bebidas alteradas para sabotear candidatos nuevos.,🥤|🐍|😏|📝|🚫,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/9/9f/Tonpa_HE_Portrait.png/revision/latest?cb=20130503200318,https://hunterxhunter.fandom.com/wiki/Tonpa,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_pokkle,Pokkle,Pokkle,,,Hunter Exam,Hunter/Chimera Ant victim,Male,Human,Deceased,Hunter Association,Beast Hunter,Emission,Rainbow arrows,Bow|Arrows,Brown,Blond,,,Chapter 6,Episode 3,🏹🌈🦌🧢💀,Su arco de aura no bastó contra un nido mucho más peligroso.,Su arco de aura no bastó contra un nido mucho más peligroso.,Emite flechas de aura de distintos colores con efectos variados.,🏹|🌈|🦌|🧢|💀,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/0/0a/Pokkle_HxH_11.PNG/revision/latest?cb=20120323055002,https://hunterxhunter.fandom.com/wiki/Pokkle,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_ponzu,Ponzu,Ponzu,,,Hunter Exam,Hunter Exam participant,Female,Human,Deceased,Hunter Exam candidates,Apiculturist|Exam participant,Unknown,Bee control/signaling,Hat full of bees,Brown,Blonde,,,Chapter 6,Episode 3,🐝🎩🏃‍♀️💌💀,\"Sus abejas podían pedir ayuda, pero no siempre llegan a tiempo.\",\"Sus abejas podían pedir ayuda, pero no siempre llegan a tiempo.\",\"Usa abejas ocultas para defensa, rastreo y envío de señales.\",🐝|🎩|🏃‍♀️|💌|💀,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/1/13/Ponzu_CA_Portrait.png/revision/latest?cb=20130506101012,https://hunterxhunter.fandom.com/wiki/Ponzu,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_satotz,Satotz,Satotz,,,Hunter Exam,Hunter examiner,Male,Human,Alive,Hunter Association,Ruins Hunter|Hunter Exam Examiner,Unknown,Unknown,Walking endurance|Exam rules,Black,Black,,,Chapter 6,Episode 3,🚶🧪📋🧭👞,Corre una prueba aparentemente simple hasta convertirla en filtro brutal.,Corre una prueba aparentemente simple hasta convertirla en filtro brutal.,No muestra una habilidad Nen clara; destaca como examinador por resistencia y control del ritmo.,🚶|🧪|📋|🧭|👞,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/8/83/Satotz_HxH_11.PNG/revision/latest?cb=20120321071228,https://hunterxhunter.fandom.com/wiki/Satotz,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_menchi,Menchi,Menchi,,,Hunter Exam,Hunter examiner,Female,Human,Alive,Hunter Association,Single-Star Gourmet Hunter|Hunter Exam Examiner,Unknown,Unknown,Cooking knives|Cuisine,Brown,Pink,,166,Chapter 12,Episode 6,🍣👩‍🍳🔪⭐😤,\"Para ella, cocinar también es una forma de cazar lo imposible.\",\"Para ella, cocinar también es una forma de cazar lo imposible.\",No muestra una técnica Nen concreta; su especialidad es evaluar ingredientes raros y cocina extrema.,🍣|👩‍🍳|🔪|⭐|😤,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/f/f7/Menchi_%28HxH%29.png/revision/latest?cb=20210415111358,https://hunterxhunter.fandom.com/wiki/Menchi,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_wing,Wing,Wing,,,Heavens Arena,Nen teacher,Male,Human,Alive,Shingen-ryu School,Assistant Master|Nen Teacher,Enhancement,Nen initiation|Ko training,Teaching|Shingen-ryu,Black,Black,,,Chapter 44,Episode 27,👓🥋📚🌀👊,Enseña que abrir el aura sin control puede ser tan peligroso como una pelea real.,Enseña que abrir el aura sin control puede ser tan peligroso como una pelea real.,\"Despierta y guía el control de aura de sus estudiantes, con foco en fundamentos de Nen.\",👓|🥋|📚|🌀|👊,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/1/1a/Wing_HxH_2011.PNG/revision/latest?cb=20230407170040,https://hunterxhunter.fandom.com/wiki/Wing,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_zushi,Zushi,Zushi,,,Heavens Arena,Nen student,Male,Human,Alive,Shingen-ryu School,Martial artist|Nen student,Manipulation,Basic Nen techniques,Martial arts,Black,Black,,,Chapter 44,Episode 27,🥋👦🌀🙏💪,Su disciplina compensa la diferencia natural contra rivales prodigio.,Su disciplina compensa la diferencia natural contra rivales prodigio.,Usa fundamentos de Nen y artes marciales; su categoría apunta a Manipulación.,🥋|👦|🌀|🙏|💪,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/8/8b/Zushi_HA_Portrait.png/revision/latest?cb=20190530161818,https://hunterxhunter.fandom.com/wiki/Zushi,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_pariston_hill,Pariston Hill,Pariston,,,13th Hunter Chairman Election,Zodiacs/Hunter Association,Male,Human,Alive,Hunter Association|former Zodiacs|Beyond Netero Expedition Team,Triple-Star Hunter|former Vice Chairman|former Chairman|former Zodiac Rat,Unknown,Unknown,Politics|Manipulation through rules,Brown,Blond,,,Chapter 319,Episode 137,🐭🎭🏛️😄♟️,Disfruta ganar incluso cuando parece abandonar el premio.,Disfruta ganar incluso cuando parece abandonar el premio.,No se conoce una habilidad Nen; su poder real está en estrategia política y provocación.,🐭|🎭|🏛️|😄|♟️,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/1/15/Pariston_Hill_HCE_Portrait.png/revision/latest?cb=20150816022835,https://hunterxhunter.fandom.com/wiki/Pariston_Hill,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_cheadle_yorkshire,Cheadle Yorkshire,Cheadle,,,13th Hunter Chairman Election,Zodiacs/Hunter Association,Female,Human,Alive,Hunter Association|Zodiacs|Dark Continent Expedition Team,Triple-Star Disease Hunter|Chairwoman|Zodiac Dog,Unknown,Unknown,Medical authority|Hunter bylaws,Brown,Blonde,,,Chapter 319,Episode 137,🐶🩺🏛️📘⚖️,Intenta mantener la ética incluso cuando todos juegan sucio.,Intenta mantener la ética incluso cuando todos juegan sucio.,\"No se conoce una habilidad Nen; destaca por medicina, liderazgo y análisis institucional.\",🐶|🩺|🏛️|📘|⚖️,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/0/01/Cheadle_Yorkshire_HCE_Portrait.png/revision/latest?cb=20181224123712,https://hunterxhunter.fandom.com/wiki/Cheadle_Yorkshire,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_mizaistom_nana,Mizaistom Nana,Mizai,,,13th Hunter Chairman Election,Zodiacs/Hunter Association,Male,Human,Alive,Hunter Association|Zodiacs|Dark Continent Expedition Team,Double-Star Crime Hunter|Zodiac Ox|Intelligence Team,Manipulation,Cross Game,Cards|Restraint signals,Black,Black,,,Chapter 319,Episode 137,🐂🃏🚨⚖️🔒,\"Cuando levanta una tarjeta, la sala completa entiende que debe detenerse.\",\"Cuando levanta una tarjeta, la sala completa entiende que debe detenerse.\",\"Usa cartas de colores para imponer órdenes como detenerse, sentarse o entrar a juicio.\",🐂|🃏|🚨|⚖️|🔒,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/e/e1/Mizaistom_Nana_HCE_Portrait.png/revision/latest?cb=20181211010802,https://hunterxhunter.fandom.com/wiki/Mizaistom_Nana,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_botobai_gigante,Botobai Gigante,Botobai,,,13th Hunter Chairman Election,Zodiacs/Hunter Association,Male,Human,Alive,Hunter Association|Zodiacs,Triple-Star Terrorist Hunter|Zodiac Dragon,Unknown,Unknown,Hunter authority,Black,Black,,,Chapter 319,Episode 137,🐉🏛️⭐🛡️🧓,Su prestigio lo hace sonar como una leyenda viva dentro de la Asociación.,Su prestigio lo hace sonar como una leyenda viva dentro de la Asociación.,No se conoce una habilidad Nen; destaca como Hunter veterano de altísimo rango.,🐉|🏛️|⭐|🛡️|🧓,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/9/9c/Botobai_Gigante_HCE_Portrait.png/revision/latest?cb=20181225161429,https://hunterxhunter.fandom.com/wiki/Botobai_Gigante,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_kanzai,Kanzai,Kanzai,,,13th Hunter Chairman Election,Zodiacs/Hunter Association,Male,Human,Alive,Hunter Association|Zodiacs,Treasure Hunter|Zodiac Tiger,Unknown,Unknown,Physical power|Treasure hunting,Brown,Blond,,,Chapter 319,Episode 137,🐯💰💢🏛️👊,\"Es frontal, impaciente y difícil de convencer con sutilezas.\",\"Es frontal, impaciente y difícil de convencer con sutilezas.\",No se conoce una habilidad Nen; su perfil apunta a fuerza física y cacería de tesoros.,🐯|💰|💢|🏛️|👊,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/7/71/Kanzai_HCE_Portrait.png/revision/latest?cb=20150722203324,https://hunterxhunter.fandom.com/wiki/Kanzai,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_pyon,Pyon,Pyon,,,13th Hunter Chairman Election,Zodiacs/Hunter Association,Female,Human,Alive,Hunter Association|Zodiacs,Paleograph Hunter|Zodiac Rabbit,Unknown,Unknown,Ancient texts|Linguistics,Brown,Pink,,,Chapter 319,Episode 137,🐰📜💬🏛️📱,\"Puede parecer distraída, pero trabaja con lenguas y textos antiguos.\",\"Puede parecer distraída, pero trabaja con lenguas y textos antiguos.\",No se conoce una habilidad Nen; su especialidad es investigación paleográfica.,🐰|📜|💬|🏛️|📱,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/3/3b/Pyon_HCE_Portrait.png/revision/latest?cb=20181225154252,https://hunterxhunter.fandom.com/wiki/Pyon,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_saiyu,Saiyu,Saiyu,,,13th Hunter Chairman Election,Zodiacs/Hunter Association,Male,Human,Alive,Hunter Association|Zodiacs|Beyond Netero Expedition Team,Black List Hunter|Zodiac Monkey,Manipulation,Three Monkeys,Staff|Monkeys,Black,Black,,,Chapter 319,Episode 137,🐒🙈🙉🙊🦯,Sus tres compañeros castigan sentidos y acciones del rival.,Sus tres compañeros castigan sentidos y acciones del rival.,\"Invoca tres monos que pueden sellar visión, audición o habla/acción del objetivo.\",🐒|🙈|🙉|🙊|🦯,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/c/cf/HxH2011_EP137_Saiyu_Portrait.png/revision/latest?cb=20220805024815,https://hunterxhunter.fandom.com/wiki/Saiyu,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_gel,Gel,Gel,,,13th Hunter Chairman Election,Zodiacs/Hunter Association,Female,Human,Alive,Hunter Association|Zodiacs,Poison Hunter|Zodiac Snake,Unknown,Unknown,Poison knowledge|Snake motif,Yellow,Green,,,Chapter 319,Episode 137,🐍☠️🧪🏛️💚,Su apariencia venenosa no es solo estética.,Su apariencia venenosa no es solo estética.,No se conoce una técnica Nen clara; su especialidad pública es el veneno.,🐍|☠️|🧪|🏛️|💚,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/e/e6/HxH2011_EP137_-_Gel_Portrait.png/revision/latest?cb=20230509185744,https://hunterxhunter.fandom.com/wiki/Gel,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_cluck,Cluck,Cluck,,,13th Hunter Chairman Election,Zodiacs/Hunter Association,Female,Human,Alive,Hunter Association|Zodiacs,Musical Hunter|Botanical Hunter|Zodiac Chicken,Manipulation/Unknown,Bird control/signaling,Birds|Messaging,Black,Brown,,,Chapter 319,Episode 137,🐔🐦📣🎵🏛️,Puede convertir aves en una red viviente de mensajes.,Puede convertir aves en una red viviente de mensajes.,Usa aves como medio de comunicación y coordinación a gran escala.,🐔|🐦|📣|🎵|🏛️,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/c/ca/Cluck_HCE_Portrait.png/revision/latest?cb=20181225080029,https://hunterxhunter.fandom.com/wiki/Cluck,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_ginta,Ginta,Ginta,,,13th Hunter Chairman Election,Zodiacs/Hunter Association,Male,Human,Alive,Hunter Association|Zodiacs,Poacher Hunter|Zodiac Sheep,Unknown,Unknown,Animal tracking|Hunter authority,Black,Brown,,,Chapter 319,Episode 137,🐑🌲🏛️🐾💢,Se toma muy en serio la protección contra cazadores ilegales.,Se toma muy en serio la protección contra cazadores ilegales.,No se conoce una habilidad Nen; su especialidad es persecución de cazadores furtivos.,🐑|🌲|🏛️|🐾|💢,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/3/3e/Ginta_HCE_Portrait.png/revision/latest?cb=20150722202806,https://hunterxhunter.fandom.com/wiki/Ginta,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_saccho_kobayakawa,Saccho Kobayakawa,Saccho,,,13th Hunter Chairman Election,Zodiacs/Hunter Association,Male,Human,Alive,Hunter Association|Zodiacs,Double-Star Problem Hunter|Zodiac Horse,Unknown,Unknown,Problem solving|Hunter authority,Black,Black,,,Chapter 319,Episode 137,🐴🧩🏛️📋🧠,Aparece cuando el problema requiere cabeza fría y método.,Aparece cuando el problema requiere cabeza fría y método.,No se conoce una habilidad Nen; destaca como solucionador de problemas de alto nivel.,🐴|🧩|🏛️|📋|🧠,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/7/75/Saccho_Portrait_-_Episode_143.png/revision/latest?cb=20230608202802,https://hunterxhunter.fandom.com/wiki/Saccho_Kobayakawa,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_beans,Beans,Beans,,,Hunter Exam,Hunter Association staff,Male,Magical Beast,Alive,Hunter Association,Chairman Secretary|Election committee staff,Unknown,Unknown,Documents|Hunter Association logistics,Black,Green,,,Chapter 20,Episode 7,🫘📋🏛️💼😰,Mantiene funcionando la burocracia incluso entre cazadores imposibles de ordenar.,Mantiene funcionando la burocracia incluso entre cazadores imposibles de ordenar.,No se conoce Nen; su rol es administrativo y logístico.,🫘|📋|🏛️|💼|😰,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/b/be/HxH2011_EP8_Beans_Profile_IMG.png/revision/latest?cb=20221117204915,https://hunterxhunter.fandom.com/wiki/Beans,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_razor,Razor,Razor,,,Greed Island,Greed Island game master,Male,Human,Alive,Greed Island Game Masters|former criminal,Game Master|former convict,Emission,14 Devils|Aura ball attacks,Dodgeball|Nen beasts,Black,Black,,,Chapter 145,Episode 70,🏐🎮👹💪📍,Un juego de pelota contra él se siente como una ejecución.,Un juego de pelota contra él se siente como una ejecución.,Emite aura en pelotas devastadoras y crea catorce demonios para apoyar el juego.,🏐|🎮|👹|💪|📍,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/2/27/RazorFullbody.png/revision/latest?cb=20170724201543,https://hunterxhunter.fandom.com/wiki/Razor,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_genthru,Genthru,Bomber,,,Greed Island,Greed Island antagonist,Male,Human,Alive,Bomber Team|Greed Island players,Greed Island player|Bomber,Conjuration,Countdown|Little Flower,Bombs|Deception,Brown,Brown,,,Chapter 143,Episode 68,💣🎮⏳😈🤝,Su saludo puede ser el inicio de una cuenta regresiva mortal.,Su saludo puede ser el inicio de una cuenta regresiva mortal.,Coloca bombas con condiciones verbales y usa explosiones en las manos para combate cercano.,💣|🎮|⏳|😈|🤝,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/0/0f/Genthru_Portrait_2011.png/revision/latest?cb=20230521235202,https://hunterxhunter.fandom.com/wiki/Genthru,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_goreinu,Goreinu,Goreinu,,,Greed Island,Greed Island player,Male,Human,Alive,Hunter Association|Team Tsezguerra|Battera,Hunter|Greed Island player,Unknown,White Goreinu|Black Goreinu,Gorilla Nen beasts,Black,Black,,,Chapter 147,Episode 71,🦍⚫⚪🎮🔁,Sus gorilas no solo golpean: intercambian posiciones en el tablero.,Sus gorilas no solo golpean: intercambian posiciones en el tablero.,Crea dos gorilas de Nen con los que puede intercambiar posiciones de forma táctica.,🦍|⚫|⚪|🎮|🔁,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/7/7e/Goreinu_GI_Portrait.png/revision/latest?cb=20190123171404,https://hunterxhunter.fandom.com/wiki/Goreinu,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_tsezguerra,Tsezguerra,Tsezguerra,,,Greed Island,Greed Island player/Hunter,Male,Human,Alive,Hunter Association|Team Tsezguerra|Battera,Single-Star Jackpot Hunter|Greed Island team leader,Unknown,Unknown,Game cards|Strategy,Black,Black,,,Chapter 125,Episode 60,💰🎮⭐👟📊,No gana por impulso: evalúa el riesgo como si cada carta fuera inversión.,No gana por impulso: evalúa el riesgo como si cada carta fuera inversión.,\"No se conoce una técnica Nen; su fortaleza es experiencia, estrategia y salto entrenado.\",💰|🎮|⭐|👟|📊,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/0/00/2011_EP59_Tsezguerra_Portrait.png/revision/latest?cb=20240324165921,https://hunterxhunter.fandom.com/wiki/Tsezguerra,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_abengane,Abengane,Abengane,,,Greed Island,Greed Island player/Nen exorcist,Male,Human,Alive,Greed Island players,Nen Exorcist|Greed Island player,Conjuration,Nen Exorcism|Forest Spirit Beast,Exorcism beast,Brown,Black,,,Chapter 145,Episode 70,🌲🧿🎮🪄👹,\"Donde otros ven una maldición, él calcula cómo cargarla y quitarla.\",\"Donde otros ven una maldición, él calcula cómo cargarla y quitarla.\",Conjura una bestia que absorbe una maldición o habilidad Nen y queda ligada hasta cumplir condiciones.,🌲|🧿|🎮|🪄|👹,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/8/86/Abengane2011.png/revision/latest?cb=20121223051318,https://hunterxhunter.fandom.com/wiki/Abengane,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_binolt,Binolt,Binolt,,,Greed Island,Greed Island player,Male,Human,Alive,Greed Island players,Criminal|Greed Island player,Specialization,Scissor Hands|Body and Soul,Scissors,Black,Black,,,Chapter 138,Episode 64,✂️🎮👃🩸📖,Lee cuerpos como si cada cabello contara una biografía.,Lee cuerpos como si cada cabello contara una biografía.,\"Al comer cabello obtiene información física de la persona, complementando su combate con tijeras.\",✂️|🎮|👃|🩸|📖,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/1/1a/Binolt_GI_Portrait.png/revision/latest?cb=20130503075810,https://hunterxhunter.fandom.com/wiki/Binolt,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_knov,Knov,Knov,,,Chimera Ant,Chimera Ant Extermination Team,Male,Human,Alive,Hunter Association|Chimera Ant Extermination Team,Hunter|Extermination team member,Emission,Hide and Seek|Scream,Four-dimensional mansion|Portals,Black,Black,,,Chapter 199,Episode 86,🚪🧳🌀😰🏰,\"Su puerta secreta puede salvar una misión, aunque el miedo lo quiebre.\",\"Su puerta secreta puede salvar una misión, aunque el miedo lo quiebre.\",\"Crea entradas a una mansión dimensional usada para infiltración, escape y almacenamiento.\",🚪|🧳|🌀|😰|🏰,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/f/ff/Knov148.png/revision/latest?cb=20240307181052,https://hunterxhunter.fandom.com/wiki/Knov,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_colt,Colt,Kurt,,,Chimera Ant,Chimera Ant squadron leader,Male,Chimera Ant|Former human,Alive,Chimera Ants|former Chimera Ant Queen colony,Former Squadron Leader|Caretaker,Unknown,Unknown,Wings|Talons,Brown,White/Feathers,,,Chapter 188,Episode 78,🦅🐜👶🛡️😭,Su lealtad cambia de obedecer a la reina a proteger una vida pequeña.,Su lealtad cambia de obedecer a la reina a proteger una vida pequeña.,No se conoce una técnica Nen clara; destaca como líder y protector tras la crisis.,🦅|🐜|👶|🛡️|😭,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/4/4d/Colt_main.png/revision/latest?cb=20130424054211,https://hunterxhunter.fandom.com/wiki/Colt,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_rammot,Rammot,Rammot,,,Chimera Ant,Chimera Ant officer,Male,Chimera Ant,Deceased,Chimera Ants,Officer,Enhancement/Unknown,Nen-enhanced physical attacks,Claws|Rabbit ears,Red,Brown,,,Chapter 190,Episode 79,🐰🐜💪🩸⚡,Sobrevive a un golpe imposible y despierta algo peor.,Sobrevive a un golpe imposible y despierta algo peor.,\"Tras recibir aura, aprende a reforzar su cuerpo y pelear con brutalidad física.\",🐰|🐜|💪|🩸|⚡,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/2/25/Rammot_CA_Portrait.png/revision/latest?cb=20220723200407,https://hunterxhunter.fandom.com/wiki/Rammot,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_cheetu,Cheetu,Cheetu,,,Chimera Ant,Chimera Ant squadron leader,Male,Chimera Ant,Deceased,Chimera Ants,Squadron Leader,Conjuration,Tag|Savanna space|Crossbow/claw ability,Speed|Conjured space,Black,Blond,,,Chapter 206,Episode 91,🐆🐜🏃⏱️🎯,Es tan rápido que su mayor enemigo termina siendo su propia impaciencia.,Es tan rápido que su mayor enemigo termina siendo su propia impaciencia.,Crea un espacio de persecución donde obliga a jugar una especie de tag contra su velocidad.,🐆|🐜|🏃|⏱️|🎯,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/a/a4/Cheetu_CA_Portrait.png/revision/latest?cb=20181219190314,https://hunterxhunter.fandom.com/wiki/Cheetu,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_leol,Leol,Hagya,,,Chimera Ant,Chimera Ant squadron leader,Male,Chimera Ant,Deceased,Chimera Ants|former Hagya faction,Squadron Leader|self-proclaimed king,Specialization,Rental Pod,Surfboard|Borrowed abilities,Black,Grey,,,Chapter 192,Episode 81,🦁🐜👑📻🌊,\"Sueña con ser rey, aunque dependa de favores prestados.\",\"Sueña con ser rey, aunque dependa de favores prestados.\",Toma prestadas habilidades de otros mediante una condición de deuda o favor.,🦁|🐜|👑|📻|🌊,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/4/47/Leol_anime.png/revision/latest?cb=20130519034558,https://hunterxhunter.fandom.com/wiki/Leol,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_zazan,Zazan,Zazan,,,Chimera Ant,Chimera Ant squadron leader,Female,Chimera Ant,Deceased,Chimera Ants|Meteor City colony,Squadron Leader|self-proclaimed queen,Manipulation,Queen Shot|Monster Queen transformation,Scorpion tail,Yellow,Purple,,,Chapter 192,Episode 80,🦂🐜👑💉🔥,Convierte belleza y dominio en una colonia propia.,Convierte belleza y dominio en una colonia propia.,Usa su aguijón para transformar humanos en subordinados y puede mutar a una forma monstruosa.,🦂|🐜|👑|💉|🔥,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/a/a5/Zazan.png/revision/latest?cb=20130418040230,https://hunterxhunter.fandom.com/wiki/Zazan,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_welfin,Welfin,Zaiqahal,,,Chimera Ant,Chimera Ant squadron leader,Male,Chimera Ant|Former human,Alive,Chimera Ants|former NGL|Meteor City,Former Squadron Leader,Conjuration,Missileman,Missile organism|Sense of smell,Yellow,Grey,,,Chapter 223,Episode 102,🐺🐜🚀👃😱,Su pregunta puede ser más peligrosa que un ataque directo.,Su pregunta puede ser más peligrosa que un ataque directo.,Conjura misiles que castigan mentiras o desafío con criaturas que crecen dentro del objetivo.,🐺|🐜|🚀|👃|😱,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/a/a6/HxH2011_EP136_Welfin_Portrait.png/revision/latest?cb=20230215222130,https://hunterxhunter.fandom.com/wiki/Welfin,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_ikalgo,Ikalgo,Ikalgo,,,Chimera Ant,Chimera Ant ally,Male,Chimera Ant,Alive,Chimera Ants|Killua allies|Extermination Team allies,Former soldier ant|Ally,Manipulation,Living Dead Dolls|Flea Gun,Corpse control|Air gun tentacles,Black,None,,,Chapter 238,Episode 103,🐙🐜🔫💀🤝,\"Quería ser calamar, pero terminó siendo uno de los aliados más humanos.\",\"Quería ser calamar, pero terminó siendo uno de los aliados más humanos.\",Manipula cadáveres y puede usar un arma de pulgas desde sus tentáculos.,🐙|🐜|🔫|💀|🤝,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/7/70/Ikalgo_rostro_2011.png/revision/latest?cb=20140905154409&path-prefix=es,https://hunterxhunter.fandom.com/es/wiki/Ikalgo,Verified portrait image from Spanish Hunterpedia/Fandom page; kept as splash substitute.\nhxh_meleoron,Meleoron,Jail,,,Chimera Ant,Chimera Ant ally,Male,Chimera Ant|Former human,Alive,Chimera Ants|Gon allies|Extermination Team allies,Former Squadron Leader|Ally,Specialization,Perfect Plan|God’s Accomplice,Invisibility|Breath-holding,Black,Blond,,,Chapter 199,Episode 87,🦎🐜🚬👻🤝,Su mayor fuerza consiste en que nadie note que está ahí.,Su mayor fuerza consiste en que nadie note que está ahí.,Al contener la respiración se vuelve imperceptible; también puede ocultar a quien toca.,🦎|🐜|🚬|👻|🤝,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/7/7f/EP127_Meleoron_Portrait.png/revision/latest?cb=20230701134947,https://hunterxhunter.fandom.com/wiki/Meleoron,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_bloster,Bloster,Bloster,,,Chimera Ant,Chimera Ant squadron leader,Male,Chimera Ant,Alive,Chimera Ants,Former Squadron Leader,Emission,Aura bullets from claws,Lobster claws,Black,Red shell,,,Chapter 192,Episode 81,🦞🐜🔫💥🏘️,\"Después de la guerra, termina buscando un lugar donde vivir.\",\"Después de la guerra, termina buscando un lugar donde vivir.\",Emite disparos de aura potentes desde sus pinzas.,🦞|🐜|🔫|💥|🏘️,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/a/ac/Burovuda.png/revision/latest?cb=20131212062912,https://hunterxhunter.fandom.com/wiki/Bloster,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_koala,Koala,Koala,,,Chimera Ant,Chimera Ant survivor,Male,Chimera Ant|Former human,Alive,Chimera Ants|Kite,Former soldier ant|Former hitman,Unknown,Unknown,Gun|Hitman skills,Black,Brown,,,Chapter 337,Episode 148,🐨🐜🔫😔♻️,Carga con la culpa de una vida anterior y busca pagarla.,Carga con la culpa de una vida anterior y busca pagarla.,No se conoce una habilidad Nen; destaca por su puntería y memoria moral de su vida humana.,🐨|🐜|🔫|😔|♻️,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/d/d8/Koala_CA_Portrait.png/revision/latest/scale-to-width-down/185?cb=20130512130614,https://hunterxhunter.fandom.com/wiki/Koala,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_melody,Melody,Senritsu,,,Yorknew City,Nostrade bodyguard/Hunter,Female,Human,Alive,Hunter Association|Nostrade Family|Kurapika allies|Kakin bodyguards,Music Hunter|Bodyguard,Emission,Heartbeat reading|Music Nen,Flute|Hearing,Black,Bald,,,Chapter 73,Episode 39,🎵👂🪈💛🛡️,Escucha el corazón de las personas incluso cuando sus palabras mienten.,Escucha el corazón de las personas incluso cuando sus palabras mienten.,Percibe estados emocionales por latidos y puede usar música para calmar o influir.,🎵|👂|🪈|💛|🛡️,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/c/c6/Melody-11.png/revision/latest?cb=20230511035813,https://hunterxhunter.fandom.com/wiki/Melody,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_neon_nostrade,Neon Nostrade,Neon,,,Yorknew City,Nostrade Family,Female,Human,Alive/Unknown,Nostrade Family,Fortune teller|Mafia boss daughter,Specialization,Lovely Ghostwriter,Automatic writing|Fortunes,Blue,Blond,,,Chapter 73,Episode 39,🔮✍️👗💎📝,Sus predicciones cambian destinos ajenos aunque ella no entienda el precio.,Sus predicciones cambian destinos ajenos aunque ella no entienda el precio.,Escribe profecías automáticas en versos mensuales sin recordar su contenido.,🔮|✍️|👗|💎|📝,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/8/8c/Neon_2011_Design.png/revision/latest/scale-to-width-down/200?cb=20230417010052,https://hunterxhunter.fandom.com/wiki/Neon_Nostrade,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_basho,Basho,Basho,,,Yorknew City,Nostrade bodyguard,Male,Human,Alive,Nostrade Family|Kurapika allies,Bodyguard|Poet,Unknown,Great Haiku,Haiku paper|Fire poem,Black,Black,,,Chapter 73,Episode 39,📝🔥🍶💪🛡️,Un mal verso puede ser ridículo; uno bueno puede quemarte vivo.,Un mal verso puede ser ridículo; uno bueno puede quemarte vivo.,\"Convierte poemas haiku en efectos reales, como generar fuego según la calidad del poema.\",📝|🔥|🍶|💪|🛡️,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/4/45/Basho_2011_Design.png/revision/latest/scale-to-width-down/200?cb=20230404000359,https://hunterxhunter.fandom.com/wiki/Basho,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_baise,Baise,Baise,,,Yorknew City,Nostrade bodyguard,Female,Human,Deceased,Nostrade Family,Bodyguard,Manipulation,Instant Lover,Kiss,Brown,Black,,,Chapter 73,Episode 39,💋🧠🛡️💄💀,Un beso suyo transforma voluntad en obediencia.,Un beso suyo transforma voluntad en obediencia.,\"Manipula a quienes besa, obligándolos a obedecer como si estuvieran enamorados.\",💋|🧠|🛡️|💄|💀,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/8/86/Baise_2011_Design.png/revision/latest/scale-to-width-down/180?cb=20230403235611,https://hunterxhunter.fandom.com/wiki/Baise,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_squala,Squala,Squala,,,Yorknew City,Nostrade bodyguard,Male,Human,Deceased,Nostrade Family,Bodyguard|Dog handler,Manipulation,Dog Manipulation,Dogs,Black,Black,,,Chapter 73,Episode 39,🐕🛡️💔📦💀,Sus perros eran su red de seguridad y su punto débil emocional.,Sus perros eran su red de seguridad y su punto débil emocional.,\"Manipula perros entrenados para búsqueda, defensa y vigilancia.\",🐕|🛡️|💔|📦|💀,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/1/14/Squala_YC_Portrait.png/revision/latest?cb=20170719225128,https://hunterxhunter.fandom.com/wiki/Squala,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_beyond_netero,Beyond Netero,Beyond,,,13th Hunter Chairman Election,Dark Continent expedition leader,Male,Human,Alive,Beyond Netero Expedition Team|Kakin Empire,Expedition leader|Hunter,Unknown,Unknown,Expedition planning|Legacy,Black,Black/Grey,,,Chapter 340,Not in 2011 anime,🌑🧭🧓🔥🚢,\"Hereda un apellido legendario, pero mira más allá del mundo conocido.\",\"Hereda un apellido legendario, pero mira más allá del mundo conocido.\",No se conoce una habilidad Nen; destaca por ambición y liderazgo hacia el Dark Continent.,🌑|🧭|🧓|🔥|🚢,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/9/91/342_-_Beyond_in_Captivity.png/revision/latest/scale-to-width-down/154?cb=20241009210318,https://hunterxhunter.fandom.com/wiki/Beyond_Netero,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_nasubi_hui_guo_rou,Nasubi Hui Guo Rou,King Nasubi,,,Succession Contest,Kakin Royal Family,Male,Human,Alive,Kakin Empire|Kakin Royal Family,King of Kakin,Unknown,Seed Urn ritual/Guardian Spirit Beast system,Royal authority|Succession urn,Black,Black,,,Chapter 340,Not in 2011 anime,👑🏺🚢🩸🏰,Convierte una sucesión real en un ritual donde solo sobrevivirá el más apto.,Convierte una sucesión real en un ritual donde solo sobrevivirá el más apto.,Activa el ritual de la urna que despierta bestias guardianas en los príncipes.,👑|🏺|🚢|🩸|🏰,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/1/17/Chap_363_-_Nasubi.png/revision/latest?cb=20240103221907,https://hunterxhunter.fandom.com/wiki/Nasubi_Hui_Guo_Rou,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_benjamin_hui_guo_rou,Benjamin Hui Guo Rou,Benjamin,,,Succession Contest,Kakin Royal Family,Male,Human,Alive,Kakin Empire|Kakin Royal Family|Royal Army,First Prince|Deputy Military Adviser,Unknown/Specialization,Benjamin Baton,Military command|Inherited soldiers abilities,Black,Black,,,Chapter 340,Not in 2011 anime,🥇👑🪖🔥🦁,\"Para él, gobernar es una operación militar.\",\"Para él, gobernar es una operación militar.\",\"Hereda habilidades de sus soldados leales al morir, acumulándolas como armas reales.\",🥇|👑|🪖|🔥|🦁,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/f/fe/Chap_410_-_Benjamin.png/revision/latest?cb=20260507201921,https://hunterxhunter.fandom.com/wiki/Benjamin_Hui_Guo_Rou,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_tserriednich_hui_guo_rou,Tserriednich Hui Guo Rou,Tserriednich,,,Succession Contest,Kakin Royal Family antagonist,Male,Human,Alive,Kakin Empire|Kakin Royal Family|former Heil-Ly Family patron,Fourth Prince|Royal collector,Specialization,Parallel Future|Guardian Spirit Beast,Nen beast|Art collection,Black,Black,,,Chapter 340,Not in 2011 anime,👑👁️⏳🖼️😈,Su talento para Nen crece tan rápido como su crueldad.,Su talento para Nen crece tan rápido como su crueldad.,Percibe un futuro paralelo de diez segundos y usa esa ventaja para reescribir decisiones.,👑|👁️|⏳|🖼️|😈,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/e/e6/Chap_362_-_Tserriednich.png/revision/latest?cb=20260513045952,https://hunterxhunter.fandom.com/wiki/Tserriednich_Hui_Guo_Rou,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_camilla_hui_guo_rou,Camilla Hui Guo Rou,Camilla,,,Succession Contest,Kakin Royal Family,Female,Human,Alive,Kakin Empire|Kakin Royal Family,Second Prince,Specialization/Unknown,Cat’s Name,Post-mortem Nen|Royal guards,Blue,Blonde,,,Chapter 340,Not in 2011 anime,👑🐈💅💀🔁,Actúa como si el mundo estuviera obligado a devolverle la vida.,Actúa como si el mundo estuviera obligado a devolverle la vida.,Su habilidad post-mortem invoca un gato que mata al asesino y la revive.,👑|🐈|💅|💀|🔁,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/3/39/Camilla_Hui_Guo_Rou.png/revision/latest?cb=20260507182051,https://hunterxhunter.fandom.com/wiki/Camilla_Hui_Guo_Rou,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_halkenburg_hui_guo_rou,Halkenburg Hui Guo Rou,Halkenburg,,,Succession Contest,Kakin Royal Family,Male,Human,Alive/Uncertain,Kakin Empire|Kakin Royal Family|Halkenburg followers,Ninth Prince|Student leader,Unknown,Possession arrow/Collective aura,Bow-like aura|Followers,Black,Black,,,Chapter 340,Not in 2011 anime,👑🏹🕊️👥🔥,Su idealismo se vuelve peligroso cuando una multitud comparte una sola voluntad.,Su idealismo se vuelve peligroso cuando una multitud comparte una sola voluntad.,Canaliza el aura de sus seguidores en una flecha que puede transferir conciencia.,👑|🏹|🕊️|👥|🔥,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/4/4e/Halkenburg_Hui_Guo_Rou_SC_Portrait.png/revision/latest?cb=20250903123849,https://hunterxhunter.fandom.com/wiki/Halkenburg_Hui_Guo_Rou,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_oito_hui_guo_rou,Oito Hui Guo Rou,Queen Oito,,,Succession Contest,Kakin Royal Family,Female,Human,Alive,Kakin Empire|Kakin Royal Family|Kurapika allies,Eighth Queen|Mother of Woble,Learning Nen/Unknown,Nen basics via Stealth Dolphin,Royal strategy|Motherhood,Brown,Brown,,,Chapter 340,Not in 2011 anime,👑👶🛡️🧠🐬,\"Su prioridad no es ganar poder, sino que su hija sobreviva.\",\"Su prioridad no es ganar poder, sino que su hija sobreviva.\",Aprende fundamentos de Nen con Kurapika y usa temporalmente información de Stealth Dolphin.,👑|👶|🛡️|🧠|🐬,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/6/6b/Oito_Hui_Guo_Rou_SC_Portrait.png/revision/latest?cb=20241222204549,https://hunterxhunter.fandom.com/wiki/Oito_Hui_Guo_Rou,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_woble_hui_guo_rou,Woble Hui Guo Rou,Woble,,,Succession Contest,Kakin Royal Family,Female,Human,Alive,Kakin Empire|Kakin Royal Family|Kurapika allies,Fourteenth Prince|Infant prince,Unknown,Guardian Spirit Beast unknown,Infant prince,Brown,Brown,Infant,,Chapter 340,Not in 2011 anime,👶👑🛡️🚢❔,Es la pieza más vulnerable de una guerra que aún no puede entender.,Es la pieza más vulnerable de una guerra que aún no puede entender.,No se conoce su habilidad; su bestia guardiana permanece como misterio.,👶|👑|🛡️|🚢|❔,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/7/75/Woble_Hui_Guo_Rou_SC_Portrait.png/revision/latest?cb=20181104004431,https://hunterxhunter.fandom.com/wiki/Woble_Hui_Guo_Rou,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_theta,Theta,Theta,,,Succession Contest,Kakin Royal Bodyguard,Female,Human,Alive,Kakin Empire|Tserriednich Hui Guo Rou,Royal Bodyguard|Nen instructor,Unknown,Nen instruction|Aura control,Handgun|Nen training,Brown,Black,,,Chapter 348,Not in 2011 anime,🔫👁️📚😰👑,Enseñar a un monstruo puede ser más peligroso que enfrentarlo.,Enseñar a un monstruo puede ser más peligroso que enfrentarlo.,\"No se revela una técnica propia; enseña Ten, Zetsu, Ren y Hatsu al cuarto príncipe.\",🔫|👁️|📚|😰|👑,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/c/c8/Chap_362_-_Theta_close_up.png/revision/latest?cb=20231002213842,https://hunterxhunter.fandom.com/wiki/Theta,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\nhxh_morena_prudo,Morena Prudo,Morena,,,Succession Contest,Kakin Mafia,Female,Human,Alive,Heil-Ly Family|Kakin underworld,Heil-Ly Family boss|Mafia leader,Specialization,Contagion,Kiss|Level system,Black,Black,,,Chapter 378,Not in 2011 anime,💋🦠🎲🔪👑,Quiere contagiar caos hasta que el mundo suba de nivel hacia la ruina.,Quiere contagiar caos hasta que el mundo suba de nivel hacia la ruina.,\"Concede un sistema de niveles a quienes infecta con su beso, despertando habilidades al matar.\",💋|🦠|🎲|🔪|👑,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/9/95/Chap_405_-_Morena_close-up.png/revision/latest?cb=20241106190041,https://hunterxhunter.fandom.com/wiki/Morena_Prudo,Verified Hunterpedia/Fandom image URL; portrait/screenshot used as splash substitute.\n";

const MODES = [
  { id: 'classic', icon: '🎯', title: 'Classic', short: 'Deducción', description: 'Sin pistas. Adivina personajes y usa solo las coincidencias de la tabla para acercarte al personaje secreto.' },
  { id: 'quote', icon: '💬', title: 'Quote', short: 'Frase', description: 'Adivina quién diría esta frase o idea característica. En este MVP usamos paráfrasis, no citas extensas.' },
  { id: 'ability', icon: '🌀', title: 'Ability', short: 'Habilidad', description: 'Adivina el personaje usando una descripción de su técnica, poder o estilo Nen. Sin imágenes.' },
  { id: 'emoji', icon: '😶', title: 'Emoji', short: 'Emojis', description: 'El primer emoji viene revelado. Cada intento fallido desbloquea un emoji adicional.' },
  { id: 'splash', icon: '🖼️', title: 'Splash', short: 'Imagen', description: 'Adivina con un retrato cubierto por mosaicos. Cada intento deja ver más partes de la imagen.' },
];

const CLASSIC_COLUMNS = [
  { key: 'gender', label: 'Género', type: 'text' },
  { key: 'first_arc', label: 'Arco debut', type: 'text' },
  { key: 'role_group', label: 'Rol', type: 'text' },
  { key: 'race_species', label: 'Especie', type: 'tokens' },
  { key: 'status', label: 'Estado', type: 'text' },
  { key: 'affiliations', label: 'Afiliación', type: 'tokens' },
  { key: 'occupation', label: 'Ocupación', type: 'tokens' },
  { key: 'nen_type', label: 'Nen', type: 'tokens' },
  { key: 'height_cm', label: 'Altura', type: 'number' },
];

const els = {
  dailyKey: document.querySelector('#dailyKey'),
  dailyStatus: document.querySelector('#dailyStatus'),
  modeNav: document.querySelector('#modeNav'),
  modeIcon: document.querySelector('#modeIcon'),
  modeStep: document.querySelector('#modeStep'),
  modeTitle: document.querySelector('#modeTitle'),
  modeDescription: document.querySelector('#modeDescription'),
  clueHost: document.querySelector('#clueHost'),
  form: document.querySelector('#guessForm'),
  input: document.querySelector('#guessInput'),
  suggestions: document.querySelector('#suggestions'),
  boardTitle: document.querySelector('#boardTitle'),
  emptyState: document.querySelector('#emptyState'),
  classicBoard: document.querySelector('#classicBoard'),
  simpleBoard: document.querySelector('#simpleBoard'),
  attemptCounter: document.querySelector('#attemptCounter'),
  solvedCounter: document.querySelector('#solvedCounter'),
  datasetCounter: document.querySelector('#datasetCounter'),
  practiceBtn: document.querySelector('#practiceBtn'),
  dailyBtn: document.querySelector('#dailyBtn'),
  resetProgressBtn: document.querySelector('#resetProgressBtn'),
  resultDialog: document.querySelector('#resultDialog'),
  resultContent: document.querySelector('#resultContent'),
  nextModeBtn: document.querySelector('#nextModeBtn'),
  toast: document.querySelector('#toast'),
};

let characters = [];
let dailyKey = '';
let progress = null;
let activeMode = 'classic';
let practice = false;
let practiceSecret = null;
let activeSuggestion = -1;
let suggestions = [];

init();

async function init() {
  characters = await loadCharacters();
  characters.sort((a, b) => a.name.localeCompare(b.name, 'es'));
  dailyKey = getLocalDateKey();
  progress = loadProgress();
  renderModeNav();
  bindEvents();
  setMode(firstAvailableMode());
  els.dailyKey.textContent = formatDate(dailyKey);
  els.dailyStatus.textContent = 'Secuencia diaria: Classic → Quote → Ability → Emoji → Splash.';
  els.datasetCounter.textContent = String(characters.length);
  updateCounters();
}

async function loadCharacters() {
  const fallback = () => parseCsv(FALLBACK_CSV).filter(row => row.character_id && row.name);

  // Al abrir index.html directo con file://, los navegadores bloquean fetch()
  // hacia archivos locales. En ese caso usamos el CSV embebido completo.
  if (window.location.protocol === 'file:') {
    console.info('Archivo local detectado: usando dataset embebido. Para probar carga real del CSV, usa python -m http.server.');
    return fallback();
  }

  try {
    const response = await fetch(CSV_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const csvText = await response.text();
    const loaded = parseCsv(csvText).filter(row => row.character_id && row.name);
    if (!loaded.length) throw new Error('CSV vacío o con formato inválido');

    return loaded;
  } catch (error) {
    console.warn('No se pudo cargar characters_v2.csv; usando dataset embebido como fallback:', error);
    return fallback();
  }
}

function bindEvents() {
  els.form.addEventListener('submit', onSubmit);
  els.input.addEventListener('input', renderSuggestions);
  els.input.addEventListener('keydown', onSuggestionKeys);
  document.addEventListener('click', event => {
    if (!els.form.contains(event.target)) hideSuggestions();
  });
  els.practiceBtn.addEventListener('click', () => {
    practice = true;
    practiceSecret = randomCharacter();
    progress.practice = progress.practice || {};
    progress.practice[activeMode] = { guesses: [], solved: false, unlocked: true };
    renderAll();
    toast('Practice random activado para este modo.');
  });
  els.dailyBtn.addEventListener('click', () => {
    practice = false;
    renderAll();
    toast('Volviste al daily.');
  });
  els.resetProgressBtn.addEventListener('click', () => {
    if (!confirm('¿Reiniciar el progreso local de hoy?')) return;
    localStorage.removeItem(storageKey());
    progress = loadProgress(true);
    practice = false;
    setMode('classic');
    toast('Progreso reiniciado.');
  });
  els.nextModeBtn.addEventListener('click', () => {
    const next = getNextMode(activeMode);
    if (next) {
      els.resultDialog.close();
      practice = false;
      setMode(next.id);
    }
  });
}

function setMode(modeId) {
  if (!practice && !isUnlocked(modeId)) {
    toast('Completa el modo anterior para desbloquear este.');
    return;
  }
  activeMode = modeId;
  activeSuggestion = -1;
  hideSuggestions();
  els.input.value = '';
  renderAll();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderAll() {
  renderModeNav();
  renderModeCard();
  renderBoard();
  updateCounters();
}

function renderModeNav() {
  els.modeNav.replaceChildren();
  MODES.forEach((mode) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mode-tab';
    if (mode.id === activeMode) btn.classList.add('is-active');
    if (!practice && !isUnlocked(mode.id)) btn.classList.add('is-locked');
    if (!practice && getModeState(mode.id).solved) btn.classList.add('is-solved');
    btn.innerHTML = `<span class="mode-tab__icon">${getModeState(mode.id).solved && !practice ? '✓' : mode.icon}</span><span class="mode-tab__copy"><strong>${mode.title}</strong><span>${!practice && !isUnlocked(mode.id) ? 'Bloqueado' : mode.short}</span></span>`;
    btn.addEventListener('click', () => setMode(mode.id));
    els.modeNav.append(btn);
  });
}

function renderModeCard() {
  const mode = getMode(activeMode);
  const modeIndex = MODES.findIndex(item => item.id === activeMode) + 1;
  els.modeIcon.textContent = mode.icon;
  els.modeStep.textContent = practice ? 'Practice random' : `Modo ${modeIndex}/5`;
  els.modeTitle.textContent = mode.title;
  els.modeDescription.textContent = mode.description;
  els.boardTitle.textContent = `${mode.title} guesses`;
  els.input.disabled = isCurrentSolved();
  els.input.placeholder = isCurrentSolved() ? 'Modo completado' : 'Ej: Killua Zoldyck';
  renderClue();
}

function renderClue() {
  const secret = getSecret(activeMode);
  const guesses = getCurrentGuesses();
  els.clueHost.replaceChildren();

  if (activeMode === 'classic') {
    const card = document.createElement('div');
    card.className = 'clue-card';
    card.innerHTML = '<h3>Sin pistas iniciales</h3><p class="ability-text">Este modo funciona como LoLdle Classic: no ves frase, habilidad, emoji ni imagen. Solo las coincidencias que aparecen después de cada intento.</p>';
    els.clueHost.append(card);
    return;
  }

  const card = document.createElement('div');
  card.className = 'clue-card';

  if (activeMode === 'quote') {
    card.innerHTML = `<h3>Pista de frase</h3><p class="quote-text">“${escapeHtml(secret.quote_clue || secret.quote_hint_paraphrase || 'Sin pista disponible.')}”</p>`;
  }

  if (activeMode === 'ability') {
    card.innerHTML = `<h3>Descripción de habilidad</h3><p class="ability-text">${escapeHtml(secret.ability_clue || secret.nen_abilities || 'Sin habilidad disponible.')}</p>`;
  }

  if (activeMode === 'emoji') {
    const emojis = splitEmojiClues(secret);
    const revealed = Math.min(emojis.length, 1 + guesses.length);
    const row = emojis.map((emoji, i) => `<span class="emoji-box ${i < revealed ? '' : 'is-hidden'}">${i < revealed ? escapeHtml(emoji) : ''}</span>`).join('');
    card.innerHTML = `<h3>Emoji puzzle</h3><p class="ability-text">El primer emoji siempre aparece. Cada fallo revela uno más.</p><div class="emoji-row">${row}</div>`;
  }

  if (activeMode === 'splash') {
    const totalTiles = 16;
    const solved = isCurrentSolved();
    const revealed = solved ? totalTiles : Math.min(totalTiles, 2 + guesses.length * 2);
    const blur = solved ? 0 : Math.max(0, 14 - guesses.length * 2.4);
    const scale = solved ? 1 : Math.max(1, 1.18 - guesses.length * 0.03);
    const tiles = Array.from({ length: totalTiles }, (_, i) => `<span class="tile ${i < revealed ? 'revealed' : ''}"></span>`).join('');
    const solvedClass = solved ? ' is-solved' : '';
    const caption = solved ? '¡Imagen revelada completamente!' : `Revelado: ${revealed}/${totalTiles} partes.`;
    card.innerHTML = `<h3>Splash / retrato</h3><div class="splash-stage${solvedClass}" style="--blur:${blur}px;--scale:${scale}"><img src="${escapeAttribute(secret.splash_url)}" alt="Retrato revelado" onerror="this.src='${placeholderImage(secret.name)}'"/><div class="splash-tiles">${tiles}</div></div><p class="reveal-caption">${caption}</p>`;
  }

  els.clueHost.append(card);
}

function renderBoard() {
  const guesses = getCurrentGuesses();
  els.emptyState.style.display = guesses.length ? 'none' : 'grid';
  els.classicBoard.hidden = activeMode !== 'classic' || !guesses.length;
  els.simpleBoard.hidden = activeMode === 'classic' || !guesses.length;

  if (activeMode === 'classic') renderClassicBoard(guesses);
  else renderSimpleBoard(guesses);
}

function renderClassicBoard(guesses) {
  els.classicBoard.replaceChildren();
  const grid = document.createElement('div');
  grid.className = 'classic-grid';
  grid.append(headCell('Personaje'));
  CLASSIC_COLUMNS.forEach(col => grid.append(headCell(col.label)));

  const secret = getSecret('classic');
  const orderedGuesses = guesses
    .map((guess, index) => ({ guess, attemptNumber: index + 1 }))
    .reverse();

  orderedGuesses.forEach(({ guess, attemptNumber }) => {
    const char = document.createElement('div');
    char.className = 'char-cell';
    char.innerHTML = `<img src="${escapeAttribute(guess.splash_url)}" alt="${escapeAttribute(guess.name)}" onerror="this.src='${placeholderImage(guess.name)}'"><div><strong>${escapeHtml(guess.name)}</strong><span>#${attemptNumber} · más reciente arriba</span></div>`;
    grid.append(char);

    CLASSIC_COLUMNS.forEach(col => grid.append(factCell(guess, secret, col)));
  });

  els.classicBoard.append(grid);
}

function renderSimpleBoard(guesses) {
  els.simpleBoard.replaceChildren();
  const secret = getSecret(activeMode);
  const orderedGuesses = guesses
    .map((guess, index) => ({ guess, attemptNumber: index + 1 }))
    .reverse();

  orderedGuesses.forEach(({ guess, attemptNumber }) => {
    const item = document.createElement('article');
    const ok = guess.character_id === secret.character_id;
    item.className = 'simple-guess';
    item.innerHTML = `<img src="${escapeAttribute(guess.splash_url)}" alt="${escapeAttribute(guess.name)}" onerror="this.src='${placeholderImage(guess.name)}'"><div><strong>${escapeHtml(guess.name)}</strong><span>Intento #${attemptNumber}</span></div><b class="result-pill ${ok ? 'ok' : 'no'}">${ok ? 'Correcto' : 'No'}</b>`;
    els.simpleBoard.append(item);
  });
}

function headCell(text) {
  const cell = document.createElement('div');
  cell.className = 'classic-head';
  cell.textContent = text;
  return cell;
}

function factCell(guess, secret, col) {
  const cell = document.createElement('div');
  const result = compareField(guess, secret, col);
  cell.className = `fact-cell ${result.status} ${col.type === 'number' ? 'number' : ''}`;
  const arrow = result.arrow ? `<span class="arrow">${result.arrow}</span>` : '';
  cell.innerHTML = `${arrow}<span class="tokens">${formatCellValue(guess[col.key])}</span>`;
  return cell;
}

function onSubmit(event) {
  event.preventDefault();
  const guess = findCharacter(els.input.value);
  if (!guess) {
    toast('No encontré ese personaje. Usa una sugerencia del autocomplete.');
    renderSuggestions();
    return;
  }
  submitGuess(guess);
}

function submitGuess(guess) {
  if (isCurrentSolved()) {
    toast('Este modo ya está completado. Avanza al siguiente.');
    return;
  }
  const state = getModeState(activeMode);
  if (state.guesses.includes(guess.character_id)) {
    toast(`${guess.name} ya fue usado en este modo.`);
    els.input.value = '';
    hideSuggestions();
    els.input.focus();
    return;
  }
  state.guesses.push(guess.character_id);
  els.input.value = '';
  hideSuggestions();

  const won = guess.character_id === getSecret(activeMode).character_id;
  if (won) {
    state.solved = true;
    unlockNextMode(activeMode);
    if (!practice) saveProgress();
    renderAll();
    showResult(true);
    return;
  }
  if (!practice) saveProgress();
  renderAll();
  focusBoardAfterGuess();
}

function focusBoardAfterGuess() {
  window.requestAnimationFrame(() => {
    els.board.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function showResult(won) {
  const secret = getSecret(activeMode);
  const next = getNextMode(activeMode);
  els.resultContent.innerHTML = `<img src="${escapeAttribute(secret.splash_url)}" alt="${escapeAttribute(secret.name)}" onerror="this.style.display='none'"><h2>${won ? '¡Correcto!' : 'Resultado'}</h2><p>Era <strong>${escapeHtml(secret.name)}</strong>. Completaste ${getMode(activeMode).title}${next ? ` y desbloqueaste ${next.title}.` : '. Terminaste la secuencia diaria.'}</p><p>${escapeHtml(secret.first_arc || 'Arco desconocido')} · ${escapeHtml(secret.nen_type || 'Nen desconocido')}</p>`;
  els.nextModeBtn.style.display = next ? 'inline-flex' : 'none';
  if (typeof els.resultDialog.showModal === 'function') els.resultDialog.showModal();
  else toast(`Correcto: ${secret.name}`);
}

function updateCounters() {
  const state = getModeState(activeMode);
  els.attemptCounter.textContent = String(state.guesses.length);
  const solved = MODES.filter(mode => getModeState(mode.id).solved).length;
  els.solvedCounter.textContent = `${solved}/${MODES.length}`;
}

function getModeState(modeId) {
  const bucket = practice ? (progress.practice ||= {}) : progress.modes;
  if (!bucket[modeId]) bucket[modeId] = { guesses: [], solved: false, unlocked: modeId === 'classic' };
  return bucket[modeId];
}

function getCurrentGuesses() {
  const ids = getModeState(activeMode).guesses;
  return ids.map(id => characters.find(char => char.character_id === id)).filter(Boolean);
}

function isCurrentSolved() { return getModeState(activeMode).solved; }
function isUnlocked(modeId) { return modeId === 'classic' || getModeState(modeId).unlocked || getModeState(modeId).solved; }
function getMode(modeId) { return MODES.find(mode => mode.id === modeId); }
function getNextMode(modeId) { return MODES[MODES.findIndex(mode => mode.id === modeId) + 1] || null; }

function unlockNextMode(modeId) {
  const next = getNextMode(modeId);
  if (next) getModeState(next.id).unlocked = true;
}

function firstAvailableMode() {
  return [...MODES].reverse().find(mode => getModeState(mode.id).unlocked && !getModeState(mode.id).solved)?.id || 'classic';
}

function getSecret(modeId) {
  if (practice) {
    if (!practiceSecret) practiceSecret = randomCharacter();
    return practiceSecret;
  }
  const index = seededIndex(`${dailyKey}:${modeId}`, characters.length);
  return characters[index];
}

function randomCharacter() { return characters[Math.floor(Math.random() * characters.length)]; }

function compareField(guess, secret, col) {
  if (col.type === 'number') {
    const a = Number(guess[col.key]);
    const b = Number(secret[col.key]);
    if (!Number.isFinite(a) || !Number.isFinite(b)) return { status: 'miss' };
    if (a === b) return { status: 'match' };
    return { status: 'number', arrow: a < b ? '↑' : '↓' };
  }
  if (col.type === 'tokens') {
    const guessTokens = tokenize(guess[col.key]);
    const secretTokens = tokenize(secret[col.key]);
    if (!guessTokens.length || !secretTokens.length) return { status: 'miss' };
    if (setsEqual(guessTokens, secretTokens)) return { status: 'match' };
    if (guessTokens.some(token => secretTokens.includes(token))) return { status: 'partial' };
    return { status: 'miss' };
  }
  const a = normalize(guess[col.key]);
  const b = normalize(secret[col.key]);
  if (!a || !b) return { status: 'miss' };
  if (a === b) return { status: 'match' };
  if (sharedWords(a, b)) return { status: 'partial' };
  return { status: 'miss' };
}

function tokenize(value = '') {
  return value
    .split('|')
    .flatMap(part => part.split('/'))
    .map(normalize)
    .filter(Boolean);
}

function sharedWords(a, b) {
  const skip = new Set(['main','former','current','in','the','and','or','de','la','el','en','y','of']);
  const aw = a.split(/\s+/).filter(word => word.length > 3 && !skip.has(word));
  const bw = new Set(b.split(/\s+/).filter(word => word.length > 3 && !skip.has(word)));
  return aw.some(word => bw.has(word));
}

function setsEqual(a, b) {
  if (a.length !== b.length) return false;
  const bs = new Set(b);
  return a.every(item => bs.has(item));
}

function formatCellValue(value = '') {
  const text = String(value || '—')
    .replace(/\|/g, '<br>')
    .replace(/;/g, '<br>');
  return escapeHtml(text).replaceAll('&lt;br&gt;', '<br>');
}

function splitEmojiClues(char) {
  const raw = char.emoji_clue_steps || char.emoji_hint || '';
  if (raw.includes('|')) return raw.split('|').filter(Boolean);
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    return [...new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(raw)].map(x => x.segment).filter(x => x.trim());
  }
  return [...raw];
}

function renderSuggestions() {
  const query = normalize(els.input.value);
  if (isCurrentSolved() || !query) return hideSuggestions();

  suggestions = characters
    .filter(char => matchesCharacterName(char, query))
    .sort((a, b) => suggestionScore(a, query) - suggestionScore(b, query) || a.name.localeCompare(b.name))
    .slice(0, 10);

  activeSuggestion = -1;
  els.suggestions.replaceChildren();
  suggestions.forEach((char) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'suggestion';
    btn.innerHTML = `<img src="${escapeAttribute(char.splash_url)}" alt="" onerror="this.src='${placeholderImage(char.name)}'"><span><strong>${escapeHtml(char.name)}</strong><small>${escapeHtml(char.first_arc || '')} · ${escapeHtml(char.nen_type || '')}</small></span><b>Intentar</b>`;
    btn.addEventListener('click', () => submitGuess(char));
    els.suggestions.append(btn);
  });
  els.suggestions.style.display = suggestions.length ? 'block' : 'none';
}

function onSuggestionKeys(event) {
  if (!suggestions.length || els.suggestions.style.display === 'none') return;
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    activeSuggestion = (activeSuggestion + 1) % suggestions.length;
    paintActiveSuggestion();
  }
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    activeSuggestion = (activeSuggestion - 1 + suggestions.length) % suggestions.length;
    paintActiveSuggestion();
  }
  if (event.key === 'Enter' && activeSuggestion >= 0) {
    event.preventDefault();
    submitGuess(suggestions[activeSuggestion]);
  }
  if (event.key === 'Escape') hideSuggestions();
}

function paintActiveSuggestion() {
  [...els.suggestions.children].forEach((child, index) => child.classList.toggle('is-active', index === activeSuggestion));
}

function hideSuggestions() {
  suggestions = [];
  activeSuggestion = -1;
  els.suggestions.style.display = 'none';
  els.suggestions.replaceChildren();
}

function findCharacter(value = '') {
  const q = normalize(value);
  return characters.find(char => normalize(char.name) === q);
}

function getNameParts(char) {
  const fullName = normalize(char.name);
  const words = fullName
    .split(/[\s,.'’"_\-]+/)
    .map(part => part.trim())
    .filter(Boolean);

  return { fullName, words };
}

function matchesCharacterName(char, query) {
  const { fullName, words } = getNameParts(char);

  // Search only against the character name. No Nen type, arc, species, aliases, kana, etc.
  // Each typed segment must match the start of the full name or the start of a name/surname part.
  const queryParts = query.split(/\s+/).filter(Boolean);
  if (!queryParts.length) return false;

  if (fullName.startsWith(query)) return true;

  return queryParts.every(part => words.some(word => word.startsWith(part)));
}

function suggestionScore(char, query) {
  const { fullName, words } = getNameParts(char);
  if (fullName === query) return 0;
  if (fullName.startsWith(query)) return 1;
  if (words.some(word => word === query)) return 2;
  if (words.some(word => word.startsWith(query))) return 3;
  return 4;
}

function loadProgress(forceNew = false) {
  if (!forceNew) {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey()) || 'null');
      if (saved?.modes) return saved;
    } catch {}
  }
  return {
    dailyKey,
    modes: MODES.reduce((acc, mode, index) => {
      acc[mode.id] = { guesses: [], solved: false, unlocked: index === 0 };
      return acc;
    }, {}),
    practice: {},
  };
}

function saveProgress() {
  localStorage.setItem(storageKey(), JSON.stringify(progress));
}
function storageKey() { return `hxhdle:v2:${dailyKey}`; }

function parseCsv(text) {
  const rows = [];
  let row = [], field = '', insideQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"') {
      if (insideQuotes && next === '"') { field += '"'; i++; }
      else insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      row.push(field); field = '';
    } else if ((char === '\n' || char === '\r') && !insideQuotes) {
      if (char === '\r' && next === '\n') i++;
      row.push(field); field = '';
      if (row.some(cell => cell !== '')) rows.push(row);
      row = [];
    } else field += char;
  }
  row.push(field);
  if (row.some(cell => cell !== '')) rows.push(row);
  if (!rows.length) return [];
  const headers = rows.shift().map(h => h.replace(/^\uFEFF/, ''));
  return rows.map(values => Object.fromEntries(headers.map((header, index) => [header, values[index] || ''])));
}

function seededIndex(seed, modulo) {
  let hash = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0) % modulo;
}

function getLocalDateKey() {
  const date = new Date();
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function formatDate(key) {
  const [y, m, d] = key.split('-');
  return `${d}/${m}/${y}`;
}

function normalize(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char]));
}
function escapeAttribute(value = '') { return escapeHtml(value).replace(/'/g, '&#039;'); }
function placeholderImage(name = 'HxH') {
  const text = encodeURIComponent(name.split(' ').map(part => part[0]).join('').slice(0, 3).toUpperCase());
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Crect width='320' height='320' fill='%230b1117'/%3E%3Ccircle cx='160' cy='160' r='110' fill='%231e9d5a' opacity='.25'/%3E%3Ctext x='50%25' y='53%25' text-anchor='middle' font-size='60' fill='%23f7fbf7' font-family='Arial' font-weight='700'%3E${text}%3C/text%3E%3C/svg%3E`;
}

let toastTimer = 0;
function toast(message) {
  clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add('show');
  toastTimer = setTimeout(() => els.toast.classList.remove('show'), 2600);
}
