$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("../Rest/src/main/java/feature/featureFile1.feature");
formatter.feature({
  "line": 1,
  "name": "Open Weather API",
  "description": "",
  "id": "open-weather-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User calls a web service to get weather using Open Weather API",
  "description": "",
  "id": "open-weather-api;user-calls-a-web-service-to-get-weather-using-open-weather-api",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TestCase1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user wants to execute web service to get weather using Open Weather API \"\u003crow_index\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user wants submits the GET request as per the data in Excel Worksheet",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "weather retrived successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "open-weather-api;user-calls-a-web-service-to-get-weather-using-open-weather-api;",
  "rows": [
    {
      "cells": [
        "row_index"
      ],
      "line": 9,
      "id": "open-weather-api;user-calls-a-web-service-to-get-weather-using-open-weather-api;;1"
    },
    {
      "cells": [
        "0"
      ],
      "line": 10,
      "id": "open-weather-api;user-calls-a-web-service-to-get-weather-using-open-weather-api;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 447328119,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User calls a web service to get weather using Open Weather API",
  "description": "",
  "id": "open-weather-api;user-calls-a-web-service-to-get-weather-using-open-weather-api;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TestCase1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user wants to execute web service to get weather using Open Weather API \"0\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user wants submits the GET request as per the data in Excel Worksheet",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "weather retrived successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 73
    }
  ],
  "location": "getWeather.user_wants_to_execute_web_service_to_get_weather_using_Open_Weather_API(String)"
});
formatter.result({
  "duration": 92067614,
  "status": "passed"
});
formatter.match({
  "location": "getWeather.user_wants_submits_the_GET_request_as_per_the_data_in_Excel_Worksheet()"
});
formatter.result({
  "duration": 103405635,
  "status": "passed"
});
formatter.match({
  "location": "getWeather.weather_retrived_successfully()"
});
formatter.result({
  "duration": 696645262,
  "status": "passed"
});
formatter.after({
  "duration": 29829,
  "status": "passed"
});
});