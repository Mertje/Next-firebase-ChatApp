import { useState } from "react";
import loginUser from "../../utils/loginUser";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [signResp, setSignResp] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSignResp(await loginUser(userName, password))
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="form-outline mb-4">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="form-outline mb-4">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassWord(e.target.value)}
        />

      </div>
      <p className="text-danger">{signResp}</p>
      <input type="submit" className="btn btn-primary btn-block mb-4"/>
    </form>
  );
};

export default Register;
