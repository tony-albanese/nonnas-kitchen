import styles from "./App.module.css";
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import { useEffect, useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try { 
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data)
    } catch (err) {
      console.log(err)
     }
  };

  useEffect(()=>{
    handleMount();
  }, []);

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;