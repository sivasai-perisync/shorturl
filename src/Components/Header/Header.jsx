import React from "react";
const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
            <div className="text-5xl font-bold">ShortUrl</div>
            <div className="flex gap-4 sm:hidden md:flex"><a href="#">MyUrls</a><a href="#">Plans</a><a href="#">Blogs</a><a href="#">Features</a></div>
        </div>
    )
}
export default Header