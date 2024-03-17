import { useState , useEffect , useRef } from "react";
export default function Home() {
    const [urls, setUrls] = useState([]);
    const urlRef = useRef();

    useEffect(() => {
        handleGetUrls();
    }, []);

    async function handleGetUrls(){
        const response = await fetch('http://localhost:8000/api/urls', {
            method: 'GET',
            credentials: 'include'
        });

        const data = await response.json();

        if(response.ok){
            setUrls(data);
        }
    }   
    
    async function handleShorten(originalUrl){
        urlRef.current.value = '';
        const response = await fetch('http://localhost:8000/api/urls', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ originalUrl }),
            credentials: 'include'
        });

        const data = await response.json();

        if(response.ok){
            setUrls([...urls, data]);
        }
    }

    return (
        <div>
            <h1 className=" text-3xl font-bold">Your Saved URLs</h1>
            <div className="px-1 py-1">
                <label className="mr-2">Enter the URL: </label>
                <input type="text" placeholder="URL" ref={urlRef} className="mr-2"/>
                <button className="px-2 py-2 m-3 bg-black text-white" onClick={() => handleShorten( urlRef.current.value )}>Shorten</button>
            </div>
            <div>
                <table style={{ borderSpacing: '10px 0' }}>
                    <thead>
                        <tr>
                            <th style={{ padding: '0 10px' }}>S.No</th>
                            <th style={{ padding: '0 10px' }}>Original URL</th>
                            <th style={{ padding: '0 10px' }}>Short ID</th>
                            <th style={{ padding: '0 10px' }}>View History</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            urls.map((url, index) => {
                                return (
                                    <tr key={url._id}>
                                        <td style={{ padding: '0 10px' }}>{index + 1}</td>
                                        <td style={{ padding: '0 10px' }}>{url.originalUrl}</td>
                                        <td style={{ padding: '0 10px' }}>{url.shortId}</td>
                                        <td style={{ padding: '0 10px' }}>{url.viewHistory.length}</td>
                                    </tr>
                                )
                            })
                        }    
                    </tbody>
                </table>
            </div>
        </div>
    )
}