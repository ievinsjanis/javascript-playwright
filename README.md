# Task 1: Based on requirements create 3 manual test cases

1.Title: [Registration] Successfull registration flow

Preconditions:
User has navigated to registration page

Steps:
1.User enters a valid username
2.User enters a valid email address
3.User enters a valid password;password confirmation
4.User clicks on the "Register" button

Expected result:
User is redirected to the homepage. "You have registered successfully!" success message is displayed

2.Title: [Registration] Registration flow with an invalid username

Preconditions:
User has navigated to registration page

Steps:
1.User enters a invalid username
2.User enters a valid email address
3.User enters a valid password;password confirmation
4.User clicks on the "Register" button

Expected result:
An error message under the username input field is displayed - "Username must be 3-20 alphanumeric characters."

3.Title: [Registration] Registration flow with mismatched passwords

Preconditions:
User has navigated to registration page

Steps:
1.User enters a valid username
2.User enters a valid email address
3.User enters a valid password
4.User enters a different password in the password confirmation field
5.User clicks on the "Register" button

Expected result:
An error message under the confirm password input field is displayed - "Passwords do not match."

# Task 2: Report at least 1 Bug You have found during the testing

1.Title: [Registration][Bug] Password field requirements are implemented incorrectly

Description: User is able to create a password with 7 characters

Preconditions:
User has navigated to the registration page

Steps:
1.User enters a valid username (e.g janis)
2.User enters a valid email address (e.g janis@email.com)
3.User enters a password with 7 characters (e.g Parole!2)
4.User clicks on the "Register" button

Expected result: 
"Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number." warning message is displayed under the password input field

Actual result: 
The registration goes through successfully

Evidence: Screenshot/Video recording 

2.Title: [Registration][Bug] Input fields with errors are not highlighted

Description: Upon adding invalid data to a registration field, it is not highlighted

Preconditions:
User has navigated to the registration page

Steps:
1.User enters a invalid username (e.g 12)
2.User clicks on the "Register" button

Expected result: 
The username input field is highlighted.

Actual result: 
The username input field is NOT highlighted.

Evidence: Screenshot/Video recording 


# Task 3: Based on requirements automate 1 manual test case using playwright

# Task 4: Add points to improve form's UI/UX

1.Hover state could be added for input fields
2.Icon for showing/hiding password could be added
3.Add a "*" to the titles of input fields to let the user know which fields are mandatory
4.Labels for fields can be added to improve the accessability of the product

# Task 5: Anything You would improve/specify more in the existing requirements

1.Specify whether the username and email needs to be unqiue for every registration
2.Mandatory special character for passwords
3.Clarification for the password minimum character requirement based on my bug report? Might have been a mistake


# Task 6: What else can be tested?

1.Accessability - keyboard navigation,voice over etc can be tested, 
2.Tests on different browsers (chrome, safari), mobile devices and tablets (iOS, Android) can be done as well