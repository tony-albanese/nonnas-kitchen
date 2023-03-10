- [Nonna's Kitchen Frontend](#nonna-s-kitchen-frontend)
  * [Deployed Site](#deployed-site)
- [User Stories](#user-stories)
  * [Navigation and Authentication](#navigation-and-authentication)
  * [BlogPost](#blogpost)
  * [Likes](#likes)
  * [Comments](#comments)
  * [Recipes](#recipes)
  * [Infinite Scroll](#infinite-scroll)
- [React Features](#react-features)
  * [Routing](#routing)
  * [Web Token Refresh](#web-token-refresh)
  * [Reusable Components](#reusable-components)
- [UI Design](#ui-design)
- [Color Scheme](#color-scheme)
  * [NavBar](#navbar)
  * [SignUp/SignIn Form](#signup-signin-form)
  * [Create BlogPost Form](#create-blogpost-form)
- [Post Component](#post-component)
  * [Post Detail Component](#post-detail-component)
  * [Post Page](#post-page)
  * [Post Likes](#post-likes)
  * [Post Comments](#post-comments)
  * [Recipe](#recipe)
  * [Recipe Create Form](#recipe-create-form)
  * [Recipe Edit](#recipe-edit)
  * [Infinite Scroll](#infinite-scroll-1)
- [Agile Development](#agile-development)
  * [Outline of Sprints](#outline-of-sprints)
    + [Sprint 1 - Project setup](#sprint-1---project-setup)
    + [Sprint 2 - Making a Post](#sprint-2---making-a-post)
    + [Sprint 3 - Likes, Comments](#sprint-3---likes--comments)
    + [Sprint 4 - Style](#sprint-4---style)
    + [Sprint 5 - Test Deploy](#sprint-5---test-deploy)
    + [Sprint 6 - Recipes](#sprint-6---recipes)
    + [Sprint 7 - Refactor components](#sprint-7---refactor-components)
  * [Use of GitHub](#use-of-github)
    + [Projects](#projects)
- [Version Control](#version-control)
- [Testing](#testing)
- [Code Validation](#code-validation)
  * [Linting Results](#linting-results)
  * [W3C Markup Validator](#w3c-markup-validator)
  * [Lighthouse Report](#lighthouse-report)
    + [Lighhouse Report Sign In Page](#lighhouse-report-sign-in-page)
    + [Lighthouse Report Sign Up Page](#lighthouse-report-sign-up-page)
    + [Lighthouse Report Posts Page](#lighthouse-report-posts-page)
    + [Lighthouse Report Add Post Page](#lighthouse-report-add-post-page)
    + [Lighthouse Report Recipes Page](#lighthouse-report-recipes-page)
    + [Lighthouse Report Add Recipe Page](#lighthouse-report-add-recipe-page)
- [Unfixed bugs](#unfixed-bugs)
- [Features Left to Implement](#features-left-to-implement)
- [Technology Used](#technology-used)
- [Project Creation](#project-creation)
  * [Deployment](#deployment)
- [Credits](#credits)
  * [Image Credits](#image-credits)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# Nonna's Kitchen Frontend
Nonna's kitchen is an online space for people who love food to share their experiences around food. The purpose of this site is not so much for people to share what they are eating but rather to share the emotional connection that often comes from a particular dish. The more specific purpose of this site is for people to share their emotional connections with a particular dish or type of food and to have other share in those experiences. That is why the site is called Nonna's Kitchen - "Nonna" is Italian for "grandmother" and the site is supposed to evoke memories, feelings, and connections to one's ancestors and culture.

The main type content on the site is a blog post in which users can share an image of a particular food and provide a short (1-2 paragraph) description of their connection to that dish. For example, a user can share an image of a plate of *spaghetti al pomodorro*, (the classic spaghetti with tomato sauce) and then write how they are emotionally connected to that dish - that connection could be one of several types (Anecdote, History, Reminiscence, Tip). The idea here is for site users to be more specific in the type of information they are sharing and consuming. 

There are many sites for sharing recipes and Twitter/Instagram/Facebook are full of food posts. However, this site is intended to focus on the *emotional* connection people have with food. It therefore will allow users to create and edit blog posts and recipes as well as like and comment upon content in an engaging way.

## Deployed Site
+ The site uses the [Nonna's Kitchen API](https://nonnas-kitchen-api.herokuapp.com/) as the backend. The GitHub repo to the backend can be found here: [Nonna's Kitchen API on GitHub](https://github.com/tony-albanese/ci-project-5-nonnas-kitchen-api)
+ The deployed front end can be found here: [Nonna's Kitchen](https://nonnas-kitchen.herokuapp.com/)

# User Stories
Many of the user stories are worded similarly to the Moments walkthrough project because the functionality is quite similar - especially with navigation and authentication, posts, likes and comments.
## Navigation and Authentication
+ As a user I can view a navbar from every page so that I can navigate easily between pages
+ As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh
+ As a user I can create a new account so that I can access all the features for signed up users
+ As a user I can sign in to the app so that I can access functionality for logged in users
+ Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to
+ Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
+ Conditional rendering - As a logged out user I can see sign in and sign up options so that I can sign in/sign up

## BlogPost
+ As a logged in user, I can create a BlogPost so that I can share my food related content with other users on the platform.
+ As a user, I can view the details of a single post so that I can enjoy additional content about that post.
+ As a user, I can view all the blog posts sorted by date created so that I can enjoy the most recently created content.
+ As a user, I can search posts so that I can quickly find content that is interesting to me.
+ As a user, I can filter the post by category so that I can quickly find content that I am most interested in.
+ As a logged in user, I can delete a post I have made so that I can remove content I no longer wish to share.  
+ As a logged in user, I can edit a post I have created so that I can update content or correct mistakes I have made.

## Likes
+ As a logged in user, i can view all of the content that I have liked so that I can easily access my favorite content.
+ As a user, I can like a post so that I can mark content that is relevant to me.

## Comments
+ As a logged in user, I can comment on a post so that I can share my opinions on a post I find interesting.
+ As a logged in user, I can edit a comment I have created so that I can correct mistakes I have made.
+ As a logged in user, I can see a list of comments for a post so that I can see what other users think of a particular post.
+ As a logged in user, I can delete a comment I have made so that I can remove content I no longer wish to share with the community.

## Recipes
+ As a user, I can see list of recipes on the site so that I have the chance to learn how to cook a new dish.
+ As a logged in user, I can create a recipe so that others users can learn how to make a dish that is important to me.
+ As a logged in user, I can delete a recipe I posted so that I can remove content I no longer wish others to see.
+ As a logged in user I can edit a recipe so that I can correct any mistakes I have made.

## Infinite Scroll
+ As a user, I can see a list of posts in a long list so I do not have to navigate through pagination links.


# React Features
## Routing
The react-router-dom library was used to manage page navigation. This library manages the rendering components so that the page is not continuously refreshed when the user navigates through the site.
> + As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh

## Web Token Refresh
Normally, web tokens expire after a short time and thus the user would be continuously logged out the site. These tokens must be refreshed so that the user maintains logged in status for an extended period of time. The axios library has utility objects called interceptors to help manage and refresh the tokens automatically. The code to manage the interceptors was taken from the Moments walkthrough project from Code Institute.
> + Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised

## Reusable Components
The strength of the React framework is the idea of abstracting functionality into reusable components.
+ Reusable Footer Component  
The footer of a blog post holds icons for the like icon. I used the code from Moments as a starting point. In the walkthrough, all of the logic behind the icon behavior is included in the Blog Card component. Since I plan on using a similar footer in a Recipe component, I selected this for refactoring into its own component.

This is the outline of the component. onLike and onUnlike are callback functions to handle the clicks on the like icon. The rest are data passed in by the parent component. 
```
export default function PostFooterContent({ isOwner, isLiked, loggedInUser, onLike , likesCount, onUnlike}) {
  return (
    <Card.Footer className="text-muted">
      {isOwner
        ? iconPostIsOwner
        : isLiked
        ? iconPostIsLiked
        : loggedInUser
        ? iconUserIsLoggedIn
        : iconUserNotLoggedIn}

        {likesCount}
    </Card.Footer>
  );
}
```
I decided to user the logic from the Moments walkthrough to determine how the like icon behaves. However, the code in the walkthrough had a lot of nested components which made the code very hard to read, understand, and expand. I therefore extracted the icons into their own variables. For example, these two icons are for when the post is liked and unliked. They execute the onLike/onUnlike callbacks passed in from the parent.
```
  const iconPostIsLiked = (
    <span onClick={onUnlike}>
      <i className="fa-solid fa-heart"></i>{" "}
    </span>
  );

  const iconUserIsLoggedIn = (
    <span onClick={onLike}>
      <i className="fa-regular fa-heart"></i>{" "}
    </span>
  );
```

The OverlayTrigger and Tooltip components were also extracted.
```
const cantLikeOwnPostToolTip = <Tooltip>Can't like own post!</Tooltip>;
const logInPromptToolTip = <Tooltip>Please log in to like.</Tooltip>;

  const iconPostIsOwner = (
    <OverlayTrigger placement="top" overlay={cantLikeOwnPostToolTip}>
      <i className="fa-regular fa-heart"></i>
    </OverlayTrigger>
  );
```
This makes the code much easier to expand if I later decide to add more functions to the Footer.

+ Reusable Form Dropdown  
A dropdown form element is used on the BlogPostCreateForm component to allow the user to select a category for a BlogPost. There is need for a similar component in the PostsPage component to allow filtering the results of all the posts - the user should filter the posts they want to see based on category. Instead of building two components that behave in exactly the same way, I extracted this into a reusable component called FormSelections. To further increase the reusability, this object accepts a name, a change handler, and a list of objects representing the choices to be displayed.
```
const FormSelections = ({ controlName, onChangeHandler, options }) => {
  return (
    <Form.Control as="select" name={controlName} onChange={onChangeHandler}>
        {
    options.map((obj)=>{
        let databaseValue = Object.keys(obj)[0];
        let friendlyValue = obj[databaseValue];
        return <option key={databaseValue} value={databaseValue}>{friendlyValue}</option>
    })}

    </Form.Control>
  );
};
```
To generate the list, the map function is called which iterates over the objects in the list and constructions an **option** element and sets its value and text from the passed in objects list. Since the values are unique, they can be used as the key.

+ CardEdit Component  
This stateless component returns a Bootstrap CardBody with two icons - one for delete and one for edit. The component accepts two callbacks, onEdit and onDelete to handle the clicks for these icons. There is a also a boolean showEdit to conditionally render the edit icon.

```
function CardEdit({onDelete, onEdit, showEdit}) {
  return (
    <Card.Body>
      <Row className="d-flex justify-content-end">
        <span onClick={onDelete}>
          <i className="fa-regular fa-trash-can"></i>
        </span>

        {showEdit ? (
        <span onClick={onEdit}>
          <i className="fa-regular fa-pen-to-square"></i>
        </span> 
        ) : (<></>)}
      </Row>
    </Card.Body>
  );
}
```

+ Reusable Modal  
This modal component can be called from multiple components to either display warnings to the user or ask for confirmation before an action takes place. The message, title, and handlers to handle click events on the button are passed in as props.
```
function ModalAlert({show,  handleClose, onConfirm, title, message}) {
  return (
    <Modal show={show} onHide={handleClose} onClose={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{message}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={onConfirm}>
        Delete
      </Button>
    </Modal.Footer>
  </Modal>
  )
}
```

+ List Display Component  
Both the steps and the ingredients in a recipe must be displayed as lists. This functionality is a perfect candidate to be extracted into its own component. I therefore designed a list display component that accepts a list, a heading, and boolean as props. The component maps over the list and renders a list item element for each element in the list. The index is used for the key - this is not ideal but is acceptable in this case as there is no guarantee that the list item values will be different. The list unordered or ordered depending on the value set by the boolean called **ordered**. Since the list being passed in from the parent is a list of JSON objects, the Objects.value() method is used to extract the value. 

```
function ListDisplay({ list, ordered, heading }) {
  return (
    <div>
      <h4 className={styles.h4}>{heading}</h4>

      {ordered ? (
        <ol>
          {list.map((listItem, index) => (
            <li className={styles.ListItem} key={index}>
              {Object.values(listItem)}
            </li>
          ))}
        </ol>
      ) : (
        <ul>{list.map((listItem, index) => (
          <li className={styles.ListItem} key={index}>
            {Object.values(listItem)}
          </li>
        ))}</ul>
      )}
    </div>
  );
}
```

+ List Entry Component  
The recipe steps and the ingredients must be entered in a similar way. Ideally, the user should have the ability to enter as many items as they like and delete the ones they do not. I therefore created a ListEntry component the accepts an initial set of fields, a setFields callback from the parent, and a label to display at the top of the form.

```
function ListEntry({ fields, setFields, label }) {

  const addInputElement = (event) => {
    let newField = { item: "" };
    setFields([...fields, newField]);
  };

  const removeInputElement = (index) => {
    let data = [...fields];
    data.splice(index, 1);
    setFields(data);
  };

  const handleChange = (index, event) => {
...
  };

  return (
    <>
      <h3 className={`text-center ${styles.Text}`}>{label}</h3>
      <Form.Group className="input-group-append">
        <Row>
          <p className={`text-center ${styles.Text}`}>Add a Field</p>
          <i onClick={addInputElement} className="fa-solid fa-circle-plus"></i>
        </Row>
      </Form.Group>

      {fields.map((input, index) => {
        return (
          <Row key={index}>
            <Form.Group className="input-group-append">
              <Form.Control
                name="item"
                placeholder="add a step"
                value={input.item}
                onChange={(event) => handleChange(index, event)}
              />

              <i
                className="fa-regular fa-trash-can"
                onClick={(event) => removeInputElement(index)}
              ></i>
            </Form.Group>
          </Row>
        );
      })}
    </>
  );
}
```


# UI Design
The project uses Code Institute's [Moments](https://github.com/Code-Institute-Solutions/moments) project as a starting framework as both sites involve creating, filtering, and searching posts. Therefore, there are is a certain level of code overlap. The following parts of Nonna's Kitchen are taken from the Moments project:
+ project structure - this is an industry standard way to organize a React Project
+ the NavBar - the implementation of the NavBar is also standard and code similarity is to be expected. The NavItems in the NavBar are unique
+ hamburger menu toggle - fixing the behavior of the hamburger menu toggle in the NavBar would be required in any project. I have chosen to use Code Institute's solution.
+ the form elements for login and sign up - the form fields and methods used to login/register/logout are taken from the project. This process would be similar in any project. The styling and layout of these components is unique.
+ axios interceptors - Web token management would be a problem in any project requiring user state management. I have chosen to use the solution in the Moments project as it would be a standard way of solving this problem.
+ context objects for user state - Managing user state and passing it through the component tree would be a common problem in any React app requiring a logged in user. Code Institute's solution using custom context hooks for getting and updating the logged in user was used because it is simple and follows industry practice.
+ infinite scroll - The code for implementing the infinite scroll was taken from the walkthrough as well as its implementation is standard.
+ refresh token request - The code to prevent an unauthenticated user from requesting a refreshed access token is taken directly from the Moments walkthrough. This code includes setting the timestamp, checking if it is valid, and deleting it upon logout.

# Color Scheme
The base color scheme for the site was generated with [coolers](https://coolors.co/) using the grandmother image as a starting point.  
![color scheme](screenshots/pallete.png). Overall, a soft and gentle color scheme was chosen as that fits the goal of the site to evoke and share warm memories around food.

Throughout the site, images were also chosen which had colors similar to those in the palette so the site is unified. Where needed, the shades were adjusted for contrast. In addition, on the sign-in and sign-up forms the colors for the buttons were taken using a color picker from the images on those pages for a blend of consistency and contrast.

## NavBar
The NavBar component displays the standard items a user expects to see. What is rendered depends on the user's authentication status. If they are logged out, they are presented with links to sign in and sign up. If they are authenticated, links to add a post, a recipe, and their custom content are presented as well as a logout link. The NavBar is responsive. On medium size screens the menu collapses into a menu with a hamburger icon.

I tried several different designs for organizing the content on the navbar. 
![navbar wireframe](screenshots/navbar/navbar_wireframes.png)  
Sketch 1 was the original idea - it had a logo and text with each of the actions represented by an icon - quite similar to the moments walkthrough. In principal this would have worked, but I decided against it since I have two kinds of content - Posts and Recipes. I could not find an icon that accurately represented recipes. Including text next to the icons also made the navbar very confusing and busy. I ultimately decided on the design in sketch 3 where each action in the navbar is text. It is much easier to read. I decided to have the navbar collapse on a large screen and smaller because the text became overlapped (sketch 2).

This is what the final implementation looks like:
> Navbar for a logged out user on a very large screen:  
![full navbar logged out](screenshots/navbar/navbar_full_loggedout.png)  
> Navbar for a logged in user on a very large screen:  
![full navbar logged out](screenshots/navbar/navbar_full_logged_in.png)  
> Collapsed navbar:  
![full navbar logged out](screenshots/navbar/navbar_collapse.png)  


> + As a user I can view a navbar from every page so that I can navigate easily between pages
> + Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to
> + Conditional rendering - As a logged out user I can see sign in and sign up options so that I can sign in/sign up

## SignUp/SignIn Form
There is a Sign Up form that allows the user to create an account if they do not already have one. In addition, there is a Sign In form as well that allows the user to log in to access additional content. I wanted a simple SignIn/Sign up form with a an image taking up half the screen and the from fields on the other half. On smaller screens, these would rearrange into a single column with the image on the top and the form fields below.

> Designs for SignIn/SignUp Form
![sign in wireframe](screenshots/signin-up/sign-in-wireframe.jpg)

The final implementation is relatively close to the intended design:
The sign in screen on a large and small screen respectively.  
![sign in large](screenshots/signin-up/sign_in_large.png)  
![sign in small](screenshots/signin-up/sign_in_small.png)  
The sign up screen on a large and small screen respectively.


![sign up large](screenshots/signin-up/signup_large.png)  
![sign up small](screenshots/signin-up/signup_small.png)
> + As a user I can create a new account so that I can access all the features for signed up users
> + As a user I can sign in to the app so that I can access functionality for logged in users


## Create BlogPost Form
The form to create a BlogPost has all the necessary fields for the user to create an entry. There is an option to select an image as well as a dropdown form for users to select the category. Upon successful submission, the user is taken to the post detail page for the newly created post. If they cancel the submission, they are redirected to the home page.

I wanted simple design for this form. The sketch would have the form in two main sections. One section has an image of a granny which the user clicks on to select the image. The other half contains the form fields and submit/cancel buttons. On smaller screens, the image shifts to the top and the fields to the bottom in one column.  
Sketches for the BlogPost create form for a large screen.
![wireframe large screen](screenshots/blogpost/wireframe_form_large.png)
![wireframe small screen](screenshots/blogpost/wireframe_form_small.png)


The final implementation of the designs are:
> Create BlogPost form on a large screen.  
![blog post form large](screenshots/blogpost/create_post_large.png)
> Create a BlogPost form on a small screen.
![blog post form small](screenshots/blogpost/create_post_small.png)
+ As a logged in user, I can create a BlogPost so that I can share my food related content with other users on the platform.

# Post Component
The Post component contains the details for a blog post. These components are arranged in a Bootstrap Card component. I wanted the category to be in a prominent place since that is more general in the hierarchy than the other elements - the users can select what type of post they want to read. The image element is also prominent so that the user can be attracted to a post by the image. In other words, the image is used to grab focus since many people do "eat with their eyes" - meaning how food looks is what first draws our attention to a particular meal. (Of course, this in the abscence of smell!)  

Wireframe sketch for the blog post:

![wireframe blog post](screenshots/blogpost/blogpost_wireframe.png)

This the actual implementation.  
Blog Post

![blog post card](screenshots/blogpost/blogpost.png)


## Post Detail Component
When the user clicks on a post, they are redirected to the PostDetail page where the comments that belong to the post are also displayed in an infinite scrolling list below the post.
> + As a user, I can view the details of a single post so that I can enjoy additional content about that post.  

![post with comments](screenshots/blogpost/post_with_comments.png)

If the user has written the post, a menu is shown with two icons. The trash icon is for deleting a post. When the user clicks on this icon, a modal popup appears asking the user to confirm their wish to delete the post. If they click on the edit icon, they are taken to a page with a form pre-populated with the post data. The user can change one or several of the fields. When they hit Save, the database is updated through the api and the user is redirected back to the post detail page. If they hit cancel, they are also taken back to the post detail page.

Post edit/delete icons  
![edit delete icons](screenshots/blogpost/edit_delete_icons.png)

 Confirm delete modal  
![confirm delete modal](screenshots/blogpost/delete_modal.png)
> + As a logged in user, I can delete a post I have made so that I can remove content I no longer wish to share.  
> + As a logged in user, I can edit a post I have created so that I can update content or correct mistakes I have made.

## Post Page
The Post Page displays a list of all the posts. The posts are sorted by date so the most recent posts are displayed first. On the top of the page is a search bar in which the user can enter search terms. When the user has finished typing the site makes an api call and the data is refreshed. In addition, there is a dropdown menu that the user can use to filter the results by post category.

I decided on a simple layout for the posts page. Under the navbar is the search bar followed by a dropdown where users can filter posts by category. The posts follow in a single infinitely scrolling column.

Wireframe sketch for the page.  
![posts page wireframe](screenshots/blogpost/blogpost_wireframe.png)  
This is the actual implementation  
![posts page](screenshots/blogpost/posts_page.png) 

> + As a user, I can view all the blog posts sorted by date created so that I can enjoy the most recently created content.
> + As a user, I can search posts so that I can quickly find content that is interesting to me.
> + As a user, I can filter the post by category so that I can quickly find content that I am most interested in.

## Post Likes
Each BlogPost component has a footer in which the total likes are displayed next to a heart icon. A logged in user can like a post if they are not the owner of that post by clicking on the heart icon. The icon changes from outlined to filled to reflect the change. The user can like a post either from the posts page or the post details page. In the nav bar, there is a link for the user see a list of BlogPosts that they have liked.
> + As a logged in user, i can view all of the content that I have liked so that I can easily access my favorite content.
> + As a user, I can like a post so that I can mark content that is relevant to me.

## Post Comments
If a user is logged in, they can comment on a post. The form to enter a comment is displayed on the Post page if the user is logged in. They can also comment by clicking on the comments icon with each post - this takes them to the post detail page as well. Upon submitting their comment, the comments list is updated is the comment count for the post.
> + As a logged in user, I can comment on a post so that I can share my opinions on a post I find interesting.  

> Comment field on the details page.
![comment field](screenshots/comments/comment%20form.png)  

If the user is logged in and goes to a post, a list of all the comments for that post is displayed. If the user is the author of a comment, two icons (edit and trash can) appear in the header of that icon that allow them to edit or delete the comment. If the user clicks on the trash can, a modal dialog appears asking them to confirm the delete. If they agree, the comment is deleted and removed from the list. If they cancel, the modal is dismissed. If the user clicks on the edit icon, a form is rendered right underneath the comment populated with the comment body data. The user can update the text as they see fit. Upon save, the database is updated through an api call and the comment list is updated as well. If they click on cancel, the form is dismissed.

This is the comment showing the edit icons
![comment icons](screenshots/comments/comment_with_icons.png)  
![comment edit](screenshots/comments/comment_edit.png)
> + As a logged in user, I can see a list of comments for a post so that I can see what other users think of a particular post.
> + As a logged in user, I can edit a comment I have created so that I can correct mistakes I have made.
> + As a logged in user, I can delete a comment I have made so that I can remove content I no longer wish to share with the community.

## Recipe
The Recipes page displays a list of recipes that are shared by the other users. On the page, the recipes are displayed in an infinitely scrolling list similar to the posts page except there is no search and filtering capability. Each recipe card shows the type, an image, a title, and a description. Just like in the Post page, it is the image that is prominent since people are drawn to food first by how it looks. 

A recipe card has a similar design to a Post. A recipe has a difficulty associated with it and an ingredients list and steps for completing it.
> This is the design for the recipe as displayed on the recipes page:
![recipe wireframe](screenshots/recipe/recipe_wireframe.jpg) 
> This is the actual implementation of the recipe card.
![recipe](screenshots/recipe/recipe.png)

When the user clicks on the recipe image, they are taken to the detail page where the recipe along with the ingredients and instructions are displayed. On large screens, the instructions and ingredients are side-by-side. On smaller screens they collapse into a single column.

Recipe detail design
![recipe detail wireframe](screenshots/recipe/recipe_detail_wireframe.jpg)

This is the implementation.

![recipe detail](screenshots/recipe/recipe_detail.png)

This is the recipe detail on a small screen.

![recipe on small screen](screenshots/recipe/recipe_small_screen.png)

> + As a user, I can see list of recipes on the site so that I have the chance to learn how to cook a new dish.

If the user is logged in and they click on a post they own, a trash icon appears at the bottom of the post that allows them to delete it. A modal dialog appears asking them to confirm the delete. If they do, the post is deleted and they are returned to the previous page. If they cancel, the modal is dismissed. There is also an icon to allow them to edit a recipe. Upon clicking the edit icon, they are taken to the RecipeEditForm and the data is loaded for them to edit.

![recipe with delete](screenshots/recipe/recipe_edit_delete_icons.png)

This is the confirm delete modal.  
![recipe delete modal](screenshots/recipe/confirm_delete_recipe_modal.png) 
> + As a logged in user, I can delete a recipe I posted so that I can remove content I no longer wish others to see.

## Recipe Create Form
The recipe create form follows the same layout principles as the post create form. Half of the screen is an image of a granny which the users click on to upload an image. The other half consists of the form fields for the user to enter recipe details. On smaller screens, all of the elements collapse into a single column. For the ingredients and instructions lists, users can add as many fields as they like by clicking on the plus buttons. Users can also delete fields they no longer want by clicking on the trash icon next to each field. They are not allowed to delete all the fields. There is a check to make sure there is at least one input field before it is allowed to be removed from the form. 

![recipe edit form](screenshots/recipe/recipe_create_form_large.png)  

In addition, if there are any blank fields in either the recipe or the ingredients list, then a dialog appears telling them that blank entries are not allowed. They cannot submit with blank entries.  
![blank list warning](screenshots/recipe/blank_list_warning.png)  

> + As a logged in user, I can create a recipe so that others users can learn how to make a dish that is important to me.

## Recipe Edit
When the user clicks on the edit icon for a post they own, the PostEditForm component is loaded and the fields are pre-populated with the form data. The user can edit the data as needed and submit upon which they are taken back to the Post page and the updated data. As with the recipe create form, the user is warned that they are not allowed to have blank entries in the recipe or instructions list.
> + As a logged in user I can edit a recipe so that I can correct any mistakes I have made.

## Infinite Scroll
The api returns results in groups of ten (BlogPost or Comments) in order to conserve bandwidth. For the user to continue accessing the data, they would have to see either a pagination widget at the bottom of the page or the next batch of results should be downloaded automatically. The latter is what today's users expect. The react-infinite-scroll-component library was used to simplify this process. When the user reaches the bottom of the page, the next batch of results are loaded automatically.
> + As a user, I can see a list of posts in a long list so I do not have to navigate through pagination links.

# Agile Development
An Agile approach was used to manage the completion of this project. Specifically, this meant breaking the project down into smaller tasks with a focus on minimum functionality first. Only when a minimally viable product is ready will extra features be added. In addition, GitHub projects and Issues were used a tool to keep track of the tasks.

What does minimally functioning mean in this context? As with any project, there are real constraints (time, energy, know-how) that force a developer to prioritize the work. Based on my abilities and constraints, I have prioritized the project requirements in the following way:
* A functioning front-end with authentication, registration, CRUD operations for a BlogPost. The focus is on working code.
* Implementation of code for adding likes and comments to a BlogPost.
* Aesthetics/Design - This is of course important in an advanced front end project, but the goal here is to have just minimal styling at first and then as time permits improve the visual design. The reasons are two-fold. 
1. Having a beautiful design is meaningless if the code behind it does not function and 
2.  My particular focus in learning is getting the code behind the front end as clean as possible.

## Outline of Sprints
The following is an outline of the sprints that were done during the completion of this project. Each sprint was designed to be from one to three full days' work.

### Sprint 1 - Project setup 
Goal: Project environment, authentication functionality, bare minimum styling
Time: One Day
+ Setup project
+ Outline project creation and deployment steps in README
+ Install additional libraries
+ Write User Stories for Navigation and Authorization
+ Setup minimal navbar with routing
+ Design minimal sign in and sign up forms
+ Connect sign in and sign up to backend
+ Fix hamburger toggle

### Sprint 2 - Making a Post
Goal:  Users can see posts on home page and add a post. Minimal styling
Time: One Day
+ Design content page
+ Connect to backed to display current posts
+ Design Post form
+ Create a Post
+ Display a Post
+ Like a Post
+ Add links to navbar

### Sprint 3 - Likes, Comments
Goal: Users can add a comment and like a post. Users can see the posts they've liked
Time: Three Days
+ Add favorites link to navbar for logged in user
+ Add filter by like 
+ Add filter by category
+ Add edit and delete function for BlogPost.
+ Design add comment form
+ Add, delete, update, and display comments.

### Sprint 4 - Style
Goal: Adjust layout and basic styles for components
Time: Two Days
+ Add icons to navbar
+ Configure layouts
+ Set colors
+ Set fonts

### Sprint 5 - Test Deploy
Goal: Deploy the site to make sure it works.
Time: One Day
+ lint code
+ prepare for deployment
+ deploy to Heroku

### Sprint 6 - Recipes
Goal: CRUD operations for a Recipe
Time: Two Days
+ Recipe Component
+ Display Recipe
+ Recipe Form
+ Create and Read operations on Recipe
+ Deploy to Heroku

### Sprint 7 - Refactor components
GOAL: Find repeated code and extract into reusable components.


## Use of GitHub
Each larger scale task was given a GitHub issue. This included the user stories, and anything else that would require attention. Issues were assigned labels to help prioritize them in the work flow. As can be seen, some issues are marked as "Must Do" while others are marked as "Should Do". Some issues are enhancements, others are questions requiring research. Often, if I ran into a problem that was not critical to fix or if I thought of a feature that I would like to add, I created an issue and assigned it a label to help me keep track of how important it is. The key is that essential features and critical issues were fixed first.

> Some of the issues in this project:
![issues](screenshots/agile/agile_issues.png)
### Projects
Issues often are related to each other - this includes user stories and additional features. For example, user stories around CRUD operations belong together as well as issues involved with search and styling. To help keep issues organized, those that are related to each other were organized into projects.

> Here are some of the GitHub projects associated with this app. The project dedicated to the front end is "Nonna's Kitchen Front End"  
![github projects](screenshots/agile/projects.png)

In the "Nonna's Kitchen Front End" project, one can see all the issues that were completed during the course of the project.
![agile_project](screenshots/agile/agile_project.png)

# Version Control
Git was employed in this project and the project code hosted on GitHub. I used branches in order to keep the main branch as "pure" as possible. The strategy was to have each branch dedicated to one feature or fix. Once I was satisfied at a particular stage of a branch, I would navigate to GitHub, click on my repository, select the branch, and create a pull request. GitHub would then check if there are no conflicts and indicate if the branch could be merged into main. (One can choose which branch to merge into.) Once the pull request is created, I navigated down, wrote a comment, and clicked on the green Merge button and the commits would be merged into the main branch. I tried to keep commits as atomic as possible - focusing only on one element or feature at a time. This was not always the case, but most of the commits are relatively small changes. In addition, I tried not to mix features in a branch. Small tweaks to other features were allowed, but the majority of the work on each branch was dedicated to that one feature. This is in line with the agile method of tackling a project - the team (in this case me) should only work on one feature at a time.

![github branches](screenshots/agile/branches.png)

# Testing
The testing done here is BDD - each test is described as a story in which a description of the software requirements, the user actions, and the expected outcome are given along with a result of PASS or FAIL. To reduce the length of the readme, here is a link to the [testing tables](bdd_test_cases.md) describing the various test cases.

# Code Validation
I ran into several issues when trying to configure ESLint using GitPod - trying to install and configure ESLint on GitPod ended up breaking the node dependency tree. After restoring the original configuration, I decided to download a .zip of my respository from GitHub, open it on my local version of VSCode, and run the linter file by file. In this way, the original configuration on Gitpod is preserved. In configuring ESLint, the following settings were used:
+ Check syntax and find problems
+ JavaScript modules (import/export)
+ React
+ JavaScript export/import
+ Does not use TypeScript
+ Runs in node
+ JSON as config

## Linting Results
The following linting errors were ignored:
+ spelling errors or unknown word warnings
+ prop type validation: This is a an error about validating the data types for props passed in to components. Although the use of data types is an important check for code reusability, ignoring data types in a project of this size and complexity is ok. However, for components to be truly reusable, data type validation is an important check.
+ Do not pass children as props warning for Infinite Scroll component: This warning was also ignored since it is part of the implementation for the InfiniteScroll component and the the method is taken from the walkthrough.
+ Unused **event** object - In several handler methods, the event object is passed in but not used. I decided to leave the event object as a parameter to make these handlers easier to identify. 
+ An error about unescaped characters (in this case an apostrophe) was also ignored as using the escaped character sequence suggested resulted in the apostrophe not displaying on the test server.  

The following errors were addressed:
+ In several components (App.js, CurrentUserContext.js, ), there was a React not in scope error that was easily fixed by importing React in the imports section of the file.
+ An unsafe chaining method in the RecipePage was fixed.

The results from the lint are shown in the following screenshot. (Warnings are filtered out.) The errors shown are the ones that are ignored.
![eslint results](screenshots/eslint_results.png)

## W3C Markup Validator
The main pages of the deployed site was run through the [W3C Markup Validator](https://validator.w3.org/) and returned no errors.

## Lighthouse Report
The main pages of the deployed site was run through Lighthouse on Google Chrome using Desktop settings. The settings SEO, Best Practices, and Accessibility were checked. The results for the pages were acceptable and no serious issues (although in some the contrast could be improved) were found.

### Lighhouse Report Sign In Page
![lighthouse report sign in](screenshots/lighthouse/lighthouse_sign_in.png)

### Lighthouse Report Sign Up Page
![lighthouse report sign up](screenshots/lighthouse/lighthouse_sign_up.png)

### Lighthouse Report Posts Page
![lighthouse report posts page](screenshots/lighthouse/lighthouse_posts_page.png)

### Lighthouse Report Add Post Page
![lighthouse report add post page](screenshots/lighthouse/lighthoust_add_post.png)

### Lighthouse Report Recipes Page
![lighthouse report recipes page](screenshots/lighthouse/lighthouse_recipes_page.png)  
The lower score for best practices was that a low resolution image was used on this page. Although low quality images can indeed cause a bad user experience, in this case it is from a user upload.

### Lighthouse Report Add Recipe Page
![lighthouse report add recipe page](screenshots/lighthouse/lighthouse_add_recipe.png)


# Unfixed bugs
+ Some of the elements that are rendered conditionally appear for a split second while the page is loading or refreshing. Upon final load, the state is correct. For example, while the recipe detail is loading, the icon for the delete is visible for a split second while, even though it should not be. The same goes for the comments on a post - while the comments are loading, the "No comments to display" text is visible. When the comments are loaded, the text is gone as it should be. This is a cosmetic issue that does not interfere with the overall experience of the site. However, it should be addressed in a future release.
+ The unlike functionality does not work entirely as expected. The use can like a post - the icon and like count behave as expected. However, they cannot unlike a post immediately after liking it - the heart icon does not respond to clicks. If the user refreshes the page, they can unlike the post. This strange behavior was not present when running the code on the test server. This is a relatively small bug that does not severely impact the user experience but it should be addressed in a future release.
+ The like behavior could also be an artifact from the app's architecture in which the front end is responsible for updating the UI state (the number of likes) after making an API call. This effectively means that for this component there are two sources of truth - the actual number of likes according to the database, and the number of likes according to the front-end. Ideally, this component should observe the number of likes on the database and update itself when the database value changes.
+ Another small issue that should be addressed is when the user tries to edit the Recipe or BlogPost. Currently the form data is preloaded. the text fields, images, and recipe/ingredients list values are loaded into the form. The values that are for the dropdown menus (the dish type, the difficulty, and the category) are not. These dropdown lists are reset to the initial value. So if the user must reset these each time they edit a Recipe or a Post. Although not a breaking issue, it does decrease the quality of the user's experience with the site and should be addressed in a future release.

# Features Left to Implement
+ The user should be allowed to comment and like a recipe as well as the backend has that functionality.
+ The backend also allows for a rating to be attached to a recipe. A ratings bar and an average rating would be a nice feature to add as well.
+ The site is supposed to be centered on food and feelings. Ideally, there should also be a feature to flag content that is inappropriate or hurtful and/or irrelevant to the site.
+ Allowing people to log in with a social media account would also be a good feature as that is expected in modern web applications requiring authentication.

# Technology Used
+ [React Bootstrap](https://react-bootstrap-v4.netlify.app/) - This package contains ready to use React components that are compatible with the React library. This makes creating a responsive React app much simpler.
+ [axios](https://www.npmjs.com/package/axios) - A lightweight but very powerful library for making network calls in JavaScript. It includes utilities for managing and refreshing web tokens.
+ [react-router-dom](https://reactrouter.com/en/main) - A simple to use React library to simplify routing and navigation without the need to refresh the page.
+ [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) - A library that simplifies the implementation of an infinite scroll for long lists of data.
+ [jwt-decode](https://www.npmjs.com/package/jwt-decode) - A library to help decode jason web tokens. This was used in the moments walkthrough to prevent the user from making network requests to refresh tokens if they are not logged in.


# Project Creation
The front end for this project will use the Moments walkthrough as a model. Since the creation of that video, there are new releases of React, Bootstrap, and react-router-dom. Many of these upgrades involve breaking changes. Therefore, I chose to use the starting template provided by Code Institute and then install any additional libraries as needed.

The following steps were taken to initialize the project:
+ Create a new GitHub repository: [nonnas-kitchen](https://github.com/tony-albanese/nonnas-kitchen)
+ Create GitPod workspace from that by clicking on the **GitPod** button.
+ Once in the workspace, open a terminal and enter the following command which will create an empty React app with all of the libraries used in the walkthrough already installed
```
npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm
```

Some of the artifacts from using this template are visible in the settings files. For example, in package.json the name of the app is "moments". However, this is not really an issue.
```
{
  "name": "moments",
  "version": "0.1.0",
  "private": true,
  "engines": {
    "node": "16.x"
  },

  ```
## Deployment

The app is then deployed to Heroku by the following steps:
+ Login to Heroku or create a new account.
+ Click on **New** dropdown menu from the dashboard and select **Create new app**
+ Give the app a name: nonnas-kitchen
+ Select region
+ Click on **Create App**
+ Click on the Deploy tab in the newly opened page.
+ In the Deployment method section, select GitHub
+ Search for and select the proper repo. In this case it is [nonnas-kitchen](https://github.com/tony-albanese/nonnas-kitchen) and click **connect**
+ In the Manual deploy section, select the branch to deploy and click on **Deploy Branch**.

# Credits
+ The initial template for this app was from Code Institute's [Moments project template](https://github.com/Code-Institute-Org/cra-template-moments.git). 

+ The Asset component which is used to display the spinner and other visual components is taken from the [Moments](https://github.com/Code-Institute-Solutions/moments/blob/master/src/components/Asset.js) and modified accordingly. 

+ The idea for building the dynamic form fields in the ListEntry component was taken from this excellent article on freeCodeCamp: [How to Build Dynamic Forms in React](https://www.freecodecamp.org/news/build-dynamic-forms-in-react/).

## Image Credits
+ The upload image was taken from Code Institute.

+ The grandmother icon is from <a href="https://www.flaticon.com/free-icons/grandmother" title="grandmother icons">Grandmother icons created by Freepik - Flaticon</a>
+ The sign in photo is from Photo by [Andrea Piacquadio](https://www.pexels.com/photo/crop-cook-preparing-noodles-in-kitchen-3771814/).
+ Grandmother and granddaughter cooking<a href="https://www.freepik.com/free-vector/happy-grandma-granddaughter-cooking-together-kitchen-interior-with-utensils-table-grandmother-grandchild-kneading-dough-baking-pie-with-berries-family-relationship_28849871.htm#query=grandmother%20kitchen&position=3&from_view=search&track=ais">Image by studio4rt</a> on Freepik

+ Grandmother with Grandchild - Image by <a href="https://www.freepik.com/free-vector/flat-grandparents-day-illustration-with-grandmother-grandchild_28148596.htm#query=grandmother%20kitchen&position=17&from_view=search&track=ais">Freepik</a>

+ Credit for the 404 page image: <a href="https://www.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_21586054.htm#query=404%20page&position=3&from_view=search&track=sph">Image by jcomp</a> on Freepik

+ Credit for empty refrigerator image: <a href="https://www.freepik.com/free-vector/refridgerator-with-opened-door_25538317.htm#query=empty%20refrigerator&position=33&from_view=search&track=ais">Image by brgfx</a> on Freepik
