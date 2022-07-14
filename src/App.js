import { useContext, useEffect } from "react";

import SignUpForm from "./components/sign-up-form/sign-up-form.component";
import SignInForm from "./components/sign-in-form/sign-in-form.component";

import { signOutUser } from "./utils/firebase/firebase.utils";
import { UserContext } from "./contexts/user.context";

const App = () => {
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    console.log("current user: ", currentUser);
  }, [currentUser]);

  const signOutHandler = async () => {
    signOutUser();
    console.log("signed out");
  };

  return (
    <div className="App">
      <h1>Health App</h1>
      {currentUser ? (
        <div>
          <h3>Hello {currentUser.email}</h3>
          <button onClick={signOutHandler}>Sign Out</button>
        </div>
      ) : (
        <div className="forms-div">
          <SignUpForm />
          <SignInForm />
        </div>
      )}
    </div>
  );
};

export default App;
