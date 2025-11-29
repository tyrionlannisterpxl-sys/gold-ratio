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
  // NOTE: This array contains 60 monthly dates, from Dec-20 to Dec-25.
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
    "June-24",
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
    "Nov-25",
    "Dec-25",
  ],
  // NOTE: This array contains 50 monthly gold prices.
  GoldMonthly: [
    1884.2, 1850.5, 1789.2, 1729.8, 1769.7, 1898.8, 1776.6, 1725.1, 1815.7,
    1749.5, 1790.2, 1785.6, 1829.4, 1883.6, 1893.3, 1944.8, 1899.6, 1832.5,
    1789.4, 1729.8, 1788.9, 1756.9, 1790.2, 1810.1, 1880.5, 1950.4, 1980.2,
    2010.5, 1999.8, 1940.1, 1960.3, 1980.5, 2030.1, 2060.4, 2120.5, 2180.3,
    2220.1, 2250.6, 2300.2, 2350.5, 2400.1, 2450.4, 2480.2, 2520.5, 2560.1,
    2600.4, 2650.2, 2700.5, 2750.1, 2800.4,
  ],
  // NOTE: This array contains 50 monthly Dow Jones prices.
  DowMonthly: [
    30606, 30978, 31613, 33021, 33875, 34502, 34523, 34746, 35300, 34320, 35800,
    36338, 36300, 35000, 34000, 34800, 33200, 32100, 31000, 30500, 31500, 32000,
    33500, 34000, 33500, 34500, 35000, 35500, 36000, 35500, 36200, 36800, 37500,
    38200, 39000, 39800, 40500, 41200, 42000, 42800, 43500, 44200, 45000, 45800,
    46500, 47200, 48000, 48800, 49500, 50200,
  ],
};

const MONTHLY_CURRENT_DATE =
  sourceData.monthlyDates[sourceData.monthlyDates.length - 1];

// Moving Average (MA) Weights (Simple Moving Average - SMA)
const weightsSTMA = [1 / 7, 1 / 7, 1 / 7, 1 / 7, 1 / 7, 1 / 7, 1 / 7];
const weightsLTMA = [
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
  1 / 34,
];
const weightsSignal = [1 / 5, 1 / 5, 1 / 5, 1 / 5, 1 / 5];

// Asset and Time Period Definitions
const assetNames = ["Gold", "Dow"];
const timePeriods = ["Monthly"];

// Ratio Definitions
const ratioDefinitions = [
  { name: "Dow_to_Gold", numerator: "Dow", denominator: "Gold" },
];

// =========================================================================
// HELPER FUNCTIONS (SMA, MACD, etc.)
// =========================================================================

function calculateSMA(data, weights) {
  const windowSize = weights.length;
  const smaArray = [];

  for (let i = 0; i < data.length; i++) {
    if (i < windowSize - 1) {
      smaArray.push(null);
      continue;
    }

    let sum = 0;
    for (let j = 0; j < windowSize; j++) {
      sum += data[i - windowSize + 1 + j] * weights[j];
    }
    smaArray.push(sum);
  }
  return smaArray;
}

function calculateMACD(stmaArray, ltmaArray) {
  return stmaArray.map((stma, index) => {
    if (stma !== null && ltmaArray[index] !== null) {
      return stma - ltmaArray[index];
    }
    return null;
  });
}

function calculateSignalLine(macdArray, weights) {
  const windowSize = weights.length;
  const signalArray = [];

  for (let i = 0; i < macdArray.length; i++) {
    if (i < windowSize - 1 || macdArray[i] === null) {
      signalArray.push(null);
      continue;
    }

    let sum = 0;
    for (let j = 0; j < windowSize; j++) {
      const macdValue = macdArray[i - windowSize + 1 + j];
      if (macdValue !== null) {
        sum += macdValue * weights[j];
      }
    }
    signalArray.push(sum);
  }
  return signalArray;
}

function calculateHistogram(macdArray, signalArray) {
  return macdArray.map((macd, index) => {
    if (macd !== null && signalArray[index] !== null) {
      return macd - signalArray[index];
    }
    return null;
  });
}

/**
 * Calculates the ratio of two corresponding data arrays.
 */
function calculateRatioArray(numerator, denominator) {
  return numerator.map((num, index) => {
    const den = denominator[index];
    if (den !== 0 && den !== null) {
      return num / den;
    }
    return null;
  });
}

/**
 * Calculates all indicators (STMA, LTMA, MACD, Signal, Histogram) for a given asset's data.
 */
function calculateAllIndicatorsForAsset(assetName, assetDataByPeriod) {
  const indicators = {};

  timePeriods.forEach((period) => {
    const data = assetDataByPeriod[period];
    if (!data) return;

    // 1. Calculate Short Term Moving Average (STMA)
    const stmaArray = calculateSMA(data, weightsSTMA);
    indicators[`${assetName}STMA${period}`] = stmaArray;

    // 2. Calculate Long Term Moving Average (LTMA)
    const ltmaArray = calculateSMA(data, weightsLTMA);
    indicators[`${assetName}LTMA${period}`] = ltmaArray;

    // 3. Calculate MACD Line
    const macdArray = calculateMACD(stmaArray, ltmaArray);
    indicators[`${assetName}MACD${period}`] = macdArray;

    // 4. Calculate Signal Line
    const signalLineArray = calculateSignalLine(macdArray, weightsSignal);
    indicators[`${assetName}Signal${period}`] = signalLineArray;

    // 5. Calculate Histogram
    const histogramArray = calculateHistogram(macdArray, signalLineArray);
    indicators[`${assetName}Histogram${period}`] = histogramArray;
  });

  return indicators;
}

// =========================================================================
// DATA PROCESSING & CALCULATION EXECUTION
// =========================================================================

// Initialize allValues object structure for base assets
const allValues = assetNames.reduce((acc, name) => {
  acc[name] = {};
  timePeriods.forEach((period) => {
    acc[name][period] = sourceData[`${name}${period}`];
  });
  return acc;
}, {});

// Map source data by asset name
const sourceDataMap = assetNames.reduce((acc, name) => {
  acc[name] = {};
  timePeriods.forEach((period) => {
    acc[name][period] = sourceData[`${name}${period}`];
  });
  return acc;
}, {});

// Initialize allValues for ratios and calculate ratios
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

// Perform the DOM updates for all specified values (e.g., last value text updates)
document.addEventListener("DOMContentLoaded", () => {
  valuesToUpdate.forEach(({ id, data }) => {
    const element = document.getElementById(id);
    if (element && data.length > 0) {
      // Get the last valid non-null data point
      const lastValue = [...data].reverse().find((val) => val !== null);
      if (lastValue !== undefined) {
        // Determine precision based on if it's a ratio (2 decimals) or base asset (0 decimals)
        const precision = id.includes("Ratio") ? 2 : 0;
        element.textContent = lastValue.toFixed(precision);
      }
    }
  });
});

// =========================================================================
// CHART DRAWING FUNCTIONS (createChart, createChartConfig, etc.)
// =========================================================================

/**
 * Creates and renders a Chart.js instance.
 * @param {object} config - The chart configuration object containing elementId and chartConfig.
 */
function createChart({ elementId, chartConfig }) {
  const ctx = document.getElementById(elementId);
  if (!ctx) return;

  new Chart(ctx, chartConfig);
}

/**
 * Generates the Chart.js configuration object for a specific chart,
 * applying small chart overrides if necessary.
 * @param {object} baseConfig - The base configuration object (from allChartConfigs).
 * @param {string} elementId - The actual canvas ID (can be the base ID or base ID + '_Small').
 * @returns {object} The full Chart.js configuration.
 */
function createChartConfig(baseConfig, elementId) {
  const isSmall = elementId.endsWith("_Small");
  // Adjust title for small charts
  const chartTitle = isSmall
    ? baseConfig.chartTitle.replace(" - Full View", "").trim()
    : baseConfig.chartTitle;

  const config = {
    type: baseConfig.chartType,
    data: {
      labels: sourceData.monthlyDates.slice(
        CHART_DATA_START_INDEX,
        CHART_DATA_END_INDEX + 1
      ),
      datasets: baseConfig.datasets.map((ds) => ({
        ...ds,
        data: ds.data.slice(CHART_DATA_START_INDEX, CHART_DATA_END_INDEX + 1),
        borderWidth: isSmall ? 1.5 : 2,
        pointRadius: 0,
        tension: 0.1,
      })),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: isSmall ? 5 : 10,
          bottom: isSmall ? 5 : 10,
        },
      },
      scales: {
        y: {
          beginAtZero: baseConfig.yScaleBeginAtZero,
          // Custom callback for ratio to show fixed decimals, Gold MVA should be default
          ticks: {
            callback: baseConfig.id.includes("Ratio")
              ? function (value) {
                  return value.toFixed(2);
                }
              : undefined,
          },
        },
        x: {
          display: isSmall ? false : true, // Hide X axis for small chart
        },
      },
      plugins: {
        legend: {
          display: baseConfig.legendDisplay && !isSmall, // Hide legend for small charts
        },
        title: {
          display: true,
          text: chartTitle,
          font: { size: isSmall ? 14 : 18, weight: "bold" },
        },
      },
    },
  };
  return config;
}

// =========================================================================
// CHART CONFIGURATION DATA (The map of all charts)
// Includes the new Dow-to-Gold Ratio chart.
// =========================================================================

const allChartConfigs = [
  // 1. ORIGINAL GOLD MVA MONTHLY CHART CONFIG
  {
    id: "Gold_MVA_Monthly",
    elementId: "Gold_MVA_Monthly",
    chartTitle: "Gold MVA Monthly - Full View",
    chartType: "line",
    labels: sourceData.monthlyDates,
    datasets: [
      {
        label: "Gold Price",
        data: allValues["Gold"]["Monthly"],
        borderColor: "rgb(255, 99, 132)",
        fill: false,
      },
      {
        label: "STMA",
        data: chartData["GoldSTMAMonthly"],
        borderColor: "rgb(54, 162, 235)",
        borderDash: [5, 5],
        fill: false,
      },
      {
        label: "LTMA",
        data: chartData["GoldLTMAMonthly"],
        borderColor: "rgb(75, 192, 192)",
        borderDash: [10, 5],
        fill: false,
      },
    ],
    yScaleBeginAtZero: false,
    legendDisplay: true,
  },

  // 2. NEW DOW-TO-GOLD RATIO MONTHLY CHART CONFIG
  {
    id: "DowGoldRatio_Monthly",
    elementId: "DowGoldRatio_Monthly",
    chartTitle: "Dow-to-Gold Ratio (Monthly) - Full View",
    chartType: "line",
    labels: sourceData.monthlyDates,
    datasets: [
      {
        label: "Dow-to-Gold Ratio",
        data: allValues["Dow_to_Gold"]["Monthly"],
        borderColor: "rgb(75, 192, 192)", // Teal color
        fill: false,
      },
    ],
    yScaleBeginAtZero: false,
    legendDisplay: false, // Since it's a single line, legend is optional
  },

  // ... (Other chart configurations would follow here if they existed)
];

// =========================================================================
// FINAL RENDERING LOOP
// This logic iterates through all elements and draws charts if a config is found.
// It handles both the full-size and the "_Small" versions automatically.
// =========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Find all canvas elements on the page that we might need to draw.
  const chartCanvases = [
    ...document.querySelectorAll("canvas[id$='_Monthly']"),
    ...document.querySelectorAll("canvas[id$='_Small']"),
  ];

  // Array to track which IDs we've already processed to avoid duplicates
  const processedIds = new Set();

  chartCanvases.forEach((canvas) => {
    const elementId = canvas.id;

    if (processedIds.has(elementId)) {
      return; // Skip if already processed
    }
    processedIds.add(elementId);

    // Determine the base configuration ID (e.g., Gold_MVA_Monthly for Gold_MVA_Monthly_Small)
    const baseId = elementId.endsWith("_Small")
      ? elementId.slice(0, -6)
      : elementId;

    // Find the base configuration
    const baseConfig = allChartConfigs.find((c) => c.id === baseId);

    if (baseConfig) {
      // 1. Get the Chart.js configuration object (applies small overrides if needed)
      const finalChartConfig = createChartConfig(baseConfig, elementId);

      // 2. Create the chart
      createChart({
        elementId: elementId,
        chartConfig: finalChartConfig,
      });
    } else {
      console.warn(
        `No configuration found for chart ID: ${elementId} (or its base ID: ${baseId})`
      );
    }
  });
});
