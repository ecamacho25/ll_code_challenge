# ll_code_challenge

[Instructions](#instructions)<br />

Clone the repo and push up your changes and share link.

Using Protractor + CucumberJS + TypeScript.

Fork this Repo<br />
Create a branch and name it with your "{firstname_lastname}_LL_challenge"<br />
Make sure to update your README to show how to run your scripts<br />
Fulfill the following two scenarios<br />
Once complete push your branch up

Feature: Automate<br /> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As an Engr. Candidate<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I need to automate  http://www.way2automation.com/angularjs-protractor/webtables/<br /> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;So I can show my automation capabilities<br />
    
Scenario: Add a user and validate the user has been added to the table<br />

Scenario: Delete user User Name: novak and validate user has been deleted<br />

*****************************
How to install the project:
*****************************
To install the project you need to run the following commands in a console instance:
1. You need to create the package.json file with this command: npm init
2. After that you need to run the following commands to install the framework and download the dependencies:
npm install protractor
npm install typescript
npm install --save-dev cucumber
npm install --save-dev @types/cucumber
npm install protractor-cucumber-framework --save-dev
npm install  ts-node --save-dev
npm install  chai --save-dev
npm install chai-as-promised --save-dev
npm install @types/chai --save-dev
npm install --save-dev @types/node
3. After you had installed the framework and dependencies, then you need to add (or replace) this lines to the package.json file in the "scripts" section:

"build": "tsc",
"clean": "rimraf typeScript/",
"clean-build": "npm run clean && npm run build",
"test": "protractor typeScript/config/config.js",
"webdriver-update": "webdriver-manager update",
"webdriver-start": "webdriver-manager start"


*******************************
How to run the scripts:
*******************************
1. You need to update the driver, then run this command: npm run webdriver-update (Make sure your driver and your browser have the same version.)
2. To start the driver you need to run this command: npm run webdriver-start
3. Open a new terminal
4. In the new terminal you need to compile and build the code running this command: npm run build
4.1 If you need to clean and re-build the project, the you can run this command: npm run clean-build
5. To execute the test case you need to execute this command: npm test
