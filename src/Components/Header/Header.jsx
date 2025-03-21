import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { useState } from "react";
const clientid = "289927151651-022cp7h28f84a6q6vemavmah5dj7shcu.apps.googleusercontent.com"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,



};

const Header = () => {
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientid,
                scope: ""
            })
        };
        gapi.load('client:auth2', start)
    }, [])

    // var accessToken=gapi.auth.getToken().access_token;
    const onSucess = (res) => {
        console.log("Login sucess", res.profileObj);

    }
    const onFailure = (res) => {
        console.log("Login failed", res);
    }
    const onSucessLogout = () => {
        console.log("Logout sucessful");
    }

    
	const [user, setUser] = useState();


	

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
            <div className="flex items-center justify-center gap-4">
                <button onClick={() => navigate("/Login")} className="flex gap-2 hidden sm:flex items-center justify-center border px-2 py-2 rounded-lg bg-white">
                    <img className="w-4" src="https://cdn-icons-png.flaticon.com/128/64/64572.png" alt="" />
                    <div>Log in</div>
                </button>
                <button onClick={handleOpen} className="flex gap-2 hidden sm:flex items-center justify-center border px-2 py-2 rounded-lg bg-white">Sign in</button>
                <button onClick={() => navigate("/myUrls")}  className="flex gap-2 hidden sm:flex items-center justify-center border px-2 py-2 rounded-lg bg-white">My Urls</button>

            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="flex flex-col items-center justify-center relative">
                        <div className="text-center text-2xl font-semibold">Sign in</div>
                        <div className="w-full border text-center flex items-center justify-center gap-4 py-3 px-1 rounded-lg mt-4"><img className="w-4" src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" />Sign in with Google</div>
                        <div className="w-full border text-center flex items-center justify-center gap-4 py-3 px-1 rounded-lg mt-4"><img className="w-4" src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" alt="" />sign in with twitter</div>
                        <div className="flex items-center justify-center gap-4 mt-4">
                            <hr className="w-36 text-gray-300" />
                            <p>or</p>
                            <hr className="w-36 text-gray-300" />
                        </div>
                        <div className="flex-col flex w-full mt-2">
                            <label className="text-sm" htmlFor="">Email*</label>
                            <input className="border mt-1 rounded-lg py-3 px-1 text-sm" required placeholder="Email Address" type="email" />
                        </div>
                        <div className="flex-col flex w-full mt-4">
                            <label className="text-sm" htmlFor="">Password*</label>
                            <input className="border mt-1 rounded-lg py-3 px-1 text-sm" required placeholder="Enter Your Password " type="Password" />
                        </div>
                        <div className="border-b border-solid border-gray-300 my-8 w-full"></div>
                        <div className="flex items-center justify-between w-full">
                            <button className="flex gap-2 hidden sm:flex items-center justify-center border px-2 py-2 rounded-lg bg-white "><img className="w-4" src="https://cdn-icons-png.flaticon.com/128/1828/1828415.png" alt="" />Forgot Password?</button>

                            <button className="flex gap-2 hidden sm:flex items-center justify-center border px-2 py-2 rounded-lg bg-purple-400 text-white">Sign in</button>

                        </div>
                        <div className="absolute right-[-42px] top-[-42px]"><button onClick={handleClose} className="rounded-full border p-4 bg-gray-100"><img className="w-4 opacity-[0.5]" src="https://cdn-icons-png.flaticon.com/128/2976/2976286.png" alt="" /></button></div>
                    </div>
                </Box>
            </Modal>
            {/* <div>
                <GoogleLogin
                    clientId={clientid}
                    buttonText="Login"
                    onSuccess={onSucess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
            <div>
                <GoogleLogout
                    clientId={clientid}
                    buttonText="Logout"
                    onLogoutSuccess={onSucessLogout}

                />
            </div> */}
        </div>
    )
}
export default Header