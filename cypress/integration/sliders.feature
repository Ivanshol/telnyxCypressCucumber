Feature: Testing the slider

Scenario: Testing Savings Calculator proprieties change when increasing outbound calls slider
    When I open the home page
    Then I scroll the calculator into view
    Then I slide the outbound calls slider to increase the value
    Then I check that the money value change to a bigger number

Scenario: Testing Savings Calculator proprieties change when increasing inbound calls slider
    When I open the home page
    Then I scroll the calculator into view
    Then I slide the inbound calls slider to increase the value
    Then I check that the money value change to a bigger number

Scenario: Testing Savings Calculator proprieties change when decreasing outbound calls slider
    When I open the home page
    Then I scroll the calculator into view
    Then I slide the outbound calls slider to decrease the value
    Then I check that the money value change to a lesser number

Scenario: Testing Savings Calculator proprieties change when decreasing inbound calls slider
    When I open the home page
    Then I scroll the calculator into view
    Then I slide the inbound calls slider to decrease the value
    Then I check that the money value change to a lesser number

Scenario: Testing Savings Calculator Twillio changing money value and sliders in the SMS section when increasing outbound slider
    When I open the home page
    Then I scroll the calculator into view
    Then I click SMS Calculator button
    Then I slide the outbound calls slider to increase the value
    Then I check that the money value change to a bigger number in the Twilio info label

Scenario: Testing Savings Calculator Twillio changing money value and sliders in the SMS section when decreasing outbound slider
    When I open the home page
    Then I scroll the calculator into view
    Then I click SMS Calculator button
    Then I slide the outbound calls slider to decrease the value
    Then I check that the money value change to a lesser number in the Twilio info label

Scenario: Testing Savings Calculator Twillio changing money value and sliders in the SMS section when increasing inbound slider
    When I open the home page
    Then I scroll the calculator into view
    Then I click SMS Calculator button
    Then I slide the inbound calls slider to increase the value
    Then I check that the money value change to a bigger number in the Twilio info label

Scenario: Testing Savings Calculator Twillio changing money value and sliders in the SMS section when decreasing inbound slider
    When I open the home page
    Then I scroll the calculator into view
    Then I click SMS Calculator button
    Then I slide the inbound calls slider to decrease the value
    Then I check that the money value change to a lesser number in the Twilio info label