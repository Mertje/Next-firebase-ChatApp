import {useState} from "react";
import createUser from "../../utils/createUser";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    const [error, setError] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = await createUser(userName, password);
        setError(user)
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="form-outline mb-4">
                <label className="form-label">Email address</label>
                <input
                    data-cy="register-email"
                    type="email"
                    className="form-control"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
            </div>
            <div className="form-outline mb-4">
                <label className="form-label">Password</label>
                <input
                    data-cy="register-password"
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={e => setPassWord(e.target.value)}
                />
                {error}
            </div>
            <input data-cy="register-submit" type="submit" className="btn btn-primary btn-block mb-4"/>
        </form>
    );
};

export default Register;
