Feature: Checking available countries

Scenario: Clicking talk to an expert button and verifying the page
    When I open the home page
    And I click upper talk to an expert button
    And the contact us page loads
    Then I check the available countries