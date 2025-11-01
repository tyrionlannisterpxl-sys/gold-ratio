// chart-loader.js
// This dynamically loads main charts.js file and forces browsers to fetch the newest version.

// (function loadChartsScript() {
//   const script = document.createElement('script');
//   script.src = 'https://cdn.jsdelivr.net/gh/tyrionlannisterpxl-sys/gold-ratio/charts.js?v=' + Date.now();
//   script.async = true; // load asynchronously so it doesn’t block the page
//   document.head.appendChild(script);
// })();

// chart-loader.js
// Dynamically load charts.js and display current month + last values

(function loadChartsScript() {
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/gh/tyrionlannisterpxl-sys/gold-ratio/charts.js?v=" +
    Date.now();
  script.async = true;

  // Run code after script loads
  script.onload = () => {
    // Display the current month
    const monthP = document.getElementById("monthlyDate");
    if (monthP && typeof MONTHLY_CURRENT_DATE !== "undefined") {
      monthP.textContent = `Current Month: ${MONTHLY_CURRENT_DATE}`;
    }

    // Display last value of each array in sourceData
    if (typeof sourceData !== "undefined") {
      for (const key in sourceData) {
        if (Array.isArray(sourceData[key])) {
          const p = document.getElementById(key + "Last"); // matches your <p> ids
          if (p) {
            p.textContent = `${key} Latest Value: ${
              sourceData[key][sourceData[key].length - 1]
            }`;
          }
        }
      }
    }

    // You can also initialize your charts here if needed
    // Example: call a function like initCharts() that uses sourceData
  };

  document.head.appendChild(script);
})();
