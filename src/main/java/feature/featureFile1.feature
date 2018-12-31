Feature: Open Weather API

 @TestCase1
Scenario Outline: User calls a web service to get weather using Open Weather API
 Given user wants to execute web service to get weather using Open Weather API "<row_index>"
 When user wants submits the GET request as per the data in Excel Worksheet
 Then weather retrived successfully
Examples:
 |row_index|
 |0|