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

# Features

# Agile Development

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
