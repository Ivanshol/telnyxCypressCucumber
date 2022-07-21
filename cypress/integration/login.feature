Feature: Log In function testing

# Scenario: Logging in with incorrect credentials
   # When I open the home page
   # Then I click log in button
   # Then I type incorrect credentials
   # Then I click Log in button
   # Then error should be visible

#Scenario: Logging in with incorrect data
   # When I open the home page
   # Then I click log in button
   # Then I type incorrect data
   # Then I click Log in button
   # Then email error should be visible

Scenario: Logging in with proper credentials
    When I open the home page
    Then I click log in button
    Then I type my log in credentials
    Then I click Log in button
    Then account page loads