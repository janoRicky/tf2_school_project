
var cosmeticsSuffix = "./c2_assets/cosmetics_c2/75px-Item_icon_";
var weaponsSuffix = "./c2_assets/weapons_c2/100px-Item_icon_";

var cosmetics = [
"Accursed_Apparition",
"Alien_Swarm_Parasite",
"All-Father",
"Altruists_Adornment",
"Ambers_Rad_As_All_Hell_Hat",
"Antarctic_Parka",
"Antlers",
"Aperture_Labs_Hard_Hat",
"Arkham_Cowl",
"Armored_Authority",
"Asiafortress_Tournament_Season_7_First_Medal",
"Asymmetric_Accolade",
"Athletic_Supporter",
"Atomic_Accolade",
"Attack_Packs",
"Audio_File",
"Awesomenauts_Badge",
"Aztec_Warrior",
"A_Rather_Festive_Tree",
"A_Well_Wrapped_Hat",
"B",
"Balloonicorn",
"Balloonihoodie",
"Bananades",
"Barely-Melted_Capacitor",
"Baronial_Badge",
"Batbelt",
"Batters_Bracers",
"Battle_Bird",
"Battle_Bob",
"Bat_Hat",
"Bazaar_Bauble",
"Beacon_from_Beyond",
"Bedouin_Bandana",
"Benefactors_Kanmuri",
"Big_Daddy",
"Bills_Hat",
"BINOCULUS",
"Birdie_Bonnet",
"Blapature_Co",
"Bobby_Bonnet",
"Bolgan_Family_Crest",
"Bolt_Action_Blitzer",
"Bombinomicon",
"Bonedolier",
"Boo_Balloon",
"Bot_Dogger",
"Bounty_Hat",
"Boxcar_Bomber",
"Brain_Bucket",
"Brass_Bucket",
"Brawling_Buccaneer",
"Breach_and_Bomb",
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
"Bumble_Beenie",
"Buttler",
"Cadavers_Capper",
"Candleer",
"Candy_Crown",
"Canteen_Crasher_Bronze_Ammo_Medal_2018",
"Canteen_Crasher_Gold_Uber_Medal_2018",
"Canteen_Crasher_Iron_Recall_Medal_2018",
"Canteen_Crasher_Platinum_Crit_Medal_2018",
"Canteen_Crasher_Rust_Starter_Medal_2018",
"Canteen_Crasher_Silver_Building_Medal_2018",
"Caped_Crusader",
"Captains_Cocktails",
"Captain_Cardbeard_Cutthroat",
"Captain_Space_Mann",
"Caribbean_Conqueror",
"Caribou_Companion",
"Catastrophic_Companions",
"Cheaters_Lament",
"Chieftains_Challenge",
"Chief_Constable",
"Chill_Chullo",
"Citizen_Cane",
"Civilian_Grade_JACK_Hat",
"Clan_Pride",
"Classified_Coif",
"Class_Crown",
"Climbing_Commander",
"Cloud_Crasher",
"Co-Pilot",
"Cockfighter",
"Coldfront_Curbstompers",
"Coldsnap_Cap",
"Cold_Snap_Coat",
"Colonial_Clogs",
"Companion_Cube_Pin",
"Company_Man",
"Compatriot",
"Condor_Cap",
"Conquistador",
"Conspiracy_Cap",
"Cotton_Head",
"Crack_Pot",
"Crafty_Hair",
"Crit_Cloak",
"Croaking_Hazard",
"Crofts_Crest",
"Crones_Dome",
"Cross-Comm_Crash_Helmet",
"Crosslinkers_Coil",
"Crown_of_the_Old_Kingdom",
"Cryptic_Keepsake",
"Cuban_Bristle_Crisis",
"Dadliest_Catch",
"Dancing_Doe",
"Dark_Falkirk_Helm",
"Dark_Helm",
"Deadbeats",
"Deadliest_Duckling",
"Dead_Little_Buddy",
"Dead_of_Night",
"Defiant_Spartan",
"Deus_Specs",
"Dictator",
"Diplomat",
"Doe-Boy",
"Dr",
"Drs_Dapper_Topper",
"Dr_002",
"Dr_003",
"Duck_Billed_Hatypus",
"Dueler",
"Dumb_Bell",
"Duncans_Kindhearted_Kisser",
"Earbuds",
"Ebenezer",
"Electric_Badge-aloo",
"Ellis_Cap",
"El_Zapateador",
"End_of_the_Line_Community_Update_Medal",
"ETF2L_6vs6_September_10_Group_Winner",
"ETF2L_Highlander_Open_September_10_First",
"ETF2L_Highlander_September_10_Group_Winner",
"Executioner",
"Exquisite_Rack",
"Eye-Catcher",
"Faerie_Solitaire_Pin",
"Fancy_Dress_Uniform",
"Faux_Manchu",
"Federal_Casemaker",
"Finders_Fee",
"First_American",
"Flair",
"Flakcatcher",
"Flashdance_Footies",
"Fortune_Hunter",
"Founding_Father",
"Freedom_Feathers",
"Friends_Forever_Companion_Square_Badge",
"Frontline_Field_Recorder",
"Full_Head_Of_Steam",
"Full_Metal_Drill_Hat",
"Furious_Fukaamigasa",
"Galvanized_Gibus",
"Gamers_Assembly_First_Medal",
"Gentle_Mannes_Service_Medal",
"Gentle_Munitionne_of_Leisure",
"Ghastlierest_Gibus",
"Ghastlier_Gibus",
"Ghastly_Gibus",
"Ghostly_Gibus",
"Ghost_of_Spies_Checked_Past",
"Ghoul_Gibbin_Gear",
"Gifting_Man_From_Gifting_Land",
"Gift_Bringer",
"Gift_of_Giving",
"Gift_of_Giving_2016",
"Gilded_Guard",
"Gingerbread_Mann",
"Glitched_Circuit_Board",
"Glittering_Garland",
"Globetrotter",
"Gold_Dueling_Badge",
"Grandmaster",
"Graybanns",
"Grenadiers_Softcap",
"Grim_Tweeter",
"Grizzled_Veteran",
"Ground_Control",
"Grub_Grenades",
"Guano",
"Halloween_Masks",
"Handy_Canes",
"Hannahs_Altruistic_Aspect",
"Hardium_Helm",
"Hardy_Laurel",
"Hat_of_Undeniable_Wealth_And_Respect",
"Hat_With_No_Name",
"Haunted_Hat",
"Hawk_Warrior",
"Head_Hedge",
"Head_Prize",
"Heartfelt_Hug",
"Heart_of_Gold",
"Hellhunters_Headpiece",
"Hellmet",
"Helmet_Without_a_Home",
"Heroic_Companion_Badge",
"Heros_Hachimaki",
"Hidden_Dragon",
"Hitt_Mann_Badge",
"Holiday_Headcase",
"Honchos_Headgear",
"Honeydews_Charitable_Countenance",
"Hong_Kong_Cone",
"Hooded_Haunter",
"Horace",
"Hornblower",
"Horrible_Horns",
"Horrific_Headsplitter",
"Horseless_Headless_Horsemanns_Head",
"Hot_Dogger",
"Humanitarians_Hachimaki",
"Human_Cannonball",
"Hunter_in_Darkness",
"Hypno-eyes",
"Idiot_Box",
"Infernal_Impaler",
"InfoShow_TF2_Tournament_Participant",
"Invasion_Community_Update_Medal",
"Israphels_Eleemosynary_Expression",
"J",
"Jaunty_Adventurer",
"Jaunty_Benefactor",
"Jaunty_Camper",
"Jaunty_Globetrotter",
"Jaunty_Trailblazer",
"Jaunty_Voyager",
"Jumpers_Jeepcap",
"Jungle_Wreath",
"Jupiter_Jumpers",
"Killers_Kabuto",
"Killers_Kit",
"Killer_Exclusive",
"Kiss_King",
"Kringle_Collection",
"Larval_Lid",
"Law",
"LBTF2_FBTF_6v6_Smissmas_2014_First_Medal",
"LBTF2_Highlander_Smissmas_2014_First_Medal",
"LBTF2_Tournament_Season_9_First_Medal",
"Legendary_Lid",
"License_to_Maim",
"Lieutenant_Bites",
"Lieutenant_Bites_the_Dust",
"Lil_Bitey",
"Lil_Dutchman",
"Lo-Fi_Longwave",
"Loaf_Loafers",
"Lone_Survivor",
"Lord_Cockswains_Novelty_Mutton_Chops_and_Pipe",
"Lord_Cockswains_Pith_Helmet",
"Lucky_Cat_Hat",
"Lucky_Shot",
"Lumbricus_Lid",
"Macho_Mann",
"Magical_Mercenary",
"Magnanimous_Monarch",
"Mandrews_Munificent_Mug",
"Manneater",
"Manniversary_Paper_Hat",
"Mann_Co",
"Mann_Co_002",
"Man_in_Slacks",
"Mappers_vs",
"Map_Makers_Medallion",
"Mark_of_the_Saint",
"Marshalls_Mutton_Chops",
"Marxman",
"Maxs_Severed_Head",
"Menpo",
"Mercenary",
"Mercs_Mohawk",
"Mercs_Muffler",
"Mercs_Pride_Scarf",
"Merc_Medal",
"Mildly_Disturbing_Halloween_Mask",
"Military_Grade_JACK_Hat",
"Mistaken_Movember",
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
"Nuke",
"One-Way_Ticket",
"Operation_Gear_Grinder_Badge",
"Operation_Mecha_Engine_Badge",
"Operation_Oil_Spill_Badge",
"Operation_Steel_Trap_Badge",
"Operation_Two_Cities_Badge",
"Ornament_Armament",
"Party_Hat",
"Party_Poncho",
"PASS_Time_Early_Participation_Pin",
"PASS_Time_Miniature_Half_JACK",
"Patriots_Pouches",
"Patriot_Peak",
"Peacebreaker",
"Pebbles_the_Penguin",
"Pestering_Jester",
"Philanthropists_Indulgence",
"Philateler",
"Phononaut",
"Photo_Badge",
"Pin_Pals",
"Pithy_Professional",
"Platinum_Dueling_Badge",
"Pocket_Admin",
"Pocket_Halloween_Boss",
"Pocket_Horsemann",
"Pocket_Medic",
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
"Powdered_Practitioner",
"Prehistoric_Pullover",
"Primeval_Warrior",
"Prinny_Hat",
"Prinny_Pouch",
"Private_Maggot_Muncher",
"Professors_Pineapple",
"Professor_Speks",
"Proof_of_Purchase",
"Public_Accessor",
"Public_Speaker",
"Pyrovision_Goggles",
"Quizzical_Quetzal",
"Quoth",
"Racc_Mann",
"Readers_Choice",
"Ready_Steady_Pan_Participant",
"Ready_Steady_Pan_Participant_Season_2",
"Rebel_Rouser",
"Reindoonicorn",
"Replica_Titanium_Tank_2020",
"Resurrection_Associate_Pin",
"Robin_Walkers",
"Robot_Chicken_Hat",
"RoBro_3000",
"Rotation_Sensation",
"Rump-o-Lantern",
"Sackcloth_Spook",
"Salty_Dog",
"Saxton",
"Saxton_Hale_Mask",
"Saxxy_Clapper_Badge",
"Screamin_Eagle",
"Seal_Mask",
"Sergeants_Drill_Hat",
"Shaolin_Sash",
"Sharp_Chest_Pain",
"Shellmet",
"Shoestring_Budget",
"Shoguns_Shoulder_Guard",
"Silver_Dueling_Badge",
"Sips_Selfless_Simulacrum",
"Sjins_Generous_Guise",
"Skullcap",
"Skull_Island_Topper",
"Sky_High_Fly_Guy",
"Sledders_Sidekick",
"Slithering_Scarf",
"Slo-Poke",
"Smissmas_Saxton",
"Smissmas_Wreath",
"Snowmann",
"Socked_and_Loaded",
"Soldiers_Slope_Scopers",
"Soldiers_Sparkplug",
"Soldiers_Stash",
"Soldiers_Stogie",
"Soldier_of_Fortune",
"Something_Special_For_Someone_Special",
"Sophisticated_Smoker",
"SpaceChem_Pin",
"Space_Bracers",
"Space_Hamster_Hammy",
"Special_Snowflake",
"Special_Snowflake_2016",
"Spectral_Snowflake",
"Spellbinders_Bonnet",
"Spine-Chilling_Skull",
"Spiral_Sallet",
"Spirit_Of_Giving",
"Spooktacles",
"Spook_Specs",
"Stahlhelm",
"Stainless_Pot",
"Staplers_Specs",
"Steel_Pipes",
"Steel_Shako",
"Stout_Shako",
"Summer_Hat",
"Summer_Shades",
"Supernatural_Stalker",
"Tank_Top",
"Team_Captain",
"Terror-antula",
"Teufort_Knight",
"Teufort_Tooth_Kicker",
"TF2Maps_72hr_TF2Jam_Participant",
"TF2Maps_Charitable_Heart",
"TF2VRH",
"That_70s_Chapeau",
"Thought_that_Counts",
"Tin_Pot",
"Tipped_Lid",
"Toadstool_Topper",
"Tomb_Readers",
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
"Toy_Soldier",
"Treasure_Hat",
"Triple_A_Badge",
"Tumblr_Vs_Reddit_Participant",
"Tundra_Top",
"Tuque_or_Treat",
"Tux",
"Tuxxy",
"Tyrantium_Helmet",
"Tyrants_Helm",
"UGC_July_8_Platinum_First",
"Uncle_Sam",
"Unidentified_Following_Object",
"Universal_Translator",
"Unknown_Monkeynaut",
"Unusual_Cap",
"Valley_Forge",
"Vampire_Vanquisher",
"Veterans_Attire",
"Vigilant_Pin",
"Viking_Braider",
"Virtual_Viewfinder",
"Vive_La_France",
"Voodoo-Cursed_Soldier_Soul",
"Voodoo_Juju",
"Warsworn_Helmet",
"War_Eagle",
"War_on_Smissmas_Battle_Hood",
"War_on_Smissmas_Battle_Socks",
"War_Pig",
"Well-Rounded_Rifleman",
"Whale_Bone_Charm",
"Whirly_Warrior",
"Wiki_Cap",
"Winter_Woodsman",
"Woolen_Warmer",
"World_Travelers_Hat",
"Xephos_Philanthropic_Physiognomy",
"Yule_Hog",
"Zipperface"];

var weapons = [
"Air_Strike",
"BASE_Jumper",
"Battalions_Backup",
"Bat_Outta_Hell",
"Beggars_Bazooka",
"Black_Box",
"Buff_Banner",
"Concheror",
"Conscientious_Objector",
"Cow_Mangler_5000",
"Crossing_Guard",
"Direct_Hit",
"Disciplinary_Action",
"Equalizer",
"Escape_Plan",
"Freedom_Staff",
"Frying_Pan",
"Golden_Frying_Pan",
"Gunboats",
"Half-Zatoichi",
"Ham_Shank",
"Liberty_Launcher",
"Mantreads",
"Market_Gardener",
"Memory_Maker",
"Necro_Smasher",
"Original",
"Pain_Train",
"Panic_Attack",
"Prinny_Machete",
"Reserve_Shooter",
"Righteous_Bison",
"Rocket_Jumper",
"Rocket_Launcher",
"Saxxy",
"Shotgun",
"Shovel"];