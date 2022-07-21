Feature: Sign Up function testing

Scenario: Signing up with an email that is already in use
    When I open the home page
    Then I click sign up button
    Then the sign up page loads
    Then I input existing email data
    Then I input name data
    Then I input password data
    Then I agree to Terms and Conditions
    Then I click create account button
    Then I see an email error message visible

Scenario: Signing up with empty inputs
    When I open the home page
    Then I click sign up button
    Then the sign up page loads
    Then I click create account button
    Then I see an email error message visible
    Then I see a name error message visible

Scenario: Signing up with incorrect email data
    When I open the home page
    Then I click sign up button
    Then the sign up page loads
    Then I input incorrect email data
    Then I click create account button
    Then I see an email error message visible

Scenario: Signing up without correct password
    When I open the home page
    Then I click sign up button
    Then the sign up page loads
    Then I input existing email data
    Then I input name data
    Then I agree to Terms and Conditions
    Then I click create account button
    Then I see password requirements visible
