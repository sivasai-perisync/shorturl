import React from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between  items-center p-4 max-w-7xl mx-auto">
            <div className="text-4xl font-bold  rounded-md flex items-center justify-center gap-1 p-1">
                <img className="w-10 invert " src="https://cdn-icons-png.flaticon.com/128/3449/3449750.png" alt="" />
                <p className="text-white">ShortUrl</p>
            </div>
            <div className="flex gap-20 hidden md:flex text-white">
                <a href="#">MyUrls</a>
                <a href="#">Plans</a>
                <a href="#">Blogs</a>
                <a href="#">Features</a>
            </div>
            <button onClick={() => navigate("/Login")} className="flex gap-2 hidden sm:flex items-center justify-center border px-2 py-1 rounded-lg bg-white">
                <img className="w-4" src="https://cdn-icons-png.flaticon.com/128/64/64572.png" alt="" />
                <div>Login</div>
            </button>
        </div>
    )
}
export default Header