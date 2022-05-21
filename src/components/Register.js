import React from "react";
import Input from "./Input";
import Button from "./Button";

const Register = () => {
  return (
    <div>
      <div className="container-form register">
        <form action="http://localhost:8080/user" method="POST" id="form-register">
          <Input htmlFor="username" type="text" id="username" name="username">Enter a username:</Input>
          <Input htmlFor="name" type="text" id="name" name="name">Full name:</Input>
          <Input htmlFor="email" type="email" id="email" name="email">Enter a valid email:</Input>
          <Input htmlFor="password" type="password" id="password" name="password">Enter a password:</Input>
          <Input htmlFor="check-password" type="password" id="check-password" name="check-password">Check the password:</Input>
        </form>
        <Button type="submit" form="form-register" value="Submit">
            Submit
        </Button>
      </div>
    </div>
  );
};

export default Register;
