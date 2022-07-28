Feature: Account Page navigation menu testing

Scenario: Logging in with proper credentials
    When I open the home page
    Then I click log in button
    Then I type my log in credentials
    Then I click Log in button to sign in
    Then account page loads
    Then I test navigation menu links
    Then I log out