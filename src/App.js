import { useContext, useEffect } from "react";
import SignUpForm from "./components/sign-up-form/sign-up-form.component";
import { SignInForm } from "./components/sign-in-form/sign-in-form.component";
import { signOutUser } from "./utils/firebase/firebase.utils";

import { UserContext } from "./contexts/user.context";

const App = () => {
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    console.log("current user: ", currentUser);
  }, []);

  const signOutHandler = async () => {
    signOutUser();
    console.log("signed out");
  };

  const pruebaLsitener = () => {
    console.log(currentUser);
  };

  return (
    <div className="App">
      <h1>Health App</h1>
      <p>Please, fill the following form to create a new account.</p>
      {currentUser ? (
        <span className="nav-link" onClick={signOutHandler}>
          {" "}
          SIGN OUT{" "}
        </span>
      ) : (
        <span className="nav-link" to="/auth">
          SIGN IN
        </span>
      )}
      <div className="forms-div">
        <SignUpForm />
        <SignInForm />
      </div>
      <button onClick={signOutHandler}>sign out</button>
    </div>
  );
};

export default App;
