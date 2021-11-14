import React, { useState, useEffect } from "react";
import "./InputParameters.css";

const USER = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  accountType: "",
};

function InputParameters() {
  const [usersData, setUsersData] = useState([]);
  const [newUserData, setNewUserData] = useState(USER);

  const recoverUsersDB = () => {
    var usersDBstorage = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      usersDBstorage.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    return usersDBstorage;
  };

  useEffect(() => {
    let usersFromStorage = recoverUsersDB();
    setUsersData(usersFromStorage);
  }, []);

  const handleFormInputChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setNewUserData((newUserData) => ({
      ...newUserData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    for (let field in newUserData) {
      if (newUserData[field].length === 0) {
        alert("Please, fill in all the fields of the form.");
        return false;
      }
    }
    validateEmail();
  };

  const validateEmail = () => {
    let newAccountType = "";
    switch (newUserData.accountType) {
      case "patient":
        newAccountType = "Patient";
        break;
      case "caregiver":
        newAccountType = "Caregiver";
        break;
      case "both":
        newAccountType = "Patient & Caregiver";
        break;
    }
    for (let user of usersData) {
      if (user.email === newUserData.email) {
        alert(
          "Duplicate Email: " +
            newUserData.email +
            "\nUser accounts must be unique, please enter another email."
        );
        return false;
      }
    }
    alert(
      "Account Created Successfully" +
        "\nUser Account: " +
        newUserData.email +
        "\nUser Group: " +
        newAccountType +
        "\nAn email with a login link and temporary password has been sent to your mailbox."
    );
    userAdded(newUserData);
  };

  const userAdded = (newUserData) => {
    const json = JSON.stringify(newUserData);
    window.localStorage.setItem(newUserData.email, json);
    setNewUserData(USER);
    setUsersData(recoverUsersDB);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="firstName">
        First Name
        <br />
        <input
          required
          value={newUserData.firstName}
          onChange={handleFormInputChange}
          id="firstName"
          type="text"
          name="firstName"
        />
      </label>
      <br />
      <label htmlFor="lastName">
        Last Name
        <br />
        <input
          required
          value={newUserData.lastName}
          onChange={handleFormInputChange}
          id="lastName"
          type="text"
          name="lastName"
        />
      </label>
      <br />
      <label htmlFor="email">
        Email Address
        <br />
        <input
          required
          value={newUserData.email}
          onChange={handleFormInputChange}
          id="email"
          type="email"
          name="email"
        />
      </label>
      <br />
      <label htmlFor="accountType">
        Account Type
        <br />
        <select
          className="selectStyle"
          required
          id="accountType"
          name="accountType"
          value={newUserData.accountType}
          onChange={handleFormInputChange}
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
      <br />
      <label htmlFor="password">
        Password
        <br />
        <input
          required
          value={newUserData.password}
          onChange={handleFormInputChange}
          id="password"
          type="password"
          name="password"
        />
      </label>
      <br />
      <input type="submit" value="CREATE ACCOUNT" onClick={validateForm} />
    </form>
  );
}

export default InputParameters;
