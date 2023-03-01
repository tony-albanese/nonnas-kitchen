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
|Comments for a post are displayed|As a user <br> when I am on the posts detail page <br> all of the comments associated with the post are displayed.|PASS|
|Infinite scroll for comments|As a user <br> when I am on the posts detail page <br> when I scroll to the end of the comments <br> new comments are loaded.|PASS|
|Create a comment|As a logged in user <br> when I am on the post detail page <br> a comment field appears <br>  and enter a comment into the comment form <br> and click on post <br> the comment is saved and added to the comment list. |PASS|
|Edit a comment|As a logged in user <br> and I click on the edit icon for a comment. <br> a field is shown with the comment text loaded. |PASS|
|Delete a comment|As a logged in user <br> when I click on save after updating the comment text <br> the new comment text is reflected in the comment list.|PASS|
|Comment if logged in|As an unauthenticated user <br> there is no comment form on the post detail page. |PASS|
|Edit/Delete icons for comment|As a logged in user <br> I can see edit and delete icons only for comments I have written.|PASS|
|Edit/Delete icons for comment|As a user <br> There are no edit or delete icons on the comments.|PASS|

# Like for a Post test cases
| Test Description              | Test | Result |
|-------------------------------|------------------------------------------|--------|
|Must be logged in to like|As a user <br> if I hover over the like icon <br> a tooltip appears asking me to login to like|PASS|
|Cannot like own post|As a logged in user <br> if I hover over the like icon for a post I have written <br> a tooltip appears telling me I cannot like my own post.|PASS|
|Like icon state|As a logged in user <br> If I have liked a post the icon is solid othwerwise it is outlined. |PASS - add remark|
|Like count increment|As a logged in user <br> when I like a post <br> the like count is incremented by 1|PASS|
|Like count decrement|As a logged in user <br> when I unlike a post <br> the like count is decremented by 1|PASS|
|List of liked posts|As a logged in user <br> when I click on the Likes link <br> a list of all the posts I have liked is displayed.|PASS|
|Unlike post|As a logged in user <br> when I click on a the like icon for a post I have liked <br> |Partial pass - add remark. The heart icon is unreponsive to clicks after the like - the user cannot unlike. Upon page reload, the icon responds to clicks and the user can unlike.|

# Recipe test cases
| Test Description              | Test | Result |
|-------------------------------|------------------------------------------|--------|
|List of recipes|As a user <br> When I navigate to the Recipes a page <br> A list of recipes is displayed.|PASS|
|Recipe Detail|As a user <br> when I click on a recipe <br> I am taken to a recipe detail page <br> and the ingredients and instruction list are displayed.|PASS|
|Recipe delete icon|As a logged in user <br> when I click on a recipe that I have written <br> a delete icon is displayed. |PASS|
|Recipe delete dialog|As a logged in user <br> when I click on the delete icon <br> a dialog appears asking me to confirm the delete.|PASS|
|Recipe delete|As a logged in user <br> when I click on the delete icon <br> and I confirm the delete from the dialog <br> the recipe is delted <br> and I am taken back to the Recipes page.|PASS|
|Recipe Create|As a logged in user <br> When I click on the Add Recipe Link <br> and fill in the form and press submit <br> my recipe is saved and appears in the list. <br> After submitting I am taken to the Recipe page with the details of my recipe displayed. |PASS|
|Recipe Edit|As a logged in user <br> When I click on the edit recipe icon from the Recipe detail page <br> and fill in the form and press submit <br> After submitting I am taken to the Recipe page with the details of my recipe displayed with updated data. |PASS|
|Add ingredient field|As a logged in user <br> When I click on the add ingredient field icon <br> a new input field appears.|PASS|
|Remove ingredient field|As a logged in user <br> When I click on the trash icon next to the ingredient field <br> the field is removed from the list|PASS|
|Add instruction field|As a logged in user <br> When I click on the add instruction field icon <br> a new input field appears.|PASS|
|Remove instruction field|As a logged in user <br> When I click on the trash icon next to the instruction field <br> the field is removed from the list|PASS|
|Empty Item Warning|As a logged in user <br> When I click on the submit button on the Recipe form <br> and if there are blank fields in the recipe OR the instruction list <br> a warning dialog appears telling me that blank fields are not allowed.<br> The form cannot be submitted with blank fields in the instructions or ingredients.|PASS|

# Responsiveness Test Cases
| Test Description              | Test | Result |
|-------------------------------|------------------------------------------|--------|
|Navbar responsiveness|As a user <br> the navbar items collapse into a toggle menu <br> on large screens and smaller|PASS|
|Sign in page respinsiveness|As a user <br> and I navigate to the sign in page <br> the image and form fields appear in a single column on smaller screens.  |PASS|
|Sign up page responsiveness|As a user <br> and I navigate to the sign up page <br> the image and form fields appear in a single column on smaller screens. |PASS |
|Post Create Form|As a logged in user <br> and I navigate to the Add Post page <br> the image and form fields appear in a single column on smaller screens.|PASS|
|Post Edit Form|As a logged in user <br> and I navigate to the edit post page <br> the image and form fields appear in a single column on smaller screens.|PASS|
|Recipe Create Form|As a logged in user <br> and I navigate to the Add Recipe page <br> the image and form fields appear in a single column on smaller screens.|PASS|
|Post detail page|As a logged in user <br> and I navigate to the Post detail <br> and I decrease the screen size <br> no elelements or text overlap <br> the image scales to fit the screen.|PASS|
|Recipe detail page|As a logged in user <br> and I navigate to the Recipe detail <br> and I decrease the screen size <br> no elelements or text overlap <br> the ingredients and the instructions appear in a single column <br> the image scales to fit the screen.|PASS|