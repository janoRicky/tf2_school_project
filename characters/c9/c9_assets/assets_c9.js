
var cosmeticsSuffix = "./c9_assets/cosmetics_c9/75px-Item_icon_";
var weaponsSuffix = "./c9_assets/weapons_c9/100px-Item_icon_";

var cosmetics = [
"Accursed_Apparition",
"After_Dark",
"Alien_Swarm_Parasite",
"Aloha_Apparel",
"Altruists_Adornment",
"Ambers_Rad_As_All_Hell_Hat",
"Antlers",
"Aperture_Labs_Hard_Hat",
"Aristotle",
"Arkham_Cowl",
"Asiafortress_Tournament_Season_7_First_Medal",
"Assassins_Attire",
"Asymmetric_Accolade",
"Athletic_Supporter",
"Atomic_Accolade",
"Audio_File",
"Au_Courant_Assassin",
"Avian_Amante",
"Aviator_Assassin",
"Awesomenauts_Badge",
"Aztec_Warrior",
"A_Hat_to_Kill_For",
"A_Rather_Festive_Tree",
"A_Well_Wrapped_Hat",
"B",
"Backbiters_Billycock",
"Backstabbers_Boomslang",
"Balloonicorn",
"Balloonihoodie",
"Bandits_Boots",
"Barely-Melted_Capacitor",
"Baronial_Badge",
"Base_Metal_Billycock",
"Batbelt",
"Batters_Bracers",
"Bat_Hat",
"Beacon_from_Beyond",
"Bedouin_Bandana",
"Belgian_Detective",
"Benefactors_Kanmuri",
"Big_Topper",
"Bills_Hat",
"BINOCULUS",
"Birdie_Bonnet",
"Birds_Eye_Viewer",
"Blapature_Co",
"Bloodhound",
"Blood_Banker",
"Bolgan_Family_Crest",
"Bolt_Action_Blitzer",
"Bombinomicon",
"Bootleg_Base_Metal_Billycock",
"Boo_Balloon",
"Bot_Dogger",
"Bountiful_Bow",
"Bounty_Hat",
"Boxcar_Bomber",
"Bozos_Brogues",
"Brain-Warming_Wear",
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
"Business_Casual",
"Buttler",
"Camera_Beard",
"Candymans_Cap",
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
"Charmers_Chapeau",
"Cheaters_Lament",
"Chicago_Overcoat",
"Chill_Chullo",
"Citizen_Cane",
"Civilian_Grade_JACK_Hat",
"Clan_Pride",
"Class_Crown",
"Co-Pilot",
"Cockfighter",
"Coldsnap_Cap",
"Companion_Cube_Pin",
"Company_Man",
"Conspiracy_Cap",
"Cosa_Nostra_Cap",
"Cotton_Head",
"Counterfeit_Billycock",
"Crabe_de_Chapeau",
"Croaking_Hazard",
"Crofts_Crest",
"Crones_Dome",
"Crosslinkers_Coil",
"Crown_of_the_Old_Kingdom",
"Cryptic_Keepsake",
"Cut_Throat_Concierge",
"Dadliest_Catch",
"Dapper_Disguise",
"Dark_Falkirk_Helm",
"Dark_Helm",
"Dashin_Hashshashin",
"Deadbeats",
"Dead_Head",
"Dead_Little_Buddy",
"Dead_of_Night",
"Deep_Cover_Operator",
"Deus_Specs",
"Dictator",
"Distinguished_Rogue",
"Doublecross-Comm",
"Dr",
"Dressperado",
"Drs_Dapper_Topper",
"Dr_002",
"Dr_003",
"Dr_004",
"Dtective_Noir",
"Duck_Billed_Hatypus",
"Dueler",
"Duncans_Kindhearted_Kisser",
"Earbuds",
"Ebenezer",
"Electric_Badge-aloo",
"Ellis_Cap",
"End_of_the_Line_Community_Update_Medal",
"Escapist",
"ETF2L_6vs6_September_10_Group_Winner",
"ETF2L_Highlander_Open_September_10_First",
"ETF2L_Highlander_September_10_Group_Winner",
"Ethereal_Hood",
"Executioner",
"Exorcizor",
"Eye-Catcher",
"Facepeeler",
"Faerie_Solitaire_Pin",
"Familiar_Fez",
"Fancy_Fedora",
"Federal_Casemaker",
"Finders_Fee",
"Flair",
"Flashdance_Footies",
"Fortune_Hunter",
"Foul_Cowl",
"Frenchmans_Beret",
"Frenchmans_Formals",
"Friends_Forever_Companion_Square_Badge",
"Frontline_Field_Recorder",
"Full_Head_Of_Steam",
"Galvanized_Gibus",
"Gamers_Assembly_First_Medal",
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
"Gold_Dueling_Badge",
"Grandmaster",
"Graybanns",
"Graylien",
"Griffins_Gog",
"Grim_Tweeter",
"Grizzled_Veteran",
"Guano",
"Halloween_Masks",
"Hannahs_Altruistic_Aspect",
"Hardy_Laurel",
"Harmburg",
"Harry",
"Hat_of_Cards",
"Hat_of_Undeniable_Wealth_And_Respect",
"Haunted_Hat",
"Head_Prize",
"Heartfelt_Hug",
"Heart_of_Gold",
"Heroic_Companion_Badge",
"Hitt_Mann_Badge",
"Holiday_Headcase",
"Honeydews_Charitable_Countenance",
"Hong_Kong_Cone",
"Hooded_Haunter",
"Horace",
"Horrible_Horns",
"Horrific_Headsplitter",
"Horseless_Headless_Horsemanns_Head",
"Hot_Dogger",
"Humanitarians_Hachimaki",
"Human_Cannonball",
"Hunter_in_Darkness",
"Hyperbaric_Bowler",
"Hypno-eyes",
"InfoShow_TF2_Tournament_Participant",
"Intangible_Ascot",
"Invasion_Community_Update_Medal",
"Israphels_Eleemosynary_Expression",
"J",
"Janissary_Ketche",
"Jaunty_Adventurer",
"Jaunty_Benefactor",
"Jaunty_Camper",
"Jaunty_Globetrotter",
"Jaunty_Trailblazer",
"Jaunty_Voyager",
"Jungle_Wreath",
"Killer_Exclusive",
"Kiss_King",
"Lacking_Moral_Fiber_Mask",
"Lady_Killer",
"Law",
"LBTF2_FBTF_6v6_Smissmas_2014_First_Medal",
"LBTF2_Highlander_Smissmas_2014_First_Medal",
"LBTF2_Tournament_Season_9_First_Medal",
"Legendary_Lid",
"Le_Party_Phantom",
"Lhomme_Burglerre",
"License_to_Maim",
"Lil_Bitey",
"Lil_Dutchman",
"LInspecteur",
"Lo-Fi_Longwave",
"Loaf_Loafers",
"Lucky_Cat_Hat",
"Lurkers_Leathers",
"Lurking_Legionnaire",
"Macho_Mann",
"Made_Man",
"Magical_Mercenary",
"Magistrates_Mullet",
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
"Maxs_Severed_Head",
"Megapixel_Beard",
"Mercenary",
"Mercs_Mohawk",
"Mercs_Muffler",
"Mercs_Pride_Scarf",
"Merc_Medal",
"Mildly_Disturbing_Halloween_Mask",
"Military_Grade_JACK_Hat",
"Mister_Bones",
"MK_50",
"Modest_Metal_Pile_of_Scrap",
"Modest_Pile_of_Hat",
"MONOCULUS",
"Monstrous_Memento",
"Murderers_Motif",
"Mustachioed_Mann",
"Nanobalaclava",
"Napoleon_Complex",
"Nasty_Norsemann",
"Neckwear_Headwear",
"Nightmare_Hunter",
"Ninja_Cowl",
"Noble_Amassment_of_Hats",
"Noble_Nickel_Amassment_of_Hats",
"Noh_Mercy",
"One-Way_Ticket",
"Operation_Gear_Grinder_Badge",
"Operation_Mecha_Engine_Badge",
"Operation_Oil_Spill_Badge",
"Operation_Steel_Trap_Badge",
"Operation_Two_Cities_Badge",
"Party_Hat",
"PASS_Time_Early_Participation_Pin",
"PASS_Time_Miniature_Half_JACK",
"Patriot_Peak",
"Pebbles_the_Penguin",
"Philanthropists_Indulgence",
"Philateler",
"Phononaut",
"Photo_Badge",
"Pithy_Professional",
"Platinum_Dueling_Badge",
"Pocket_Admin",
"Pocket_Halloween_Boss",
"Pocket_Horsemann",
"Pocket_Momma",
"Pocket_Raiders",
"Pocket_Santa",
"Pocket_Saxton",
"Pocket_Villians",
"Pocket_Yeti",
"Point_and_Shoot",
"Polar_Pal",
"Polar_Pullover",
"Polycount_Pin",
"Pom-Pommed_Provocateur",
"Potassium_Bonnett",
"Powdered_Practitioner",
"Prehistoric_Pullover",
"Primeval_Warrior",
"Prinny_Hat",
"Prinny_Pouch",
"Private_Eye",
"Professor_Speks",
"Proof_of_Purchase",
"Public_Accessor",
"Puffy_Provocateur",
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
"Robot_Chicken_Hat",
"RoBro_3000",
"Rogues_Brogues",
"Rogues_Col_Roule",
"Rogues_Rabbit",
"Rogues_Robe",
"Rotation_Sensation",
"Rump-o-Lantern",
"Sackcloth_Spook",
"Salty_Dog",
"Saxton",
"Saxton_Hale_Mask",
"Saxxy_Clapper_Badge",
"Scarecrow",
"Seal_Mask",
"Shadowmans_Shade",
"Showstopper",
"Shutterbug",
"Silver_Dueling_Badge",
"Sips_Selfless_Simulacrum",
"Sjins_Generous_Guise",
"Skull_Island_Topper",
"Sky_Captain",
"Sledders_Sidekick",
"Slithering_Scarf",
"Smissmas_Saxton",
"Smissmas_Wreath",
"Smoking_Jacket",
"Sneaky_Spats_of_Sneaking",
"Snowmann",
"Soldier_of_Fortune",
"Something_Special_For_Someone_Special",
"SpaceChem_Pin",
"Space_Hamster_Hammy",
"Special_Snowflake",
"Special_Snowflake_2016",
"Spectral_Snowflake",
"Spectres_Spectacles",
"Spine-Chilling_Skull",
"Spiral_Sallet",
"Spirit_Of_Giving",
"Spooktacles",
"Spycrab",
"Staplers_Specs",
"Stealthy_Scarf",
"Stealth_Steeler",
"Summer_Hat",
"Summer_Shades",
"Terror-antula",
"Teufort_Knight",
"TF2Maps_72hr_TF2Jam_Participant",
"TF2Maps_Charitable_Heart",
"TF2VRH",
"That_70s_Chapeau",
"Thought_that_Counts",
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
"Treasure_Hat",
"Triad_Trinket",
"Triple_A_Badge",
"Tumblr_Vs_Reddit_Participant",
"Tundra_Top",
"Tuque_or_Treat",
"Tux",
"Tuxxy",
"UGC_July_8_Platinum_First",
"Uncle_Sam",
"Under_Cover",
"Unidentified_Following_Object",
"Universal_Translator",
"Unknown_Monkeynaut",
"Unusual_Cap",
"Upgrade",
"Vigilant_Pin",
"Virtual_Viewfinder",
"Vive_La_France",
"Voodoo-Cursed_Spy_Soul",
"Voodoo_Juju",
"Voodoo_Vizier",
"Warsworn_Helmet",
"Well-Rounded_Rifleman",
"Whale_Bone_Charm",
"Wiki_Cap",
"Winter_Woodsman",
"Woolen_Warmer",
"World_Travelers_Hat",
"Xephos_Philanthropic_Physiognomy",
"Yule_Hog"];

var weapons = [
"Ambassador",
"Ap-Sap",
"Big_Earner",
"Big_Kill",
"Black_Rose",
"Cloak_and_Dagger",
"Connivers_Kunai",
"Dead_Ringer",
"Diamondback",
"Disguise_Kit",
"Enforcer",
"Enthusiasts_Timepiece",
"Golden_Frying_Pan",
"Invisibility_Watch",
"Knife",
"LEtranger",
"Prinny_Machete",
"Quackenbirdt",
"Red-Tape_Recorder",
"Revolver",
"Sapper",
"Saxxy",
"Sharp_Dresser",
"Snack_Attack",
"Spy-cicle",
"Wanga_Prick",
"Your_Eternal_Reward"];