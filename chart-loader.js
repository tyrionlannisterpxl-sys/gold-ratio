// chart-loader.js
// This dynamically loads main charts.js file and forces browsers to fetch the newest version.

(function loadChartsScript() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/gh/tyrionlannisterpxl-sys/gold-ratio/charts.js?v=' + Date.now();
  script.async = true; // load asynchronously so it doesn’t block the page
  document.head.appendChild(script);
})();
