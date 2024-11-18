export const map = new Map();
// module AIGC
// {

// struct AchieveInfo
// {
//     0  optional int                            iHeroId = 0;                             // 英雄id
map.set('iHeroId', '英雄id');

//     1  optional string                         sAchieve;                                // 成就名 e.g.大杀四方
map.set('sAchieve', '成就名');

//     2  optional string                         sAchieveId;                              // 成就关联的id，用法取决于具体成就
map.set('sAchieveId', '成就关联的id');

//     3  optional int                            iCamp = 0;                               // 阵营 1:蓝 2:红
map.set('iCamp', '主播队伍id，1红，2蓝');

//     4  optional string                         sHeroName;                               // 英雄名称
map.set('sHeroName', '英雄名称');

//     5  optional string                         sAchieveDesc;                            // 成就进一步描述
map.set('sAchieveDesc', '成就进一步描述');

//     7  optional string                         sUniqueId;                               // 成就的唯一id，作为本成就的唯一标识
map.set('sUniqueId', '成就的唯一id');

//     8  optional int                            iType = 0;                               // 成就的类型, @see enum AchieveType
map.set('iType', '成就的类型');

//     9  optional string                         sSnapshots;                              // 视频封面
map.set('sSnapshots', '视频封面');

// };

// };

// module AIGC{

//     enum GokEventMsgType
//     {
//         //////// livelink事件开始  /////////////////////////////////////////////////////
//         kGEMTLiveLinkBegin = 10000,
//         kGEMTLLGameStart = 10101,       // 游戏开始  @see GEMLLGameStart
//         kGEMTLLGameOver = 10102,        // 游戏结束, @see GEMLLGameOver
//         kGEMTLLKillEvent = 10103,       // 击杀事件, @see GEMLLKillEvent
//         kGEMTLLHighlightAction = 10104,        // 高光事件, @see GEMLLHighlightAction
//         kGEMTLLTimedBroadcasting = 10105,      // 游戏数据广播(定时+变更时)，在识别到游戏对局后广播, @see GEMLLTimedBroadcasting
//         kGEMTLLAliveStateChanged = 10106,      // 英雄是否活着的状态变更, @see GEMLLAliveStateChanged

//         kGEMTLLSpecialAchieve = 16001,   // 草丛老六等特殊成就，@see GEMLLSpecialAchieve
//         kGEMTLiveLinkEnd = 19999,
//         //////// livelink事件结束

//         //////// 悟空识别的事件开始  ////////////////////////////////////////////////
//         kGEMTWuKongBegin = 20000,
//         kGEMTWKGameStart = 20101,        // 游戏开始, @see GEMWKGameStart
//         kGEMTWKGameOver = 20102,         // 游戏结束, @see GEMWKGameOver
//         kGEMTWKTimedBroadcasting = 20103,      // 游戏数据广播(定时+变更时)，在识别到游戏对局后广播, @see GEMWKTimedBroadcasting
//         kGEMTWKKillHighlight = 20104,          // 击杀高光横幅, @see GEMWKillHighlight
//         kGEMTWKBanPickStart = 20105,           // 新的bp开始, @see GEMWKBPInfo
//         kGEMTWKBanPickInfoChanged = 20106,     // bp信息发生变化, @see GEMWKBPInfo
//         kGEMTWKAnchorHeroChanged = 20107,      // 主播的英雄识别成功, @see GEMWKAnchorHeroChangeInfo
//         kGEMTWKSummaryPage = 20108,              // 游戏结束后的评分页, @see GEMWKSummaryPage

//         kGEMTWKLiveLinkMatchChanged = 28001,  // 和LiveLink对局的匹配状态变化，@see GEMWKLiveLinkMatchChanged
//         kGEMTWuKongEnd = 29999,
//         //////// 悟空识别的事件结束

//         ///////// 内部特殊事件区域，业务无需关心，也收不到  /////////////////////////
//         kInnerCustomMsgBegin = 10000000,
//         kStartGokEvent =       10000001,
//         kInnerCustomMsgEnd =   10009999,
//     };

//     struct GEMKDA
//     {
//         0  optional int           iKill;
map.set('iKill', '击杀次数');

//         1  optional int           iDeadCnt;
map.set('iDeadCnt', '死亡次数');

//         2  optional int           iAssistCnt;
map.set('iAssistCnt', '助攻次数');

//     };

//     struct GEMCampScores
//     {
//         0  optional int           iOur;    // 我方击杀数
map.set('iOur', '我方击杀数');
//         1  optional int           iEnemy;  // 敌方击杀数
map.set('iEnemy', '敌方击杀数');

//     };

//     struct GEMLLActor
//     {
//         0  optional int        iCamp;               // 队伍id
map.set('iCamp', '队伍id');
//         1  optional string     sHeroNameCN;         // 英雄的中文名
map.set('sHeroNameCN', '英雄的中文名');
//         2  optional int        iActorType;          // 类型     @see GEMLLActorType
map.set('iActorType', '类型');
//         3  optional int        iSubType;            // 子类型   @see GEMLLActorSunType
map.set('iSubType', '子类型');
//         4  optional int        iIsAnchor;           // 是否主播
map.set('iIsAnchor', '是否主播');
// 		5  optional int        iRuntimeId;          // rtid
map.set('iRuntimeId', 'rtid');

//     };

//     struct GEMLLEquipsInfo
//     {
//         0  optional int        iId;
map.set('iId', 'id');
//         1  optional int        iAmount;
map.set('iAmount', '金额');

//     };

//     struct GEMLLHeroInfo
//     {
//         0  optional GEMLLActor     tActor;                   // 对象信息
map.set('tActor', '对象信息');
//         1  optional GEMKDA         tKDA;                     // KDA
map.set('tKDA', 'KDA');
//         2  optional string         sAnchorHeroNameCN; // 主播的英雄名字，重复了，用tActor.sHeroNameCN
map.set('sAnchorHeroNameCN', '主播的英雄名字');
//         3  optional vector<GEMLLEquipsInfo>    vEquips;
map.set('vEquips', '装备');
//         4  optional int            iAccumulatedTimeInGrass;  // 本局累计在草里的时间，单位毫秒
map.set('iAccumulatedTimeInGrass', '本局累计在草里的时间，单位毫秒');
//         5  optional int            iMoney;                   // 当前经济
map.set('iMoney', '当前经济');
//         6  optional int            iHeroLevel;               // 英雄等级
map.set('iHeroLevel', '英雄等级');
//         7  optional int            iHp;                      // 血量
map.set('iHp', '血量');
//         8  optional int            iMaxHp;
map.set('iMaxHp', '满血时血量');
//     };

//     struct GEMLLTeamInfo
//     {
//         0  optional int        iCamp;   // 队伍id
map.set('iCamp', '队伍id');

//         1  optional int        iScore;  // 队伍分数
map.set('iScore', '队伍分数');

//     };

//     struct GEMLLGameBaseInfo
//     {
//         0  optional long          lPid;
map.set('lPid', '主播id');

//         1  optional string        sDeskFlag;
map.set('sDeskFlag', '对局标记');

//         2  optional long          lFrameNo;          // 对应帧的编号
map.set('lFrameNo', '对应帧的编号');

//         3  optional int           iGameTime;         // 游戏内的时间，单位秒(lFrameNo*66/1000)
map.set('iGameTime', '游戏内的时间');

//         4  optional int           iCamp;             // 主播队伍id
map.set('iCamp', '主播队伍id');

//         5  optional string        sAnchorHeroNameCN; // 主播的英雄名字
map.set('sAnchorHeroNameCN', '主播的英雄名字');

//         6  optional GEMKDA        tKDA;              // KDA
map.set('tKDA', 'KDA');

//         7  optional map<int,int>  mpCampScores;      // 队伍人头比<camp, count>
map.set('mpCampScores', '队伍人头比<camp, count>');

//         8  optional vector<GEMLLHeroInfo> vHeroInfo; // 10个英雄的信息
map.set('vHeroInfo', '10个英雄的信息');

// 		9  optional long          lFrameTs;          // 这帧的生产时间
map.set('lFrameTs', '这帧的生产时间');

// 		10 optional int           iAnchorRuntimeId;  // rtid
map.set('iAnchorRuntimeId', 'rtid');

//     };

//     struct GEMLLHeroStatInfo
//     {
//         0  optional GEMLLActor    tActor;              // 对象信息
map.set('tActor', '对象信息');
//         1  optional int           iTotalBlueBuff;      // 获得的蓝buff总数
map.set('iTotalBlueBuff', '获得的蓝buff总数');
//         2  optional int           iTotalRedBuff;       // 获得的红buff总数
map.set('iTotalRedBuff', '获得的红buff总数');

//         3  optional int           iScore;              // 评分
map.set('iScore', '评分');

//         4  optional int           iAcnt1MvpScoreTTH;   // 评分2
map.set('iAcnt1MvpScoreTTH', '评分2');

//         5  optional int           iMoney;              // 经济
map.set('iMoney', '经济');

//         6  optional int           iDestroyTowerCnt;    // 推塔数
map.set('iDestroyTowerCnt', '推塔数');

//     };

//     struct GEMLLGameStart
//     {
//         0  optional GEMLLGameBaseInfo tBaseInfo;          // 对局基本信息
map.set('tBaseInfo', '对局基本信息');

//     };

//     struct GEMLLGameOver
//     {
//         0  optional GEMLLGameBaseInfo tBaseInfo;          // 对局基本信息
map.set('tBaseInfo', '对局基本信息');

//         1  optional int               iWin;               // 1胜 0负
map.set('iWin', '对局胜负，1胜，0负');

//         2  optional vector<GEMLLHeroStatInfo>  vHeroStat; // 英雄的统计数据
map.set('vHeroStat', '英雄的统计数据');

//     };

//     enum GEMLLActorType
//     {
//         kHero = 0,                // 英雄
//         kMonster = 1,             // 怪物（兵线、野怪、龙）
//         kStructure = 2,           // 机关（防御塔、水晶）
//         kVisionWard = 3,          // 眼
//         kSummonedCharacter = 4,   // 召唤英雄（元歌傀儡等，不是召唤怪）
//         //5    子弹
//         //6    动态阻挡（女娲2技能等）
//         //7    交互物（血包等）
//         //8    神符（某些关卡里的特殊物品）
//         //9    机车（某些关卡里的特殊物品）
//     };

//     enum GEMLLActorSunType
//     {
//         kMinion = 11,           // 兵线士兵
//         kTyrant = 12,           // 暴君（3V3）
//         kGrandmaster = 13,      //大主宰（暗影主宰）
//         kBlueDaddy = 14,        //蓝爸爸 (Blue Buff)
//         kRedDaddy = 15,         // 红爸爸(Red Buff)
//         kSmallTyrant = 16,      // 小暴君 （暴君）
//         kGreatTyrant = 17,      //大暴君（黑暗暴君）
//         kSmallGrandmaster = 18, //小主宰（先知主宰）
//         kStormDragonKing = 19,  //风暴龙王
//         kNormalTurret = 21,     //普通炮塔
//         kHighGroundTurret = 22, //高地塔
//         kFountainTurret = 23,   //泉水塔
//         kNexusCrystal = 24,     //基地水晶
//     };

// 	struct GEMLLHitTargetInfo
// 	{
// 		0  optional int iHitTarget;             // 命中者的runtime id
map.set('iHitTarget', '命中者的runtime id');
// 		1  optional int iSkillId;               // 技能id
map.set('iSkillId', '技能id');
// 		2  optional int iSlotType;              // 槽类型
map.set('iSlotType', '槽类型');
// 		3  optional int iValue;                 // 造成的伤害
map.set('iValue', '造成的伤害');
// 	};

//     struct GEMLLKillEvent
//     {
//         0  optional GEMLLGameBaseInfo  tBaseInfo;             // 对局基本信息
map.set('tBaseInfo', '对局基本信息');
//         1  optional GEMLLActor         tKiller;               // 击杀者
map.set('tKiller', '击杀者');
//         2  optional GEMLLActor         tDeath;                // 被击杀者
map.set('tDeath', '被击杀者');
//         3  optional vector<GEMLLActor> vAssistor;             // 助攻者
map.set('vAssistor', '助攻者');
// 		4  optional vector<GEMLLHitTargetInfo> vTargetInfo;   // 击杀者使用的技能信息
map.set('vTargetInfo', '击杀者使用的技能信息');
//     };

// 	struct GEMLLSimpleKillEvent
//     {
//         1  optional GEMLLActor         tKiller;               // 击杀者
map.set('tKiller', '击杀者');
//         2  optional GEMLLActor         tDeath;                // 被击杀者
map.set('tDeath', '被击杀者');
//         3  optional vector<GEMLLActor> vAssistor;             // 助攻者
map.set('vAssistor', '助攻者');
// 		4  optional vector<GEMLLHitTargetInfo> vTargetInfo;   // 击杀者使用的技能信息
map.set('vTargetInfo', '击杀者使用的技能信息');
//     };

//     enum GEMLLVideoType
//     {
//         kNone = 0,                    // 无
//         kOneKill = 1,                 // 一杀
//         kDoubleKill = 2,              // 二杀
//         kTripleKill = 3,              // 三杀
//         kQuadraKill = 4,              // 四杀
//         kPentaKill = 5,               // 五杀
//         kKeyCrowdControl = 6,         // 关键群控
//         kPerfectCrowdControl = 7,     // 完美群控
//         kKeyEngage = 8,               // 关键开团
//         kKeyTeamfightDamage = 9,      // 关键团战输出
//         kPerfectTeamfightDamage = 10, // 完美团战输出
//         kKeyTeamfightTank = 11,       // 关键团战承伤
//         kPerfectTeamfightTank = 12,   // 完美团战承伤
//         kKeySteal = 13,               // 关键抢夺
//         kBullseye = 14,               // 百步穿杨
//         kCounterAttack = 15,          // 绝地反击
//         kFrenzyFlash = 16,            // 嗜血闪现
//         kTowerDive = 17,              // 塔下反杀
//         kSwiftKill = 18,              // 瞬杀时刻
//         kFashionista = 19,            // 换装达人
//         kUnmatchedElegance = 20,      // 绝世风华
//         kPowerOfThunder = 21,         // 雷霆之力
//         kReversalOfFate = 22,         // 逆转乾坤
//         kBladeOfTheHunt = 23,         // 狩猎之刃
//         kInfiniteCombo = 24,          // 月下无限连
//         kBladeOfReflection = 25,      // 破镜之刃
//         kNightHarvester = 26,         // 暗夜收割者
//         kFullFirepower = 27           // 火力全开
//     };

//     enum GEMLLVideoSpecialType
//     {
//         kNone = 0,        // 0 无
//         kRampage = 1,     // 1 大杀特杀
//         kDomination = 2,  // 2 主宰战场
//         kGodlike = 3,     // 3 超神
//         kMassacre = 4,    // 4 横扫千军
//         kUnstoppable = 5, // 5 天下无双
//         kAce = 6,         // 6 团灭
//         kTermination = 7, // 7 终结
//         kFirstBlood = 8,  // 8 一血
//     };

//     struct GEMLLHighlightAction
//     {
//         0  optional GEMLLGameBaseInfo tBaseInfo;         // 对局基本信息
map.set('tBaseInfo', '对局基本信息');
//         1  optional int               iType;             // 类型  @see GEMLLVideoType
map.set('iType', '类型');
//         2  optional int               iSpecialType;      // 特殊类型  @see GEMLLVideoSpecialType
map.set('iSpecialType', '特殊类型');
//         3  optional GEMLLActor        tHighlighter;      // 触发高光的对象
map.set('tHighlighter', '触发高光的对象');
//         //4  optional vector<GEMLLKillEvent>  vKillEvts;    // 可能关联的击杀信息
map.set('vKillEvts', '可能关联的击杀信息');
// 		5  optional long              lBeginTime;
map.set('lBeginTime', '开始时间');
// 		6  optional long              lEndTime;
map.set('lEndTime', '结束时间');
//         7  optional vector<GEMLLSimpleKillEvent>  vSimpleKillEvts;    // 可能关联的击杀信息
map.set('vSimpleKillEvts', '可能关联的简单击杀信息');
//     };

//     struct GEMLLTimedBroadcasting
//     {
//         0  optional GEMLLGameBaseInfo tBaseInfo;         // 对局基本信息
map.set('tBaseInfo', '对局基本信息');
//     };

//     struct GEMLLAliveStateChanged
//     {
//         0  optional GEMLLGameBaseInfo tBaseInfo;         // 对局基本信息
map.set('tBaseInfo', '对局基本信息');
//         1  optional GEMLLActor     tActor;                   // 对象信息
map.set('tActor', '对象信息');
//         2  optional int            iAlive;               // 1-活  0-死
map.set('iAlive', '是否存活');
//     };

//     struct GEMLLSpecialAchieve
//     {
//         0  optional GEMLLGameBaseInfo            tBaseInfo;               // 这条成就的全局唯一id
map.set('tBaseInfo', '这条成就的全局唯一id');
//         1  optional AchieveInfo                  tAchieveInfo;            // 成就类型, @see GEMLLAchieveType
map.set('tAchieveInfo', '成就类型');
//         2  optional int                          iIsAnchor;               // 是否主播
map.set('iIsAnchor', '是否主播');
//     };

//     //////// 悟空识别的事件开始
//     struct GEMWKBPHero
//     {
//         0  optional string           sAnchorNameCN;      // 英雄的中文名
map.set('sAnchorNameCN', '英雄的中文名');

//     };

//     struct GEMWKBPInfo
//     {
//         0  optional GEMWKBPHero           tAnchorHero;   // 主播选中的英雄
map.set('tAnchorHero', '主播选中的英雄');
//         1  optional vector<GEMWKBPHero>   vOurHeros;     // 我方的英雄
map.set('vOurHeros', '我方的英雄');
//         2  optional vector<GEMWKBPHero>   vEnemyHeros;   // 敌方的英雄
map.set('vEnemyHeros', '敌方的英雄');
//         3  optional vector<GEMWKBPHero>   vOurBanHeros;     // 我方ban的英雄
map.set('vOurBanHeros', '我方ban的英雄');
//         4  optional vector<GEMWKBPHero>   vEnemyBanHeros;   // 敌方ban的英雄
map.set('vEnemyBanHeros', '敌方ban的英雄');
//         5  optional int                   iReadjust = 0;    // 是不是最后调整阶段
map.set('iReadjust', '是不是最后调整阶段');
//     };

//     struct GEMWKGameBaseInfo
//     {
//         0  optional long          lStreamPts;        // 当前帧的pts
map.set('lStreamPts', '当前帧的pts');
//         1  optional int           iGameTime;         // 游戏内的时间，单位秒
map.set('iGameTime', '游戏内的时间');
//         2  optional string        sAnchorHeroNameCN; // 主播的英雄名字
map.set('sAnchorHeroNameCN', '主播的英雄名字');
//         3  optional GEMKDA        tKDA;              // KDA
map.set('tKDA', 'KDA');
//         4  optional GEMCampScores tCampScores;       // 双方比分
map.set('tCampScores', '双方比分');
//     };

//     // 悟空识别的对局对应的livelink场次，具体匹配情况
//     struct GEMWKLiveLinkMatchInfo
//     {
//         0  optional int                   iReliability;        // 可信度，范围[-100,100]，正数表示可信，负数表示不可信，-100为100%不可信，100为100%可信
map.set('iReliability', '可信度');
//         1  optional string                sDeskFlag;           // 对应对局的deskFlag
map.set('sDeskFlag', '对局标记');
//         2  optional long                  iGameStartTime;      // 对局的LiveLink游戏局内开始时间戳，单位秒
map.set('iGameStartTime', '对局的LiveLink游戏局内开始时间戳');
//         3  optional long                  iLoadingStartTime;   // 对局的游戏Loading开始时间戳
map.set('iLoadingStartTime', '对局的游戏Loading开始时间戳');
//         4  optional long                  iBeginPts;
map.set('iBeginPts', '开始pts');
//         5  optional long                  iLiveid;
map.set('iLiveid', '直播id');
//         6  optional GEMLLGameBaseInfo     tLLBaseInfo;         // sDeskFlag对应的对局的livelink基本信息
map.set('tLLBaseInfo', 'sDeskFlag对应的对局的livelink基本信息');
//     };

//     struct GEMWKLiveLinkMatchChanged
//     {
//         0  optional long                    iGameStartTime;     // 画面预估的游戏局内开始时间戳，单位秒
map.set('iGameStartTime', '画面预估的游戏局内开始时间戳');
//         1  optional GEMWKLiveLinkMatchInfo  tLLInfo;            // livelink匹配信息
map.set('tLLInfo', 'livelink匹配信息');
//     };

//     struct GEMWKGameStart
//     {
//         0  optional long                    iGameStartTime;     // 画面预估的游戏局内开始时间戳，单位秒
map.set('iGameStartTime', '画面预估的游戏局内开始时间戳');
//         1  optional GEMWKLiveLinkMatchInfo  tLLInfo;            // livelink匹配信息
map.set('tLLInfo', 'livelink匹配信息');
//         2  optional GEMWKBPInfo             tBPInfo;            // bp的信息
map.set('tBPInfo', 'bp的信息');
//         3  optional int                     iGameTime;          // 检测到新对局时，游戏内的时间，单位秒
map.set('iGameTime', '检测到新对局时，游戏内的时间');
//         4  optional long                    iStreamPts;
map.set('iStreamPts', 'pts');
//         5  optional GEMWKGameBaseInfo       tWKBaseInfo;         // 悟空识别到的基础对局数据
map.set('tWKBaseInfo', '悟空识别到的基础对局数据');
//     };

//     struct GEMWKGameOver
//     {
//         0  optional long                    iGameStartTime;        // 画面预估的游戏局内开始时间戳，单位秒。有概率为0，即探知失败
map.set('iGameStartTime', '画面预估的游戏局内开始时间戳');
//         1  optional GEMWKLiveLinkMatchInfo  tLLInfo;               // 废弃，这个时间点的livelink信息没用
map.set('tLLInfo', '废弃，这个时间点的livelink信息没用');
//         2  optional int                     iWin;                  // 1胜 0负
map.set('iWin', '对局胜负，1胜 0负');
//         3  optional string                  sOverType;             // 来自于wukong原始的text，选项为：difangtouxiang/wofangtouxiang/victory/lose
map.set('sOverType', '来自于wukong原始的text，选项为：difangtouxiang/wofangtouxiang/victory/lose');
//         4  optional long                    iStreamPts;
map.set('iStreamPts', 'pts');
//         5  optional GEMWKGameBaseInfo       tWKBaseInfo;           // 悟空识别到的基础对局数据
map.set('tWKBaseInfo', '悟空识别到的基础对局数据');
//     };

//     struct GEMWKTimedBroadcasting
//     {
//         0  optional GEMWKGameBaseInfo       tWKBaseInfo;           // 悟空识别到的基础对局数据
map.set('tWKBaseInfo', '悟空识别到的基础对局数据');

//     };

//     enum GEMWTeamType
//     {
//         kGEMWTTTeammate = 1, // 我方
//         kGEMWTTEnemy = 2,    // 敌方
//         kGEMWTTOther = 3     // 其他（野怪？？）
//     };

//     struct GEMWKillHighlightObj
//     {
//         0  optional string       sNameCN;           // 中文名
map.set('sNameCN', '中文名');
//         1  optional int          iTeamType;         // 队伍类型 @see GEMWTeamType
map.set('iTeamType', '队伍类型');
//         2  optional int          iIsHero;           // 是否英雄
map.set('iIsHero', '是否英雄');
//         3  optional int          iIsAnchor;         // 是否主播
map.set('iIsAnchor', '是否主播');
//     };

//     struct GEMWKillHighlight
//     {
//         0  optional GEMWKGameBaseInfo       tWKBaseInfo;           // 悟空识别到的基础对局数据
map.set('tWKBaseInfo', '悟空识别到的基础对局数据');
//         1  optional GEMWKillHighlightObj    tKiller;               // 击杀者
map.set('tKiller', '击杀者');
//         2  optional GEMWKillHighlightObj    tDeath;                // 被击杀者
map.set('tDeath', '被击杀者');
//     };

//     // 识别到的英雄发生变化，一般是第一次识别到主播英雄
//     struct GEMWKAnchorHeroChangeInfo
//     {
//         0  optional string        sAnchorHeroNameCN; // 主播的英雄名字
map.set('sAnchorHeroNameCN', '主播的英雄名字');
//     };

//     struct GEMWKSummaryPage
//     {
//         0  optional GEMWKGameBaseInfo       tWKBaseInfo;           // 悟空识别到的基础对局数据
map.set('tWKBaseInfo', '悟空识别到的基础对局数据');
//         1  optional int                     iAnchorIsMvp;          // 主播是否mvp
map.set('iAnchorIsMvp', '主播是否mvp');
//         2  optional int                     iWin;                  // 1胜 0负
map.set('iWin', '对局胜负，1胜 0负');
//         3  optional float                   fAnchorScore;          // 主播的评分，如10.9
map.set('fAnchorScore', '主播的评分');
//     };

//     // livelink事件，游戏胜利，废弃
//     //struct GEMLLGameWin
//     //{
//     //    0  optional GEMLLGameBaseInfo tBaseInfo;         // 对局基本信息
map.set('tBaseInfo', '对局基本信息');
//     //};

//     // livelink事件，游戏失败，废弃
//     //struct GEMLLGameLose
//     //{
//     //    0  optional GEMLLGameBaseInfo tBaseInfo;         // 对局基本信息
map.set('tBaseInfo', '对局基本信息');
//     //};

//     struct GokWukongResult254
//     {
//         0  optional long                            lPts;         // pts
map.set('lPts', 'pts');
//         1  optional string                          sJson;        // wukong result
map.set('sJson', '悟空结果');
//     };

//     struct GokEventMessage
//     {
//         0  optional long                            lPid;         // 主播uid
map.set('lPid', '主播uid');
//         1  optional long                            lCmdId;       // 命令id, 见enum GokEventMsgType
map.set('lCmdId', '命令id');
//         2  optional vector<byte>                    vData;        // 附加数据
map.set('vData', '附加数据');
//         3  optional string                          sMessage;     // 附加信息
map.set('sMessage', '附加信息');
//         4  optional map<string, string>             mpExtInfo;    // 扩展信息
map.set('mpExtInfo', '扩展信息');
//         5  optional long                            lProduceTime; // 消息的生产时间
map.set('lProduceTime', '消息的生产时间');
//         6  optional int                             iMsgType = 0; // 消息类型，为1的时候为livelink的消息，tBaseInfo有效
map.set('iMsgType', '消息类型');
//         7  optional GEMLLGameBaseInfo               tBaseInfo;    // iMsgType=1的时候有效
map.set('tBaseInfo', 'iMsgType=1的时候有效');
//     };

//     interface GameEventServerServant{

//     };
// };
