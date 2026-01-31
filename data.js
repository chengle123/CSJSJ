// 模板
const TEMPLATE = [
    {
        occupation: "", // 职业
        region: "", // 区域
        coordinates: "", // 坐标
        week: "", // 周
        weather: "", // 天气
        prerequisites: "", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
        // 记忆
        memory: {
            name: "", // 记忆名称
            quality: "", // 记忆质量
            cost: "", // 费用
            drops: [], // 掉落地址
        },
    },
];

// 职业
const OCCUPATION = [
    [
        "商人",
        "剑侠",
        "龙目",
        "忍士",
        "鬼咒",
        "魔导",
        "气功",
        "保镖",
        "守卫",
        "舞者",
        "霸者",
        "骑士",
        "牧师",
        "敏骑",
        "猎鹰",
        "野蛮",
        "斗士",
        "魔剑",
        "暗猎",
        "工程",
        "时导",
        "全能",
        "灵者",
    ],
    [
        "狂战",
        "剑圣",
        "麟目",
        "天鹰",
        "气宗",
        "蛮王",
        "鬼剑",
        "极骑",
        "盾卫",
        "上忍",
        "魔灭",
        "斗侠",
        "圣牧",
        "星灵",
        "无极",
        "海神",
        "散修",
    ],
];
const OCCUPATION_TEMPLATE = {
    商人: {
        region: 1, // 区域
        coordinates: "15/-17", // 坐标
        week: "周二休息", // 周
        weather: "", // 天气
        prerequisites: "牧师25级", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    剑侠: {
        region: 2, // 区域
        coordinates: "-63/48", // 坐标
        week: "", // 周
        weather: "", // 天气
        prerequisites: "", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    龙目: {
        region: 2, // 区域
        coordinates: "88/122", // 坐标
        week: "", // 周
        weather: "暗天气10级晚上", // 天气
        prerequisites: "初阶职业等级总和大于1000", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    忍士: {
        region: 3, // 区域
        coordinates: "38/-23", // 坐标
        week: "2/4/5/6/7", // 周
        weather: "", // 天气
        prerequisites: "猎鹰，敏骑35", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    鬼咒: {
        region: 4, // 区域
        coordinates: "201/1", // 坐标
        week: "周一休息", // 周
        weather: "", // 天气
        prerequisites: "魔导50，灵者35", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    魔导: {
        region: 4, // 区域
        coordinates: "380/31", // 坐标
        week: "", // 周
        weather: "", // 天气
        prerequisites: "", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    气功: {
        region: 4, // 区域
        coordinates: "244/-237", // 坐标
        week: "周六休息", // 周
        weather: "", // 天气
        prerequisites: "守卫，魔剑35", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    保镖: {
        region: 5, // 区域
        coordinates: "29/-612", // 坐标
        week: "晚上", // 周
        weather: "", // 天气
        prerequisites: "气功35，守卫50", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    守卫: {
        region: 5, // 区域
        coordinates: "90/-515", // 坐标
        week: "", // 周
        weather: "", // 天气
        prerequisites: "", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    舞者: {
        region: 5, // 区域
        coordinates: "81/-673", // 坐标
        week: "", // 周
        weather: "暴风和彩虹5级", // 天气
        prerequisites: "牧师50，灵者35", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    霸者: {
        region: 6, // 区域
        coordinates: "727/-113", // 坐标
        week: "", // 周
        weather: "", // 天气
        prerequisites: "", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    骑士: {
        region: 6, // 区域
        coordinates: "755/-177", // 坐标
        week: "", // 周
        weather: "下雨/落叶/雷暴5级", // 天气
        prerequisites: "斗士35，敏骑50", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    牧师: {
        region: 7, // 区域
        coordinates: "1105/-62", // 坐标
        week: "", // 周
        weather: "", // 天气
        prerequisites: "", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    敏骑: {
        region: 8, // 区域
        coordinates: "255/10", // 坐标
        week: "", // 周
        weather: "", // 天气
        prerequisites: "守卫，剑侠20", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    猎鹰: {
        region: 9, // 区域
        coordinates: "241/7", // 坐标
        week: "", // 周
        weather: "", // 天气
        prerequisites: "魔导，剑侠20", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    野蛮: {
        region: 10, // 区域
        coordinates: "254/42", // 坐标
        week: "", // 周
        weather: "", // 天气
        prerequisites: "霸者，守卫20", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    斗士: {
        region: 11, // 区域
        coordinates: "276/-50", // 坐标
        week: "", // 周
        weather: "", // 天气
        prerequisites: "霸者，剑侠20，", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    魔剑: {
        region: 12, // 区域
        coordinates: "277/-7", // 坐标
        week: "", // 周
        weather: "", // 天气
        prerequisites: "霸者，魔导20", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    暗猎: {
        region: 13, // 区域
        coordinates: "312/12", // 坐标
        week: "晚上", // 周
        weather: "", // 天气
        prerequisites: "魔剑50，剑侠35", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    工程: {
        region: 14, // 区域
        coordinates: "207/-79", // 坐标
        week: "周三休息", // 周
        weather: "", // 天气
        prerequisites: "霸者35，野蛮50", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    时导: {
        region: 15, // 区域
        coordinates: "-26/11", // 坐标
        week: "周四休息", // 周
        weather: "", // 天气
        prerequisites: "魔导50，猎鹰35", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    全能: {
        region: 16, // 区域
        coordinates: "-31/-2", // 坐标
        week: "周日休息", // 周
        weather: "", // 天气
        prerequisites: "初阶职业等级总和大于200", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    灵者: {
        region: 18, // 区域
        coordinates: "-4/42", // 坐标
        week: "周五休息", // 周
        weather: "", // 天气
        prerequisites: "牧师，魔导35", // 先决条件
        tasks: "", // 任务
        rank: 1, // 阶位
    },
    狂战: {
        region: 1, // 区域
        coordinates: "-27/25", // 坐标
        week: "", // 周
        weather: "", // 天气
        prerequisites: "霸者，斗士45", // 先决条件
        tasks: "20区+3副本", // 任务
        rank: 2, // 阶位
    },
    剑圣: {
        region: 2, // 区域
        coordinates: "-134/65", // 坐标
        week: "", // 周
        weather: "", // 天气
        prerequisites: "剑侠，猎鹰45", // 先决条件
        tasks: "22区+3副本", // 任务
        rank: 2, // 阶位
    },
    麟目: {
        region: 3, // 区域
        coordinates: "78/-2", // 坐标
        week: "周一休息", // 周
        weather: "", // 天气
        prerequisites: "龙目50", // 先决条件
        tasks: "19区+3副本", // 任务
        rank: 2, // 阶位
    },
    天鹰: {
        region: 4, // 区域
        coordinates: "400/-80", // 坐标
        week: "周六休息", // 周
        weather: "", // 天气
        prerequisites: "猎鹰，暗猎45", // 先决条件
        tasks: "26区+3副本", // 任务
        rank: 2, // 阶位
    },
    气宗: {
        region: 4, // 区域
        coordinates: "287/28", // 坐标
        week: "周日休息", // 周
        weather: "", // 天气
        prerequisites: "气功，舞者45", // 先决条件
        tasks: "32区+3副本", // 任务
        rank: 2, // 阶位
    },
    蛮王: {
        region: 5, // 区域
        coordinates: "137/-621", // 坐标
        week: "周五休息", // 周
        weather: "", // 天气
        prerequisites: "工程，野蛮45", // 先决条件
        tasks: "24区+3副本", // 任务
        rank: 2, // 阶位
    },
    鬼剑: {
        region: 5, // 区域
        coordinates: "44/-544", // 坐标
        week: "晚上", // 周
        weather: "", // 天气
        prerequisites: "魔剑，剑侠45", // 先决条件
        tasks: "34区+3副本", // 任务
        rank: 2, // 阶位
    },
    极骑: {
        region: 5, // 区域
        coordinates: "184/-665", // 坐标
        week: "周二休息", // 周
        weather: "", // 天气
        prerequisites: "敏骑，骑士45", // 先决条件
        tasks: "18区+3副本", // 任务
        rank: 2, // 阶位
    },
    盾卫: {
        region: 6, // 区域
        coordinates: "637/-43", // 坐标
        week: "", // 周
        weather: "", // 天气
        prerequisites: "守卫，霸者45", // 先决条件
        tasks: "33区+3副本", // 任务
        rank: 2, // 阶位
    },
    上忍: {
        region: 6, // 区域
        coordinates: "655/-98", // 坐标
        week: "", // 周
        weather: "暴风8级", // 天气
        prerequisites: "忍士，猎鹰45", // 先决条件
        tasks: "25区+3副本", // 任务
        rank: 2, // 阶位
    },
    魔灭: {
        region: 7, // 区域
        coordinates: "1101/-60", // 坐标
        week: "", // 周
        weather: "", // 天气
        prerequisites: "鬼咒，魔导45", // 先决条件
        tasks: "28区+3副本", // 任务
        rank: 2, // 阶位
    },
    斗侠: {
        region: 8, // 区域
        coordinates: "285/45", // 坐标
        week: "周三休息", // 周
        weather: "", // 天气
        prerequisites: "斗士，野蛮45", // 先决条件
        tasks: "23区+3副本", // 任务
        rank: 2, // 阶位
    },
    圣牧: {
        region: 19, // 区域
        coordinates: "1/-2", // 坐标
        week: "", // 周
        weather: "", // 天气
        prerequisites: "守卫，牧师45", // 先决条件
        tasks: "21区+3副本", // 任务
        rank: 2, // 阶位
    },
    星灵: {
        region: 20, // 区域
        coordinates: "0/5", // 坐标
        week: "周四休息", // 周
        weather: "", // 天气
        prerequisites: "灵者，时导45", // 先决条件
        tasks: "29区+3副本", // 任务
        rank: 2, // 阶位
    },
    无极: {
        region: 21, // 区域
        coordinates: "205/-36", // 坐标
        week: "", // 周
        weather: "所有5级", // 天气
        prerequisites: "全能，商人45", // 先决条件
        tasks: "31区+3副本", // 任务
        rank: 2, // 阶位
    },
    海神: {
        region: "无尽之海", // 区域
        coordinates: "海盗船上，旗子随机", // 坐标
        week: "", // 周
        weather: "4区下雨4级", // 天气
        prerequisites: "进阶职业大于200", // 先决条件
        tasks: "27区+3副本", // 任务
        rank: 2, // 阶位
    },
    散修: {
        region: "", // 区域
        coordinates: "", // 坐标
        week: "", // 周
        weather: "", // 天气
        prerequisites: "", // 先决条件
        tasks: "", // 任务
        rank: 2, // 阶位
    },
};

// 装备模板
const EQUIPMENT_TEMPLATE = {
    name: "",
    quality: "", // 装备质量
};

const EQUIPMENT_NAME = [
    "铜",
    "铁",
    "银",
    "金",
    "秘银",
    "轻型",
    "兽",
    "重型",
    "中型",
    "丝绸",
    "粗",
];
const EQUIPMENT_QUALITY = ["白", "蓝", "黄", "橙", "红", "紫"];
const EQUIPMENT_TYPE = [
    "盾",
    "铠甲",
    "皮手套",
    "皮护手",
    "头盔",
    "皮帽",
    "部帽",
    "手甲",
    "匕首",
];
// 记忆模板
const MEMORY_TEMPLATE = {
    name: "", // 记忆名称
    quality: "", // 记忆质量
    cost: "", // 费用
    occupation: "", // 职业
};
// 附魔模板
const ENCHANT_TEMPLATE = {
    name: "", // 附魔名称
    quality: "", // 附魔质量
};
const ENCHANT = [
    {
        name: "通用附魔", // 附魔名称
        quality: "白", // 附魔质量
    },
    {
        name: "盾牌附魔", // 附魔名称
        quality: "白", // 附魔质量
    },
    {
        name: "武器附魔", // 附魔名称
        quality: "白", // 附魔质量
    },
    {
        name: "戒指附魔", // 附魔名称
        quality: "白", // 附魔质量
    },
    {
        name: "耳环附魔", // 附魔名称
        quality: "白", // 附魔质量
    },
    {
        name: "项链附魔", // 附魔名称
        quality: "白", // 附魔质量
    },
    {
        name: "护手附魔", // 附魔名称
        quality: "白", // 附魔质量
    },
    {
        name: "手套附魔", // 附魔名称
        quality: "白", // 附魔质量
    },
    {
        name: "头部附魔", // 附魔名称
        quality: "白", // 附魔质量
    },
    {
        name: "肩部附魔", // 附魔名称
        quality: "白", // 附魔质量
    },
    {
        name: "裤子附魔", // 附魔名称
        quality: "白", // 附魔质量
    },
    {
        name: "腰带附魔", // 附魔名称
        quality: "白", // 附魔质量
    },
    {
        name: "鞋子附魔", // 附魔名称
        quality: "白", // 附魔质量
    },
    {
        name: "披风附魔", // 附魔名称
        quality: "白", // 附魔质量
    },
    {
        name: "防具附魔", // 附魔名称
        quality: "白", // 附魔质量
    },
    {
        name: "饰品附魔", // 附魔名称
        quality: "白", // 附魔质量
    },
];
// 核心模板
const CORE_TEMPLATE = {
    name: "", // 核心名称
    quality: "", // 核心质量
};
// 独特模板
const UNIQUE_TEMPLATE = {
    name: "", // 独特名称
    quality: "", // 独特质量
};

// 副本
const DUNGEONS = [
    {
        name: "1", // 副本名
        "+1": {
            equipment: [], //装备
            memory: [
                {
                    name: "力体智5", // 记忆名称
                    quality: "红", // 记忆质量
                    cost: "5", // 费用
                    occupation: "气功", // 职业
                },
                {
                    name: "力体4", // 记忆名称
                    quality: "橙", // 记忆质量
                    cost: "4", // 费用
                    occupation: "野蛮", // 职业
                },
                {
                    name: "命中4", // 记忆名称
                    quality: "蓝", // 记忆质量
                    cost: "4", // 费用
                    occupation: "猎鹰", // 职业
                },
                {
                    name: "连技3", // 记忆名称
                    quality: "蓝", // 记忆质量
                    cost: "3", // 费用
                    occupation: "斗士", // 职业
                },
                {
                    name: "防御2", // 记忆名称
                    quality: "白", // 记忆质量
                    cost: "2", // 费用
                    occupation: "守卫", // 职业
                },
                {
                    name: "全属1", // 记忆名称
                    quality: "白", // 记忆质量
                    cost: "1", // 费用
                    occupation: "龙目", // 职业
                },
                {
                    name: "魔力5", // 记忆名称
                    quality: "黄", // 记忆质量
                    cost: "5", // 费用
                    occupation: "时导", // 职业
                },
                {
                    name: "大力4", // 记忆名称
                    quality: "黄", // 记忆质量
                    cost: "4", // 费用
                    occupation: "骑士", // 职业
                },
                {
                    name: "敏体3", // 记忆名称
                    quality: "黄", // 记忆质量
                    cost: "3", // 费用
                    occupation: "敏骑", // 职业
                },
                {
                    name: "全属2", // 记忆名称
                    quality: "蓝", // 记忆质量
                    cost: "2", // 费用
                    occupation: "全能", // 职业
                },
                {
                    name: "弱点伤害1", // 记忆名称
                    quality: "白", // 记忆质量
                    cost: "1", // 费用
                    occupation: "全能", // 职业
                },
            ], //记忆
            enchant: [], //附魔
            core: [], //核心
            unique: [], //独特
        },
        "+2+3": {
            equipment: [], //装备
            memory: [], //记忆
            enchant: [], //附魔
            core: [], //核心
            unique: [], //独特
        },
    },
];
