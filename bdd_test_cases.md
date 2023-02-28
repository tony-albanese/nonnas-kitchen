# Navigation Test Cases
| Test Description              | Test | Result |
|-------------------------------|------------------------------------------|--------|
|Posts Link|As a user <br> when I click on the Posts link in the navbar <br> I am taken to the Posts page.|PASS|
|Recipes Link|As a user <br> when I click on the Recipes link in the navbar <br> I am taken to the Recipes page.|PASS|
|Sign In link Navbar|As a user <br> when I click on the SignIn link in the navbar <br> I am taken to the SignIn page.|PASS|
|Sign in link on sign up form|As a user <br> when I click on the SignIn link on the Sign Up <br> I am taken to the SignIn page.|PASS|
|Sign Up Link Navbar|As a user <br> when I click on the Sign Up link in the navbar <br> I am taken to the Sign Up page.|PASS|
|Sign up link on sign in form|As a user <br> when I click on the Sign Up link on the Sign In page <br> I am taken to the Sign Up page.|PASS|
|Post detail link|As a user <br> When I click on a Post <br> I am taken to the Post detail page. |PASS|
|Recipe Detail link|As a user <br> When I click on a Recipe <br> I am taken to the Recipe detail page.|PASS|
|Add Post link|As a logged in user <br> when I click on the Add Post link in the navbar <br> I am taken to the add post page. |PASS|
|Add Recipe Link |As a logged in user <br> when I click on the Add Recipe link in the navbar <br> I am taken to the Add Recipe page. |PASS|
|Likes navbar link|As a logged in user <br> when I click on the Likes link in the navbar <br> I am taken to the Likes page. |PASS|
|Page not found|As a user <br> when a page is not found <br> the page not found image is displayed. |PASS|
|Take me home link|As a user <br> when I click on the "take me home" button on the page not found <br> I am taken to the Posts page.|PASS|

# Sign In Test Cases
| Test Description              | Test | Result |
|-------------------------------|------------------------------------------|--------|
|Sign in function|As a user <br> When I enter valid credentials and click on Sign In <br> I am authenticated <br>the navbar reveals the Add Post and Add Likes links <br> the sign in and sign up links are hidden <br> the sign out icon appears in the navbar<br> and my user name appears in the navbar.|PASS|
|Sign out function|As an authenticated user <br> When I click on the logout icon <br> I am logged out <br> the sign in and sign up links appear in the navbar <br> The Add Post and Add Recipe links are hidden <br> and my user name is no longer visible.|PASS|

# Sign Up Test Cases
| Test Description              | Test | Result |
|-------------------------------|------------------------------------------|--------|
|Create a new account|As a user <br> when I enter a username <br> and a password <br> and a matching password <br> I am taken back to the sign in page. |PASS|
|Mismatched password error |As a user <br> when I enter a username <br> and a password <br> and a non-matching password <br> a message indicating the passowrds do not match is displayed. |PASS|

# CRUD for Post test cases
| Test Description              | Test | Result |
|-------------------------------|------------------------------------------|--------|
|A list of posts is displayed on the home page.|As a user <br> when I am on the home page <br> a list of posts is displayed. |PASS|
|Infinite scroll for posts.|As a user <br> when I scroll down to the bottom of the page <br> more posts are loaded and displayed.|PASS|
|Post detail page|As a user <br> when I click on a post <br> I am taken to the post detail page <br> the comments associated with the post are displayed. |PASS|
|Create Post|As a logged in user <br> When I click on the Add Post link <br> and enter valid data for the post <br> I am taken to the post detail page <br> with the new post loaded. |PASS|
|Edit Post Form pre loaded |As a logged in user <br> When I click on the edit icon for a post <br> a form pre-populated with the post data is shown. |PASS|
|Update Post|As a logged in user <br> When I click on the edit icon for a post <br> and I change the values in the form <br> and then I click on save <br> The form is saved. <br> I am taken back to the post detail page <br> The post dispalys the updated data. |PASS|
|Change post image|As a logged in user <br> When I am editing the data on a post in the post edit page <br> and I select a new image <br> When I click on save <br> I am taken to the post detail page and the new image is shown.|PASS|
|Form edit cancel button|As a logged in user<br> when i am on the edit post page <br> and I press the cancel button <br> I am returned to the post detail page.|PASS|
|Field validation|As a logged in user <br> if I leave the title blank and click on submit<br> a warning is displayed. |PASS|
|Image validation|As a logged in user <br> if I try to use an image larger than 2MB in size <br> When I submit the form a warning is displayed. |PASS|
|Filter Post by category|As a user <br> when i select a category from the dropdown menu on the posts page <br> all the posts of that type are displayed.|PASS|
|Search Posts|As a user <br> when I enter search terms in the search bar <br> posts with those terms in the title are displayed.|PASS|
|Complex search|As a user <br> when I enter search terms in the search bar <br> and select a category from the dropdown menu <br> all the posts of that category and with the terms in the title are displayed. |PASS|
|No results|As a user <br> if no results from a search are found <br> the no search page is shown (empty refrigerator image).|PASS|

# CRUD for Comments test cases
| Test Description              | Test | Result |
|-------------------------------|------------------------------------------|--------|
|Comments for a post are displayed||PASS|
|Infinite scroll for comments||PASS|
|Create a comment||PASS|
|Edit a comment||PASS|
|Delete a comment||PASS|
|Comment if logged in||PASS|
|Edit/Delete icons for comment||PASS|
|Edit/Delete icons for comment||PASS|

# Like for a Post test cases
| Test Description              | Test | Result |
|-------------------------------|------------------------------------------|--------|
|Must be logged in to like||PASS|
|Cannot like own post||PASS|
|Like icon state||PASS - add remark|
|Like count increment||PASS|
|Like count decrement||PASS|
|List of liked posts||PASS|
|Like post||PASS|
|Unlike post||Partial pass - add remark|

# Recipe test cases
| Test Description              | Test | Result |
|-------------------------------|------------------------------------------|--------|
|List of recipes||PASS|
|Recipe Detail||PASS|
|Recipe delete icon||PASS|
|Recipe delete||PASS|

# Responsiveness Test Cases
| Test Description              | Test | Result |
|-------------------------------|------------------------------------------|--------|
|Navbar responsiveness|||
|Sign in page respinsiveness|||
|Sign up page responsiveness|||
|Post Create Form|||
|Post Edit Form|||
|Recipe Create Form|||
|Post detail page|||
|Recipe detail page|||