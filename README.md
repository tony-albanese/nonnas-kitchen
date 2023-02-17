# Nonna's Kitchen Frontend

# User Stories
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
+ As a user, I can view the details of a signle post so that I can enjoy additional content about that post.
+ As a user, I can view all the blog posts sorted by date created so that I can enjoy the most recently created content.
+ As a user, I can search posts so that I can quickly find content that is interesting to me.
+ As a user, I can filter the post by category so that I can quickly find content that I am most interested in.

## Likes
+ As a logged in user, i can view all of the content that I have liked so that I can easily access my favorite content.
+ As a user, I can like a post so that I can mark content that is relevant to me.


# React Features
## Routing
The react-router-dom libary was used to manage page navigation. This libary manages the rendering components so that the page is not continuosly refreshed when the user navigates through the site.
> + As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh

## Web Token Refresh
Normally, web tokens expire after a short time and thus the user would be continously logged out the site. These tokens must be refreshed so that the user maintains logged in satus for an extended period of time. The axios library has utiltity objects called interceptors to help manage and refresh the tokens automatically. The code to manage the interceptors was taken from the Moments walkthrough project from Code Institute.
> + Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised

## Reusable Components
+ Reusable Footer Component
+ Reusable Form Dropdown

# UI Design
The project uses Code Institute's [Moments](https://github.com/Code-Institute-Solutions/moments) project as a starting framework. Therefore, there are is a certain level of code overlap. The following parts of Nonna's Kitchen are taken from the Moments project:
+ project structure - this is an industry standard way to organize a React Project
+ the NavBar - the implementation of the NavBar is also standard and code similarity is to be expected. The NavItems in the NavBar are unique
+ hamburger menu toggle - fixing the behavior of the hamburger menu toggle in the NavBar would be required in any project. I have chosen to use Code Institute's solution.
+ the form elements for login and sign up - The styling is unique, but the form fields and methods used to login/register/logout are taken from the project. This process would be similar in any project. The styling and layout of these components is unique.
+ axios interceptors - Web token management would be a problem in any project requiring user state management. I have chosen to use the solution in the Moments project as it would be a standard way of solving this problem.
+ context objects for user state - Managing user state and passing it through the component tree would be a common problem in any React app requiring a logged in user. Code Institute's solution using custom context hooks for getting and updating the logged in user was used because it is simple and follows industry practice.


## NavBar
The NavBar component displays the standard items a user expects to see. What is rendered depends on the user's authentication status. If they are logged out, they are presented with links to sign in and sign up. If they are authenticated, links to add a post, a recipe, and their custom content are presented as well as a logout link. The NavBar is responsive. On medium size screens the menu collapses into a menu with a hamburger icon.
> + As a user I can view a navbar from every page so that I can navigate easily between pages
> + Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to
> + Conditional rendering - As a logged out user I can see sign in and sign up options so that I can sign in/sign up

## SignUp/SignIn Form
There is a Sign Up form that allows the user to create an account if they do not already have one. In addition, there is a Sign In form as well that allows the user to log in to access additional content.
> + As a user I can create a new account so that I can access all the features for signed up users
> + As a user I can sign in to the app so that I can access functionality for logged in users


## Create BlogPost Form
The form to create a BlogPost has all the necessesary fields for ther user to create an entry. There is an option to select an image as well as a dropdown form for users to select the category. Upon successful submission, the user is taken to the post detail page for the newly created post. If they cancel the submission, they are redirected to the home page.
+ As a logged in user, I can create a BlogPost so that I can share my food related content with other users on the platform.

## Post Detail Component
When the user clicks on a post, they are redirected to the PostDetail page where additional details about the post are displayed.
> + As a user, I can view the details of a single post so that I can enjoy additional content about that post.

## Post Page
The Post Page displays a list of all the posts. The posts are sorted by date so the most recent posts are displayed first. On the top of the page is a search bar in which the user can enter search terms. When the user has finished typing the site makes an api call and the data is refreshed. In addition, there is a dropdown menu that the user can use to filter the results by post category.
> + As a user, I can view all the blog posts sorted by date created so that I can enjoy the most recently created content.
> + As a user, I can search posts so that I can quickly find content that is interesting to me.
> + As a user, I can filter the post by category so that I can quickly find content that I am most interested in.

## Post Likes
Each BlogPost component has a footer in which the total likes are displayed next to a heart icon. A logged in user can like a post if they are not the owner of that post by clicking on the heart icon. The icon changes from outlined to filled to reflect the change. The user can like a post either from the posts page or the post details page. In the nav bar, there is a link for the user see a list of BlogPosts that they have liked.
> + As a logged in user, i can view all of the content that I have liked so that I can easily access my favorite content.
> + As a user, I can like a post so that I can mark content that is relevant to me.


# Agile Development
An Agile approach was used to manage the completion of this project. Specifically, this meant breaking the project down into smaller tasks with a focus on minimum functionality first. Only when a minimally viable product is ready will extra features be added. In addition, GitHub projects and Issues were used a tool to keep track of the tasks.

## Outline of Sprints
The following is an outline of the sprints that were done during the completion of this project. Each sprint was designed to be from one to three days' work.

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
+ Design add commment form
+ Add, delete, update, and display comments.

### Sprint 4 - Style
Goal: Adjust layou and basic styles for components
Time: Two Days
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
+ CRUD operations on Recipe

## Use of GitHub
Each larger scale task was given a GitHub issue. This included the user stories, and anything else that would require attention. Issues were assigned labels to help prioritize them in the work flow. As can be seen, some issues are marked as "Must Do" while others are marked as "Should Do". Some issues are enhancements, others are questions requiring research. Often, if I ran into a problem that was not critical to fix or if I thought of a feature that I would like to add, I created an issue and assigned it a label to help me keep track of how important it is. The key is that essential features and critical issues were fixed first.
### Projects
Issues often are related to each other - this includes user stories and additional features. For example, user stories around CRUD operations belong together as well as issues involved with search and styling. To help keep issues organized, those that are related to each other were organized into projects.
# Testing

# Technology Used
+ [React Bootstrap](https://react-bootstrap-v4.netlify.app/) - This package contains ready to use React components that are compatible with the React library. This makes creating a responsive React app much simpler.
+ [axios](https://www.npmjs.com/package/axios) - A lightweight but very powerful library for making network calls in JavaScript. It includes utilities for managing and refreshing web tokens.
+ [react-router-dom](https://reactrouter.com/en/main) - A simple to use React library to simplify routing and navigation without the need to refresh the page.


# Project Creation
The front end for this project will use the Moments walkthrough as a model. Since the creation of that video, there are new releases of React, Bootstrap, and react-router-dom. Many of these upgrades involve breaking changes. Therefore, I chose to use the starting template provided by Code Institute and then install any additional libraries as needed.

The following steps were taken to initialize the project:
+ Create a new GitHub repository: [nonnas-kitchen](https://github.com/tony-albanese/nonnas-kitchen)
+ Create GitPod workspace from that by clicking on the **GitPod** button.
+ Once in the workspace, open a terminal and enter the following command which will create an empty React app with all of the libaries used in the walkthrough already installed
```
npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm
```

Some of the artifacts from using this template are visible in the settings files. For example, in packag.json the name of the app is "moments". However, this is not really an issue.
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
+ The upload image was taken from Code Institute.

