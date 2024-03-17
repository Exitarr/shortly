import { useRef } from 'react';
import {useNavigate , Link} from 'react-router-dom';

export default function Signup() {
    const history = useNavigate();

    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();

    async function handleSignUp() {
        const email = emailRef.current.value;
        const userName = usernameRef.current.value;
        const password = passwordRef.current.value;

        const response = await fetch('https://shortly-app-api.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, userName, password })
        });

        const data = await response.json();

        if (response.ok) {
            history('/login');
        } else {
            alert(data.message);
        }
    }
    

    return (
        <div>
            <h1 className=" text-3xl font-bold"> SignUp </h1>
            <div className="m-5">
                <div className="px-1 py-1 m-3">
                    <label className="mr-2">email</label>
                    <input type="email" placeholder="email" ref={emailRef} />
                </div>
                <div className="px-1 py-1 m-3">
                    <label className="mr-2">Username</label>
                    <input type="text" placeholder="Username" ref={usernameRef} />
                </div>
                <div className="px-1 py-1 m-3">
                    <label className="mr-2">Password</label>
                    <input type="password" placeholder="Password" ref={passwordRef} />
                </div>
                <div className="px-1 py-1 m-3">
                    <label className="mr-2">Confirm Password</label>
                    <input type="password" placeholder="Confirm Password"/>
                </div>  
                <button className="px-2 py-2 m-3 bg-black text-white" onClick={handleSignUp}>SignUp</button>  
            </div>
            <div className="flex flex-row gap-3 ">
                <p>Already Signed in? </p>
                <Link to="/login" className="text-blue-500">Login</Link>
            </div>
        </div>
    );
}