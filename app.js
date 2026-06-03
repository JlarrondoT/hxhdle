const CSV_URL = 'characters_v2.csv';
const FALLBACK_CSV = "character_id,name,also_known_as,kana,romaji,first_arc,role_group,gender,race_species,status,affiliations,occupation,nen_type,nen_abilities,weapons_items,eye_color,hair_color,age,height_cm,debut_manga,debut_anime_2011,emoji_hint,quote_hint_paraphrase,quote_clue,ability_clue,emoji_clue_steps,game_modes_ready,splash_url,source_url,data_quality_notes\nhxh_gon_freecss,Gon Freecss,,\u30b4\u30f3\uff1d\u30d5\u30ea\u30fc\u30af\u30b9,Gon Fur\u012bkusu,Hunter Exam,Main protagonist,Male,Human,Alive,Hunter Association,Rookie Hunter,Enhancement,Jajanken: Rock|Jajanken: Paper|Jajanken: Scissors|Limitation Transformation,Fishing rod|Jajanken,Brown,Greenish Black,11 debut; 13-14 current,154,Chapter 1,Episode 1,\ud83d\udfe2\ud83c\udfa3\ud83d\udc66\ud83d\udc4a\ud83e\udea8,No quiere aceptar quedarse en el lado perdedor.,No quiere aceptar quedarse en el lado perdedor.,\"Concentra aura en el pu\u00f1o para un ataque directo de impacto, con variantes a distancia y de corte.\",\ud83d\udfe2|\ud83c\udfa3|\ud83d\udc66|\ud83d\udc4a|\ud83e\udea8,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/3/3e/HxH2011_EP147_Gon_Portrait.png/revision/latest?cb=20230904181801,https://hunterxhunter.fandom.com/wiki/Gon_Freecss,Portrait used as splash substitute; verify if game needs full-body or crop images.\nhxh_killua_zoldyck,Killua Zoldyck,Kil|Evans,\u30ad\u30eb\u30a2\uff1d\u30be\u30eb\u30c7\u30a3\u30c3\u30af,Kirua Zorudikku,Hunter Exam,Main ally/deuteragonist,Male,Human,Alive,Hunter Association|former Zoldyck Family|former Chimera Ant Extermination Team,Rookie Hunter,Transmutation,Lightning Palm|Thunderbolt|Godspeed|Whirlwind|Speed of Lightning,Electric aura|Yo-yos|Assassin techniques,Blue,White,11 debut; 13-14 current,158,Chapter 6,Episode 3,\u26a1\ud83d\udef9\ud83d\udc66\ud83d\udc31\ud83d\udd2a,Quiere dejar de matar y vivir como un ni\u00f1o junto a Gon.,Quiere dejar de matar y vivir como un ni\u00f1o junto a Gon.,\"Convierte su aura en electricidad para atacar, moverse a velocidad extrema y reaccionar casi autom\u00e1ticamente.\",\u26a1|\ud83d\udef9|\ud83d\udc66|\ud83d\udc31|\ud83d\udd2a,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/b/bd/HxH2011_EP147_Killua_Portrait.png/revision/latest?cb=20230904181904,https://hunterxhunter.fandom.com/wiki/Killua_Zoldyck,Portrait used as splash substitute.\nhxh_kurapika,Kurapika,Chain Bastard|Rat,\u30af\u30e9\u30d4\u30ab,Kurapika,Hunter Exam,Main protagonist in Yorknew/Succession Contest,Male,Human|Kurta Clan,Alive,Hunter Association|Nostrade Family|Zodiacs|Oito Hui Guo Rou,Blacklist Hunter|Nostrade Family Underboss|Zodiac Rat|Royal Bodyguard|Nen Teacher,Conjuration|Specialization when scarlet eyes,Holy Chain|Steal Chain|Chain Jail|Dowsing Chain|Judgment Chain|Emperor Time|Stealth Dolphin,Chains|Scarlet Eyes,Brown|Blue|Grey|Scarlet,Blond,17 Heavens Arena; 19 current,171,Chapter 2,Episode 1,\u26d3\ufe0f\ud83d\udc41\ufe0f\ud83d\udfe5\ud83d\udd77\ufe0f\u2696\ufe0f,Teme m\u00e1s perder su rabia que morir.,Teme m\u00e1s perder su rabia que morir.,\"Invoca cadenas con reglas estrictas: puede rastrear, curar, robar Nen, juzgar y restringir a ciertos enemigos.\",\u26d3\ufe0f|\ud83d\udc41\ufe0f|\ud83d\udfe5|\ud83d\udd77\ufe0f|\u2696\ufe0f,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/d/d9/Kurapika_HCE_Portrait.png/revision/latest?cb=20170704123336,https://hunterxhunter.fandom.com/wiki/Kurapika,Nen type has conditional transformation; model should accept both values for Classic mode.\nhxh_leorio_paradinight,Leorio Paradinight,Rioleo|Loradio|Boar,\u30ec\u30aa\u30ea\u30aa\uff1d\u30d1\u30e9\u30c7\u30a3\u30ca\u30a4\u30c8,Reorio Paradinaito,Hunter Exam,Main ally,Male,Human,Alive,Hunter Association|Zodiacs,Rookie Hunter|Medical Student|Zodiac Boar,Emission,Remote Punch,Medical knowledge|Remote punch,Blue|Brown,Black,19 Heavens Arena; 21 current,193,Chapter 2,Episode 1,\ud83e\ude7a\ud83d\udcbc\ud83d\udc53\ud83d\udc17\ud83d\udc4a,Quiere ser doctor y que el dinero no impida curar a otros.,Quiere ser doctor y que el dinero no impida curar a otros.,\"Emite un golpe a distancia que aparece desde otra superficie, como si el pu\u00f1o atravesara el espacio.\",\ud83e\ude7a|\ud83d\udcbc|\ud83d\udc53|\ud83d\udc17|\ud83d\udc4a,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/7/73/HxH2011_EP145_Leorio_Portrait.png/revision/latest?cb=20230902193715,https://hunterxhunter.fandom.com/wiki/Leorio_Paradinight,Occupation has medical and Hunter identities.\nhxh_hisoka_morow,Hisoka Morow,The Magician|Grim Reaper,\u30d2\u30bd\u30ab\uff1d\u30e2\u30ed\u30a6,Hisoka Morou,Hunter Exam,Antagonist/rival,Male,Human,Alive,Hunter Association|Heavens Arena|former Phantom Troupe,Hunter|Floor Master|former thief|former Phantom Troupe #4,Transmutation,Bungee Gum|Texture Surprise,Playing cards|Bungee Gum,Blue|Yellow,Blue|Red/Fuchsia,Unknown,187,Chapter 5,Episode 3,\ud83c\udccf\u2764\ufe0f\u2b50\ud83d\udca7\ud83c\udfaa,Disfruta enfrentar planes ajenos y verlos fallar.,Disfruta enfrentar planes ajenos y verlos fallar.,\"Su aura tiene elasticidad y adherencia al mismo tiempo, permiti\u00e9ndole atraer, pegar y lanzar objetos o personas.\",\ud83c\udccf|\u2764\ufe0f|\u2b50|\ud83d\udca7|\ud83c\udfaa,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/2/29/Hisoka_Morow_YC_Portrait.png/revision/latest?cb=20190123172039,https://hunterxhunter.fandom.com/wiki/Hisoka_Morow,Include both Hunter and former Phantom Troupe relationships.\nhxh_chrollo_lucilfer,Chrollo Lucilfer,Boss|Chro,\u30af\u30ed\u30ed\uff1d\u30eb\u30b7\u30eb\u30d5\u30eb,Kuroro Rushirufuru,Yorknew City,Antagonist,Male,Human,Alive,Phantom Troupe|Heavens Arena,Thief|Leader of the Phantom Troupe|Floor Master,Specialization,Skill Hunter|Double Face|Indoor Fish|Fun Fun Cloth|Teleportation|The Sun and Moon|Order Stamp|Convert Hands,Bandit's Secret book,Black|Grey,Black,26 debut; 28 current,177,Chapter 71,Episode 41,\ud83d\udcd6\ud83d\udd77\ufe0f\u271d\ufe0f\ud83d\udda4\ud83c\udfad,Ve placer en apropiarse de habilidades y explorar la oscuridad de sus due\u00f1os.,Ve placer en apropiarse de habilidades y explorar la oscuridad de sus due\u00f1os.,Roba habilidades Nen y las almacena en un libro; para usarlas debe cumplir condiciones espec\u00edficas.,\ud83d\udcd6|\ud83d\udd77\ufe0f|\u271d\ufe0f|\ud83d\udda4|\ud83c\udfad,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/7/78/Chrollo_Lucilfer_GI_Portrait.png/revision/latest?cb=20130502190618,https://hunterxhunter.fandom.com/wiki/Chrollo_Lucilfer,Some stolen abilities are former; split if game needs exact current/old status.\nhxh_illumi_zoldyck,Illumi Zoldyck,Illu|Gittarackur,\u30a4\u30eb\u30df\uff1d\u30be\u30eb\u30c7\u30a3\u30c3\u30af,Irumi Zorudikku,Hunter Exam,Antagonist,Male,Human,Alive,Zoldyck Family|Hunter Association|Phantom Troupe,Zoldyck Assassin|Hunter|Thief|Phantom Troupe #11,Manipulation,Pin and Needle Manipulation|Body Alteration|Hypnotic Spell|Corpse Control|Needle People,Needles,Black,Black,24 debut; 26 current,185,Chapter 6 disguised; Chapter 26 true appearance,Episode 3 disguised; Episode 15 true appearance,\ud83d\udccd\ud83e\udea1\ud83d\udc41\ufe0f\ud83d\udda4\ud83d\udd2a,Ve a Killua como alguien moldeado para ser asesino.,Ve a Killua como alguien moldeado para ser asesino.,\"Usa agujas para alterar apariencia, controlar cuerpos y manipular conductas con precisi\u00f3n aterradora.\",\ud83d\udccd|\ud83e\udea1|\ud83d\udc41\ufe0f|\ud83d\udda4|\ud83d\udd2a,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/7/72/Illumi_Zoldyck_HCE_Portrait.png/revision/latest?cb=20181227022223,https://hunterxhunter.fandom.com/wiki/Illumi_Zoldyck,Alias Gittarackur useful for advanced answer aliases.\nhxh_biscuit_krueger,Biscuit Krueger,Bisky,\u30d3\u30b9\u30b1\u30c3\u30c8\uff1d\u30af\u30eb\u30fc\u30ac\u30fc,Bisuketto Kur\u016bg\u0101,Greed Island,Mentor/ally,Female,Human,Alive,Hunter Association|Shingen-ryu School|Kurapika|Marayam Hui Guo Rou,Double-Star Stone Hunter|Shingen-ryu Master|Nen Teacher|Royal Bodyguard,Transmutation,Magical Esthetician|Magical Spa Services|Piano Massage|Body Transformation,Nen massage|Body transformation,Blue|Pink,Brown|Blonde,57 debut; 58-59 current,,Chapter 125,Episode 60,\ud83d\udc8e\ud83c\udf80\ud83d\udcaa\ud83e\uddd6\u200d\u2640\ufe0f\ud83c\udf6a,\"Tras d\u00e9cadas mintiendo, puede detectar si alguien miente.\",\"Tras d\u00e9cadas mintiendo, puede detectar si alguien miente.\",Materializa una asistente que restaura el cuerpo con masajes y reduce dr\u00e1sticamente la fatiga.,\ud83d\udc8e|\ud83c\udf80|\ud83d\udcaa|\ud83e\uddd6\u200d\u2640\ufe0f|\ud83c\udf6a,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/c/cd/Biscuit_Krueger_CA_Portrait.png/revision/latest?cb=20190630140152,https://hunterxhunter.fandom.com/wiki/Biscuit_Krueger,Has preferred childlike form and true muscular form; consider form_variant column later.\nhxh_kite,Kite,Reina,\u30ab\u30a4\u30c8,Kaito,Hunter Exam/Chimera Ant,Mentor/ally,Unknown,Human former|Chimera Ant,Deceased human|Alive as Chimera Ant,Amateur Hunters|former Ging Freecss student|former Hunter Association|former Kakin Wildlife Exploration Team,Leader/Mentor of Amateur Hunters|former Hunter|former Wildlife Exploration Team leader,Conjuration (since lost),Crazy Slots|Scythe|Silent Waltz|Staff|Carbine,Crazy Slots,Blue|Brown|Purple,Light Brown|White|Red,,,Chapter 1,Episode 1 silhouette; Episode 75 actual appearance,\ud83c\udfb0\ud83c\udccf\ud83e\udde2\u2702\ufe0f\ud83d\udc1c,Exige mantener la resoluci\u00f3n y no retroceder.,Exige mantener la resoluci\u00f3n y no retroceder.,\"Conjura una ruleta que decide al azar el arma que usar\u00e1, oblig\u00e1ndolo a adaptarse al resultado.\",\ud83c\udfb0|\ud83c\udccf|\ud83e\udde2|\u2702\ufe0f|\ud83d\udc1c,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/1/1d/Kite_CA_Portrait.png/revision/latest?cb=20190127155247,https://hunterxhunter.fandom.com/wiki/Kite,Complex identity; may need separate rows for Human Kite and Chimera Ant Kite.\nhxh_isaac_netero,Isaac Netero,,\u30a2\u30a4\u30b6\u30c3\u30af\uff1d\u30cd\u30c6\u30ed,Aizakku Netero,Hunter Exam,Authority/mentor,Male,Human,Deceased,former Hunter Association|former Pure Paladin Squad|former Shingen-ryu|former Zodiacs|former Chimera Ant Extermination Team,Hunter|12th Hunter Association Chairman|Shingen-ryu Grandmaster|Extermination Team Leader,Enhancement,100-Type Guanyin Bodhisattva|Zero Hand,Prayer martial arts|Poor Man's Rose,Gray|Brown,Gray|White,110-120+,,Chapter 12,Episode 6,\ud83d\ude4f\ud83d\udcaf\ud83e\udeb7\u2622\ufe0f\ud83d\udc74,Se considera afortunado de enfrentar un rival que lo llev\u00f3 al l\u00edmite.,Se considera afortunado de enfrentar un rival que lo llev\u00f3 al l\u00edmite.,Manifiesta una entidad gigante que ataca con palmas veloc\u00edsimas despu\u00e9s de una postura de oraci\u00f3n.,\ud83d\ude4f|\ud83d\udcaf|\ud83e\udeb7|\u2622\ufe0f|\ud83d\udc74,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/8/88/Isaac_Netero_HE_Portrait.png/revision/latest?cb=20230314041500,https://hunterxhunter.fandom.com/wiki/Isaac_Netero,Abilities list can be expanded from Nen page if needed.\nhxh_ging_freecss,Ging Freecss,The Boar,\u30b8\u30f3\uff1d\u30d5\u30ea\u30fc\u30af\u30b9,Jin Fur\u012bkusu,Hunter Exam/13th Hunter Chairman Election,Goal figure/mentor,Male,Human,Alive,Hunter Association|Greed Island|Beyond Netero's Dark Continent Expedition Team|former Zodiacs,Double-Star Ruins Hunter|Lead Greed Island Game Master|Dark Continent Expedition Team member|former Zodiac,Unknown,Remote Punch|Ultrasound|Phasing Bullets,Adaptable Nen combat,Blue|Brown,Black,31 debut; 34 current,,Chapter 1 image; Chapter 66 official,Episode 1 image; Episode 37 official,\ud83e\udde2\ud83c\udf0d\ud83e\udded\ud83d\udd79\ufe0f\ud83d\udc17,Valora el viaje y las desviaciones m\u00e1s que solo el destino.,Valora el viaje y las desviaciones m\u00e1s que solo el destino.,Su dominio del Nen le permite reproducir y reinterpretar t\u00e9cnicas de golpe despu\u00e9s de experimentarlas.,\ud83e\udde2|\ud83c\udf0d|\ud83e\udded|\ud83d\udd79\ufe0f|\ud83d\udc17,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/3/3d/GingAv.png/revision/latest?cb=20181125230438,https://hunterxhunter.fandom.com/wiki/Ging_Freecss,Nen type unknown; abilities listed in Hunterpedia summaries.\nhxh_meruem,Meruem,The King,\u30e1\u30eb\u30a8\u30e0,Meruemu,Chimera Ant,Main antagonist,Male,Chimera Ant,Deceased,former Chimera Ants,King of the Chimera Ants,Emission,Aura Synthesis|Metamorphosis|Rage Blast|Photon,Royal aura|Tail,Purple,None,40 days,,Chapter 213 actual appearance,Episode 91 actual appearance,\ud83d\udc51\ud83d\udc1c\u265f\ufe0f\ud83d\udc9a\u2622\ufe0f,Se pregunta qui\u00e9n es y qu\u00e9 sentido tiene ser rey.,Se pregunta qui\u00e9n es y qu\u00e9 sentido tiene ser rey.,\"Aumenta su aura y poder al consumir a otros usuarios, absorbiendo parte de sus capacidades.\",\ud83d\udc51|\ud83d\udc1c|\u265f\ufe0f|\ud83d\udc9a|\u2622\ufe0f,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/5/58/Meruem_CA_Portrait.png/revision/latest?cb=20190419124312,https://hunterxhunter.fandom.com/wiki/Meruem,Central for quote/emoji mode; avoid spoilery hints if using early-game mode.\nhxh_neferpitou,Neferpitou,Pitou,\u30cd\u30d5\u30a7\u30eb\u30d4\u30c8\u30fc,Neferupit\u014d,Chimera Ant,Antagonist/Royal Guard,Unknown,Cat-humanoid Chimera Ant,Deceased,former Chimera Ant Queen|former Royal Guards|former Chimera Ant King,Chimera Ant Royal Guard,Specialization,Terpsichora|Doctor Blythe|Puppeteering,Claws|Puppet Nen,Red,White,,,Chapter 197 actual appearance,Episode 84 actual appearance,\ud83d\udc31\ud83d\udc69\u200d\u2695\ufe0f\ud83e\uddf5\ud83c\udfad\ud83d\udc1c,Acepta haber recibido la ira que otros no deb\u00edan cargar.,Acepta haber recibido la ira que otros no deb\u00edan cargar.,\"Usa mu\u00f1ecos y marionetas de Nen para reparar cuerpos, controlar movimientos y potenciar su combate.\",\ud83d\udc31|\ud83d\udc69\u200d\u2695\ufe0f|\ud83e\uddf5|\ud83c\udfad|\ud83d\udc1c,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/2/20/109_-_Neferpitou_portrait.png/revision/latest?cb=20131218034405,https://hunterxhunter.fandom.com/wiki/Neferpitou,Gender is listed as unknown in Hunterpedia.\nhxh_shaiapouf,Shaiapouf,Pouf|Sir Shau,\u30b7\u30e3\u30a6\u30a2\u30d7\u30d5,Shauapufu,Chimera Ant,Antagonist/Royal Guard,Male,Butterfly-humanoid Chimera Ant,Deceased,former Chimera Ant Queen|former Royal Guards|former Chimera Ant King,Chimera Ant Royal Guard,Manipulation,Cocoon|Spiritual Message|Beelzebub|Body Reconstruction,Wings|Scales,Amber,Blond,,,Chapter 202 actual debut,Episode 86 actual debut,\ud83e\udd8b\ud83c\udfbb\ud83d\udc51\ud83d\udc1c\ud83c\udf00,Su identidad gira alrededor de servir y proteger al Rey.,Su identidad gira alrededor de servir y proteger al Rey.,\"Divide su cuerpo en part\u00edculas o clones, lee emociones y manipula estados mentales mediante sus escamas.\",\ud83e\udd8b|\ud83c\udfbb|\ud83d\udc51|\ud83d\udc1c|\ud83c\udf00,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/a/a2/109_-_Shaiapouf_portrait.png/revision/latest?cb=20150902224149,https://hunterxhunter.fandom.com/wiki/Shaiapouf,Image URL verified via Hunterpedia static asset.\nhxh_menthuthuyoupi,Menthuthuyoupi,Youpi,\u30e2\u30f3\u30c8\u30a5\u30c8\u30a5\u30e6\u30d4\u30fc,Montutuyup\u012b,Chimera Ant,Antagonist/Royal Guard,Male,Chimera Ant,Deceased,former Chimera Ant Queen|former Royal Guards|former Chimera Ant King,Chimera Ant Royal Guard,Transmutation,Metamorphosis|Rage Blast|Rage Incarnate,Body transformation|Rage aura,Green,Dark Brown,,,Chapter 206 debut,Episode 88,\ud83d\udee1\ufe0f\ud83d\udca2\ud83d\udcaa\ud83d\udc1c\ud83d\udc51,Se define como escudo del Rey.,Se define como escudo del Rey.,Transforma su cuerpo en formas monstruosas y descarga explosiones de aura ligadas a su ira.,\ud83d\udee1\ufe0f|\ud83d\udca2|\ud83d\udcaa|\ud83d\udc1c|\ud83d\udc51,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/7/79/109_-_Menthuthuyoupi_portrait.png/revision/latest?cb=20131218033843,https://hunterxhunter.fandom.com/wiki/Menthuthuyoupi,Good for emoji mode due to shield/rage/body transformation.\nhxh_komugi,Komugi,,\u30b3\u30e0\u30ae,Komugi,Chimera Ant,Supporting key character,Female,Human,Deceased,,Gungi Player|World Gungi Champion,Enhancement,Rapidly Evolving Gungi Playing Skills,Gungi board|Walking stick,Brown|Green,Brown|White,,,Chapter 244,Episode 102,\u265f\ufe0f\ud83d\udc51\ud83d\udc67\ud83e\uddaf\ud83d\ude2d,Est\u00e1 dispuesta a apostar su vida en vez de una extremidad.,Est\u00e1 dispuesta a apostar su vida en vez de una extremidad.,\"Su talento despierta y crece durante el Gungi, poniendo su vida como condici\u00f3n para superar sus l\u00edmites.\",\u265f\ufe0f|\ud83d\udc51|\ud83d\udc67|\ud83e\uddaf|\ud83d\ude2d,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/f/f1/Komugi_CA_Portrait.png/revision/latest?cb=20131121184842,https://hunterxhunter.fandom.com/wiki/Komugi,\"Nen type listed, but combat relevance is low; consider category 'non-combat Nen'.\"\nhxh_zeno_zoldyck,Zeno Zoldyck,,\u30bc\u30ce\uff1d\u30be\u30eb\u30c7\u30a3\u30c3\u30af,Zeno Zorudikku,Zoldyck Family/Yorknew City,Assassin/ally-antagonist,Male,Human,Alive,Zoldyck Family,Zoldyck Assassin|former Head of the Zoldyck Family,Emission,Aura Blast|Dragon Head|Dragon Lance|Dragon Dive,Dragon-shaped aura,Blue|Gray,Grey White|Ash White,67 debut; 69 current,161,Chapter 42,Episode 24,\ud83d\udc09\ud83d\udc74\ud83d\udd2a\ud83c\udfd4\ufe0f\ud83d\udca5,No mata por placer y no quiere trabajar ni morir por nada.,No mata por placer y no quiere trabajar ni morir por nada.,\"Da forma de drag\u00f3n a su aura para atacar a distancia, transportar personas o bombardear una zona.\",\ud83d\udc09|\ud83d\udc74|\ud83d\udd2a|\ud83c\udfd4\ufe0f|\ud83d\udca5,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/4/4f/Zeno_Zoldyck_YC_Portrait.png/revision/latest?cb=20190123184544,https://hunterxhunter.fandom.com/wiki/Zeno_Zoldyck,Useful for family/affiliation and Nen ability clues.\nhxh_knuckle_bine,Knuckle Bine,,\u30ca\u30c3\u30af\u30eb\uff1d\u30d0\u30a4\u30f3,Nakkuru Bain,Chimera Ant,Ally/Extermination Team,Male,Human,Alive,Hunter Association|Morel Mackernasey|former Chimera Ant Extermination Team,Beast Hunter|former Extermination Team Member,Conjuration,Hakoware,A.P.R.|Interest-based aura debt,Black,Dark Green,,,Chapter 200,Episode 86,\ud83d\udcb8\ud83d\udc36\ud83d\udc4a\ud83d\udcc8\ud83e\udd7a,Quiere conocer a los Ants antes de decidir exterminarlos.,Quiere conocer a los Ants antes de decidir exterminarlos.,\"Coloca una deuda de aura que acumula inter\u00e9s; si el rival quiebra, queda forzado a Zetsu.\",\ud83d\udcb8|\ud83d\udc36|\ud83d\udc4a|\ud83d\udcc8|\ud83e\udd7a,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/6/6f/Knuckle_Bine_CA_Portrait.png/revision/latest?cb=20230613232331,https://hunterxhunter.fandom.com/wiki/Knuckle_Bine,Add A.P.R. image asset later for ability mode.\nhxh_shoot_mcmahon,Shoot McMahon,,\u30b7\u30e5\u30fc\u30c8\uff1d\u30de\u30af\u30de\u30db\u30f3,Sh\u016bto Makumahon,Chimera Ant,Ally/Extermination Team,Male,Human,Alive,Hunter Association|Morel Mackernasey|former Chimera Ant Extermination Team,Unidentified Beast Hunter|former Extermination Team Member,Manipulation,Imprint Conversion|Disembodied Hands|Hotel Rafflesia,Cage|Floating hands,Black,Olive green|Pink,28; 29 current,,Chapter 200,Episode 86,\ud83e\udde4\ud83d\udd4a\ufe0f\ud83c\udfe8\ud83d\udd12\ud83d\ude28,Se describe como alguien que sali\u00f3 de una jaula emocional.,Se describe como alguien que sali\u00f3 de una jaula emocional.,Captura partes del cuerpo del oponente en una jaula flotante despu\u00e9s de tocarlas con sus manos.,\ud83e\udde4|\ud83d\udd4a\ufe0f|\ud83c\udfe8|\ud83d\udd12|\ud83d\ude28,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/1/17/2011_EP90_Shoot_McMahon_Portrait.png/revision/latest?cb=20230616231327,https://hunterxhunter.fandom.com/wiki/Shoot_McMahon,Nen type is marked with a note in Hunterpedia; verify if using strict canon.\nhxh_morel_mackernasey,Morel Mackernasey,Smoke Man|Shades,\u30e2\u30e9\u30a6\uff1d\u30de\u30c3\u30ab\u30fc\u30ca\u30fc\u30b7,Morau Makk\u0101n\u0101shi,Chimera Ant,Ally/Extermination Team,Male,Human,Alive,Hunter Association|former Chimera Ant Extermination Team,Triple-Star Sea Hunter|Sea Captain|former Extermination Team Member,Manipulation,Deep Purple|Smoky Jail,Giant smoking pipe|Smoke soldiers,,Silver,,,Chapter 199,Episode 85,\ud83d\udeac\ud83c\udf2b\ufe0f\ud83c\udf0a\ud83d\udd76\ufe0f\ud83d\udc68\u200d\ud83c\udfeb,Explica que el combate Nen nunca se reduce solo a n\u00fameros de aura.,Explica que el combate Nen nunca se reduce solo a n\u00fameros de aura.,\"Manipula humo con una pipa gigante para crear clones, pantallas, cuerdas y trampas t\u00e1cticas.\",\ud83d\udeac|\ud83c\udf2b\ufe0f|\ud83c\udf0a|\ud83d\udd76\ufe0f|\ud83d\udc68\u200d\ud83c\udfeb,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/5/5c/Morel_Mackernasey_CA_Portrait.png/revision/latest?cb=20190127155510,https://hunterxhunter.fandom.com/wiki/Morel_Mackernasey,Strong candidate for ability-icon mode if we add Deep Purple art.\nhxh_palm_siberia,Palm Siberia,Sinker Belle|No. 1,\u30d1\u30fc\u30e0\uff1d\u30b7\u30d9\u30ea\u30a2,P\u0101mu Shiberia,Chimera Ant,Ally/Extermination Team,Female,Human former|Chimera Ant,Alive,Hunter Association|Knov|former Chimera Ant Extermination Team,Hunter|Clairvoyant|former Extermination Team Member|former Chimera Ant Experimental Soldier,Enhancement,Merman Clairvoyance|Wink Blue|Black Widow,Clairvoyance|Black Widow hair armor,Fuchsia|Dark Blue,Black|Brown,22; 23 current,,Chapter 200,Episode 86,\ud83d\udd2e\ud83d\udda4\ud83d\udc41\ufe0f\ud83d\udc1c\ud83d\udd77\ufe0f,Reconoce que una parte de s\u00ed misma ahora es Ant.,Reconoce que una parte de s\u00ed misma ahora es Ant.,Rastrea objetivos mediante una imagen y luego usa su cabello como protecci\u00f3n y arma tras transformarse.,\ud83d\udd2e|\ud83d\udda4|\ud83d\udc41\ufe0f|\ud83d\udc1c|\ud83d\udd77\ufe0f,classic|quote|ability|emoji|splash,https://static.wikia.nocookie.net/hunterxhunter/images/7/75/Palm_Siberia_%28Ant%29_CA_Portrait.png/revision/latest?cb=20140620234253,https://hunterxhunter.fandom.com/wiki/Palm_Siberia,Could split into Human Palm and Chimera Ant Palm for cleaner classic comparisons.\n";

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
  try {
    const response = await fetch(CSV_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return parseCsv(await response.text()).filter(row => row.character_id && row.name);
  } catch (error) {
    console.warn('Usando CSV embebido como fallback:', error);
    return parseCsv(FALLBACK_CSV).filter(row => row.character_id && row.name);
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
    const revealed = Math.min(totalTiles, 2 + guesses.length * 2);
    const blur = Math.max(0, 14 - guesses.length * 2.4);
    const scale = Math.max(1, 1.18 - guesses.length * 0.03);
    const tiles = Array.from({ length: totalTiles }, (_, i) => `<span class="tile ${i < revealed ? 'revealed' : ''}"></span>`).join('');
    card.innerHTML = `<h3>Splash / retrato</h3><div class="splash-stage" style="--blur:${blur}px;--scale:${scale}"><img src="${escapeAttribute(secret.splash_url)}" alt="Retrato parcialmente revelado" onerror="this.src='${placeholderImage(secret.name)}'"/><div class="splash-tiles">${tiles}</div></div><p class="reveal-caption">Revelado: ${revealed}/${totalTiles} partes.</p>`;
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
  guesses.forEach((guess, idx) => {
    const char = document.createElement('div');
    char.className = 'char-cell';
    char.innerHTML = `<img src="${escapeAttribute(guess.splash_url)}" alt="${escapeAttribute(guess.name)}" onerror="this.src='${placeholderImage(guess.name)}'"><div><strong>${escapeHtml(guess.name)}</strong><span>#${idx + 1}</span></div>`;
    grid.append(char);

    CLASSIC_COLUMNS.forEach(col => grid.append(factCell(guess, secret, col)));
  });

  els.classicBoard.append(grid);
}

function renderSimpleBoard(guesses) {
  els.simpleBoard.replaceChildren();
  const secret = getSecret(activeMode);
  guesses.forEach((guess, index) => {
    const item = document.createElement('article');
    const ok = guess.character_id === secret.character_id;
    item.className = 'simple-guess';
    item.innerHTML = `<img src="${escapeAttribute(guess.splash_url)}" alt="${escapeAttribute(guess.name)}" onerror="this.src='${placeholderImage(guess.name)}'"><div><strong>${escapeHtml(guess.name)}</strong><span>Intento #${index + 1}</span></div><b class="result-pill ${ok ? 'ok' : 'no'}">${ok ? 'Correcto' : 'No'}</b>`;
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
  if (isCurrentSolved()) {
    toast('Este modo ya está completado. Avanza al siguiente.');
    return;
  }
  const guess = findCharacter(els.input.value);
  if (!guess) {
    toast('No encontré ese personaje. Usa una sugerencia del autocomplete.');
    renderSuggestions();
    return;
  }
  const state = getModeState(activeMode);
  if (state.guesses.includes(guess.character_id)) {
    toast(`${guess.name} ya fue usado en este modo.`);
    els.input.select();
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
  if (!query) return hideSuggestions();
  suggestions = characters
    .filter(char => getSearchTerms(char).some(term => normalize(term).includes(query)))
    .slice(0, 8);
  activeSuggestion = -1;
  els.suggestions.replaceChildren();
  suggestions.forEach((char) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'suggestion';
    btn.innerHTML = `<img src="${escapeAttribute(char.splash_url)}" alt="" onerror="this.src='${placeholderImage(char.name)}'"><span><strong>${escapeHtml(char.name)}</strong><small>${escapeHtml(char.first_arc || '')} · ${escapeHtml(char.nen_type || '')}</small></span>`;
    btn.addEventListener('click', () => {
      els.input.value = char.name;
      hideSuggestions();
      els.input.focus();
    });
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
    els.input.value = suggestions[activeSuggestion].name;
    hideSuggestions();
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
  return characters.find(char => getSearchTerms(char).some(term => normalize(term) === q));
}

function getSearchTerms(char) {
  return [char.name, char.kana, char.romaji, ...(char.also_known_as || '').split('|')].filter(Boolean);
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
