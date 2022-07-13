import { useEffect, useState } from "react";

import {
  auth,
  createNewUserWithEmailAndPass,
} from "../../utils/firebase/firebase.utils";
import { FormInput } from "../form-input/form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  accountType: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  useEffect(() => {
    const currentUser = auth.currentUser;
    console.log("current user: ", currentUser);
  }, []);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Usuario a crear: ", formFields);
    //  console.log("auth 0: ", auth.currentUser.email);
    try {
      //  console.log("auth 1: ", auth.currentUser.email);
      await createNewUserWithEmailAndPass(formFields);
      //console.log("auth 2: ", auth.currentUser.email);
      // console.log("usuario creado");
      //console.log("auth 3: ", auth.currentUser.email);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/weak-password":
          alert("to short password");
          break;
        case "auth/email-already-in-use":
          alert("email already in use");
          break;
        case "auth/user-not-found":
          alert("no existe usuario");
          break;
        default:
          console.log("Error desconocido", error);
      }
    }
    console.log("Usuario creado: ", formFields);
  };

  return (
    <div className="sign-up-container">
      <h2>Crea tu cuenta</h2>
      <span>Completa todos los datos</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="First Name"
          type="text"
          required
          onChange={handleChange}
          name="firstName"
          value={formFields.firstName}
        />

        <FormInput
          label="Last Name"
          type="text"
          required
          onChange={handleChange}
          name="lastName"
          value={formFields.lastName}
        />

        <FormInput
          label="Email Address"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={formFields.email}
        />

        <label htmlFor="accountType">
          Acount Type
          <br />
          <select
            className="selectStyle"
            required
            id="accountType"
            name="accountType"
            value={formFields.accountType}
            onChange={handleChange}
          >
            <option name="accountType" id="accountType" value="">
              -- SELECT --
            </option>
            <option name="accountType" id="accountType" value="patient">
              Patient
            </option>
            <option name="accountType" id="accountType" value="caregiver">
              Caregiver
            </option>
            <option name="accountType" id="accountType" value="both">
              Both
            </option>
          </select>
        </label>

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={formFields.password}
        />

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default SignUpForm;
