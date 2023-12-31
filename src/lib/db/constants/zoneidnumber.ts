export type ZoneIdNumberType = {
	id: number;
	long_name: string;
	short_name: string;
};

export const AllZones: ZoneIdNumberType[] = [
	{ id: 1, long_name: 'South Qeynos ', short_name: 'qeynos' },
	{ id: 2, long_name: 'North Qeynos ', short_name: 'qeynos2' },
	{ id: 3, long_name: 'The Surefall Glade ', short_name: 'qrg' },
	{ id: 4, long_name: 'The Qeynos Hills ', short_name: 'qeytoqrg' },
	{ id: 5, long_name: 'Highpass Hold ', short_name: 'highpass' },
	{ id: 6, long_name: 'High Keep ', short_name: 'highkeep' },
	{ id: 8, long_name: 'North Freeport ', short_name: 'freportn' },
	{ id: 9, long_name: 'West Freeport ', short_name: 'freportw' },
	{ id: 10, long_name: 'East Freeport ', short_name: 'freporte' },
	{
		id: 11,
		long_name: 'The Liberated Citadel of Runnyeye ',
		short_name: 'runnyeye'
	},
	{ id: 12, long_name: 'The Western Plains of Karana ', short_name: 'qey2hh1' },
	{
		id: 13,
		long_name: 'The Northern Plains of Karana ',
		short_name: 'northkarana'
	},
	{
		id: 14,
		long_name: 'The Southern Plains of Karana ',
		short_name: 'southkarana'
	},
	{ id: 15, long_name: 'Eastern Plains of Karana ', short_name: 'eastkarana' },
	{ id: 16, long_name: 'Gorge of King Xorbb ', short_name: 'beholder' },
	{ id: 17, long_name: 'Blackburrow ', short_name: 'blackburrow' },
	{ id: 18, long_name: 'The Lair of the Splitpaw ', short_name: 'paw' },
	{ id: 19, long_name: 'Rivervale ', short_name: 'rivervale' },
	{ id: 20, long_name: 'Kithicor Forest ', short_name: 'kithicor' },
	{ id: 21, long_name: 'West Commonlands ', short_name: 'commons' },
	{ id: 22, long_name: 'East Commonlands ', short_name: 'ecommons' },
	{ id: 23, long_name: 'The Erudin Palace ', short_name: 'erudnint' },
	{ id: 24, long_name: 'Erudin ', short_name: 'erudnext' },
	{ id: 25, long_name: 'The Nektulos Forest ', short_name: 'nektulos' },
	{ id: 25, long_name: 'The Nektulos Forest ', short_name: 'nektulos' },
	{ id: 26, long_name: 'Sunset Home ', short_name: 'cshome' },
	{ id: 27, long_name: 'The Lavastorm Mountains ', short_name: 'lavastorm' },
	{ id: 28, long_name: 'Nektropos ', short_name: 'nektropos' },
	{ id: 29, long_name: 'Halas ', short_name: 'halas' },
	{ id: 30, long_name: 'Everfrost Peaks ', short_name: 'everfrost' },
	{ id: 31, long_name: "Solusek's Eye ", short_name: 'soldunga' },
	{ id: 32, long_name: "Nagafen's Lair ", short_name: 'soldungb' },
	{ id: 33, long_name: 'Misty Thicket ', short_name: 'misty' },
	{ id: 34, long_name: 'Northern Desert of Ro ', short_name: 'nro' },
	{ id: 35, long_name: 'Southern Desert of Ro ', short_name: 'sro' },
	{ id: 36, long_name: 'Befallen ', short_name: 'befallen' },
	{ id: 37, long_name: 'Oasis of Marr ', short_name: 'oasis' },
	{ id: 38, long_name: 'Toxxulia Forest ', short_name: 'tox' },
	{ id: 39, long_name: 'The Hole ', short_name: 'hole' },
	{ id: 40, long_name: 'Neriak - Foreign Quarter ', short_name: 'neriaka' },
	{ id: 41, long_name: 'Neriak - Commons ', short_name: 'neriakb' },
	{ id: 42, long_name: 'Neriak - 3rd Gate ', short_name: 'neriakc' },
	{ id: 43, long_name: 'Neriak Palace ', short_name: 'neriakd' },
	{ id: 44, long_name: 'Najena ', short_name: 'najena' },
	{ id: 45, long_name: 'The Qeynos Aqueduct System ', short_name: 'qcat' },
	{ id: 46, long_name: 'Innothule Swamp ', short_name: 'innothule' },
	{ id: 47, long_name: 'The Feerrott ', short_name: 'feerrott' },
	{
		id: 48,
		long_name: 'Accursed Temple of CazicThule ',
		short_name: 'cazicthule'
	},
	{ id: 49, long_name: 'Oggok ', short_name: 'oggok' },
	{ id: 50, long_name: 'The Rathe Mountains ', short_name: 'rathemtn' },
	{ id: 51, long_name: 'Lake Rathetear ', short_name: 'lakerathe' },
	{ id: 52, long_name: 'Grobb ', short_name: 'grobb' },
	{ id: 53, long_name: 'Aviak Village ', short_name: 'aviak' },
	{ id: 54, long_name: 'The Greater Faydark ', short_name: 'gfaydark' },
	{ id: 55, long_name: "Ak'Anon ", short_name: 'akanon' },
	{ id: 56, long_name: 'Steamfont Mountains ', short_name: 'steamfont' },
	{ id: 57, long_name: 'The Lesser Faydark ', short_name: 'lfaydark' },
	{ id: 58, long_name: 'Crushbone ', short_name: 'crushbone' },
	{ id: 59, long_name: 'The Castle of Mistmoore ', short_name: 'mistmoore' },
	{ id: 60, long_name: 'South Kaladim ', short_name: 'kaladima' },
	{ id: 61, long_name: 'Northern Felwithe ', short_name: 'felwithea' },
	{ id: 62, long_name: 'Southern Felwithe ', short_name: 'felwitheb' },
	{ id: 63, long_name: 'The Estate of Unrest ', short_name: 'unrest' },
	{ id: 64, long_name: 'Kedge Keep ', short_name: 'kedge' },
	{ id: 65, long_name: 'The City of Guk ', short_name: 'guktop' },
	{ id: 66, long_name: 'The Ruins of Old Guk ', short_name: 'gukbottom' },
	{ id: 67, long_name: 'North Kaladim ', short_name: 'kaladimb' },
	{ id: 68, long_name: 'Butcherblock Mountains ', short_name: 'butcher' },
	{ id: 69, long_name: 'Ocean of Tears ', short_name: 'oot' },
	{ id: 70, long_name: "Dagnor's Cauldron ", short_name: 'cauldron' },
	{ id: 71, long_name: 'The Plane of Sky ', short_name: 'airplane' },
	{ id: 72, long_name: 'The Plane of Fear ', short_name: 'fearplane' },
	{ id: 73, long_name: 'The Permafrost Caverns ', short_name: 'permafrost' },
	{ id: 74, long_name: 'Kerra Isle ', short_name: 'kerraridge' },
	{ id: 75, long_name: 'Paineel ', short_name: 'paineel' },
	{ id: 76, long_name: 'Plane of Hate ', short_name: 'hateplane' },
	{ id: 77, long_name: 'The Arena ', short_name: 'arena' },
	{ id: 78, long_name: 'The Field of Bone ', short_name: 'fieldofbone' },
	{ id: 79, long_name: 'The Warsliks Woods ', short_name: 'warslikswood' },
	{ id: 80, long_name: 'The Temple of Solusek Ro ', short_name: 'soltemple' },
	{ id: 81, long_name: 'The Temple of Droga ', short_name: 'droga' },
	{ id: 82, long_name: 'Cabilis West ', short_name: 'cabwest' },
	{ id: 83, long_name: 'The Swamp of No Hope ', short_name: 'swampofnohope' },
	{ id: 84, long_name: 'Firiona Vie ', short_name: 'firiona' },
	{ id: 85, long_name: 'Lake of Ill Omen ', short_name: 'lakeofillomen' },
	{ id: 86, long_name: 'The Dreadlands ', short_name: 'dreadlands' },
	{ id: 87, long_name: 'The Burning Wood ', short_name: 'burningwood' },
	{ id: 88, long_name: 'Kaesora ', short_name: 'kaesora' },
	{ id: 89, long_name: 'The Ruins of Sebilis ', short_name: 'sebilis' },
	{ id: 90, long_name: 'The City of Mist ', short_name: 'citymist' },
	{ id: 91, long_name: 'The Skyfire Mountains ', short_name: 'skyfire' },
	{ id: 92, long_name: 'Frontier Mountains ', short_name: 'frontiermtns' },
	{ id: 93, long_name: 'The Overthere ', short_name: 'overthere' },
	{ id: 94, long_name: 'The Emerald Jungle ', short_name: 'emeraldjungle' },
	{ id: 95, long_name: "Trakanon's Teeth ", short_name: 'trakanon' },
	{ id: 96, long_name: 'Timorous Deep ', short_name: 'timorous' },
	{ id: 97, long_name: "Kurn's Tower ", short_name: 'kurn' },
	{ id: 98, long_name: "Erud's Crossing ", short_name: 'erudsxing' },
	{ id: 100, long_name: 'The Stonebrunt Mountains ', short_name: 'stonebrunt' },
	{ id: 101, long_name: 'The Warrens ', short_name: 'warrens' },
	{ id: 102, long_name: "Karnor's Castle ", short_name: 'karnor' },
	{ id: 103, long_name: 'Chardok ', short_name: 'chardok' },
	{ id: 104, long_name: 'The Crypt of Dalnir ', short_name: 'dalnir' },
	{ id: 105, long_name: 'The Howling Stones ', short_name: 'charasis' },
	{ id: 106, long_name: 'Cabilis East ', short_name: 'cabeast' },
	{ id: 107, long_name: 'The Mines of Nurga ', short_name: 'nurga' },
	{ id: 108, long_name: "Veeshan's Peak ", short_name: 'veeshan' },
	{ id: 109, long_name: 'Veksar ', short_name: 'veksar' },
	{ id: 110, long_name: 'The Iceclad Ocean ', short_name: 'iceclad' },
	{
		id: 111,
		long_name: 'The Tower of Frozen Shadow ',
		short_name: 'frozenshadow'
	},
	{ id: 112, long_name: "Velketor's Labyrinth ", short_name: 'velketor' },
	{ id: 113, long_name: 'Kael Drakkel ', short_name: 'kael' },
	{ id: 114, long_name: 'Skyshrine ', short_name: 'skyshrine' },
	{ id: 115, long_name: 'The City of Thurgadin ', short_name: 'thurgadina' },
	{ id: 116, long_name: 'Eastern Wastes ', short_name: 'eastwastes' },
	{ id: 117, long_name: 'Cobaltscar ', short_name: 'cobaltscar' },
	{ id: 118, long_name: 'The Great Divide ', short_name: 'greatdivide' },
	{ id: 119, long_name: 'The Wakening Land ', short_name: 'wakening' },
	{ id: 120, long_name: 'The Western Wastes ', short_name: 'westwastes' },
	{ id: 121, long_name: 'The Crystal Caverns ', short_name: 'crystal' },
	{ id: 123, long_name: 'Dragon Necropolis ', short_name: 'necropolis' },
	{ id: 124, long_name: 'The Temple of Veeshan ', short_name: 'templeveeshan' },
	{ id: 125, long_name: "Siren's Grotto ", short_name: 'sirens' },
	{ id: 126, long_name: 'The Plane of Mischief ', short_name: 'mischiefplane' },
	{ id: 127, long_name: 'The Plane of Growth ', short_name: 'growthplane' },
	{ id: 128, long_name: "The Sleeper's Tomb ", short_name: 'sleeper' },
	{ id: 129, long_name: 'Icewell Keep ', short_name: 'thurgadinb' },
	{ id: 130, long_name: 'Marauders Mire ', short_name: 'erudsxing2' },
	{ id: 150, long_name: 'Shadow Haven ', short_name: 'shadowhaven' },
	{ id: 151, long_name: 'The Bazaar ', short_name: 'bazaar' },
	{ id: 151, long_name: 'The Bazaar ', short_name: 'bazaar' },
	{ id: 152, long_name: 'Nexus ', short_name: 'nexus' },
	{ id: 153, long_name: 'The Echo Caverns ', short_name: 'echo' },
	{ id: 154, long_name: 'The Acrylia Caverns ', short_name: 'acrylia' },
	{ id: 155, long_name: 'The City of Shar Vahl ', short_name: 'sharvahl' },
	{ id: 156, long_name: 'The Paludal Caverns ', short_name: 'paludal' },
	{ id: 157, long_name: 'The Fungus Grove ', short_name: 'fungusgrove' },
	{ id: 158, long_name: 'Vex Thal ', short_name: 'vexthal' },
	{ id: 159, long_name: 'Sanctus Seru ', short_name: 'sseru' },
	{ id: 160, long_name: 'Katta Castellum ', short_name: 'katta' },
	{ id: 161, long_name: 'Netherbian Lair ', short_name: 'netherbian' },
	{ id: 162, long_name: 'Ssraeshza Temple ', short_name: 'ssratemple' },
	{ id: 163, long_name: "Grieg's End ", short_name: 'griegsend' },
	{ id: 164, long_name: 'The Deep ', short_name: 'thedeep' },
	{ id: 165, long_name: "Shadeweaver's Thicket ", short_name: 'shadeweaver' },
	{ id: 166, long_name: 'Hollowshade Moor ', short_name: 'hollowshade' },
	{ id: 167, long_name: 'Grimling Forest ', short_name: 'grimling' },
	{ id: 168, long_name: 'Marus Seru ', short_name: 'mseru' },
	{ id: 169, long_name: 'Mons Letalis ', short_name: 'letalis' },
	{ id: 170, long_name: 'The Twilight Sea ', short_name: 'twilight' },
	{ id: 171, long_name: 'The Grey ', short_name: 'thegrey' },
	{ id: 172, long_name: 'The Tenebrous Mountains ', short_name: 'tenebrous' },
	{ id: 173, long_name: "The Maiden's Eye ", short_name: 'maiden' },
	{ id: 174, long_name: 'The Dawnshroud Peaks ', short_name: 'dawnshroud' },
	{ id: 175, long_name: 'The Scarlet Desert ', short_name: 'scarlet' },
	{ id: 176, long_name: 'The Umbral Plains ', short_name: 'umbral' },
	{ id: 179, long_name: 'The Akheva Ruins ', short_name: 'akheva' },
	{ id: 180, long_name: 'The Arena Two ', short_name: 'arena2' },
	{ id: 181, long_name: 'The Jaggedpine Forest ', short_name: 'jaggedpine' },
	{ id: 182, long_name: "Nedaria's Landing ", short_name: 'nedaria' },
	{ id: 183, long_name: 'EverQuest Tutorial ', short_name: 'tutorial' },
	{ id: 184, long_name: 'Loading Zone ', short_name: 'load' },
	{ id: 185, long_name: 'New Loading Zone ', short_name: 'load2' },
	{ id: 186, long_name: 'The Plane of Hate ', short_name: 'hateplaneb' },
	{ id: 187, long_name: 'Shadowrest ', short_name: 'shadowrest' },
	{ id: 188, long_name: 'The Mines of Gloomingdeep ', short_name: 'tutoriala' },
	{ id: 189, long_name: 'The Mines of Gloomingdeep ', short_name: 'tutorialb' },
	{ id: 190, long_name: 'Loading ', short_name: 'clz' },
	{ id: 200, long_name: 'The Crypt of Decay ', short_name: 'codecay' },
	{ id: 201, long_name: 'The Plane of Justice ', short_name: 'pojustice' },
	{ id: 202, long_name: 'The Plane of Knowledge ', short_name: 'poknowledge' },
	{
		id: 203,
		long_name: 'The Plane of Tranquility ',
		short_name: 'potranquility'
	},
	{ id: 204, long_name: 'The Plane of Nightmares ', short_name: 'ponightmare' },
	{ id: 205, long_name: 'The Plane of Disease ', short_name: 'podisease' },
	{
		id: 206,
		long_name: 'The Plane of Innovation ',
		short_name: 'poinnovation'
	},
	{
		id: 207,
		long_name: 'Torment, the Plane of Pain ',
		short_name: 'potorment'
	},
	{ id: 208, long_name: 'The Plane of Valor ', short_name: 'povalor' },
	{ id: 209, long_name: 'Bastion of Thunder ', short_name: 'bothunder' },
	{ id: 210, long_name: 'The Plane of Storms ', short_name: 'postorms' },
	{ id: 211, long_name: 'The Halls of Honor ', short_name: 'hohonora' },
	{ id: 212, long_name: 'The Tower of Solusek Ro ', short_name: 'solrotower' },
	{ id: 213, long_name: 'Plane of War ', short_name: 'powar' },
	{
		id: 214,
		long_name: 'Drunder, the Fortress of Zek ',
		short_name: 'potactics'
	},
	{ id: 215, long_name: 'The Plane of Air ', short_name: 'poair' },
	{ id: 216, long_name: 'The Plane of Water ', short_name: 'powater' },
	{ id: 217, long_name: 'The Plane of Fire ', short_name: 'pofire' },
	{ id: 218, long_name: 'The Plane of Earth ', short_name: 'poeartha' },
	{ id: 219, long_name: 'The Plane of Time A ', short_name: 'potimea' },
	{ id: 220, long_name: 'The Temple of Marr ', short_name: 'hohonorb' },
	{ id: 221, long_name: 'The Lair of Terris Thule ', short_name: 'nightmareb' },
	{ id: 222, long_name: 'The Plane of Earth ', short_name: 'poearthb' },
	{ id: 223, long_name: 'The Plane of Time B ', short_name: 'potimeb' },
	{ id: 224, long_name: 'The Gulf of Gunthak ', short_name: 'gunthak' },
	{ id: 225, long_name: "Dulak's Harbor ", short_name: 'dulak' },
	{ id: 226, long_name: 'The Torgiran Mines ', short_name: 'torgiran' },
	{ id: 227, long_name: 'The Crypt of Nadox ', short_name: 'nadox' },
	{ id: 228, long_name: "Hate's Fury ", short_name: 'hatesfury' },
	{
		id: 229,
		long_name: 'Deepest Guk: Cauldron of Lost Souls ',
		short_name: 'guka'
	},
	{
		id: 230,
		long_name: 'The Rujarkian Hills: Bloodied Quarries ',
		short_name: 'ruja'
	},
	{ id: 231, long_name: 'Takish-Hiz: Sunken Library ', short_name: 'taka' },
	{
		id: 232,
		long_name: "Miragul's Menagerie: Silent Gallery ",
		short_name: 'mira'
	},
	{
		id: 233,
		long_name: "Mistmoore's Catacombs: Forlorn Caverns ",
		short_name: 'mmca'
	},
	{ id: 234, long_name: 'The Drowning Crypt ', short_name: 'gukb' },
	{
		id: 235,
		long_name: 'The Rujarkian Hills: Halls of War ',
		short_name: 'rujb'
	},
	{ id: 236, long_name: 'Takish-Hiz: Shifting Tower ', short_name: 'takb' },
	{
		id: 237,
		long_name: "Miragul's Menagerie: Frozen Nightmare ",
		short_name: 'mirb'
	},
	{
		id: 238,
		long_name: "Mistmoore's Catacombs: Dreary Grotto ",
		short_name: 'mmcb'
	},
	{ id: 239, long_name: 'Deepest Guk: Ancient Aqueducts ', short_name: 'gukc' },
	{
		id: 240,
		long_name: 'The Rujarkian Hills: Wind Bridges ',
		short_name: 'rujc'
	},
	{ id: 241, long_name: 'Takish-Hiz: Fading Temple ', short_name: 'takc' },
	{ id: 242, long_name: 'The Spider Den ', short_name: 'mirc' },
	{
		id: 243,
		long_name: "Mistmoore's Catacombs: Struggles within the Progeny ",
		short_name: 'mmcc'
	},
	{ id: 244, long_name: 'The Mushroom Grove ', short_name: 'gukd' },
	{
		id: 245,
		long_name: 'The Rujarkian Hills: Prison Break ',
		short_name: 'rujd'
	},
	{ id: 246, long_name: 'Takish-Hiz: Royal Observatory ', short_name: 'takd' },
	{
		id: 247,
		long_name: "Miragul's Menagerie: Hushed Banquet ",
		short_name: 'mird'
	},
	{
		id: 248,
		long_name: "Mistmoore's Catacombs: Chambers of Eternal Affliction ",
		short_name: 'mmcd'
	},
	{ id: 249, long_name: 'Deepest Guk: The Curse Reborn ', short_name: 'guke' },
	{
		id: 250,
		long_name: 'The Rujarkian Hills: Drudge Hollows ',
		short_name: 'ruje'
	},
	{
		id: 251,
		long_name: 'Takish-Hiz: River of Recollection ',
		short_name: 'take'
	},
	{ id: 252, long_name: 'The Frosted Halls ', short_name: 'mire' },
	{
		id: 253,
		long_name: "Mistmoore's Catacombs: Sepulcher of the Damned ",
		short_name: 'mmce'
	},
	{
		id: 254,
		long_name: 'Deepest Guk: Chapel of the Witnesses ',
		short_name: 'gukf'
	},
	{
		id: 255,
		long_name: 'The Rujarkian Hills: Fortified Lair of the Taskmasters ',
		short_name: 'rujf'
	},
	{ id: 256, long_name: 'Takish-Hiz: Sandfall Corridors ', short_name: 'takf' },
	{ id: 257, long_name: 'The Forgotten Wastes ', short_name: 'mirf' },
	{
		id: 258,
		long_name: "Mistmoore's Catacombs: Scion Lair of Fury ",
		short_name: 'mmcf'
	},
	{ id: 259, long_name: 'The Root Garden ', short_name: 'gukg' },
	{
		id: 260,
		long_name: 'The Rujarkian Hills: Hidden Vale of Deceit ',
		short_name: 'rujg'
	},
	{ id: 261, long_name: 'Takish-Hiz: Balancing Chamber ', short_name: 'takg' },
	{
		id: 262,
		long_name: "Miragul's Menagerie: Heart of the Menagerie ",
		short_name: 'mirg'
	},
	{
		id: 263,
		long_name: "Mistmoore's Catacombs: Cesspits of Putrescence ",
		short_name: 'mmcg'
	},
	{
		id: 264,
		long_name: 'Deepest Guk: Accursed Sanctuary ',
		short_name: 'gukh'
	},
	{
		id: 265,
		long_name: 'The Rujarkian Hills: Blazing Forge ',
		short_name: 'rujh'
	},
	{ id: 266, long_name: 'Takish-Hiz: Sweeping Tides ', short_name: 'takh' },
	{ id: 267, long_name: 'The Morbid Laboratory ', short_name: 'mirh' },
	{
		id: 268,
		long_name: "Mistmoore's Catacombs: Aisles of Blood ",
		short_name: 'mmch'
	},
	{
		id: 269,
		long_name: 'The Rujarkian Hills: Arena of Chance ',
		short_name: 'ruji'
	},
	{ id: 270, long_name: 'Takish-Hiz: Antiquated Palace ', short_name: 'taki' },
	{
		id: 271,
		long_name: 'The Theater of Imprisoned Horror ',
		short_name: 'miri'
	},
	{
		id: 272,
		long_name: "Mistmoore's Catacombs: Halls of Sanguinary Rites ",
		short_name: 'mmci'
	},
	{
		id: 273,
		long_name: 'The Rujarkian Hills: Barracks of War ',
		short_name: 'rujj'
	},
	{
		id: 274,
		long_name: 'Takish-Hiz: Prismatic Corridors ',
		short_name: 'takj'
	},
	{
		id: 275,
		long_name: "Miragul's Menagerie: Grand Library ",
		short_name: 'mirj'
	},
	{
		id: 276,
		long_name: "Mistmoore's Catacombs: Infernal Sanctuary ",
		short_name: 'mmcj'
	},
	{
		id: 277,
		long_name: 'Chardok: The Halls of Betrayal ',
		short_name: 'chardokb'
	},
	{ id: 278, long_name: 'The Caverns of Exile ', short_name: 'soldungc' },
	{ id: 279, long_name: 'The Abysmal Sea ', short_name: 'abysmal' },
	{ id: 280, long_name: 'Natimbi, the Broken Shores ', short_name: 'natimbi' },
	{ id: 281, long_name: 'Qinimi, Court of Nihilia ', short_name: 'qinimi' },
	{ id: 282, long_name: 'Riwwi, Coliseum of Games ', short_name: 'riwwi' },
	{ id: 283, long_name: 'Barindu, Hanging Gardens ', short_name: 'barindu' },
	{
		id: 284,
		long_name: 'Ferubi, Forgotten Temple of Taelosia ',
		short_name: 'ferubi'
	},
	{
		id: 285,
		long_name: 'Sewers of Nihilia, Pool of Sludg ',
		short_name: 'snpool'
	},
	{
		id: 286,
		long_name: 'Sewers of Nihilia, Lair of Trapp ',
		short_name: 'snlair'
	},
	{
		id: 287,
		long_name: 'Sewers of Nihilia, Purifying Pla ',
		short_name: 'snplant'
	},
	{
		id: 288,
		long_name: 'Sewers of Nihilia, Emanating Cre ',
		short_name: 'sncrematory'
	},
	{ id: 289, long_name: 'Tipt, Treacherous Crags ', short_name: 'tipt' },
	{ id: 290, long_name: 'Vxed, the Crumbling Caverns ', short_name: 'vxed' },
	{ id: 291, long_name: 'Yxtta, Pulpit of Exiles ', short_name: 'yxtta' },
	{ id: 292, long_name: 'Uqua, the Ocean God Chantry ', short_name: 'uqua' },
	{
		id: 293,
		long_name: "Kod'Taz, Broken Trial Grounds ",
		short_name: 'kodtaz'
	},
	{
		id: 294,
		long_name: 'Ikkinz, Chambers of Transcendence ',
		short_name: 'ikkinz'
	},
	{
		id: 295,
		long_name: 'Qvic, Prayer Grounds of Calling ',
		short_name: 'qvic'
	},
	{
		id: 296,
		long_name: "Inktu'Ta, the Unmasked Chapel ",
		short_name: 'inktuta'
	},
	{ id: 297, long_name: 'Txevu, Lair of the Elite ', short_name: 'txevu' },
	{ id: 298, long_name: 'Tacvi, The Broken Temple ', short_name: 'tacvi' },
	{ id: 299, long_name: 'Qvic, the Hidden Vault ', short_name: 'qvicb' },
	{ id: 300, long_name: 'Wall of Slaughter ', short_name: 'wallofslaughter' },
	{ id: 301, long_name: 'The Bloodfields ', short_name: 'bloodfields' },
	{ id: 302, long_name: "Dranik's Scar ", short_name: 'draniksscar' },
	{ id: 303, long_name: "Nobles' Causeway ", short_name: 'causeway' },
	{
		id: 304,
		long_name: 'Muramite Proving Grounds A ',
		short_name: 'chambersa'
	},
	{
		id: 305,
		long_name: 'Muramite Proving Grounds B ',
		short_name: 'chambersb'
	},
	{
		id: 306,
		long_name: 'Muramite Proving Grounds C ',
		short_name: 'chambersc'
	},
	{
		id: 307,
		long_name: 'Muramite Proving Grounds D ',
		short_name: 'chambersd'
	},
	{
		id: 308,
		long_name: 'Muramite Proving Grounds E ',
		short_name: 'chamberse'
	},
	{
		id: 309,
		long_name: 'Muramite Proving Grounds F ',
		short_name: 'chambersf'
	},
	{
		id: 316,
		long_name: 'Muramite Proving Grounds G ',
		short_name: 'provinggrounds'
	},
	{ id: 317, long_name: 'Anguish, the Fallen Palace ', short_name: 'anguish' },
	{ id: 318, long_name: "Dranik's Hollows A ", short_name: 'dranikhollowsa' },
	{ id: 319, long_name: "Dranik's Hollows B ", short_name: 'dranikhollowsb' },
	{ id: 320, long_name: "Dranik's Hollows C ", short_name: 'dranikhollowsc' },
	{
		id: 328,
		long_name: 'Catacombs of Dranik A ',
		short_name: 'dranikcatacombsa'
	},
	{
		id: 329,
		long_name: 'Catacombs of Dranik B ',
		short_name: 'dranikcatacombsb'
	},
	{
		id: 330,
		long_name: 'Catacombs of Dranik C ',
		short_name: 'dranikcatacombsc'
	},
	{ id: 331, long_name: 'Sewers of Dranik A ', short_name: 'draniksewersa' },
	{ id: 332, long_name: 'Sewers of Dranik B ', short_name: 'draniksewersb' },
	{ id: 333, long_name: 'Sewers of Dranik C ', short_name: 'draniksewersc' },
	{ id: 334, long_name: "Riftseekers' Sanctum ", short_name: 'riftseekers' },
	{ id: 335, long_name: "Harbinger's Spire ", short_name: 'harbingers' },
	{ id: 336, long_name: 'The Ruined City of Dranik ', short_name: 'dranik' },
	{ id: 337, long_name: 'The Broodlands ', short_name: 'broodlands' },
	{ id: 338, long_name: 'Stillmoon Temple ', short_name: 'stillmoona' },
	{ id: 339, long_name: 'The Ascent ', short_name: 'stillmoonb' },
	{ id: 340, long_name: 'Thundercrest Isles ', short_name: 'thundercrest' },
	{ id: 341, long_name: "Lavaspinner's Lair ", short_name: 'delvea' },
	{ id: 342, long_name: "Tirranun's Delve ", short_name: 'delveb' },
	{ id: 343, long_name: 'The Nest ', short_name: 'thenest' },
	{ id: 344, long_name: 'Guild Lobby ', short_name: 'guildlobby' },
	{ id: 345, long_name: 'Guild Hall ', short_name: 'guildhall' },
	{ id: 346, long_name: 'The Barter Hall ', short_name: 'barter' },
	{ id: 347, long_name: 'Ruins of Illsalin ', short_name: 'illsalin' },
	{ id: 348, long_name: 'Illsalin Marketplace ', short_name: 'illsalina' },
	{ id: 349, long_name: 'Temple of Korlach ', short_name: 'illsalinb' },
	{ id: 350, long_name: 'The Nargil Pits ', short_name: 'illsalinc' },
	{ id: 351, long_name: 'Dreadspire Keep ', short_name: 'dreadspire' },
	{ id: 354, long_name: 'The Hive ', short_name: 'drachnidhive' },
	{ id: 355, long_name: 'The Hatchery ', short_name: 'drachnidhivea' },
	{ id: 356, long_name: 'The Cocoons ', short_name: 'drachnidhiveb' },
	{ id: 357, long_name: 'Queen Sendaiis Lair ', short_name: 'drachnidhivec' },
	{ id: 358, long_name: 'Stoneroot Falls ', short_name: 'westkorlach' },
	{ id: 359, long_name: "Prince's Manor ", short_name: 'westkorlacha' },
	{ id: 360, long_name: 'Caverns of the Lost ', short_name: 'westkorlachb' },
	{ id: 361, long_name: 'Lair of the Korlach ', short_name: 'westkorlachc' },
	{ id: 362, long_name: 'The Undershore ', short_name: 'eastkorlach' },
	{ id: 363, long_name: 'Snarlstone Dens ', short_name: 'eastkorlacha' },
	{ id: 364, long_name: 'Shadow Spine ', short_name: 'shadowspine' },
	{ id: 365, long_name: 'Corathus Creep ', short_name: 'corathus' },
	{ id: 366, long_name: 'Sporali Caverns ', short_name: 'corathusa' },
	{ id: 367, long_name: 'The Corathus Mines ', short_name: 'corathusb' },
	{ id: 368, long_name: 'Shadowed Grove ', short_name: 'nektulosa' },
	{ id: 369, long_name: 'Arcstone, Isle of Spirits ', short_name: 'arcstone' },
	{ id: 370, long_name: 'Relic, the Artifact City ', short_name: 'relic' },
	{ id: 371, long_name: 'Skylance ', short_name: 'skylance' },
	{ id: 372, long_name: 'The Devastation ', short_name: 'devastation' },
	{ id: 373, long_name: 'The Seething Wall ', short_name: 'devastationa' },
	{ id: 374, long_name: 'Sverag, Stronghold of Rage ', short_name: 'rage' },
	{
		id: 375,
		long_name: 'Razorthorn, Tower of Sullon Zek ',
		short_name: 'ragea'
	},
	{ id: 376, long_name: 'Ruins of Takish-Hiz ', short_name: 'takishruins' },
	{ id: 377, long_name: 'The Root of Ro ', short_name: 'takishruinsa' },
	{ id: 378, long_name: 'The Elddar Forest ', short_name: 'elddar' },
	{ id: 379, long_name: "Tunare's Shrine ", short_name: 'elddara' },
	{ id: 380, long_name: 'Theater of Blood ', short_name: 'theater' },
	{
		id: 381,
		long_name: 'Deathknell, Tower of Dissonance ',
		short_name: 'theatera'
	},
	{ id: 382, long_name: 'East Freeport ', short_name: 'freeporteast' },
	{ id: 383, long_name: 'West Freeport ', short_name: 'freeportwest' },
	{ id: 384, long_name: 'Freeport Sewers ', short_name: 'freeportsewers' },
	{
		id: 385,
		long_name: 'Academy of Arcane Sciences ',
		short_name: 'freeportacademy'
	},
	{ id: 386, long_name: 'Temple of Marr ', short_name: 'freeporttemple' },
	{
		id: 387,
		long_name: 'Freeport Militia House: My Precious ',
		short_name: 'freeportmilitia'
	},
	{ id: 388, long_name: 'Arena ', short_name: 'freeportarena' },
	{ id: 389, long_name: 'City Hall ', short_name: 'freeportcityhall' },
	{
		id: 390,
		long_name: 'Theater of the Tranquil ',
		short_name: 'freeporttheater'
	},
	{ id: 391, long_name: 'Hall of Truth: Bounty ', short_name: 'freeporthall' },
	{ id: 392, long_name: 'North Desert of Ro ', short_name: 'northro' },
	{ id: 393, long_name: 'South Desert of Ro ', short_name: 'southro' },
	{ id: 394, long_name: 'Crescent Reach ', short_name: 'crescent' },
	{ id: 395, long_name: 'Blightfire Moors ', short_name: 'moors' },
	{ id: 396, long_name: 'Stone Hive ', short_name: 'stonehive' },
	{ id: 397, long_name: 'Gorukar Mesa ', short_name: 'mesa' },
	{ id: 398, long_name: 'Blackfeather Roost ', short_name: 'roost' },
	{ id: 399, long_name: 'The Steppes ', short_name: 'steppes' },
	{ id: 400, long_name: 'Icefall Glacier ', short_name: 'icefall' },
	{ id: 401, long_name: 'Valdeholm ', short_name: 'valdeholm' },
	{
		id: 402,
		long_name: 'Frostcrypt, Throne of the Shade King ',
		short_name: 'frostcrypt'
	},
	{ id: 403, long_name: 'Sunderock Springs ', short_name: 'sunderock' },
	{ id: 404, long_name: 'Vergalid Mines ', short_name: 'vergalid' },
	{ id: 405, long_name: 'Direwind Cliffs ', short_name: 'direwind' },
	{
		id: 406,
		long_name: 'Ashengate, Reliquary of the Scale ',
		short_name: 'ashengate'
	},
	{ id: 407, long_name: 'Highpass Hold ', short_name: 'highpasshold' },
	{ id: 408, long_name: 'The Commonlands ', short_name: 'commonlands' },
	{ id: 409, long_name: 'The Ocean of Tears ', short_name: 'oceanoftears' },
	{ id: 410, long_name: 'Kithicor Forest ', short_name: 'kithforest' },
	{ id: 411, long_name: 'Befallen ', short_name: 'befallenb' },
	{ id: 412, long_name: 'HighKeep ', short_name: 'highpasskeep' },
	{ id: 413, long_name: 'The Innothule Swamp ', short_name: 'innothuleb' },
	{ id: 414, long_name: 'Toxxulia Forest ', short_name: 'toxxulia' },
	{ id: 415, long_name: 'The Misty Thicket ', short_name: 'mistythicket' },
	{ id: 416, long_name: 'Katta Castrum ', short_name: 'kattacastrum' },
	{
		id: 417,
		long_name: 'Thalassius, the Coral Keep ',
		short_name: 'thalassius'
	},
	{ id: 418, long_name: 'Jewel of Atiiki ', short_name: 'atiiki' },
	{
		id: 419,
		long_name: 'Zhisza, the Shissar Sanctuary ',
		short_name: 'zhisza'
	},
	{ id: 420, long_name: 'Silyssar, New Chelsith ', short_name: 'silyssar' },
	{ id: 421, long_name: 'Solteris, the Throne of Ro ', short_name: 'solteris' },
	{ id: 422, long_name: 'Barren Coast ', short_name: 'barren' },
	{ id: 423, long_name: 'The Buried Sea ', short_name: 'buriedsea' },
	{ id: 424, long_name: "Jardel's Hook ", short_name: 'jardelshook' },
	{ id: 425, long_name: 'Monkey Rock ', short_name: 'monkeyrock' },
	{ id: 426, long_name: 'Suncrest Isle ', short_name: 'suncrest' },
	{ id: 427, long_name: 'Deadbone Reef ', short_name: 'deadbone' },
	{ id: 428, long_name: 'Blacksail Folly ', short_name: 'blacksail' },
	{ id: 429, long_name: "Maiden's Grave ", short_name: 'maidensgrave' },
	{ id: 430, long_name: 'Redfeather Isle ', short_name: 'redfeather' },
	{ id: 431, long_name: 'The Open Sea ', short_name: 'shipmvp' },
	{ id: 432, long_name: 'The Open Sea ', short_name: 'shipmvu' },
	{ id: 433, long_name: 'The Open Sea ', short_name: 'shippvu' },
	{ id: 434, long_name: 'The Open Sea ', short_name: 'shipuvu' },
	{ id: 435, long_name: 'The Open Sea ', short_name: 'shipmvm' },
	{ id: 436, long_name: 'Fortress Mechanotus ', short_name: 'mechanotus' },
	{ id: 437, long_name: "Meldrath's Majestic Mansion ", short_name: 'mansion' },
	{ id: 438, long_name: 'The Steam Factory ', short_name: 'steamfactory' },
	{ id: 439, long_name: 'S.H.I.P. Workshop ', short_name: 'shipworkshop' },
	{ id: 440, long_name: 'Gyrospire Beza ', short_name: 'gyrospireb' },
	{ id: 441, long_name: 'Gyrospire Zeka ', short_name: 'gyrospirez' },
	{ id: 442, long_name: 'Dragonscale Hills ', short_name: 'dragonscale' },
	{ id: 443, long_name: 'Loping Plains ', short_name: 'lopingplains' },
	{ id: 444, long_name: 'Hills of Shade ', short_name: 'hillsofshade' },
	{ id: 445, long_name: 'Bloodmoon Keep ', short_name: 'bloodmoon' },
	{
		id: 446,
		long_name: 'Crystallos, Lair of the Awakened ',
		short_name: 'crystallos'
	},
	{ id: 447, long_name: 'The Mechamatic Guardian ', short_name: 'guardian' },
	{
		id: 448,
		long_name: 'The Steamfont Mountains ',
		short_name: 'steamfontmts'
	},
	{ id: 449, long_name: 'Crypt of Shade ', short_name: 'cryptofshade' },
	{ id: 451, long_name: "Deepscar's Den ", short_name: 'dragonscaleb' },
	{ id: 452, long_name: 'Field of Scale ', short_name: 'oldfieldofbone' },
	{ id: 453, long_name: 'Kaesora Library ', short_name: 'oldkaesoraa' },
	{ id: 454, long_name: 'Kaesora Hatchery ', short_name: 'oldkaesorab' },
	{ id: 455, long_name: "Kurn's Tower ", short_name: 'oldkurn' },
	{ id: 456, long_name: 'Bloody Kithicor ', short_name: 'oldkithicor' },
	{ id: 457, long_name: 'Old Commonlands ', short_name: 'oldcommons' },
	{ id: 458, long_name: 'Highpass Hold ', short_name: 'oldhighpass' },
	{ id: 459, long_name: 'The Void A ', short_name: 'thevoida' },
	{ id: 460, long_name: 'The Void B ', short_name: 'thevoidb' },
	{ id: 461, long_name: 'The Void C ', short_name: 'thevoidc' },
	{ id: 462, long_name: 'The Void D ', short_name: 'thevoidd' },
	{ id: 463, long_name: 'The Void E ', short_name: 'thevoide' },
	{ id: 464, long_name: 'The Void F ', short_name: 'thevoidf' },
	{ id: 465, long_name: 'The Void G ', short_name: 'thevoidg' },
	{ id: 466, long_name: 'Oceangreen Hills ', short_name: 'oceangreenhills' },
	{
		id: 467,
		long_name: 'Oceangreen Village ',
		short_name: 'oceangreenvillage'
	},
	{ id: 468, long_name: 'BlackBurrow ', short_name: 'oldblackburrow' },
	{ id: 469, long_name: 'Temple of Bertoxxulous ', short_name: 'bertoxtemple' },
	{ id: 470, long_name: 'Korafax, Home of the Riders ', short_name: 'discord' },
	{
		id: 471,
		long_name: 'Citadel of the Worldslayer ',
		short_name: 'discordtower'
	},
	{ id: 472, long_name: 'Old Bloodfields ', short_name: 'oldbloodfield' },
	{ id: 473, long_name: 'The Precipice of War ', short_name: 'precipiceofwar' },
	{ id: 474, long_name: 'City of Dranik ', short_name: 'olddranik' },
	{ id: 475, long_name: 'Toskirakk ', short_name: 'toskirakk' },
	{ id: 476, long_name: 'Korascian Warrens ', short_name: 'korascian' },
	{ id: 477, long_name: 'Rathe Council Chamber ', short_name: 'rathechamber' },
	{ id: 480, long_name: "Brell's Rest ", short_name: 'brellsrest' },
	{ id: 481, long_name: 'Fungal Forest ', short_name: 'fungalforest' },
	{ id: 482, long_name: 'The Underquarry ', short_name: 'underquarry' },
	{ id: 483, long_name: 'The Cooling Chamber ', short_name: 'coolingchamber' },
	{
		id: 484,
		long_name: 'Kernagir, the Shining City ',
		short_name: 'shiningcity'
	},
	{ id: 485, long_name: 'Arthicrex ', short_name: 'arthicrex' },
	{ id: 486, long_name: 'The Foundation ', short_name: 'foundation' },
	{ id: 487, long_name: 'Lichen Creep ', short_name: 'lichencreep' },
	{ id: 488, long_name: 'Pellucid Grotto ', short_name: 'pellucid' },
	{ id: 489, long_name: "Volska's Husk ", short_name: 'stonesnake' },
	{ id: 490, long_name: "Brell's Temple ", short_name: 'brellstemple' },
	{ id: 491, long_name: 'The Convorteum ', short_name: 'convorteum' },
	{ id: 492, long_name: "Brell's Arena ", short_name: 'brellsarena' },
	{ id: 493, long_name: 'Wedding Chapel ', short_name: 'weddingchapel' },
	{ id: 494, long_name: 'Wedding Chapel ', short_name: 'weddingchapeldark' },
	{ id: 495, long_name: 'Lair of the Risen ', short_name: 'dragoncrypt' },
	{ id: 700, long_name: 'The Feerrott ', short_name: 'feerrott2' },
	{ id: 701, long_name: 'House of Thule ', short_name: 'thulehouse1' },
	{
		id: 702,
		long_name: 'House of Thule, Upper Floors ',
		short_name: 'thulehouse2'
	},
	{ id: 703, long_name: 'The Grounds ', short_name: 'housegarden' },
	{ id: 704, long_name: 'The Library ', short_name: 'thulelibrary' },
	{ id: 705, long_name: 'The Well ', short_name: 'well' },
	{ id: 706, long_name: 'Erudin Burning ', short_name: 'fallen' },
	{ id: 707, long_name: "Morell's Castle ", short_name: 'morellcastle' },
	{ id: 708, long_name: 'Sanctum Somnium ', short_name: 'somnium' },
	{ id: 709, long_name: "Al'Kabor's Nightmare ", short_name: 'alkabormare' },
	{ id: 710, long_name: "Miragul's Nightmare ", short_name: 'miragulmare' },
	{ id: 711, long_name: 'Fear Itself ', short_name: 'thuledream' },
	{ id: 712, long_name: 'Sunrise Hills ', short_name: 'neighborhood' },
	{ id: 724, long_name: 'Argath, Bastion of Illdaera ', short_name: 'argath' },
	{ id: 725, long_name: 'Valley of Lunanyn ', short_name: 'arelis' },
	{ id: 726, long_name: 'Sarith, City of Tides ', short_name: 'sarithcity' },
	{
		id: 727,
		long_name: 'Rubak Oseka, Temple of the Sea ',
		short_name: 'rubak'
	},
	{ id: 728, long_name: "Beasts' Domain ", short_name: 'beastdomain' },
	{ id: 729, long_name: 'The Resplendent Temple ', short_name: 'resplendent' },
	{ id: 730, long_name: 'Pillars of Alra ', short_name: 'pillarsalra' },
	{ id: 731, long_name: 'Windsong Sanctuary ', short_name: 'windsong' },
	{
		id: 732,
		long_name: 'Erillion, City of Bronze ',
		short_name: 'cityofbronze'
	},
	{ id: 733, long_name: 'Sepulcher of Order ', short_name: 'sepulcher' },
	{ id: 734, long_name: 'Sepulcher East ', short_name: 'eastsepulcher' },
	{ id: 735, long_name: 'Sepulcher West ', short_name: 'westsepulcher' },
	{ id: 752, long_name: "Shard's Landing ", short_name: 'shardslanding' },
	{ id: 753, long_name: 'Valley of King Xorbb ', short_name: 'xorbb' },
	{
		id: 754,
		long_name: "Kael Drakkel: The King's Madness ",
		short_name: 'kaelshard'
	},
	{
		id: 755,
		long_name: "East Wastes: Zeixshi-Kar's Awakening ",
		short_name: 'eastwastesshard'
	},
	{
		id: 756,
		long_name: 'The Crystal Caverns: Fragment of Fear ',
		short_name: 'crystalshard'
	},
	{
		id: 757,
		long_name: 'The Breeding Grounds ',
		short_name: 'breedinggrounds'
	},
	{ id: 758, long_name: 'Evantil, the Vile Oak ', short_name: 'eviltree' },
	{
		id: 759,
		long_name: "Grelleth's Palace, the Chateau of Filth ",
		short_name: 'grelleth'
	},
	{
		id: 760,
		long_name: 'Chapterhouse of the Fallen ',
		short_name: 'chapterhouse'
	},
	{ id: 996, long_name: 'Art Testing Domain ', short_name: 'arttest' },
	{ id: 998, long_name: 'The Forgotten Halls ', short_name: 'fhalls' },
	{ id: 999, long_name: 'Designer Apprentice ', short_name: 'apprentice' }
];

export function getZoneFromNumber(id: number): ZoneIdNumberType {
	const f = AllZones.find((value, idx) => {
		return value.id === id;
	});
	if (f === undefined) {
		return { id: 0, short_name: 'UNDEFINED', long_name: 'UNDEFINED' };
	} else return f;
}

export function getZoneFromShortName(
	short_name: string | null
): ZoneIdNumberType {
	const f = AllZones.find((value, idx) => {
		return value.short_name === short_name;
	});
	if (f === undefined) {
		return { id: 0, short_name: 'not_found', long_name: 'Not Found' };
	} else return f;
}
