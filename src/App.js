import { useContext } from "react";
import SignUpForm from "./components/sign-up-form/sign-up-form.component";

import { UserContext } from "./contexts/user.context";

const App = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    console.log("signed out");
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
      <SignUpForm />
    </div>
  );
};

export default App;
