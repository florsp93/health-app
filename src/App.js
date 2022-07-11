import InputParameters from "./InputParameters";
import SignUpForm from "./components/sign-up-form/sign-un-form.component";

const App = () => {
  return (
    <div className="App">
      <h1>Health App</h1>
      <p>Please, fill the following form to create a new account.</p>
      {/* <InputParameters /> */}
      <SignUpForm />
    </div>
  );
};

export default App;
