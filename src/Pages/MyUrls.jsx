
import React, { useEffect, useState } from "react";

const MyUrls = () => {
    const [userUrls, setUserUrls] = useState([]);

    // useEffect(() => {
    //     if (window.localStorage) {
    //         const data = window.localStorage.getItem("url");
    //         if (data) {
    //             setUserUrls(JSON.parse(data)); 
    //         }
    //     }
    // }, []);aliasing
    const data = window.localStorage.getItem("url");
    return (
        <div>
            <h2>Saved URLs</h2>
            {/* {data.map((item) => {
                <div><p>{item.url}</p></div>
            })} */}
        </div>
    );
};

export default MyUrls;
