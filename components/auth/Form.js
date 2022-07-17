import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Form = () => {
    // switch text and component between login and register
    const [newUser , setNewUser] = useState(true)

  return (
    <div className="row">
        <div className="col-md-6">
            <p className="btn btn-success" onClick={() => setNewUser(!newUser)}>{newUser ? 'Already have an account?' : 'Want to create a new account?'}</p>
            {newUser ? <Register /> : <Login />}
        </div>
    </div>
  );
};

export default Form;
