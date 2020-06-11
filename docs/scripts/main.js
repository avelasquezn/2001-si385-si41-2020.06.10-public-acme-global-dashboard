// main.js Module

import { drawCharts } from "./charts.js";

// Load Visualization API and codechart package.
google.charts.load('current', {'packages':['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawCharts);

