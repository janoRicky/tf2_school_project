
var cosmeticsSuffix = "./c6_assets/cosmetics_c6/75px-Item_icon_";
var weaponsSuffix = "./c6_assets/weapons_c6/100px-Item_icon_";

var cosmetics = [
"Accursed_Apparition",
"Aim_Assistant",
"Alien_Swarm_Parasite",
"Aloha_Apparel",
"Altruists_Adornment",
"Ambers_Rad_As_All_Hell_Hat",
"Antarctic_Eyewear",
"Antarctic_Researcher",
"Antlers",
"Aperture_Labs_Hard_Hat",
"Arkham_Cowl",
"Asiafortress_Tournament_Season_7_First_Medal",
"Asymmetric_Accolade",
"Athletic_Supporter",
"Atomic_Accolade",
"Audio_File",
"Awesomenauts_Badge",
"Aztec_Warrior",
"A_Rather_Festive_Tree",
"A_Shell_of_a_Mann",
"A_Well_Wrapped_Hat",
"B",
"Balloonicorn",
"Balloonihoodie",
"Barely-Melted_Capacitor",
"Barnstormer",
"Baronial_Badge",
"Batbelt",
"Batters_Bracers",
"Bat_Hat",
"Beacon_from_Beyond",
"Bedouin_Bandana",
"Beep_Boy",
"Beep_Man",
"Benefactors_Kanmuri",
"Big_Country",
"Bills_Hat",
"BINOCULUS",
"Birdie_Bonnet",
"Blapature_Co",
"Bolgan_Family_Crest",
"Bolt_Action_Blitzer",
"Bombinomicon",
"Boo_Balloon",
"Bot_Dogger",
"Bounty_Hat",
"Boxcar_Bomber",
"Brainiac_Goggles",
"Brainiac_Hairpiece",
"Brain_Interface",
"Breadcrab",
"Bread_Biter",
"Bread_Heads",
"Breakneck_Baggies",
"Brimstone",
"Bronze_Dueling_Badge",
"Brotherhood_of_Arms",
"Brown_Bomber",
"Brtal_Bouffant",
"Bruisers_Bandanna",
"Buckaroos_Hat",
"Builders_Blueprints",
"Bumble_Beenie",
"Buttler",
"Buzz_Killer",
"Candy_Crown",
"Canteen_Crasher_Bronze_Ammo_Medal_2018",
"Canteen_Crasher_Gold_Uber_Medal_2018",
"Canteen_Crasher_Iron_Recall_Medal_2018",
"Canteen_Crasher_Platinum_Crit_Medal_2018",
"Canteen_Crasher_Rust_Starter_Medal_2018",
"Canteen_Crasher_Silver_Building_Medal_2018",
"Captain_Cardbeard_Cutthroat",
"Captain_Space_Mann",
"Caribou_Companion",
"Catastrophic_Companions",
"Champ_Stamp",
"Cheaters_Lament",
"Chill_Chullo",
"Citizen_Cane",
"Civilian_Grade_JACK_Hat",
"Clan_Pride",
"Class_Crown",
"Clockwerks_Helm",
"Clubsy_The_Seal",
"Co-Pilot",
"Cockfighter",
"Coldsnap_Cap",
"Cold_Case",
"Companion_Cube_Pin",
"Company_Man",
"Conaghers_Combover",
"Conaghers_Utility_Idol",
"Conspiracy_Cap",
"Cop_Caller",
"Corpus_Christi_Cranium",
"Cotton_Head",
"Crafty_Hair",
"Croaking_Hazard",
"Crofts_Crest",
"Crones_Dome",
"Crosslinkers_Coil",
"Crown_of_the_Old_Kingdom",
"Cryptic_Keepsake",
"Cuban_Bristle_Crisis",
"Cute_Suit",
"Dadliest_Catch",
"Dad_Duds",
"Danger",
"Dark_Falkirk_Helm",
"Dark_Helm",
"Data_Mining_Light",
"Deadbeats",
"Deader_Alive",
"Deadliest_Duckling",
"Dead_Little_Buddy",
"Dead_of_Night",
"Defragmenting_Hard_Hat_17",
"Dell_in_the_Shell",
"Deus_Specs",
"Dictator",
"Dogfighter",
"Dr",
"Drs_Dapper_Topper",
"Dry_Gulch_Gulp",
"Dr_002",
"Dr_003",
"Dual-Core_Devil_Doll",
"Duck_Billed_Hatypus",
"Dueler",
"Duncans_Kindhearted_Kisser",
"Earbuds",
"Ebenezer",
"Eggheads_Overalls",
"Ein",
"Eingineer",
"Electric_Badge-aloo",
"Ellis_Cap",
"El_Caballero",
"El_Mostacho",
"El_Paso_Poncho",
"El_Patron",
"Endothermic_Exowear",
"End_of_the_Line_Community_Update_Medal",
"Engineers_Cap",
"ETF2L_6vs6_September_10_Group_Winner",
"ETF2L_Highlander_Open_September_10_First",
"ETF2L_Highlander_September_10_Group_Winner",
"Executioner",
"Eye-Catcher",
"Face_Full_of_Festive",
"Faerie_Solitaire_Pin",
"Federal_Casemaker",
"Final_Frontier_Freighter",
"Finders_Fee",
"Flair",
"Flared_Frontiersman",
"Flashdance_Footies",
"Flash_of_Inspiration",
"Fortune_Hunter",
"Friends_Forever_Companion_Square_Badge",
"Frontier_Flyboy",
"Frontline_Field_Recorder",
"Full_Head_Of_Steam",
"Galvanized_Gibus",
"Gamers_Assembly_First_Medal",
"Garden_Bristles",
"Gentle_Munitionne_of_Leisure",
"Ghastlierest_Gibus",
"Ghastlier_Gibus",
"Ghastly_Gibus",
"Ghostly_Gibus",
"Ghost_of_Spies_Checked_Past",
"Gifting_Man_From_Gifting_Land",
"Gift_of_Giving",
"Gift_of_Giving_2016",
"Gingerbread_Mann",
"Glitched_Circuit_Board",
"Glittering_Garland",
"Globetrotter",
"Gold_Digger",
"Gold_Dueling_Badge",
"Googly_Gazer",
"Grandmaster",
"Graybanns",
"Grease_Monkey",
"Grim_Tweeter",
"Grizzled_Growth",
"Grizzled_Veteran",
"Guano",
"Halloween_Masks",
"Hannahs_Altruistic_Aspect",
"Hardy_Laurel",
"Hat_of_Undeniable_Wealth_And_Respect",
"Hat_With_No_Name",
"Haunted_Hat",
"Head_Mounted_Double_Observatory",
"Head_Of_Defense",
"Head_Prize",
"Heartfelt_Hug",
"Heart_of_Gold",
"Heroic_Companion_Badge",
"Hetmans_Headpiece",
"Hillbilly_Speed-Bump",
"Hitt_Mann_Badge",
"Holiday_Headcase",
"Holstered_Heaters",
"Honeydews_Charitable_Countenance",
"Hong_Kong_Cone",
"Hooded_Haunter",
"Horace",
"Horrible_Horns",
"Horrific_Headsplitter",
"Horseless_Headless_Horsemanns_Head",
"Hotrod",
"Hot_Dogger",
"Humanitarians_Hachimaki",
"Human_Cannonball",
"Hunter_in_Darkness",
"Hypno-eyes",
"Idea_Tube",
"Industrial_Festivizer",
"InfoShow_TF2_Tournament_Participant",
"Insulated_Inventor",
"Invasion_Community_Update_Medal",
"Iron_Fist",
"Iron_Lung",
"Israphels_Eleemosynary_Expression",
"Itsy_Bitsy_Spyer",
"J",
"Jaunty_Adventurer",
"Jaunty_Benefactor",
"Jaunty_Camper",
"Jaunty_Globetrotter",
"Jaunty_Trailblazer",
"Jaunty_Voyager",
"Joe-on-the-Go",
"Jungle_Wreath",
"Killer_Exclusive",
"Kiss_King",
"Last_Straw",
"Law",
"LBTF2_FBTF_6v6_Smissmas_2014_First_Medal",
"LBTF2_Highlander_Smissmas_2014_First_Medal",
"LBTF2_Tournament_Season_9_First_Medal",
"Legendary_Lid",
"Legend_of_Bugfoot",
"Level_Three_Chin",
"License_to_Maim",
"Life_Support_System",
"Lil_Bitey",
"Lil_Dutchman",
"Lo-Fi_Longwave",
"Loaf_Loafers",
"Lonesome_Loafers",
"Lucky_Cat_Hat",
"Macho_Mann",
"Magical_Mercenary",
"Magnanimous_Monarch",
"Mandrews_Munificent_Mug",
"Manneater",
"Manniversary_Paper_Hat",
"Mann_Co",
"Mann_Co_002",
"Mappers_vs",
"Map_Makers_Medallion",
"Mark_of_the_Saint",
"Marxman",
"Master_Mind",
"Maxs_Severed_Head",
"Mercenary",
"Mercs_Mohawk",
"Mercs_Muffler",
"Mercs_Pride_Scarf",
"Merc_Medal",
"Mildly_Disturbing_Halloween_Mask",
"Military_Grade_JACK_Hat",
"Mini-Engy",
"Mining_Light",
"Mister_Bones",
"MK_50",
"Modest_Metal_Pile_of_Scrap",
"Modest_Pile_of_Hat",
"MONOCULUS",
"Monstrous_Memento",
"Mustachioed_Mann",
"Mutton_Mann",
"Nasty_Norsemann",
"Neckwear_Headwear",
"Noble_Amassment_of_Hats",
"Noble_Nickel_Amassment_of_Hats",
"Ol_Geezer",
"One-Way_Ticket",
"Operation_Gear_Grinder_Badge",
"Operation_Mecha_Engine_Badge",
"Operation_Oil_Spill_Badge",
"Operation_Steel_Trap_Badge",
"Operation_Two_Cities_Badge",
"Packable_Provisions",
"Pardners_Pompadour",
"Party_Hat",
"PASS_Time_Early_Participation_Pin",
"PASS_Time_Miniature_Half_JACK",
"Patriot_Peak",
"Peaceniks_Ponytail",
"Pebbles_the_Penguin",
"Pencil_Pusher",
"Philanthropists_Indulgence",
"Philateler",
"Phononaut",
"Photo_Badge",
"Pip-Boy",
"Pithy_Professional",
"Platinum_Dueling_Badge",
"Plug-In_Prospector",
"Plumbers_Cap",
"Pocket_Admin",
"Pocket_Halloween_Boss",
"Pocket_Horsemann",
"Pocket_Purrer",
"Pocket_Pyro",
"Pocket_Raiders",
"Pocket_Santa",
"Pocket_Saxton",
"Pocket_Villians",
"Pocket_Yeti",
"Point_and_Shoot",
"Polar_Pal",
"Polar_Pullover",
"Polycount_Pin",
"Potassium_Bonnett",
"Prairie_Heel_Biters",
"Prehistoric_Pullover",
"Primeval_Warrior",
"Prinny_Hat",
"Prinny_Pouch",
"Prize_Plushy",
"Professors_Peculiarity",
"Professor_Speks",
"Proof_of_Purchase",
"Provisions_Cap",
"Public_Accessor",
"Puggyback",
"Pyrovision_Goggles",
"Quizzical_Quetzal",
"Quoth",
"Readers_Choice",
"Ready_Steady_Pan_Participant",
"Ready_Steady_Pan_Participant_Season_2",
"Reindoonicorn",
"Replica_Titanium_Tank_2020",
"Resurrection_Associate_Pin",
"Robin_Walkers",
"Roboot",
"Robot_Chicken_Hat",
"RoBro_3000",
"Rocket_Operator",
"Rotation_Sensation",
"Rump-o-Lantern",
"Sackcloth_Spook",
"SafenSound",
"Salty_Dog",
"Saxton",
"Saxton_Hale_Mask",
"Saxxy_Clapper_Badge",
"Scotch_Saver",
"Seal_Mask",
"Sheriffs_Stetson",
"Silver_Dueling_Badge",
"Sips_Selfless_Simulacrum",
"Sjins_Generous_Guise",
"Skull_Island_Topper",
"Sledders_Sidekick",
"Slithering_Scarf",
"Smissmas_Saxton",
"Smissmas_Wreath",
"Smokey_Sombrero",
"Snaggletoothed_Stetson",
"Snowmann",
"Snow_Stompers",
"Soldier_of_Fortune",
"Something_Special_For_Someone_Special",
"Sophisticated_Smoker",
"Soul_of_Spensers_Past",
"SpaceChem_Pin",
"Space_Hamster_Hammy",
"Special_Eyes",
"Special_Snowflake",
"Special_Snowflake_2016",
"Spectral_Snowflake",
"Spine-Chilling_Skull",
"Spiral_Sallet",
"Spirit_Of_Giving",
"Spooktacles",
"Spooky_Sleeves",
"Staplers_Specs",
"Stocking_Stuffer",
"Summer_Hat",
"Summer_Shades",
"Support_Spurs",
"Teddy_Robobelt",
"Teddy_Roosebelt",
"Telefragger_Toque",
"Terror-antula",
"Teufort_Knight",
"Teufort_Tooth_Kicker",
"Texas_Half-Pants",
"Texas_Slims_Dome_Shine",
"Texas_Ten_Gallon",
"Texas_Tin-Gallon",
"Texas_Toast",
"TF2Maps_72hr_TF2Jam_Participant",
"TF2Maps_Charitable_Heart",
"TF2VRH",
"That_70s_Chapeau",
"Thermal_Insulation_Layer",
"Thought_that_Counts",
"Timeless_Topper",
"Tin-1000",
"Tiny_Texan",
"Tipped_Lid",
"Toadstool_Topper",
"Tomb_Readers",
"Tools_of_the_Trade",
"Top_Notch",
"Tough_Stuff_Muffs",
"Tournament_Medal_-_AU_Highlander_Community_Le",
"Tournament_Medal_-_CappingTV_Ultiduo_Summer_B",
"Tournament_Medal_-_Chapelaria_6v6_Season_1",
"Tournament_Medal_-_Chapelaria_Ultiduo_Season_",
"Tournament_Medal_-_Copenhagen_Games_Medal",
"Tournament_Medal_-_ESA_Rewind",
"Tournament_Medal_-_ESA_Rewind_II",
"Tournament_Medal_-_ESH_Ultiduo_Tournament",
"Tournament_Medal_-_ESL_Tournament",
"Tournament_Medal_-_ETF2L_6vs6_Tournament",
"Tournament_Medal_-_ETF2L_Fresh_Meat_Challenge",
"Tournament_Medal_-_ETF2L_Highlander_Tournamen",
"Tournament_Medal_-_ETF2L_Highlander_Tourn_002",
"Tournament_Medal_-_ETF2L_Ultiduo_Tournament",
"Tournament_Medal_-_Florida_LAN_2014",
"Tournament_Medal_-_Florida_LAN_2015",
"Tournament_Medal_-_Florida_LAN_2016",
"Tournament_Medal_-_Florida_LAN_2018",
"Tournament_Medal_-_Gette_it_Onne_medal",
"Tournament_Medal_-_GWJ_Tournament",
"Tournament_Medal_-_HLPugs",
"Tournament_Medal_-_Insomnia",
"Tournament_Medal_-_Journey_to_the_East",
"Tournament_Medal_-_National_Heavy_Boxing_Leag",
"Tournament_Medal_-_Newbie_Prolander_Cup",
"Tournament_Medal_-_OWL_10_6vs6_Tournament",
"Tournament_Medal_-_Palaise_MGE_Doubles_Commun",
"Tournament_Medal_-_Prolander_One_Day_Cup_Part",
"Tournament_Medal_-_Rally_Call_Charity_Tournam",
"Tournament_Medal_-_RETF2_EE22_6v6_Tournament_",
"Tournament_Medal_-_RGB_LAN",
"Tournament_Medal_-_Snacks_Summery_Ultiduo_Sie",
"Tournament_Medal_-_TFCL_6v6",
"Tournament_Medal_-_Tumblr_Vs_Reddit_Season_2",
"Tournament_Medal_-_UGC_4v4_Season_1",
"Tournament_Medal_-_UGC_6vs6_Tournament_Season",
"Tournament_Medal_-_UGC_6vs6_Tournament_Se_002",
"Tournament_Medal_-_UGC_Highlander_Tournament_",
"Tournament_Medal_-_UGC_Highlander_Tournam_002",
"Tournament_Medal_-_UGC_Highlander_Tournam_003",
"Tournament_Medal_-_UGC_Highlander_Tournam_004",
"Tournament_Medal_-_UGC_Highlander_Tournam_005",
"Tournament_Medal_-_UGC_Highlander_Tournam_006",
"Tournament_Medal_-_Ultimate_Ultiduo",
"Tournament_Medal_BETA_LAN_2014_1st",
"Tournament_Medal_OSL",
"Tournament_Medal_TF2Connexion_Season_14_First",
"Towering_Pillar_of_Hats",
"Towering_Pillar_Of_Summer_Shades",
"Towering_Titanium_Pillar_of_Hats",
"Trash_Toter",
"Treasure_Hat",
"Trenchers_Topper",
"Trenchers_Tunic",
"Triad_Trinket",
"Trick_Stabber",
"Triple_A_Badge",
"Tropical_Toad",
"Truckers_Topper",
"Tumblr_Vs_Reddit_Participant",
"Tundra_Top",
"Tuque_or_Treat",
"Tux",
"Tuxxy",
"UGC_July_8_Platinum_First",
"Uncle_Sam",
"Unidentified_Following_Object",
"Universal_Translator",
"Unknown_Monkeynaut",
"Unusual_Cap",
"Vigilant_Pin",
"Viking_Braider",
"Virtual_Reality_Headset",
"Virtual_Viewfinder",
"Vive_La_France",
"Voodoo-Cursed_Engineer_Soul",
"Voodoo_Juju",
"Vox_Diabolus",
"Warsworn_Helmet",
"Well-Rounded_Rifleman",
"Western_Wear",
"Whale_Bone_Charm",
"Wide-Brimmed_Bandito",
"Wiki_Cap",
"Wild_West_Waistcoat",
"Wilson_Weave",
"Wingstick",
"Winter_Backup",
"Winter_Woodsman",
"Winter_Wrap_Up",
"Wise_Whiskers",
"Woolen_Warmer",
"World_Travelers_Hat",
"Xephos_Philanthropic_Physiognomy",
"Yule_Hog"];

var weapons = [
"CAPPER",
"Construction_PDA",
"Destruction_PDA",
"Eureka_Effect",
"Frontier_Justice",
"Giger_Counter",
"Golden_Frying_Pan",
"Golden_Wrench",
"Gunslinger",
"Jag",
"Lugermorph",
"Necro_Smasher",
"Panic_Attack",
"Pistol",
"Pomson_6000",
"Prinny_Machete",
"Rescue_Ranger",
"Saxxy",
"Short_Circuit",
"Shotgun",
"Southern_Hospitality",
"Widowmaker",
"Wrangler",
"Wrench"];