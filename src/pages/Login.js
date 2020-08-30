import React, { useEffect } from "react";
import Cotter from "cotter";

const Login = (props) => {
  useEffect(() => {
    CotterForm();
  });

  const CotterForm = () => {
    var config = {
      ApiKeyID: "c672dca4-9ebc-4318-bdeb-2888389ddcce",
    };
    var cotter = new Cotter(config);
    cotter
      .signInWithLink()
      .showEmailForm()
      .then((payload) => {
        const token = payload.oauth_token.access_token;
        localStorage.setItem("access_token", token);
        props.history.push("/profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="cardLogin">
        <h2>SignIn or SignUp</h2>
        <div
          id="cotter-form-container"
          style={{ width: 300, height: 200 }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
