import { useState , useEffect } from "react";
export default function Home() {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        handleGetUrls();
    }, []);

    async function handleGetUrls(){
        const response = await fetch('http://localhost:8000/api/urls', {
            method: 'GET',
            withCredentials: true,
        });

        const data = await response.json();

        if(response.ok){
            console.log(data);
            setUrls(data);
        }
    }    

    return (
        <div>
            <h1>home</h1>
        </div>
    )
}