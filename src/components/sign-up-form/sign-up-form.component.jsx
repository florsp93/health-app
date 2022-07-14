import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import { createNewUserWithEmailAndPass } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  accountType: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Usuario a crear: ", formFields);
    try {
      await createNewUserWithEmailAndPass(formFields);
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
      <h2>Create your account</h2>
      <span>Please complete all the fields</span>
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
