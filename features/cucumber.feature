Feature: Automate:
As an Engr. Candidate
I need to automate  http://www.way2automation.com/angularjs-protractor/webtables/
So I can show my automation capabilities

@Scenario1
Scenario Outline: Add a user and validate the user has been added to the table
Given I go to <url>
When I click Add User botton
When I input <first_name> as First Name
When I input <last_name> as Last Name
When I input <username> as User Name
When I input <password> as Password
When I Select the option <role> in the role drop-down
When I input <email> as E-mail
When I input <cell_phone> as Cell Phone
When I click the Save button
Then The user is created succesfully
Then The user <username> is added to the table
Examples: 
         | first_name | last_name | username | password | customer | role | email | cell_phone | url |
         | Richie | Cruz | rcruz | rcruz123 | Company AAA | Admin | rcruz@a.com | 559570202 | http://www.way2automation.com/angularjs-protractor/webtables/ |


@Scenario2
Scenario Outline: Delete user with Username "novak" and validate that the user has been deleted
Given I go to <url>
When I click delete option in the row associate to user <username_to_delete>
When I click OK option in the Confirmation Dialog
Then The user is deleted succesfully
Then The user <username_to_delete> is deleted from the table


Examples: 
         | username_to_delete |
         | novak |