import styles from "./App.module.css";
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import BlogPostCreateForm from "./pages/posts/BlogPostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import BlogPostEditForm from "./pages/posts/BlogPostEditForm";
import RecipesPage from "./pages/recipes/RecipesPage";
import RecipePage from "./pages/recipes/RecipePage";
import RecipeCreateForm from "./pages/recipes/RecipeCreateForm";
import PageNotFound from "./components/PageNotFound";

function App() {
  const curentUser = useCurrentUser();
  const profile_id = curentUser?.profile_id || "";
  return (

        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <PostsPage message="No results found. Try a different search."/>} />
              <Route exact path="/liked" 
              render={()=><PostsPage 
                message="No results. Use different search terms or like a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_on&`}
              />}
              />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/posts/create" render={() => <BlogPostCreateForm/>} />
              <Route exact path="/posts/:id/edit" render={()=><BlogPostEditForm />} />
              <Route exact path="/posts/:id" render={()=><PostPage />}/>
              <Route exact path="/recipes/create" render={()=><RecipeCreateForm/>} />
              <Route exact path="/recipes/:id" render={()=><RecipePage/>} />
              <Route exact path="/recipes" render={()=><RecipesPage message="No results. Use different search terms or like a post."/>}/>
              
              <Route render={() => <PageNotFound/>} />
            </Switch>
          </Container>
        </div>
  );
}

export default App;