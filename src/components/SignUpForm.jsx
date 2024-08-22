import { useState } from "react";

function SignUpForm({ token, setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username, password,
                    }),
                }

            );
            const result = await response.json();
            console.log(result);
            setToken(result.token);
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <>

            <h2>Sign Up!</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    <strong>Username:</strong> <input value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    <strong>Password:</strong> <input value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button>Submit</button>
                {/* <p>{result.data}</p> */}
            </form>
        </>
    );
}
export default SignUpForm;