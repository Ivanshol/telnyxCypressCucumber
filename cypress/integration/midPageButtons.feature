Feature: Mid-page button navigation testing

Scenario: Testing Messaging API Button
    When I open the home page
    Then I scroll mid-page buttons into view
    Then I click messaging api button
    Then messaging api page is loaded

Scenario: Testing Video API Button
    When I open the home page
    Then I scroll mid-page buttons into view
    Then I click video api button
    Then video api page is loaded

Scenario: Testing Wireless Button
    When I open the home page
    Then I scroll mid-page buttons into view
    Then I click wireless button
    Then wireless page is loaded

Scenario: Testing Voice API Button
    When I open the home page
    Then I scroll mid-page buttons into view
    Then I click voice api button
    Then voice-api page is loaded

Scenario: Testing Elastic SIP Trunking Button
    When I open the home page
    Then I scroll mid-page buttons into view
    Then I click elastic sip-trunking button
    Then elastic sip-trunking page is loaded

Scenario: Testing Storage Button
    When I open the home page
    Then I scroll mid-page buttons into view
    Then I click storage button
    Then storage page is loaded

Scenario: Testing Savings Calculator proprieties change
    When I open the home page
    Then I scroll the calculator into view
    Then I check that the calculator properties are default
    Then I click SMS Calculator button
    Then I check that the calculator properties change

