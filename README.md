# About

This project's goal is testing the Telnyx Website using cypress and cucumber

It has 23 tests, and test such functions as:
- Navigation
- Sign up
- Log In
- Input fields

Page objects are located in cypress/integration/page-objects/

## How to open the project

Download [VS Code](https://code.visualstudio.com/) or any other IDE of your choice

Download and install [NodeJs](https://nodejs.org/en/about/releases/)

Download the project from the repository

Open the folder with the project in your IDE
In the terminal, type:
```
./node_modules/.bin/cypress open
```

After some time, cypress will open

In cypress, open cypress/integration folder, and click "Run all specs" file to start running tests

If you want to run tests using different configuration, alter the config.json file and, in terminal type:

```
npx cypress run --config-file config.json
```

By default, it uses the settings in cypress.json config file

Report is available at: https://ivanshol.github.io/telnyxCypressCucumber/


