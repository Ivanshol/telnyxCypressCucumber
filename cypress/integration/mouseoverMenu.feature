Feature: Mouseover menu testing

Scenario: Testing Products menu links
    When I open the home page
    And I hover mouse over Products drop-down menu
    Then the Products menu tabs should be visible

Scenario: Testing Solutions menu links
    When I open the home page
    And I hover mouse over Solutions drop-down menu
    Then the Solutions menu tabs should be visible

Scenario: Testing Resources menu links
    When I open the home page
    And I hover mouse over Resources drop-down menu
    Then the Resources menu tabs should be visible

Scenario: Testing Company menu links
    When I open the home page
    And I hover mouse over Company drop-down menu
    Then the Company menu tabs should be visible

Scenario: Testing Pricing menu links
    When I open the home page
    And I hover mouse over Pricing drop-down menu
    Then the Pricing menu tabs should be visible

Scenario: Testing Network menu button
    When I open the home page
    And I click the Network menu button
    Then the Network tab should load