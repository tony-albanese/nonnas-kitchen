# Nonna's Kitchen Frontend

# User Stories
Navigation: As a user I can view a navbar from every page so that I can navigate easily between pages
Routing: As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh
Authentication - Sign up: As a user I can create a new account so that I can access all the features for signed up users
Authentication - Sign in: As a user I can sign in to the app so that I can access functionality for logged in users
Authentication - Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to
Authentication - Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
Navigation: Conditional rendering - As a logged out user I can see sign in and sign up options so that I can sign in/sign up
Avatar: As a user I can view user's avatars so that I can easily identify users of the application

# React Design

# UI Design
The project uses Code Institute's [Moments](https://github.com/Code-Institute-Solutions/moments) project as a starting framework. Therefore, there are is a certain level of code overlap. The following parts of Nonna's Kitchen are taken from the Moments project:
+ project structure - this is an industry standard way to organize a React Project
+ the NavBar - the implementation of the NavBar is also standard and code similarity is to be expected. The NavItems in the NavBar are unique
+ hamburger menu toggle - fixing the behavior of the hamburger menu toggle in the NavBar would be required in any project. I have chosen to use Code Institute's solution.
+ the form elements for login and sign up - The styling is unique, but the form fields and methods used to login/register/logout are taken from the project. This process would be similar in any project. The styling and layout of these components is unique.
+ axios interceptors - Web token management would be a problem in any project requiring user state management. I have chosen to use the solution in the Moments project as it would be a standard way of solving this problem.
+ context objects for user state - Managing user state and passing it through the component tree would be a common problem in any React app requiring a logged in user. Code Institute's solution using custom context hooks for getting and updating the logged in user was used because it is simple and follows industry practice.


# Agile Development
An Agile approach was used to manage the completion of this project. Specifically, this meant breaking the project down into smaller tasks with a focus on minimum functionality first. Only when a minimally viable product is ready will extra features be added. In addition, GitHub projects and Issues were used a tool to keep track of the tasks.

## Outline of Sprints
The following is an outline of the sprints that were done during the completion of this project. Each sprint was designed to be one day's work.

### Sprint 1 - Project setup
Goal: Project environment, authentication functionality, bare minimum styling
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
+ Design content page
+ Connect to backed to display current posts
+ Design Post form
+ Connect Post form to backend
+ Add links to navbar

### Sprint 3 - Likes, Comments
Goal: Users can add a comment and like a post. Users can see the posts they've liked
+ Design add commment form
+ Connect comment form to backend
+ Add favorites link to navbar for logged in user
+ Add filter by like 

## Use of GitHub
Each larger scale task was given a GitHub issue. This included the user stories, and anything else that would require attention. Issues were assigned labels to help prioritize them in the work flow. As can be seen, some issues are marked as "Must Do" while others are marked as "Should Do". Some issues are enhancements, others are questions requiring research. Often, if I ran into a problem that was not critical to fix or if I thought of a feature that I would like to add, I created an issue and assigned it a label to help me keep track of how important it is. The key is that essential features and critical issues were fixed first.
### Projects
Issues often are related to each other - this includes user stories and additional features. For example, user stories around CRUD operations belong together as well as issues involved with search and styling. To help keep issues organized, those that are related to each other were organized into projects.
# Testing

# Technology Used
+ [React Bootstrap](https://react-bootstrap-v4.netlify.app/) - This package contains ready to use React components that are compatible with the React library. This makes creating a responsive React app much simpler.
+ [axios](https://www.npmjs.com/package/axios) - A lightweight but very powerful library for making network calls in JavaScript.
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
The initial template for this app was from Code Institute's [Moments project template](https://github.com/Code-Institute-Org/cra-template-moments.git). 
