
const report = require("multiple-cucumber-html-reporter");
report.generate({
jsonDir: "./cypress/cucumber-json",
reportPath: "report",
metadata: {
browser: {
name: "chrome",
version: "100",
},
device: "Local test machine",
platform: {
name: "windows"
},
},
});