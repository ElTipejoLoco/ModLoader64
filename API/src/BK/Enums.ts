export const enum GameVersion {
  JP_1_0,
  PAL_1_0,
  USA_1_0,
  USA_1_1,
}

export const enum AddressType {
  BETA_MENU = 'BK:beta_menu',

  PLYR_ANIMAL = 'BK:plyr_animal',
  PLYR_ANIMATION = 'BK:plyr_animation',
  PLYR_FLIP_FACING = 'BK:plyr_flip_facing',
  PLYR_MODEL_INDEX = 'BK:plyr_model_index',
  PLYR_MODEL_PTR = 'BK:plyr_model_ptr',
  PLYR_MOVEMENT_STATE = 'BK:plyr_state',
  PLYR_OPACITY = 'BK:plyr_opacity',
  PLYR_POS_X = 'BK:plyr_pos_x',
  PLYR_POS_Y = 'BK:plyr_pos_y',
  PLYR_POS_Z = 'BK:plyr_pos_z',
  PLYR_ROT_X = 'BK:plyr_rot_x',
  PLYR_ROT_Y = 'BK:plyr_rot_y',
  PLYR_ROT_Z = 'BK:plyr_rot_z',
  PLYR_SCALE = 'BK:plyr_scale',
  PLYR_VISIBLE = 'BK:plyr_visible',

  RT_ACTOR_ARRAY_PTR = 'BK:rt_actor_arr_ptr',
  RT_CUR_EXIT = 'BK:rt_current_exit',
  RT_CUR_HEALTH = 'BK:rt_current_health',
  RT_CUR_LEVEL = 'BK:rt_current_level',
  RT_CUR_LEVEL_JINJOS = 'BK:rt_level_jinjos',
  RT_CUR_LEVEL_NOTES = 'BK:rt_current_level_notes',
  RT_CUR_PROFILE = 'BK:rt_current_profile',
  RT_CUR_SCENE = 'BK:rt_current_scene',
  RT_CUTSCENE_STATE = 'BK:rt_cutscene_state',
  RT_IS_LOADING = 'BK:rt_is_loading',

  RT_CUR_LEVEL_ACORN = 'BK:rt_acorn',
  RT_CUR_LEVEL_CATERPILLAR = 'BK:rt_caterpillar',
  RT_CUR_LEVEL_GOLD_BULLION = 'BK:rt_gold_bullion',
  RT_CUR_LEVEL_PRESENT_GREEN = 'BK:rt_present_green',
  RT_CUR_LEVEL_PRESENT_BLUE = 'BK:rt_present_blue',
  RT_CUR_LEVEL_PRESENT_RED = 'BK:rt_present_red',
  RT_CUR_LEVEL_ORANGE = 'BK:rt_orange',

  SAVE_GAME_FLAGS = 'BK:save_game_flags',
  SAVE_HONEYCOMB_FLAGS = 'BK:save_honeycomb_flags',
  SAVE_JIGGY_FLAGS = 'BK:save_jiggy_flags',
  SAVE_MOVE_FLAGS = 'BK:save_move_flags',
  SAVE_MUMBO_TOKEN_FLAGS = 'BK:save_mumbo_token_flags',
  SAVE_NOTE_TOTALS = 'BK:save_note_totals',

  INV_HEALTH_UPGRADES = 'BK:inv_health_upgrades',
  INV_HONEYCOMBS = 'BK:inv_honeycombs',
  INV_JIGGIES = 'BK:inv_jiggies',
  INV_MUMBO_TOKENS = 'BK:inv_mumbo_tokens',
  INV_TEXT_JIGGIES = 'BK:inv_text_jiggies',
  INV_TEXT_MUMBO_TOKENS = 'BK:inv_text_mumbo_tokens',

  INV_EGGS = 'BK:inv_eggs',
  INV_RED_FEATHER = 'BK:inv_red_feather',
  INV_GOLD_FEATHER = 'BK:inv_gold_feather',

  INV_SCORE_TWINKLIE = 'BK:inv_score_twinklie',

  INV_HOURGLASS_2 = 'BK:inv_hourglass_2',
  INV_HOURGLASS_SKULL = 'BK:inv_hourglass_skull',
  INV_HOURGLASS_TIMER = 'BK:inv_hourglass_timer',
  INV_TIMER_XMAS_TREE = 'BK:inv_timer_xmas_tree',
  INV_TIMER_PROPELLOR = 'BK:inv_timer_propellor',
}

export enum AnimalType {
  UNKNOWN = 0x00,
  BEAR_BIRD = 0x01,
  TERMITE = 0x02,
  PUMPKIN = 0x03,
  WALRUS = 0x04,
  CROCODILE = 0x05,
  BEE = 0x06,
  WASHING_MACHINE = 0x07,
}

export enum ExitType {
  UNKNOWN = 0x00,

  MM_MAIN_MUMBOS_SKULL = 0x01,
  MM_MAIN_TICKERS_TOWER_BOTTOM = 0x02,
  MM_MAIN_TICKERS_TOPER_TOP = 0x03,
  MM_MAIN_BUTTON_CUTSCENE = 0x04,
  MM_MAIN_LEVEL_ENTRANCE = 0x05,

  TTC_MAIN_SANDCASTLE = 0x03,
  TTC_MAIN_LEVEL_ENTRANCE = 0x04,
  TTC_BLUBBERS_SHIP_TOP = 0x05,
  TTC_BLUBBERS_SHIP_BOTTOM = 0x06,
  TTC_MAIN_BLUBBERS_SHIP_TOP = 0x06,
  TTC_MAIN_BLUBBERS_SHIP_SIDE = 0x07,
  TTC_MAIN_LIGHTHOUSE_TOP = 0x08,
  TTC_MAIN_NIPPER = 0x0a,
  TTC_LIGHTHOUSE_BOTTOM = 0x0c,
  TTC_STAIR_ALCOVE_TOP = 0x0e,
  TTC_STAIR_ALCOVE_BOTTOM = 0x0f,

  SM_MAIN_BANJOS_HOUSE = 0x12,
  SM_MAIN_GRUNTILDAS_LAIR = 0x13,
}

export enum LevelType {
  UNKNOWN = 0x00,
  MUMBOS_MOUNTAIN = 0x01,
  TREASURE_TROVE_COVE = 0x02,
  CLANKERS_CAVERN = 0x03,
  BUBBLE_GLOOP_SWAMP = 0x04,
  FREEZEEZY_PEAK = 0x05,
  GRUNTILDAS_LAIR = 0x06,
  GOBEYS_VALEY = 0x07,
  CLICK_CLOCK_WOODS = 0x08,
  RUSTY_BUCKET_BAY = 0x09,
  MAD_MONSTER_MANSION = 0x0a,
  SPIRAL_MOUNTAIN = 0x0b,
  GRUNTILDAS_LAIR_ROOF = 0x0c,
  TITLE_SCREEN = 0x0d,
}

export enum ProfileType {
  Title = -1,
  A = 0,
  B = 2,
  C = 1,
}

export enum SceneType {
  UNKNOWN = 0x00,
  SM_MAIN = 0x01,
  MM_MAIN = 0x02,
  UNKNOWN_0X03 = 0x03,
  UNKNOWN_0x04 = 0x04,
  TTC_BLUBBERS_SHIP = 0x05,
  TTC_NIPPERS_SHELL = 0x06,
  TTC_MAIN = 0x07,
  UNKNOWN_0X08 = 0x08,
  UNKNOWN_0x09 = 0x09,
  TTC_SANDCASTLE = 0x0a,
  CC_CLANKERS_CAVERN = 0x0b,
  MM_TICKERS_TOWER = 0x0c,
  BGS_MAIN = 0x0d,
  MM_MUMBOS_SKULL = 0x0e,
  UNKNOWN_0X0F = 0x0f,
  BGS_MR_VILE = 0x10,
  BGS_TIPTUP = 0x11,
  GV_MAIN = 0x12,
  GV_MATCHING_GAME = 0x13,
  GV_MAZE = 0x14,
  GV_WATER = 0x15,
  GV_RUBEES_CHAMBER = 0x16,
  UNKNOWN_0X17 = 0x17,
  UNKNOWN_0X18 = 0x18,
  UNKNOWN_0X19 = 0x19,
  GV_SPHINX = 0x1a,
  MMM_MAIN = 0x1b,
  MMM_CHURCH_1 = 0x1c,
  MMM_CELLAR = 0x1d,
  START_NINTENDO = 0x1e,
  START_RAREWARE = 0x1f,
  END_SCENE_2_ = 0x20,
  CC_WITCH_SWITCH = 0x21,
  CC_INSIDE_CLANKER = 0x22,
  CC_GOLD_FEATHER = 0x23,
  MMM_TIMBLAR_SHED = 0x24,
  MMM_WELL = 0x25,
  MMM_DINING_ROOM_NAPPER = 0x26,
  FP_MAIN = 0x27,
  MMM_ROOM_1 = 0x28,
  MMM_ROOM_2 = 0x29,
  MMM_FIREPLACE = 0x2a,
  MMM_CHURCH_2 = 0x2b,
  MMM_BATHROOM = 0x2c,
  MMM_BEDROOM = 0x2d,
  MMM_FLOORBOARDS = 0x2e,
  MMM_BARREL = 0x2f,
  MMM_MUMBOS_SKULL = 0x30,
  RBB_MAIN = 0x31,
  UNKNOWN_0X32 = 0x32,
  UNKNOWN_0X33 = 0x33,
  RBB_ENGINE_ROOM = 0x34,
  RBB_WAREHOUSE_1 = 0x35,
  RBB_WAREHOUSE_2 = 0x36,
  RBB_CONTAINER_1 = 0x37,
  RBB_CONTAINER_3 = 0x38,
  RBB_CREW_CABIN = 0x39,
  RBB_BOSS_BOOM_BOX = 0x3a,
  RBB_STORE_ROOM = 0x3b,
  RBB_KITCHEN = 0x3c,
  RBB_NAVIGATION_ROOM = 0x3d,
  RBB_CONTAINER_2 = 0x3e,
  RBB_CAPTAINS_CABIN = 0x3f,
  CCW_MAIN = 0x40,
  FP_BOGGYS_IGLOO = 0x41,
  UNKNOWN_0X42 = 0x42,
  CCW_SPRING = 0x43,
  CCW_SUMMER = 0x44,
  CCW_AUTUMN = 0x45,
  CCW_WINTER = 0x46,
  BGS_MUMBOS_SKULL = 0x47,
  FP_MUMBOS_SKULL = 0x48,
  UNKNOWN_0X49 = 0x49,
  CCW_SPRING_MUMBOS_SKULL = 0x4a,
  CCW_SUMMER_MUMBOS_SKULL = 0x4b,
  CCW_AUTUMN_MUMBOS_SKULL = 0x4c,
  CCW_WINTER_MUMBOS_SKULL = 0x4d,
  UNKNOWN_0X4E = 0x4e,
  UNKNOWN_0X4F = 0x4f,
  UNKNOWN_0X50 = 0x50,
  UNKNOWN_0X51 = 0x51,
  UNKNOWN_0X52 = 0x52,
  FP_INSIDE_XMAS_TREE = 0x53,
  UNKNOWN_0X54 = 0x54,
  UNKNOWN_0X55 = 0x55,
  UNKNOWN_0X56 = 0x56,
  UNKNOWN_0X57 = 0x57,
  UNKNOWN_0X58 = 0x58,
  UNKNOWN_0X59 = 0x59,
  CCW_SUMMER_ZUBBAS_HIVE = 0x5a,
  CCW_SPRING_ZUBBAS_HIVE = 0x5b,
  CCW_AUTUMN_ZUBBAS_HIVE = 0x5c,
  UNKNOWN_0X5D = 0x5d,
  CCW_SPRING_NABNUTS_HOUSE = 0x5e,
  CCW_SUMMER_NABNUTS_HOUSE = 0x5f,
  CCW_AUTUMN_NABNUTS_HOUSE = 0x60,
  CCW_WINTER_NABNUTS_HOUSE = 0x61,
  CCW_WINTER_NABNUTS_1 = 0x62,
  CCW_AUTUMN_NABNUTS_2 = 0x63,
  CCW_WINTER_NABNUTS_2 = 0x64,
  CCW_SPRING_TOP = 0x65,
  CCW_SUMMER_TOP = 0x66,
  CCW_AUTUMN_TOP = 0x67,
  CCW_WINTER_TOP = 0x68,
  GL_LOBBY_MM = 0x69,
  GL_PUZZLE_TTC = 0x6a,
  GL_PUZZLE_CC = 0x6a,
  GL_NOTE_DOOR_180 = 0x6b,
  GL_PUZZLE_CCW = 0x6b,
  GL_RED_CAULDRON = 0x6c,
  GL_LOBBY_TTC = 0x6d,
  GL_LOBBY_GV = 0x6e,
  GL_LOBBY_FP = 0x6f,
  GL_LOBBY_CC = 0x70,
  GL_WITCH_STATUE = 0x71,
  GL_LOBBY_BGS = 0x72,
  UNKNOWN_0X73 = 0x73,
  GL_PUZZLE_GV = 0x74,
  GL_LOBBY_MMM = 0x75,
  GL_NOTE_DOOR_640 = 0x76,
  GL_LOBBY_RBB = 0x77,
  GL_PUZZLE_RBB = 0x78,
  GL_LOBBY_CCW = 0x79,
  GL_FLOOR_2_CRYPT_INSIDE = 0x7a,
  INTRO_LAIR_1 = 0x7b,
  INTRO_BANJO_HOUSE_1 = 0x7c,
  INTRO_SPIRAL_A = 0x7d,
  INTRO_SPIRAL_B = 0x7e,
  FP_WOZZAS_CAVE = 0x7f,
  GL_FLOOR_3 = 0x80,
  INTRO_LAIR_2 = 0x81,
  INTRO_MACHINE_1 = 0x82,
  INTRO_GAME_OVER = 0x83,
  INTRO_LAIR_5 = 0x84,
  INTRO_SPIRAL_C = 0x85,
  INTRO_SPIRAL_D = 0x86,
  INTRO_SPIRAL_E = 0x87,
  INTRO_SPIRAL_F = 0x88,
  INTRO_BANJO_HOUSE_2 = 0x89,
  INTRO_BANJO_HOUSE_3 = 0x8a,
  RBB_ANCHOR = 0x8b,
  SM_BANJO_HOUSE = 0x8c,
  MMM_INSIDE_LOGGO = 0x8d,
  GL_FURNACE_FUN = 0x8e,
  TTC_SHARKFOOD_ISLAND = 0x8f,
  GL_BATTLEMENTS = 0x90,
  FILE_SELECT = 0x91,
  GV_SECRET_CHAMBER = 0x92,
  GL_DINGPOT = 0x93,
  INTRO_SPIRAL_G = 0x94,
  END_SCENE_3 = 0x95,
  END_SCENE_1 = 0x96,
  END_SCENE_4 = 0x97,
  INTRO_GRUNTY_THREAT_1 = 0x98,
  INTRO_GRUNTY_THREAT_2 = 0x99,
}
