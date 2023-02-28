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
|A list of posts is displayed on the home page.||PASS|
|Infinite scroll for posts.||PASS|
|Post detail page||PASS|
|Create Post||PASS|
|Edit Post||PASS|
|Change post image||PASS|
|Field validation||PASS|
|Image validation||PASS|
|Filter Post by category||PASS|
|Search Posts||PASS|
|Complex search||PASS|
|No results||PASS|

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