Feature: Upper navigation block testing

Scenario: Clicking log in button and verifying the page
    When I open the home page
    Then I click upper log in button
    Then the log in page loads

Scenario: Clicking talk to an expert button and verifying the page
    When I open the home page
    Then I click upper talk to an expert button
    Then the contact us page loads

Scenario: Clicking talk sign up button and verifying the page
    When I open the home page
    Then I click upper sign up button
    Then the sign up page loads

Scenario: Clicking join the waitlist button and verifying the page
    When I open the home page
    Then I click join the waitlist button
    Then the cloud storage page loads