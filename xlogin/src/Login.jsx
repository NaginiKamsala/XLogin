import React, { useState } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setmessage] = useState("");
  const [successmessage, setSuccessmessage] = useState("");
  const [errormessage, seterrormessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "user" && password === "password") {
      setmessage("Welcome, user!");
      setSuccessmessage("Welcome, user!");
    } else {
      seterrormessage("Invalid username or password");
    }
  };

  return (
    <div>
      <div>
        <h1>Login Page</h1>
      </div>

      {message ? (
        <div className="message">{message}</div>
      ) : (
        <div>
          {errormessage && <div className="message">{errormessage}</div>}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
