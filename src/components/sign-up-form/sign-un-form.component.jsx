import { useState } from "react";

import { createNewUser, searchUser } from "../../utils/firebase/firebase.utils";
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

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(formFields);
      createNewUser(formFields);
      resetFormFields();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const buscarUsuario = () => {
    searchUser();
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
      <button onClick={buscarUsuario}>buscar</button>
    </div>
  );
};

export default SignUpForm;
