// =========================================================================
// CONFIGURATION & CONSTANTS
// Acronyms:
// STMA = Short Term Moving Average
// LTMA = Long Term Moving Average
// MACD = Moving Average Convergence Divergence
// =========================================================================

// Calculation & Data Constants
const CHART_DATA_START_INDEX = 39;
const CHART_DATA_END_INDEX = 59;

// Raw Data Source
const sourceData = {
  monthlyDates: [
    "Dec-20",
    "Jan-21",
    "Feb-21",
    "Mar-21",
    "Apr-21",
    "May-21",
    "June-21",
    "July-21",
    "Aug-21",
    "Sep-21",
    "Oct-21",
    "Nov-21",
    "Dec-21",
    "Jan-22",
    "Feb-22",
    "Mar-22",
    "Apr-22",
    "May-22",
    "June-22",
    "July-22",
    "Aug-22",
    "Sep-22",
    "Oct-22",
    "Nov-22",
    "Dec-22",
    "Jan-23",
    "Feb-23",
    "Mar-23",
    "Apr-23",
    "May-23",
    "June-23",
    "July-23",
    "Aug-23",
    "Sep-23",
    "Oct-23",
    "Nov-23",
    "Dec-23",
    "Jan-24",
    "Feb-24",
    "Mar-24",
    "Apr-24",
    "May-24",
    "Jun-24",
    "July-24",
    "Aug-24",
    "Sep-24",
    "Oct-24",
    "Nov-24",
    "Dec-24",
    "Jan-25",
    "Feb-25",
    "Mar-25",
    "Apr-25",
    "May-25",
    "June-25",
    "July-25",
    "Aug-25",
    "Sep-25",
    "Oct-25",
  ],
  weeklyDates: [
    "09/20/24",
    "09/27/24",
    "10/4/24",
    "10/11/24",
    "10/18/24",
    "10/25/24",
    "11/1/24",
    "11/8/24",
    "11/15/24",
    "11/22/24",
    "11/29/24",
    "12/06/24",
    "12/13/24",
    "12/20/24",
    "12/27/24",
    "1/3/25",
    "1/10/25",
    "1/17/25",
    "1/24/25",
    "1/31/25",
    "2/7/25",
    "2/14/25",
    "2/21/25",
    "2/28/25",
    "3/7/25",
    "3/14/25",
    "3/21/25",
    "3/28/25",
    "4/4/25",
    "4/11/25",
    "4/17/25",
    "4/25/25",
    "5/02/25",
    "5/09/25",
    "5/16/25",
    "5/23/25",
    "5/30/25",
    "6/06/25",
    "6/13/25",
    "6/20/25",
    "6/27/25",
    "7/04/25",
    "7/11/25",
    "7/18/25",
    "7/25/25",
    "8/1/25",
    "8/8/25",
    "8/15/25",
    "8/22/25",
    "8/29/25",
    "9/5/25",
    "9/12/25",
    "9/19/25",
    "9/26/25",
    "10/03/25",
    "10/10/25",
    "10/17/25",
    "10/24/25",
    "10/31/25",
  ],
  dailyDates: [
    "8/12/25",
    "8/13/25",
    "8/14/25",
    "8/15/25",
    "8/18/25",
    "8/19/25",
    "8/20/25",
    "8/21/25",
    "8/22/25",
    "8/25/25",
    "8/26/25",
    "8/27/25",
    "8/28/25",
    "8/29/25",
    "9/1/25",
    "9/2/25",
    "9/3/25",
    "9/4/25",
    "9/5/25",
    "9/8/25",
    "9/9/25",
    "9/10/25",
    "9/11/25",
    "9/12/25",
    "9/15/25",
    "9/16/25",
    "9/17/25",
    "9/18/25",
    "9/19/25",
    "9/22/25",
    "9/23/25",
    "9/24/25",
    "9/25/25",
    "9/26/25",
    "9/29/25",
    "9/30/25",
    "10/1/25",
    "10/2/25",
    "10/3/25",
    "10/6/25",
    "10/7/25",
    "10/8/25",
    "10/9/25",
    "10/10/25",
    "10/13/25",
    "10/13/25",
    "10/15/25",
    "10/16/25",
    "10/17/25",
    "10/20/25",
    "10/21/25",
    "10/22/25",
    "10/23/25",
    "10/24/25",
    "10/27/25",
    "10/28/25",
    "10/29/25",
    "10/30/25",
    "10/31/25",
  ],
  goldMonthlyValue: [
    1898.39, 1847.74, 1734.38, 1707.92, 1771.95, 1903.46, 1770.45, 1814.18,
    1814.47, 1755.9, 1783.35, 1781.96, 1828.78, 1798.31, 1909.97, 1937.97,
    1896.99, 1836.62, 1807.33, 1766.26, 1711.04, 1660.95, 1633.69, 1768.24,
    1823.79, 1928.24, 1826.67, 1969.31, 1989.54, 1963.15, 1919.53, 1965.62,
    1939.86, 1848.82, 1893.9, 2036.17, 2062.97, 2039.16, 2044.29, 2242.4,
    2286.21, 2372.2, 2326.72, 2447.57, 2503.4, 2634.2, 2746.42, 2650.33,
    2623.82, 2798.13, 2857, 3124.3, 3295.67, 3288.64, 3308.7, 3291, 3446.81,
    3857.83, 4001.51,
  ],
  silverMonthlyValue: [
    26.4, 26.99, 26.67, 24.43, 25.93, 27.94, 26.13, 25.49, 23.9, 22.16, 23.89,
    22.84, 23.31, 22.48, 24.47, 24.78, 22.77, 21.53, 20.24, 20.36, 17.99, 19.04,
    19.17, 22.2, 23.97, 23.61, 20.9, 24.1, 25.05, 23.53, 22.77, 24.75, 24.44,
    22.19, 22.86, 25.27, 23.79, 22.94, 22.67, 25.03, 26.29, 30.41, 29.14, 29.01,
    28.87, 31.14, 32.68, 30.6, 28.89, 31.3, 31.12, 34.05, 32.55, 32.98, 36.08,
    36.67, 39.69, 46.65, 48.66,
  ],
  platinumMonthlyValue: [
    1072.85, 1073.25, 1194.9, 1189, 1203.2, 1185.75, 1074.1, 1050.35, 1016.6,
    967.8, 1019.31, 930.94, 968.48, 1025.48, 1048.63, 987.03, 932.22, 960.05,
    884.21, 889.2, 826.36, 865.2, 938.06, 1049.97, 1080.65, 1015.64, 953.42,
    995, 1083.13, 997.24, 904.83, 956.51, 974.26, 906.88, 937.31, 929.17, 994.2,
    920.29, 877.85, 906.3, 935.34, 1036.72, 992.82, 975.2, 924.13, 996.4,
    1009.52, 962, 919, 1002.9, 965.3, 1017.4, 986.7, 1073.6, 1362.46, 1308.8,
    1385.9, 1574, 1567,
  ],
  palladiumMonthlyValue: [
    2445.85, 2230.95, 2326.95, 2624, 2941.3, 2823.8, 2783.5, 2662.85, 2471.95,
    1912, 2001.84, 1727.99, 1896.34, 2344.32, 2491.58, 2251.45, 2305.73,
    1981.24, 1913.39, 2125.23, 2062.2, 2158.77, 1828.18, 1867.54, 1782.05,
    1633.13, 1410.11, 1452.46, 1495, 1357.01, 1222.07, 1279.67, 1228.02,
    1247.95, 1128.74, 1011.26, 1100.95, 982.34, 940.21, 1010.6, 953.82, 909.62,
    963.71, 912.64, 955.44, 1039.5, 1161.82, 1027, 918.9, 1053, 954.7, 1028.7,
    989.9, 1006.8, 1153.57, 1221.8, 1141.1, 1257.37, 1436.5,
  ],
  djiaMonthlyValue: [
    30606, 29982, 30923, 32985, 33875, 34529, 34502, 34935, 35359, 33843, 35820,
    34484, 36338, 35131, 33880, 34678, 32977, 32992, 30775, 32845, 31510, 28725,
    32733, 34590, 33147, 34086, 32657, 33274, 34105, 32921, 34408, 35560, 34722,
    33507, 33053, 35951, 37690, 38150, 38996, 39687, 37816, 38686, 39123, 40483,
    41563, 42330, 41763, 44910, 42544, 44545, 43480, 42002, 40753, 42270, 44095,
    44131, 45545, 46398, 47563,
  ],
  sp500MonthlyValue: [
    3756, 3714, 3811, 3973, 4181, 4204, 4298, 4395, 4523, 4307, 4605, 4567,
    4766, 4515, 4373, 4531, 4132, 4132, 3785, 4130, 3955, 3586, 3872, 4080,
    3840, 4077, 3981, 4109, 4170, 4181, 4450, 4589, 4508, 4288, 4194, 4568,
    4770, 4846, 5096, 5249, 5036, 5278, 5461, 5522, 5648, 5762, 5705, 6032,
    5882, 6041, 5955, 5612, 5604, 5912, 6205, 6339, 6460, 6688, 6840,
  ],
  goldWeeklyValue: [
    2592.6, 2635.92, 2657.97, 2653.27, 2657.03, 2721.12, 2746.56, 2735.8,
    2684.04, 2562.72, 2715.81, 2650.33, 2631.96, 2647.39, 2622.44, 2621.35,
    2638.41, 2689.76, 2702.12, 2770, 2798.13, 2860.14, 2882.09, 2934.96, 2857,
    2909.36, 2984.02, 3022.95, 3084.33, 3034.31, 3236.68, 3326.83, 3318.8,
    3240.61, 3326.46, 3201.78, 3357.52, 3288.64, 3309.25, 3431.78, 3368,
    3273.33, 3337.06, 3354.75, 3349.56, 3336.22, 3362.64, 3398.58, 3325.21,
    3371.24, 3446.81, 3585.61, 3642.64, 3684.49, 3759.83, 3886.83, 4017.85,
    4251.45, 4555.52,
  ],
  silverWeeklyValue: [
    31.39, 31.63, 32.19, 31.53, 33.7, 33.7, 32.44, 31.29, 30.24, 31.33, 30.6,
    30.98, 30.53, 29.37, 29.35, 29.6, 30.33, 30.32, 30.52, 31.3, 31.77, 32.11,
    32.42, 31.12, 32.51, 33.83, 33.03, 34.11, 29.59, 32.28, 32.55, 33.08, 32,
    32.72, 32.28, 33.48, 32.98, 35.97, 36.3, 35.97, 35.95, 36.91, 38.39, 38.15,
    38.16, 36.97, 38.34, 38.01, 38.89, 39.69, 40.98, 42.16, 43.06, 46.04, 47.96,
    50.13, 51.86, 48.62, 48.66,
  ],
  platinumWeeklyValue: [
    996.3, 1018.7, 1006.4, 1002.5, 1031.4, 1042.46, 1007.21, 987.4, 955, 978.3,
    962, 946.6, 939.8, 946.8, 935.8, 950.8, 972.7, 959.6, 969.7, 1002.9, 989.6,
    995.1, 987.5, 965.3, 986.3, 1012.1, 995.3, 1000.5, 945.3, 961.4, 985.4,
    992.46, 981.7, 1015.6, 1006.6, 1110.4, 1073.6, 1185.9, 1243.3, 1282.9,
    1355.5, 1412.8, 1415.5, 1445.3, 1414.7, 1324.1, 1347.5, 1355.1, 1376.2,
    1385.9, 1391.1, 1413.4, 1402, 1579.22, 1603.31, 1591, 1611, 1603, 1567,
  ],
  palladiumWeeklyValue: [
    1111, 1060, 1053, 1108.5, 1123.5, 1242.35, 1142.5, 1032.5, 993, 1058.6,
    1027, 1001, 992.5, 960.7, 952, 962.5, 987, 995.5, 1027.5, 1053, 1003.3,
    999.2, 1002.9, 954.7, 982.1, 999.2, 991.3, 1005.9, 954, 951.8, 997, 976.96,
    987.3, 1012.2, 997, 1033.9, 1006.8, 1081.8, 1066.3, 1082.8, 1167.3, 1168.6,
    1238.1, 1292, 1258.5, 1246.3, 1160, 1151.4, 1162.6, 1141.1, 1145.9, 1233.1,
    1190.5, 1268.27, 1261.98, 1417, 1468.19, 1416, 1436.5,
  ],
  djiaWeeklyValue: [
    42063, 42313, 42353, 42864, 43276, 42114, 42052, 43989, 43445, 44297, 44910,
    44643, 43282, 42840, 42992, 42732, 41938, 43488, 44424, 44545, 44303, 44546,
    43428, 43480, 42802, 41488, 41985, 41584, 38315, 40213, 39142, 40114, 41317,
    41249, 42655, 41603, 42270, 42763, 42198, 42206, 43819, 44829, 44372, 44342,
    44902, 43589, 44176, 44946, 45632, 45545, 45401, 45834, 46315, 46247, 46758,
    45480, 46191, 47207, 47563,
  ],
  sp500WeeklyValue: [
    5703, 5738, 5751, 5815, 5865, 5808, 5729, 5996, 5871, 5969, 6032, 6090,
    6051, 5931, 5971, 5942, 5827, 5997, 6101, 6041, 6026, 6115, 6013, 5955,
    5770, 5639, 5668, 5581, 5074, 5363, 5281, 5525, 5687, 5660, 5958, 5803,
    5912, 6000, 5977, 5968, 6173, 6227, 6260, 6297, 6389, 6238, 6389, 6450,
    6467, 6460, 6482, 6584, 6664, 6644, 6716, 6553, 6664, 6792, 6840,
  ],
  goldDailyValue: [
    3347.62, 3357.68, 3337.89, 3325.21, 3333.54, 3315.83, 3348.67, 3338.61,
    3371.24, 3365.23, 3389.65, 3396.12, 3421.98, 3446.81, 3476.1, 3536.89,
    3563.42, 3549.8, 3585.61, 3636.4, 3629.36, 3641.92, 3636.91, 3642.64,
    3678.89, 3689.54, 3659.3, 3643.85, 3684.49, 3747.58, 3764.28, 3729.94,
    3746.52, 3759.83, 3832.94, 3857.83, 3865.42, 3855.55, 3886.83, 3959.02,
    3984.6, 4040.75, 3976.28, 4017.85, 4110.02, 4141.54, 4206.58, 4327.22,
    4251.45, 4355.69, 4124.36, 4098.06, 4125.19, 4111.56, 3982.18, 3951.95,
    3929.66, 4024.31, 4001.51,
  ],
  silverDailyValue: [
    37.89, 38.52, 38, 38.01, 38.05, 37.31, 37.9, 38.12, 38.89, 38.56, 38.56,
    38.51, 39.11, 39.69, 40.71, 40.9, 41.12, 40.69, 40.98, 41.29, 40.92, 41.18,
    41.6, 42.16, 42.67, 42.54, 41.65, 41.79, 43.06, 43.98, 44.01, 43.89, 45.13,
    46.04, 46.91, 46.65, 47.28, 46.94, 47.96, 48.49, 47.75, 48.88, 49.21, 50.13,
    52.33, 51.41, 53.05, 54.14, 51.86, 52.39, 48.66, 48.44, 48.85, 48.62, 46.97,
    47.03, 47.49, 48.9, 48.66,
  ],
  platinumDailyValue: [
    1357.9, 1358.6, 1374.3, 1355.1, 1352.7, 1327.7, 1355.5, 1369.6, 1376.2,
    1361.3, 1363.3, 1365, 1374.4, 1385.9, 1430.5, 1425, 1438, 1391.3, 1391.1,
    1402.3, 1390.8, 1409.1, 1402.5, 1413.4, 1423.7, 1412, 1381.7, 1406.6, 1402,
    1416.5, 1471.5, 1468.5, 1521.5, 1579.22, 1604, 1574, 1561, 1570, 1603.31,
    1620.5, 1621, 1660.5, 1624, 1591, 1638.5, 1635, 1661.5, 1698, 1611, 1640,
    1548, 1638, 1623, 1603, 1587.5, 1585.5, 1582, 1605.5, 1567,
  ],
  palladiumDailyValue: [
    1168.1, 1167.6, 1181.4, 1151.4, 1161.9, 1145.6, 1154.5, 1142.1, 1162.6,
    1136, 1136.6, 1127.5, 1139.2, 1141.1, 1173.5, 1174, 1185, 1160.8, 1145.9,
    1175.9, 1175.5, 1211.5, 1229.4, 1233.1, 1234.1, 1213.9, 1191.3, 1203,
    1190.5, 1181.5, 1220.49, 1203, 1256.65, 1268.27, 1270.5, 1257.37, 1254.5,
    1253, 1261.98, 1307.9, 1340.9, 1442.1, 1408.4, 1417, 1479, 1519, 1547,
    1620.57, 1468.19, 1501.5, 1405.5, 1457.5, 1454, 1416, 1401, 1399, 1395.5,
    1450.5, 1436.5,
  ],
  djiaDailyValue: [
    43588, 43981, 44243, 44946, 45293, 45781, 45914, 46177, 46315, 46342, 46688,
    46247, 45842, 46001, 46270, 46398, 46551, 46792, 47563,
  ],
  sp500DailyValue: [
    6238, 6261, 6289, 6389, 6420, 6450, 6463, 6489, 6664, 6688, 6792, 6840,
  ],
};

// Indicators
const weightsSTMA = [
  0.0278, 0.0556, 0.0833, 0.1111, 0.1389, 0.1667, 0.1944, 0.2222,
];

const weightsLTMA = [
  0.00168, 0.00336, 0.00504, 0.00672, 0.0084, 0.01008, 0.01176, 0.01345,
  0.01513, 0.01681, 0.01849, 0.02017, 0.02185, 0.02353, 0.02521, 0.02689,
  0.02857, 0.03025, 0.03193, 0.03361, 0.03529, 0.03697, 0.03866, 0.04034,
  0.04202, 0.0437, 0.04538, 0.04706, 0.04874, 0.05042, 0.0521, 0.05378, 0.05546,
  0.05714,
];

const weightsSignal = [0.0667, 0.1333, 0.2, 0.2667, 0.3333];

// Map asset names to their data arrays
const sourceDataMap = {
  gold: {
    Monthly: sourceData.goldMonthlyValue,
    Weekly: sourceData.goldWeeklyValue,
    Daily: sourceData.goldDailyValue,
  },
  silver: {
    Monthly: sourceData.silverMonthlyValue,
    Weekly: sourceData.silverWeeklyValue,
    Daily: sourceData.silverDailyValue,
  },
  platinum: {
    Monthly: sourceData.platinumMonthlyValue,
    Weekly: sourceData.platinumWeeklyValue,
    Daily: sourceData.platinumDailyValue,
  },
  palladium: {
    Monthly: sourceData.palladiumMonthlyValue,
    Weekly: sourceData.palladiumWeeklyValue,
    Daily: sourceData.palladiumDailyValue,
  },
  djia: {
    Monthly: sourceData.djiaMonthlyValue,
    Weekly: sourceData.djiaWeeklyValue,
    Daily: sourceData.djiaDailyValue,
  },
  sp500: {
    Monthly: sourceData.sp500MonthlyValue,
    Weekly: sourceData.sp500WeeklyValue,
    Daily: sourceData.sp500DailyValue,
  },
};

// Ratios to be calculated from the source data
const ratioDefinitions = [
  { name: "gtsilv", numerator: "gold", denominator: "silver" },
  { name: "gtplat", numerator: "gold", denominator: "platinum" },
  { name: "gtpal", numerator: "gold", denominator: "palladium" },
  { name: "dtg", numerator: "djia", denominator: "gold" },
  { name: "dts", numerator: "djia", denominator: "silver" },
  { name: "sp500tg", numerator: "sp500", denominator: "gold" },
  { name: "sp500ts", numerator: "sp500", denominator: "silver" },
];
const timePeriods = ["Monthly", "Weekly", "Daily"];

// Chart Display Constants
const ASSETS = [
  "Gold",
  "Silver",
  "Platinum",
  "Palladium",
  "DJIA",
  "SP500",
  "GTSILV",
  "GTPLAT",
  "GTPAL",
  "DTG",
  "DTS",
  "SP500TG",
  "SP500TS",
];

// The types of the chart that are generated (117 charts in total)
const CHART_TYPE_KEYS = ["MVA", "MACD", "HIST"];
const CHART_TYPE_MAP = {
  MVA: "line",
  MACD: "line",
  HIST: "bar",
};

// The graph's legend text
const DATASET_LABELS = {
  CURRENT_VALUE: "Current Value",
  STMA: "Short Term Moving Average",
  LTMA: "Long Term Moving Average",
  MACD: "MACD",
  SIGNAL: "Signal Line",
  HISTOGRAM: "HISTOGRAM",
};

// Controls background and border color
const DATASET_COLORS = {
  // Line chart colors (MVA, MACD)
  CURRENT_VALUE: {
    backgroundColor: "rgba(0, 128, 0, 0.1)", // Green tint for current value area
    borderColor: "green", // Solid green line
    pointBackgroundColor: "green",
    pointBorderColor: "green",
    fill: true, // Fill under the line
  },
  STMA: {
    borderColor: "blue", // Blue line for short term MA
    pointBackgroundColor: "blue",
    pointBorderColor: "blue",
  },
  LTMA: {
    borderColor: "red", // Red line for long term MA
    pointBackgroundColor: "red",
    pointBorderColor: "red",
  },
  MACD: {
    borderColor: "orange", // Orange line for MACD
    pointBackgroundColor: "orange",
    pointBorderColor: "orange",
  },
  SIGNAL: {
    borderColor: "purple", // Purple line for Signal
    pointBackgroundColor: "purple",
    pointBorderColor: "purple",
  },
  // Bar chart colors (HIST)
  HISTOGRAM: {
    backgroundColor: (context) => {
      const value = context.dataset.data[context.dataIndex];
      // Positive bars are green, negative bars are red
      return value >= 0 ? "rgba(0, 128, 0, 0.6)" : "rgba(255, 0, 0, 0.6)";
    },
    borderColor: (context) => {
      const value = context.dataset.data[context.dataIndex];
      return value >= 0 ? "green" : "red";
    },
    borderWidth: 1,
  },
};

// Styling overrides for legend labels
const LEGEND_STYLES = {
  // Use for MACD charts (MACD, Signal, Histogram)
  NORMAL_WEIGHT: {
    labels: {
      color: "black",
      font: {
        weight: "normal",
      },
    },
  },
  // Use for HIST charts and non-Gold MVA charts
  NORMAL_WEIGHT_GRAY: {
    labels: {
      color: "gray",
      font: {
        weight: "normal",
      },
    },
  },
};

// =========================================================================
// SIZE-SPECIFIC CHART OPTIONS (NEW BLOCK ADDED HERE)
// These options will be merged for any chart whose ID ends with '_Small'.
// They override values in DEFAULT_CHART_OPTIONS.
// =========================================================================

const SMALL_CHART_OPTIONS = {
  options: {
    // Reduce font sizes for axes ticks and legend
    plugins: {
      legend: {
        labels: {
          font: {
            size: 10, // Smaller legend font (Default is 15)
          },
        },
      },
      title: {
        font: {
          size: 12, // Smaller title font (Default is 20)
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 10, // Smaller X-axis font (Default is 15)
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 10, // Smaller Y-axis font (Default is 15)
          },
        },
      },
    },
    // Adjust bar spacing for 'bar' charts (HIST)
    datasets: {
      bar: {
        // Less space used for the bar itself (thinner bar, default is 0.9)
        barPercentage: 0.7,
        // More space between bar groups (default is 0.8)
        categoryPercentage: 0.7,
      },
    },
  },
};

/**
 * Returns size-specific chart options based on element ID.
 * We use the suffix '_Small' to trigger the smaller configuration.
 * @param {string} elementId - The ID of the chart canvas element.
 * @returns {object} The chart options override object.
 */
function getChartSizeOptions(elementId) {
  if (elementId && elementId.endsWith("_Small")) {
    return SMALL_CHART_OPTIONS;
  }
  return {};
}

// =========================================================================
// DEFAULT CHART OPTIONS (Original Code)
// =========================================================================

const DEFAULT_CHART_OPTIONS = {
  options: {
    // Responsive, but maintaining aspect ratio of the canvas element
    responsive: true,
    maintainAspectRatio: false,
    // Plugins (like title, legend, tooltip)
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          color: "black",
          font: {
            size: 15,
            weight: "bold",
          },
          usePointStyle: true,
          pointStyle: "circle",
          padding: 30, // Space between legend items
        },
      },
      title: {
        display: true,
        padding: {
          top: 30,
          bottom: 10,
        },
        color: "black",
        font: {
          size: 20,
          weight: "bold",
        },
        text: "Default Chart Title",
      },
      tooltip: {
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 14,
        },
        padding: 10,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              // Standard number formatting logic for tooltips
              const value = context.parsed.y;
              if (
                Math.abs(value) > 10000000 ||
                (Math.abs(value) > 0 && Math.abs(value) < 0.001)
              ) {
                label += value.toExponential(4);
              } else if (Math.abs(value - Math.round(value)) < 0.001) {
                label += Math.round(value);
              } else {
                label += value.toFixed(2);
              }
            }
            return label;
          },
        },
      },
    },
    // Scales (Axes)
    scales: {
      x: {
        display: true,
        grid: {
          display: true,
          color: "rgba(128, 128, 128, 0.3)", // Gray grid lines
        },
        ticks: {
          color: "black",
          font: {
            size: 15,
            weight: "bold",
          },
        },
      },
      y: {
        display: true,
        grid: {
          display: true,
          color: "rgba(128, 128, 128, 0.3)",
        },
        ticks: {
          color: "black",
          font: {
            size: 15,
            weight: "bold",
          },
          // Used to format the values on the Y axis
          callback: function (value) {
            // 1. For very large or very small numbers
            if (
              Math.abs(value) > 10000000 ||
              (Math.abs(value) > 0 && Math.abs(value) < 0.001)
            ) {
              return value.toExponential(1);
            }
            // 2. For numbers that are effectively integers (like 5, 34000, or 1.999, etc.)
            if (Math.abs(value - Math.round(value)) < 0.001) {
              return Math.round(value);
            }
            // 3. For all other decimals (1.7, 1.2938...)
            // First, clean up any minor JS math errors
            const cleanValue = Number(value.toPrecision(15));
            // Convert to string to check decimal length
            const stringValue = String(cleanValue);
            // Check if it has a decimal point AND that decimal part is "messy"
            if (
              stringValue.includes(".") &&
              stringValue.split(".")[1].length > 2
            ) {
              // If it has > 2 decimal places, format it.
              // 1.2938... becomes "1.29"
              return cleanValue.toFixed(2);
            }
            // Otherwise, it's a "clean" decimal like 1.7
            return cleanValue;
          },
        },
      },
    },
    // Element styles (like bar thickness)
    elements: {
      line: {
        borderWidth: 2,
        tension: 0.1, // Smooth lines
      },
      point: {
        radius: 4, // Bigger points for visibility
        hoverRadius: 6,
      },
      bar: {
        borderWidth: 1,
      },
    },
    // Default bar configuration (can be overridden by SMALL_CHART_OPTIONS)
    datasets: {
      bar: {
        barPercentage: 0.9, // Thicker bars
        categoryPercentage: 0.8, // Less space between bar groups
      },
    },
  },
  // Plugin for chart background and border
  plugins: [
    {
      id: "customCanvasBackgroundColor",
      beforeDraw: (chart, args, options) => {
        const { ctx } = chart;
        ctx.save();
        // Draw the border first
        ctx.lineWidth = options.borderWidth || 10;
        ctx.strokeStyle = options.borderColor || "#000000";
        ctx.strokeRect(0, 0, chart.width, chart.height);
        // Draw the background behind everything
        ctx.globalCompositeOperation = "destination-over";
        // Draw the background
        ctx.fillStyle = options.color || "white";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    },
  ],
};

// =========================================================================
// UTILITY FUNCTIONS
// =========================================================================

// Functions used for processing the data
/**
 * Calculates the ratio between two arrays of numbers.
 * @param {number[]} numeratorArray - The array for the numerator.
 * @param {number[]} denominatorArray - The array for the denominator.
 * @returns {number[]} A new array containing the calculated ratios.
 */
function calculateRatioArray(numeratorArray, denominatorArray) {
  return numeratorArray.map((num, index) => {
    const numerator = parseFloat(num);
    const denominator = parseFloat(denominatorArray[index]);
    // Avoid division by zero, which would result in Infinity.
    if (denominator === 0) {
      return 0;
    }
    return numerator / denominator;
  });
}

// Constants that were initially magic values
const DATA_LENGTH = 59;
const STMA_WINDOW_OFFSET = weightsSTMA.length - 1; // 6
const LTMA_WINDOW_OFFSET = weightsLTMA.length - 1; // 33
const SIGNAL_WINDOW_OFFSET = weightsSignal.length - 1; // 4
const HISTOGRAM_START_OFFSET = LTMA_WINDOW_OFFSET + SIGNAL_WINDOW_OFFSET; // 37

/**
 * Calculates a weighted sum for a slice of an array.
 * @param {number[]} values - The array of source values.
 * @param {number[]} weights - The array of weights.
 * @param {number} startIndex - The starting index of the slice.
 * @param {number} endIndex - The ending index of the slice.
 * @returns {number} The calculated weighted sum.
 */
function calculateWeightedSum(values, weights, startIndex, endIndex) {
  const valueSlice = values.slice(startIndex, endIndex + 1);
  return valueSlice.reduce((accumulator, currentValue, index) => {
    const weightedValue = parseFloat(currentValue) * weights[index];
    return accumulator + weightedValue;
  }, 0); // Start the sum at 0
}

function calculateSTMA(sourceValues, weightValues) {
  // Array.from is used to create and populate the new array in one step.
  return Array.from({ length: DATA_LENGTH }, (_, index) => {
    // If the index is 6 or less, the final value is 0.
    if (index < STMA_WINDOW_OFFSET) {
      return 0;
    } else {
      return calculateWeightedSum(
        sourceValues,
        weightValues,
        index - STMA_WINDOW_OFFSET,
        index
      );
    }
  });
}

function calculateLTMA(sourceValues, weightValues) {
  return Array.from({ length: DATA_LENGTH }, (_, index) => {
    // If the index is 33 or less, the final value is 0.
    if (index < LTMA_WINDOW_OFFSET) {
      return 0;
    } else {
      return calculateWeightedSum(
        sourceValues,
        weightValues,
        index - LTMA_WINDOW_OFFSET,
        index
      );
    }
  });
}

/**
 * Calculates the Moving Average Convergence Divergence (MACD) values.
 * @param {number[]} stmaValue - The Short-Term Moving Average values.
 * @param {number[]} ltmaValue - The Long-Term Moving Average values.
 * @returns {number[]} An array of calculated MACD values.
 */
function calculateMACDValues(stmaValue, ltmaValue) {
  // Array.from is used to create and populate the new array in one step.
  return Array.from({ length: DATA_LENGTH }, (_, index) => {
    // For indices between 33 and 58 (inclusive), perform the subtraction.
    if (index >= LTMA_WINDOW_OFFSET) {
      return stmaValue[index] - ltmaValue[index];
    }
    // For all other indices (0-32), the value is 0.
    return 0;
  });
}

function calculateSignal(sourceValues, weightValues) {
  return Array.from({ length: DATA_LENGTH }, (_, index) => {
    // For indices 0-37, the value is 0.
    if (index < HISTOGRAM_START_OFFSET) {
      return 0;
    }
    // For indices 38-58, calculate the weighted sum.
    else {
      return calculateWeightedSum(
        sourceValues,
        weightValues,
        index - SIGNAL_WINDOW_OFFSET,
        index
      );
    }
  });
}

/**
 * Calculates the Histogram values from the MACD and Signal values.
 * @param {number[]} macdValues - The array of MACD values.
 * @param {number[]} signalValues - The array of Signal values.
 * @returns {number[]} An array of calculated Histogram values.
 */
function calculateHistogram(macdValues, signalValues) {
  return macdValues.map((macdValue, index) => {
    return index > HISTOGRAM_START_OFFSET ? macdValue - signalValues[index] : 0;
  });
}

// =========================================================================
// Chart Data Generation
// =========================================================================

/**
 * Creates a complete set of chart indicators (STMA, LTMA, MACD, etc.) for a given
 * asset across all time periods.
 * @param {string} assetName - The name of the asset (e.g., 'gold', 'dtg').
 * @param {object} assetValues - An object containing the asset's values for each period.
 * @returns {object} An object with all calculated indicators.
 */
function calculateAllIndicatorsForAsset(assetName, assetValues) {
  const result = {};

  timePeriods.forEach((period) => {
    const source = assetValues[period];

    const stma = calculateSTMA(source, weightsSTMA);
    const ltma = calculateLTMA(source, weightsLTMA);
    const macd = calculateMACDValues(stma, ltma);
    const signal = calculateSignal(macd, weightsSignal);
    const histogram = calculateHistogram(macd, signal);

    // Consistent naming convention for the keys
    result[`${assetName}${period}STMA`] = stma;
    result[`${assetName}${period}LTMA`] = ltma;
    result[`${assetName}${period}MACD`] = macd;
    result[`${assetName}${period}Signal`] = signal;
    result[`${assetName}${period}Histogram`] = histogram;
  });

  return result;
}

/**
 * Generates datasets for a specific chart type, asset, and time frame.
 * @param {string} assetName - The name of the asset (e.g., 'Gold', 'Silver').
 * @param {string} timeFrame - The time frame (e.g., 'Monthly', 'Weekly', 'Daily').
 * @param {string} chartType - The chart type key (e.g., 'MVA', 'MACD', 'HIST').
 * @returns {object[]} An array of dataset objects for Chart.js.
 */
function generateDatasets(assetName, timeFrame, chartType) {
  const assetKey = assetName.toLowerCase();
  const period = timeFrame;
  const datasets = [];

  // MVA Charts: Current Value, STMA, LTMA
  if (chartType === "MVA") {
    // Current Value Dataset
    datasets.push({
      label: DATASET_LABELS.CURRENT_VALUE,
      data: chartData[`${assetKey}${period}Value`],
      borderColor: DATASET_COLORS.CURRENT_VALUE.borderColor,
      backgroundColor: DATASET_COLORS.CURRENT_VALUE.backgroundColor,
      pointBackgroundColor: DATASET_COLORS.CURRENT_VALUE.pointBackgroundColor,
      pointBorderColor: DATASET_COLORS.CURRENT_VALUE.pointBorderColor,
      fill: DATASET_COLORS.CURRENT_VALUE.fill,
      order: 3, // Ensure current value is drawn on top
    });
    // STMA Dataset
    datasets.push({
      label: DATASET_LABELS.STMA,
      data: chartData[`${assetKey}${period}STMA`],
      borderColor: DATASET_COLORS.STMA.borderColor,
      pointBackgroundColor: DATASET_COLORS.STMA.pointBackgroundColor,
      pointBorderColor: DATASET_COLORS.STMA.pointBorderColor,
      order: 2,
    });
    // LTMA Dataset
    datasets.push({
      label: DATASET_LABELS.LTMA,
      data: chartData[`${assetKey}${period}LTMA`],
      borderColor: DATASET_COLORS.LTMA.borderColor,
      pointBackgroundColor: DATASET_COLORS.LTMA.pointBackgroundColor,
      pointBorderColor: DATASET_COLORS.LTMA.pointBorderColor,
      order: 1,
    });
  }

  // MACD Charts: MACD, Signal
  if (chartType === "MACD") {
    // MACD Dataset
    datasets.push({
      label: DATASET_LABELS.MACD,
      data: chartData[`${assetKey}${period}MACD`],
      borderColor: DATASET_COLORS.MACD.borderColor,
      pointBackgroundColor: DATASET_COLORS.MACD.pointBackgroundColor,
      pointBorderColor: DATASET_COLORS.MACD.pointBorderColor,
    });
    // Signal Line Dataset
    datasets.push({
      label: DATASET_LABELS.SIGNAL,
      data: chartData[`${assetKey}${period}Signal`],
      borderColor: DATASET_COLORS.SIGNAL.borderColor,
      pointBackgroundColor: DATASET_COLORS.SIGNAL.pointBackgroundColor,
      pointBorderColor: DATASET_COLORS.SIGNAL.pointBorderColor,
    });
  }

  // HIST Charts: Histogram
  if (chartType === "HIST") {
    // Histogram Dataset
    datasets.push({
      type: "bar",
      label: DATASET_LABELS.HISTOGRAM,
      data: chartData[`${assetKey}${period}Histogram`],
      backgroundColor: DATASET_COLORS.HISTOGRAM.backgroundColor,
      borderColor: DATASET_COLORS.HISTOGRAM.borderColor,
      borderWidth: DATASET_COLORS.HISTOGRAM.borderWidth,
      // Bar charts do not use point styles
      pointStyle: false,
    });
  }

  return datasets;
}

// DOM & Event Handling Functions
/**
 * Generates container IDs and filenames for a given time frame.
 * @param {string} timeFrame - The time frame (e.g., 'Monthly', 'Weekly', 'Daily').
 * @returns {{containers: string[], files: string[]}}
 */
function generateChartArtefacts(timeFrame) {
  const containers = [];
  const files = [];
  const timeFrameLower = timeFrame.toLowerCase();

  for (const asset of ASSETS) {
    for (const chartType of CHART_TYPE_KEYS) {
      containers.push(`${asset}_${chartType}_${timeFrame}`);
      files.push(
        `${asset.toLowerCase()}-${chartType.toLowerCase()}-latest_${timeFrameLower}.png`
      );
    }
  }
  return { containers, files };
}

/**
 * Sets up an event listener on a button to download a series of charts as PNGs.
 * @param {HTMLElement} button - The button element to attach the click listener to.
 * @param {string[]} containerIds - An array of canvas element IDs to download.
 * @param {string[]} filenames - An array of filenames for the downloaded images.
 */
function setupChartDownloader(button, containerIds, filenames) {
  const DOWNLOAD_INTERVAL = 500; // 0.5 seconds

  button.addEventListener("click", () => {
    let currentIndex = 0;
    const downloadIntervalId = setInterval(() => {
      if (currentIndex >= containerIds.length) {
        clearInterval(downloadIntervalId);
        return;
      }
      const chartId = containerIds[currentIndex];
      const currentChart = document.getElementById(chartId);

      if (currentChart) {
        const image = currentChart.toDataURL("image/png");

        // Create a temporary link to trigger the download
        const link = document.createElement("a");
        link.download = filenames[currentIndex];
        link.href = image;
        link.click();
      } else {
        console.error(`Chart with ID #${chartId} not found.`);
      }

      currentIndex++;
    }, DOWNLOAD_INTERVAL);
  });
}

/**
 * Finds a DOM element by its ID and updates its text content with the
 * last value from a given array. It handles cases where the element
 * is not found or the data is invalid.
 * @param {string} elementId - The ID of the DOM element to update.
 * @param {number[]} dataArray - The array containing the latest value.
 * @param {number} decimalPlaces - The number of decimal places for formatting.
 */
function updateDOMValue(elementId, dataArray, decimalPlaces = 2) {
  const element = document.getElementById(elementId);
  if (element && Array.isArray(dataArray) && dataArray.length > 0) {
    const lastValue = dataArray[dataArray.length - 1];
    if (typeof lastValue === "number" && !isNaN(lastValue)) {
      element.textContent = lastValue.toFixed(decimalPlaces);
    } else {
      element.textContent = "N/A";
    }
  } else if (element) {
    element.textContent = "N/A";
  }
}

// Current dates (these may need to be updated manually)
const MONTHLY_CURRENT_DATE = "October 2025";
const WEEKLY_CURRENT_DATE = "October 31, 2025";
const DAILY_CURRENT_DATE = "October 31, 2025";

// expose data globally so Wix can read it
window.jsData = {
  ...sourceData,
  MONTHLY_CURRENT_DATE,
  WEEKLY_CURRENT_DATE,
  DAILY_CURRENT_DATE,
};

// Update heading titles dynamically
function updateChartTitles() {
  const monthlyTitle = document.getElementById("monthlyTitle");
  const weeklyTitle = document.getElementById("weeklyTitle");
  const dailyTitle = document.getElementById("dailyTitle");

  if (monthlyTitle)
    monthlyTitle.textContent = `Monthly values ${MONTHLY_CURRENT_DATE} (long-term trend)`;
  if (weeklyTitle)
    weeklyTitle.textContent = `Weekly values ${WEEKLY_CURRENT_DATE} (short-term trend)`;
  if (dailyTitle)
    dailyTitle.textContent = `Daily values ${DAILY_CURRENT_DATE} (recent data)`;
}

// Run this after the DOM loads
document.addEventListener("DOMContentLoaded", updateChartTitles);

const CHART_TITLES = {
  Gold_MVA_Monthly: [
    "Gold - Long Term [Monthly Values] - & Moving Averages",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  Gold_MVA_Weekly: [
    "Gold, Medium-Term [Weekly Values] & Moving Averages",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  Gold_MVA_Daily: [
    "Gold, Short Term [Daily Values] & Moving Averages",
    `${DAILY_CURRENT_DATE}`,
  ],
  Gold_MACD_Monthly: [
    "Gold - Long Term [Monthly Values] - MACD & Signal Line",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  Gold_MACD_Weekly: [
    "Gold, Medium-Term [Weekly Values] - MACD & Signal Line",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  Gold_MACD_Daily: [
    "Gold, Short Term [Daily Values] MACD & Signal Line",
    `${DAILY_CURRENT_DATE}`,
  ],
  Gold_HIST_Monthly: [
    "Gold - Long Term [Monthly Values] - Histogram",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  Gold_HIST_Weekly: [
    "Gold, Medium-Term [Weekly Values] - Histogram",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  Gold_HIST_Daily: [
    "Gold, Short Term [Daily Values] - Histogram",
    `${DAILY_CURRENT_DATE}`,
  ],
  Silver_MVA_Monthly: [
    "Silver - Long Term [Monthly Values] - & Moving Averages",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  Silver_MVA_Weekly: [
    "Silver, Medium-Term [Weekly Values] & Moving Averages",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  Silver_MVA_Daily: [
    "Silver, Short Term [Daily Values] & Moving Averages",
    `${DAILY_CURRENT_DATE}`,
  ],
  Silver_MACD_Monthly: [
    "Silver - Long Term [Monthly Values] - MACD & Signal Line",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  Silver_MACD_Weekly: [
    "Silver, Medium-Term [Weekly Values] - MACD & Signal Line",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  Silver_MACD_Daily: [
    "Silver, Short Term [Daily Values] - MACD & Signal Line",
    `${DAILY_CURRENT_DATE}`,
  ],
  Silver_HIST_Monthly: [
    "Silver - Long Term [Monthly Values] - Histogram",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  Silver_HIST_Weekly: [
    "Silver, Medium-Term [Weekly Values] - Histogram",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  Silver_HIST_Daily: [
    "Silver, Short Term [Daily Values] - Histogram",
    `${DAILY_CURRENT_DATE}`,
  ],
  Platinum_MVA_Monthly: [
    "Platinum - Long Term [Monthly Values] - & Moving Averages",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  Platinum_MVA_Weekly: [
    "Platinum, Medium-Term [Weekly Values] & Moving Averages",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  Platinum_MVA_Daily: [
    "Platinum, Short Term [Daily Values] & Moving Averages",
    `${DAILY_CURRENT_DATE}`,
  ],
  Platinum_MACD_Monthly: [
    "Platinum - Long Term [Monthly Values] - MACD & Signal Line",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  Platinum_MACD_Weekly: [
    "Platinum, Medium-Term [Weekly Values] - MACD & Signal Line",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  Platinum_MACD_Daily: [
    "Platinum, Short Term [Daily Values] - MACD & Signal Line",
    `${DAILY_CURRENT_DATE}`,
  ],
  Platinum_HIST_Monthly: [
    "Platinum - Long Term [Monthly Values] - Histogram",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  Platinum_HIST_Weekly: [
    "Platinum, Medium-Term [Weekly Values] - Histogram",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  Platinum_HIST_Daily: [
    "Platinum, Short Term [Daily Values] - Histogram",
    `${DAILY_CURRENT_DATE}`,
  ],
  Palladium_MVA_Monthly: [
    "Palladium - Long Term [Monthly Values] - & Moving Averages",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  Palladium_MVA_Weekly: [
    "Palladium, Medium-Term [Weekly Values] & Moving Averages",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  Palladium_MVA_Daily: [
    "Palladium, Short Term [Daily Values] & Moving Averages",
    `${DAILY_CURRENT_DATE}`,
  ],
  Palladium_MACD_Monthly: [
    "Palladium - Long Term [Monthly Values] - MACD & Signal Line",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  Palladium_MACD_Weekly: [
    "Palladium, Medium-Term [Weekly Values] - MACD & Signal Line",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  Palladium_MACD_Daily: [
    "Palladium, Short-Term [Daily Values] - MACD & Signal Line",
    `${DAILY_CURRENT_DATE}`,
  ],
  Palladium_HIST_Monthly: [
    "Palladium - Long Term [Monthly Values] - Histogram",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  Palladium_HIST_Weekly: [
    "Palladium, Medium-Term [Weekly Values] - Histogram",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  Palladium_HIST_Daily: [
    "Palladium, Short Term [Daily Values] - Histogram",
    `${DAILY_CURRENT_DATE}`,
  ],
  DJIA_MVA_Monthly: [
    "DJIA - Long Term [Monthly Values] - & Moving Averages",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  DJIA_MVA_Weekly: [
    "DJIA, Medium-Term [Weekly Values] & Moving Averages",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  DJIA_MVA_Daily: [
    "DJIA, Short Term [Daily Values] & Moving Averages",
    `${DAILY_CURRENT_DATE}`,
  ],
  DJIA_MACD_Monthly: [
    "DJIA - Long Term [Monthly Values] - MACD & Signal Line",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  DJIA_MACD_Weekly: [
    "DJIA, Medium-Term [Weekly Values] - MACD & Signal Line",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  DJIA_MACD_Daily: [
    "DJIA, Short Term [Daily Values] - MACD & Signal Line",
    `${DAILY_CURRENT_DATE}`,
  ],
  DJIA_HIST_Monthly: [
    "DJIA - Long Term [Monthly Values] - Histogram",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  DJIA_HIST_Weekly: [
    "DJIA, Medium-Term [Weekly Values] - Histogram",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  DJIA_HIST_Daily: [
    "DJIA, Short Term [Daily Values] - Histogram",
    `${DAILY_CURRENT_DATE}`,
  ],
  SP500_MVA_Monthly: [
    "S&P500 - Long Term [Monthly Values] - & Moving Averages",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  SP500_MVA_Weekly: [
    "S&P500, Medium-Term [Weekly Values] & Moving Averages",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  SP500_MVA_Daily: [
    "S&P500, Short Term [Daily Values] & Moving Averages",
    `${DAILY_CURRENT_DATE}`,
  ],
  SP500_MACD_Monthly: [
    "S&P500 - Long Term [Monthly Values] - MACD & Signal Line",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  SP500_MACD_Weekly: [
    "S&P500, Medium-Term [Weekly Values] - MACD & Signal Line",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  SP500_MACD_Daily: [
    "S&P500, Short Term [Daily Values] - MACD & Signal Line",
    `${DAILY_CURRENT_DATE}`,
  ],
  SP500_HIST_Monthly: [
    "S&P500 - Long Term [Monthly Values] - Histogram",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  SP500_HIST_Weekly: [
    "S&P500, Medium-Term [Weekly Values] - Histogram",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  SP500_HIST_Daily: [
    "S&P500, Short Term [Daily Values] - Histogram",
    `${DAILY_CURRENT_DATE}`,
  ],
  GTSILV_MVA_Monthly: [
    "Gold-to-Silver Ratio - Long Term [Monthly Values] - & Moving Averages",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  GTSILV_MVA_Weekly: [
    "Gold-to-Silver Ratio, Medium-Term [Weekly Values] & Moving Averages",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  GTSILV_MVA_Daily: [
    "Gold-to-Silver Ratio, Short Term [Daily Values] & Moving Averages",
    `${DAILY_CURRENT_DATE}`,
  ],
  GTSILV_MACD_Monthly: [
    "Gold-to-Silver Ratio - Long Term [Monthly Values] - MACD & Signal Line",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  GTSILV_MACD_Weekly: [
    "Gold-to-Silver Ratio, Medium-Term [Weekly Values] - MACD & Signal Line",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  GTSILV_MACD_Daily: [
    "Gold-to-Silver Ratio, Short Term [Daily Values] - MACD & Signal Line",
    `${DAILY_CURRENT_DATE}`,
  ],
  GTSILV_HIST_Monthly: [
    "Gold-to-Silver Ratio - Long Term [Monthly Values] - Histogram",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  GTSILV_HIST_Weekly: [
    "Gold-to-Silver Ratio, Medium-Term [Weekly Values] - Histogram",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  GTSILV_HIST_Daily: [
    "Gold-to-Silver Ratio, Short Term [Daily Values] - Histogram",
    `${DAILY_CURRENT_DATE}`,
  ],
  GTPLAT_MVA_Monthly: [
    "Gold-to-Platinum Ratio - Long Term [Monthly Values] - & Moving Averages",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  GTPLAT_MVA_Weekly: [
    "Gold-to-Platinum Ratio, Medium-Term [Weekly Values] & Moving Averages",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  GTPLAT_MVA_Daily: [
    "Gold-to-Platinum Ratio, Short Term [Daily Values] & Moving Averages",
    `${DAILY_CURRENT_DATE}`,
  ],
  GTPLAT_MACD_Monthly: [
    "Gold-to-Platinum Ratio - Long Term [Monthly Values] - MACD & Signal Line",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  GTPLAT_MACD_Weekly: [
    "Gold-to-Platinum Ratio, Medium-Term [Weekly Values] - MACD & Signal Line",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  GTPLAT_MACD_Daily: [
    "Gold-to-Platinum Ratio, Short Term [Daily Values] - MACD & Signal Line",
    `${DAILY_CURRENT_DATE}`,
  ],
  GTPLAT_HIST_Monthly: [
    "Gold-to-Platinum Ratio - Long Term [Monthly Values] - Histogram",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  GTPLAT_HIST_Weekly: [
    "Gold-to-Platinum Ratio, Medium-Term [Weekly Values] - Histogram",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  GTPLAT_HIST_Daily: [
    "Gold-to-Platinum Ratio, Short Term [Daily Values] - Histogram",
    `${DAILY_CURRENT_DATE}`,
  ],
  GTPAL_MVA_Monthly: [
    "Gold-to-Palladium Ratio - Long Term [Monthly Values] - & Moving Averages",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  GTPAL_MVA_Weekly: [
    "Gold-to-Palladium Ratio, Medium-Term [Weekly Values] & Moving Averages",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  GTPAL_MVA_Daily: [
    "Gold-to-Palladium Ratio, Short Term [Daily Values] & Moving Averages",
    `${DAILY_CURRENT_DATE}`,
  ],
  GTPAL_MACD_Monthly: [
    "Gold-to-Palladium Ratio - Long Term [Monthly Values] - MACD & Signal Line",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  GTPAL_MACD_Weekly: [
    "Gold-to-Palladium Ratio, Medium-Term [Weekly Values] - MACD & Signal Line",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  GTPAL_MACD_Daily: [
    "Gold-to-Palladium Ratio, Short Term [Daily Values] - MACD & Signal Line",
    `${DAILY_CURRENT_DATE}`,
  ],
  GTPAL_HIST_Monthly: [
    "Gold-to-Palladium Ratio - Long Term [Monthly Values] - Histogram",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  GTPAL_HIST_Weekly: [
    "Gold-to-Palladium Ratio, Medium-Term [Weekly Values] - Histogram",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  GTPAL_HIST_Daily: [
    "Gold-to-Palladium Ratio, Short Term [Daily Values] - Histogram",
    `${DAILY_CURRENT_DATE}`,
  ],
  DTG_MVA_Monthly: [
    "DJIA-to-Gold Ratio - Long Term [Monthly Values] - & Moving Averages",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  DTG_MVA_Weekly: [
    "DJIA-to-Gold Ratio, Medium-Term [Weekly Values] & Moving Averages",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  DTG_MVA_Daily: [
    "DJIA-to-Gold Ratio, Short Term [Daily Values] & Moving Averages",
    `${DAILY_CURRENT_DATE}`,
  ],
  DTG_MACD_Monthly: [
    "DJIA-to-Gold Ratio - Long Term [Monthly Values] - MACD & Signal Line",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  DTG_MACD_Weekly: [
    "DJIA-to-Gold Ratio, Medium-Term [Weekly Values] - MACD & Signal Line",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  DTG_MACD_Daily: [
    "DJIA-to-Gold Ratio, Short Term [Daily Values] - MACD & Signal Line",
    `${DAILY_CURRENT_DATE}`,
  ],
  DTG_HIST_Monthly: [
    "DJIA-to-Gold Ratio - Long Term [Monthly Values] - Histogram",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  DTG_HIST_Weekly: [
    "DJIA-to-Gold Ratio, Medium-Term [Weekly Values] - Histogram",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  DTG_HIST_Daily: [
    "DJIA-to-Gold Ratio, Short Term [Daily Values] - Histogram",
    `${DAILY_CURRENT_DATE}`,
  ],
  DTS_MVA_Monthly: [
    "DJIA-to-Silver Ratio - Long Term [Monthly Values] - & Moving Averages",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  DTS_MVA_Weekly: [
    "DJIA-to-Silver Ratio, Medium-Term [Weekly Values] & Moving Averages",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  DTS_MVA_Daily: [
    "DJIA-to-Silver Ratio, Short Term [Daily Values] & Moving Averages",
    `${DAILY_CURRENT_DATE}`,
  ],
  DTS_MACD_Monthly: [
    "DJIA-to-Silver Ratio - Long Term [Monthly Values] - MACD & Signal Line",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  DTS_MACD_Weekly: [
    "DJIA-to-Silver Ratio, Medium-Term [Weekly Values] - MACD & Signal Line",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  DTS_MACD_Daily: [
    "DJIA-to-Silver Ratio, Short Term [Daily Values] - MACD & Signal Line",
    `${DAILY_CURRENT_DATE}`,
  ],
  DTS_HIST_Monthly: [
    "DJIA-to-Silver Ratio - Long Term [Monthly Values] - Histogram",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  DTS_HIST_Weekly: [
    "DJIA-to-Silver Ratio, Medium-Term [Weekly Values] - Histogram",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  DTS_HIST_Daily: [
    "DJIA-to-Silver Ratio, Short Term [Daily Values] - Histogram",
    `${DAILY_CURRENT_DATE}`,
  ],
  SP500TG_MVA_Monthly: [
    "S&P500-to-Gold Ratio - Long Term [Monthly Values] - & Moving Averages",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  SP500TG_MVA_Weekly: [
    "S&P500-to-Gold Ratio, Medium-Term [Weekly Values] & Moving Averages",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  SP500TG_MVA_Daily: [
    "S&P500-to-Gold Ratio, Short Term [Daily Values] & Moving Averages",
    `${DAILY_CURRENT_DATE}`,
  ],
  SP500TG_MACD_Monthly: [
    "S&P500-to-Gold Ratio - Long Term [Monthly Values] - MACD & Signal Line",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  SP500TG_MACD_Weekly: [
    "S&P500-to-Gold Ratio, Medium-Term [Weekly Values] - MACD & Signal Line",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  SP500TG_MACD_Daily: [
    "S&P500-to-Gold Ratio, Short Term [Daily Values] - MACD & Signal Line",
    `${DAILY_CURRENT_DATE}`,
  ],
  SP500TG_HIST_Monthly: [
    "S&P500-to-Gold Ratio - Long Term [Monthly Values] - Histogram",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  SP500TG_HIST_Weekly: [
    "S&P500-to-Gold Ratio, Medium-Term [Weekly Values] - Histogram",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  SP500TG_HIST_Daily: [
    "S&P500-to-Gold Ratio, Short Term [Daily Values] - Histogram",
    `${DAILY_CURRENT_DATE}`,
  ],
  SP500TS_MVA_Monthly: [
    "S&P500-to-Silver Ratio - Long Term [Monthly Values] - & Moving Averages",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  SP500TS_MVA_Weekly: [
    "S&P500-to-Silver Ratio, Medium-Term [Weekly Values] & Moving Averages",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  SP500TS_MVA_Daily: [
    "S&P500-to-Silver Ratio, Short Term [Daily Values] & Moving Averages",
    `${DAILY_CURRENT_DATE}`,
  ],
  SP500TS_MACD_Monthly: [
    "S&P500-to-Silver Ratio - Long Term [Monthly Values] - MACD & Signal Line",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  SP500TS_MACD_Weekly: [
    "S&P500-to-Silver Ratio, Medium-Term [Weekly Values] - MACD & Signal Line",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  SP500TS_MACD_Daily: [
    "S&P500-to-Silver Ratio, Short Term [Daily Values] - MACD & Signal Line",
    `${DAILY_CURRENT_DATE}`,
  ],
  SP500TS_HIST_Monthly: [
    "S&P500-to-Silver Ratio - Long Term [Monthly Values] - Histogram",
    `${MONTHLY_CURRENT_DATE}`,
  ],
  SP500TS_HIST_Weekly: [
    "S&P500-to-Silver Ratio, Medium-Term [Weekly Values] - Histogram",
    `${WEEKLY_CURRENT_DATE}`,
  ],
  SP500TS_HIST_Daily: [
    "S&P500-to-Silver Ratio, Short Term [Daily Values] - Histogram",
    `${DAILY_CURRENT_DATE}`,
  ],
};

// Custom charts configuration
const SCALES_OVERRIDES = {
  Gold_HIST_Monthly: {
    scales: {
      y: {
        min: 10,
      },
    },
  },
  Silver_MACD_Daily: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(1)),
        },
      },
    },
  },
  Silver_HIST_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(1)),
        },
      },
    },
  },
  Silver_HIST_Weekly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(1)),
        },
      },
    },
  },
  Silver_HIST_Daily: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(2)),
        },
      },
    },
  },
  Platinum_MACD_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(0)),
        },
      },
    },
  },
  Palladium_MACD_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(0)),
        },
      },
    },
  },
  DJIA_MACD_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(0)),
        },
      },
    },
  },
  SP500_MACD_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(0)),
        },
      },
    },
  },
  SP500_MVA_Weekly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(0)),
        },
      },
    },
  },
  SP500_MVA_Daily: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(0)),
        },
      },
    },
  },
  SP500_MACD_Weekly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(0)),
        },
      },
    },
  },
  SP500_MACD_Daily: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(0)),
        },
      },
    },
  },
  GTSILV_MVA_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => value.toFixed(0),
        },
      },
    },
  },
  GTSILV_MVA_Weekly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => value.toFixed(1),
        },
      },
    },
  },
  GTSILV_MVA_Daily: {
    scales: {
      y: {
        ticks: {
          callback: (value) => value.toFixed(1),
        },
      },
    },
  },
  GTSILV_MACD_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(0)),
        },
      },
    },
  },
  GTSILV_HIST_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(0)),
        },
      },
    },
  },
  GTPLAT_MVA_Weekly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(1)),
        },
      },
    },
  },
  GTPLAT_MACD_Weekly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(1)),
        },
      },
    },
  },
  GTPLAT_MVA_Daily: {
    scales: {
      y: {
        ticks: {
          callback: (value) => value.toFixed(2),
        },
      },
    },
  },
  GTPLAT_MACD_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(2)),
        },
      },
    },
  },
  GTPLAT_MACD_Daily: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(2)),
        },
      },
    },
  },
  GTPLAT_HIST_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(2)),
        },
      },
    },
  },
  GTPLAT_HIST_Weekly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(2)),
        },
      },
    },
  },
  GTPLAT_HIST_Daily: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(2)),
        },
      },
    },
  },
  GTPAL_MVA_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => value.toFixed(2),
        },
      },
    },
  },
  GTPAL_MVA_Weekly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => value.toFixed(2),
        },
      },
    },
  },
  GTPAL_MACD_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(2)),
        },
      },
    },
  },
  GTPAL_MACD_Weekly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(2)),
        },
      },
    },
  },
  GTPAL_MACD_Daily: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(2)),
        },
      },
    },
  },
  GTPAL_HIST_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(2)),
        },
      },
    },
  },
  DTG_MVA_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(2)),
        },
      },
    },
  },
  DTG_MVA_Weekly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => value.toFixed(1),
        },
      },
    },
  },
  DTG_MVA_Daily: {
    scales: {
      y: {
        ticks: {
          callback: (value) => value.toFixed(1),
        },
      },
    },
  },
  DTG_MACD_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(1)),
        },
      },
    },
  },
  DTG_HIST_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(1)),
        },
      },
    },
  },
  DTG_MACD_Weekly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(1)),
        },
      },
    },
  },
  DTG_MACD_Daily: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(2)),
        },
      },
    },
  },
  DTG_HIST_Weekly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(1)),
        },
      },
    },
  },
  DTG_HIST_Daily: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(2)),
        },
      },
    },
  },
  SP500TG_MVA_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(1)),
        },
      },
    },
  },
  SP500TG_MVA_Weekly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(2)),
        },
      },
    },
  },
  SP500TG_MACD_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(2)),
        },
      },
    },
  },
  SP500TG_HIST_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(2)),
        },
      },
    },
  },
  SP500TG_HIST_Weekly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(3)),
        },
      },
    },
  },
  SP500TS_MVA_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => value.toFixed(0),
        },
      },
    },
  },
  SP500TS_MVA_Weekly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => value.toFixed(1),
        },
      },
    },
  },
  SP500TS_MVA_Daily: {
    scales: {
      y: {
        ticks: {
          callback: (value) => value.toFixed(2),
        },
      },
    },
  },
  SP500TS_MACD_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(1)),
        },
      },
    },
  },
  SP500TS_MACD_Weekly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(2)),
        },
      },
    },
  },
  SP500TS_HIST_Monthly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => value.toFixed(0),
        },
      },
    },
  },
  SP500TS_HIST_Weekly: {
    scales: {
      y: {
        ticks: {
          callback: (value) => value.toFixed(0),
        },
      },
    },
  },
  SP500TS_HIST_Daily: {
    scales: {
      y: {
        ticks: {
          callback: (value) => (value === 0 ? "0" : value.toFixed(1)),
        },
      },
    },
  },
};

function getScalesOverride(elementId) {
  // Check for the base ID if it's a small chart
  const baseId = elementId.endsWith("_Small")
    ? elementId.slice(0, -6)
    : elementId;
  return SCALES_OVERRIDES[baseId] || {};
}

/**
 * Simple deep merge function to combine chart options.
 */
function deepMerge(target, source) {
  const output = { ...target };

  if (
    target &&
    typeof target === "object" &&
    source &&
    typeof source === "object"
  ) {
    for (const key in source) {
      if (
        source[key] &&
        typeof source[key] === "object" &&
        !Array.isArray(source[key])
      ) {
        if (!(key in target)) {
          output[key] = source[key];
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    }
  }
  return output;
}

/**
 * Function to create each chart
 */
function createChart({ elementId, type, labels, text, datasets, ...rest }) {
  if (!elementId) return;

  const canvas = document.getElementById(elementId);
  if (!canvas) {
    console.error(`Canvas element not found for ID: ${elementId}`);
    return;
  }

  const ctx = canvas.getContext("2d");

<<<<<<< HEAD
  // Chart.js requires the dataset configuration to be merged *before* initialization
  const config = createChartConfig(elementId, datasets, labels);

  new Chart(ctx, config);
}

/**
 * Generates the complete Chart.js configuration object by merging defaults,
 * size overrides, and specific overrides. (MODIFIED)
 * @param {string} elementId - The ID of the chart canvas element.
 * @param {object[]} datasets - The dataset array for the chart.
 * @param {string[]} dateLabels - The date labels for the X-axis.
 * @returns {object} The complete Chart.js configuration object.
 */
function createChartConfig(elementId, datasets, dateLabels) {
  const type = getChartTypeFromId(elementId);
  const scaleOverrides = getScalesOverride(elementId);
  const legendOverrides = getLegendStyle(elementId);

  // 1. Get size-specific chart options (NEW)
  const sizeOverrides = getChartSizeOptions(elementId);

  // 2. Get chart title. If the chart ID is the small one, remove the '_Small' suffix
  // to find the correct title in the CHART_TITLES map.
  const chartTitleKey = elementId.endsWith("_Small")
    ? elementId.slice(0, -6)
    : elementId;
  const chartTitle = CHART_TITLES[chartTitleKey];

  // 3. Merge all configuration pieces: Default -> Size Override -> Scale Override
  // The size override must come after the default to apply smaller fonts.
  let config = deepMerge(DEFAULT_CHART_OPTIONS, sizeOverrides);
  config = deepMerge(config, scaleOverrides);
=======
  // Default configuration for the charts
  // const defaultOptions = {
  //   elements: {
  //     line: {
  //       tension: 0.4,
  //     },
  //   },
  //   plugins: {
  //     legend: {
  //       display: true,
  //       position: "top",
  //       labels: {
  //         color: "black",
  //         font: {
  //           weight: "bold",
  //           size: 15,
  //         },
  //       },
  //     },
  //     title: {
  //       display: true,
  //       text: text,
  //       color: "black",
  //       font: {
  //         size: 17,
  //         family: "Arial",
  //       },
  //     },
  //     customCanvasBackgroundColor: {
  //       color: "white",
  //       borderColor: "#000000",
  //       borderWidth: 10,
  //     },
  //   },
  //   scales: {
  //     x: {
  //       ticks: {
  //         autoSkip: false,
  //         maxRotation: 90,
  //         minRotation: 90,
  //         color: "black",
  //         font: {
  //           size: 15,
  //           weight: "bold",
  //         },
  //       },
  //     },
  //     y: {
  //       ticks: {
  //         color: "black",
  //         font: {
  //           size: 15,
  //           weight: "bold",
  //         },
  //         // Used to format the values on the Y axis
  //         callback: function (value) {
  //           // 1. For very large or very small numbers
  //           if (
  //             Math.abs(value) > 10000000 ||
  //             (Math.abs(value) > 0 && Math.abs(value) < 0.001)
  //           ) {
  //             return value.toExponential(1);
  //           }

  //           // 2. For numbers that are effectively integers (like 5, 34000, or 1.999, etc.)
  //           if (Math.abs(value - Math.round(value)) < 0.001) {
  //             return Math.round(value);
  //           }

  //           // 3. For all other decimals (1.7, 1.2938...)
  //           // First, clean up any minor JS math errors
  //           const cleanValue = Number(value.toPrecision(15));

  //           // Convert to string to check decimal length
  //           const stringValue = String(cleanValue);

  //           // Check if it has a decimal point AND that decimal part is "messy"
  //           if (
  //             stringValue.includes(".") &&
  //             stringValue.split(".")[1].length > 2
  //           ) {
  //             // If it has > 2 decimal places, format it.
  //             // 1.2938... becomes "1.29"
  //             return cleanValue.toFixed(2);
  //           }

  //           // Otherwise, it's a "clean" decimal like 1.7. Return it.
  //           return cleanValue; // 1.7 stays 1.7
  //         },
  //       },
  //     },
  //   },
  //   layout: {
  //     padding: {
  //       left: 30,
  //       right: 30,
  //       top: 30,
  //       bottom: 30,
  //     },
  //   },
  // };





//   function getChartOptions(canvasElement, text) {
    // 1. Determine size based on the custom attribute
    const size = canvasElement.getAttribute('data-chart-size') || 'small';

    // 2. Define dynamic sizes
    let baseFontSize, titleFontSize;
    let lineThickness, pointSize;

    if (size === 'large') {
        // --- LARGE CHART SETTINGS ---
        baseFontSize = 14; 
        titleFontSize = 18; 
        lineThickness = 3;   // Thicker Line
        pointSize = 5;       // Bigger Dots
    } else {
        // --- SMALL CHART SETTINGS ---
        baseFontSize = 6;
        titleFontSize = 8;
        lineThickness = 1.5; // Thinner Line
        pointSize = 2.5;     // Smaller Dots
    }

    // 3. Define and return the options object dynamically
    const options = {
        elements: {
            line: {
                tension: 0.4,
                borderWidth: lineThickness, // <-- Dynamic Line Thickness
            },
            point: {
                radius: pointSize,        // <-- Dynamic Dot Size
                hitRadius: pointSize + 2, // Larger hit area for easier clicking on dots
            },
        },
        plugins: {
            legend: {
                display: true,
                position: "top",
                labels: {
                    color: "black",
                    font: {
                        weight: "bold",
                        size: baseFontSize, // Dynamic Font Size
                    },
                },
            },
            title: {
                display: true,
                text: text,
                color: "black",
                font: {
                    size: titleFontSize, // Dynamic Font Size
                    family: "Arial",
                },
            },
            customCanvasBackgroundColor: {
                color: "white",
                borderColor: "#000000",
                borderWidth: 10,
            },
        },
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90,
                    color: "black",
                    font: {
                        size: baseFontSize, // Dynamic Font Size
                        weight: "bold",
                    },
                },
            },
            y: {
                ticks: {
                    color: "black",
                    font: {
                        size: baseFontSize, // Dynamic Font Size
                        weight: "bold",
                    },
                    // Y-Axis formatting logic (remains the same)
                    callback: function (value) {
                        if (
                            Math.abs(value) > 10000000 ||
                            (Math.abs(value) > 0 && Math.abs(value) < 0.001)
                        ) {
                            return value.toExponential(1);
                        }

                        if (Math.abs(value - Math.round(value)) < 0.001) {
                            return Math.round(value);
                        }

                        const cleanValue = Number(value.toPrecision(15));
                        const stringValue = String(cleanValue);

                        if (
                            stringValue.includes(".") &&
                            stringValue.split(".")[1].length > 2
                        ) {
                            return cleanValue.toFixed(2);
                        }

                        return cleanValue;
                    },
                },
            },
        },
        layout: {
            padding: {
                left: 30,
                right: 30,
                top: 30,
                bottom: 30,
            },
        },
    };
    return options;
}


>>>>>>> bad9e5045d7309f1f635fc403dc0c69c6ba9ffbf

  return deepMerge(config, {
    type: type,
    data: {
      labels: dateLabels,
      datasets: datasets,
    },
    options: {
      plugins: {
        title: {
          // Use the retrieved title
          text: chartTitle,
        },
        legend: {
          // Merge legend overrides to ensure font size is kept from sizeOverrides
          labels: deepMerge(
            config.options.plugins.legend.labels,
            legendOverrides
          ),
        },
      },
    },
    // The customCanvasBackgroundColor is already in the merged config via DEFAULT_CHART_OPTIONS
    // We explicitly merge it here to ensure it's at the end of the plugins array if needed,
    // but the deepMerge on the 'config' object already handles the plugin array correctly
  });
}

function getChartTypeFromId(elementId) {
  if (!elementId || typeof elementId !== "string") {
    return "line"; // Default to 'line' if ID is invalid
  }

  const parts = elementId.split("_");
  // The type is expected to be the second part (e.g., "Gold_MVA_Monthly")
  return parts.length > 1 ? CHART_TYPE_MAP[parts[1]] || "line" : "line";
}

function getLegendStyle(elementId) {
  if (!elementId || typeof elementId !== "string") {
    return {};
  }

  // Use the base ID for style lookups
  const baseId = elementId.endsWith("_Small")
    ? elementId.slice(0, -6)
    : elementId;
  const [asset, chartType] = baseId.split("_");

  // Apply 'normal' font weight to all MACD charts
  if (chartType === "MACD") {
    return LEGEND_STYLES.NORMAL_WEIGHT;
  }
  // Apply 'normal' font weight and 'gray' color for HIST charts and MVA charts that are NOT for Gold.
  if (chartType === "HIST" || (chartType === "MVA" && asset !== "Gold")) {
    return LEGEND_STYLES.NORMAL_WEIGHT_GRAY;
  }
  // Return no override for Gold MVA charts and any other cases.
  return {};
}

// =========================================================================
// Main Execution Logic
// =========================================================================

// Calculate Ratios first
const allValues = { ...sourceDataMap };
ratioDefinitions.forEach((ratio) => {
  allValues[ratio.name] = {};
  timePeriods.forEach((period) => {
    const numeratorData = sourceDataMap[ratio.numerator][period];
    const denominatorData = sourceDataMap[ratio.denominator][period];

    allValues[ratio.name][period] = calculateRatioArray(
      numeratorData,
      denominatorData
    );
  });
});

// Define all assets, including base assets and calculated ratios.
const allAssets = [
  ...Object.keys(sourceDataMap),
  ...ratioDefinitions.map((r) => r.name),
];

// Calculate all indicators for all assets and store them in one object.
const chartData = allAssets.reduce((acc, assetName) => {
  const assetIndicators = calculateAllIndicatorsForAsset(
    assetName,
    allValues[assetName]
  );
  return { ...acc, ...assetIndicators };
}, {});

<<<<<<< HEAD
=======

>>>>>>> bad9e5045d7309f1f635fc403dc0c69c6ba9ffbf
// Dynamically generate the list of values to update in the DOM.
const valuesToUpdate = [];
Object.keys(sourceDataMap).forEach((asset) => {
  timePeriods.forEach((period) => {
    const id = `${asset}${period}Value`;
    valuesToUpdate.push({ id, data: allValues[asset][period] });
  });
});
ratioDefinitions.forEach((ratio) => {
  timePeriods.forEach((period) => {
    const id = `${ratio.name}${period}Value`;
    valuesToUpdate.push({ id, data: allValues[ratio.name][period] });
  });
});

// Perform the DOM updates for all specified values
valuesToUpdate.forEach(({ id, data }) => {
  // Use 0 decimal places for DJIA and S&P500, 2 for the rest
  const decimalPlaces = id.startsWith("djia") || id.startsWith("sp500") ? 0 : 2;
  updateDOMValue(id, data, decimalPlaces);
});

<<<<<<< HEAD
// Generate all configurations
const allChartConfigs = [];
timePeriods.forEach((timeFrame) => {
  const labels = sourceData[`${timeFrame.toLowerCase()}Dates`].slice(
    CHART_DATA_START_INDEX,
    CHART_DATA_END_INDEX + 1
  );

  ASSETS.forEach((asset) => {
    CHART_TYPE_KEYS.forEach((chartType) => {
      const elementId = `${asset}_${chartType}_${timeFrame}`;
      const datasets = generateDatasets(asset, timeFrame, chartType);

      allChartConfigs.push({
        elementId,
        type: CHART_TYPE_MAP[chartType],
        labels,
        datasets,
      });
    });
  });
});

// Find the download button
const btnDisplay = document.getElementById("btnDisplay");

// Execute the main function on DOMContentLoaded to ensure all chart canvases exist
document.addEventListener("DOMContentLoaded", () => {
  // Generate a list of all possible chart IDs
  const allArtifactsMonthly = generateChartArtefacts("Monthly");
  const allArtifactsWeekly = generateChartArtefacts("Weekly");
  const allArtifactsDaily = generateChartArtefacts("Daily");
  const allContainers = [
    ...allArtifactsMonthly.containers,
    ...allArtifactsWeekly.containers,
    ...allArtifactsDaily.containers,
  ];
  const allFiles = [
    ...allArtifactsMonthly.files,
    ...allArtifactsWeekly.files,
    ...allArtifactsDaily.files,
  ];

  // If the download button exists, attach the download functionality
  if (btnDisplay) {
    btnDisplay.style.display = "block"; // Make button visible
    setupChartDownloader(btnDisplay, allContainers, allFiles);
  }

  // Find all canvas elements in the DOM and create charts for them
  const canvasElements = document.querySelectorAll("canvas");

  canvasElements.forEach((canvas) => {
    const elementId = canvas.id;
    // Find a matching config for this canvas element.
    // NOTE: This logic now automatically handles the new 'Gold_MVA_Monthly_Small' ID,
    // as it finds the original config ('Gold_MVA_Monthly') using the chartTitleKey trick in createChartConfig.
    const baseId = elementId.endsWith("_Small")
      ? elementId.slice(0, -6)
      : elementId;
    const chartConfig = allChartConfigs.find((c) => c.elementId === baseId);

    if (chartConfig) {
      // Create the chart using the found configuration
      // The createChartConfig function will apply size overrides if elementId ends with '_Small'
      createChart({ ...chartConfig, elementId });
    } else {
      // Check if it's a small chart that needs its base config
      if (elementId.endsWith("_Small")) {
        const originalId = elementId.slice(0, -6);
        const originalConfig = allChartConfigs.find(
          (c) => c.elementId === originalId
        );
        if (originalConfig) {
          createChart({ ...originalConfig, elementId });
        } else {
          console.warn(
            `No configuration found for chart ID: ${elementId} (or its base ID: ${originalId})`
          );
        }
      } else {
        console.warn(`No configuration found for chart ID: ${elementId}`);
      }
    }
  });
});
=======


// Chart Rendering
const chartConfigurations = generateChartConfigurations();
chartConfigurations.forEach((config) => {
  createChart(config);
});
>>>>>>> bad9e5045d7309f1f635fc403dc0c69c6ba9ffbf
