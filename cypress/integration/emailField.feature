Feature: Email Field testing

Scenario: Typing incorrect data into email field and clicking try for free button
    When I open the home page
    Then I type incorrect data into email field
    And I click the try for free button
    Then the url stays the same

Scenario: Typing correct data into email field and verifying the sign up page
    When I open the home page
    Then I type correct data into email field
    And I click the try for free button
    Then the sign up page loads