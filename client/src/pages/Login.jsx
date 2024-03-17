import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const history = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();

  async function handleLogin() {
  
    const userName = usernameRef.current.value;
    const password = passwordRef.current.value;

    const response = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "allow-credentials": "true",
        "allow-origin": "http://localhost:8000",
      },
      body: JSON.stringify({ userName, password }),
    });

    const token = await response.data;
    console.log(token)
    document.cookie = `token=${token}`;

    if (response.ok) {
      console.log(data);
      history("/home");
    } else {
      alert(data.message);
    }
  }

  return (
    <div>
        <h1 className=" text-3xl font-bold"> Login </h1>
        <div className="m-5">
            <div className="px-1 py-1 m-3">
                <label className="mr-2">Username</label>
                <input type="text" placeholder="Username" ref={usernameRef}/>
            </div>
            <div className="px-1 py-1 m-3">
                <label className="mr-2">Password</label>
                <input type="password" placeholder="Password" ref={passwordRef}/>
            </div>
            <button className="px-2 py-2 m-3 bg-black text-white" onClick={handleLogin}>Login</button>  
        </div>
    </div>
  );
}
