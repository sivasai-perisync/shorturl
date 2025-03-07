import React, { useState } from "react";
import Header from "../Components/Header/Header";
import { rootUrl, tinyUrlToken } from "../constants";
import { QRCodeCanvas } from "qrcode.react";
import { CircularProgress } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
    const [input, setInput] = useState("");
    const [shortUrl, setShortUrl] = useState(null);
    const [copied, setCopied] = useState(false);
    const [loader, setLoader] = useState(false);

    const handleCreateShortUrl = () => {
        setLoader(true);
        fetch(`${rootUrl}/create`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${tinyUrlToken}`,
            },
            body: JSON.stringify({ url: input }),
        })
            .then((res) => res.json())
            .then((response) => {
                setShortUrl(response);
                setLoader(false);
            })
            .catch((error) => {
                console.error(error);
                setLoader(false);
            });
    };

    const handleCopyToClipboard = () => {
        if (shortUrl?.data?.tiny_url) {
            navigator.clipboard.writeText(shortUrl?.data?.tiny_url)
                .then(() => {
                    setCopied(true);
                    toast.success("Copied to clipboard!");
                })
                .catch(err => console.error("Failed to copy:", err));
        }
    };

    return (
        <div
            className="min-h-screen bg-no-repeat bg-center bg-cover bg-slate-900 "
            
      
            >

            <Header />
            <Toaster />
            <div className="max-w-7xl mx-auto px-4 pt-32 flex items-center justify-center flex-wrap">

                <div>
                    <h1 className="max-w-2xl mx-auto text-6xl font-extrabold text-center text-white">
                        The Original URL Shortener
                    </h1>

                    <p className="text-center text-white max-w-2xl mx-auto py-10">
                        Want more out of your link shortener? Track link analytics, use branded domains for fully custom links, and manage your links with our paid plans.
                    </p>
                    <div className="max-w-xs mx-auto mt-4 pl-8 text-white">
                        <p className="text-xl font-bold text-white">TinyURL plans include:</p>
                        <div className="flex gap-4 items-center mt-2">
                            <img className="w-4" src="https://cdn-icons-png.flaticon.com/128/478/478544.png" alt="" /> <p>Detailed Link Analytics</p>
                        </div>
                        <div className="flex gap-4 items-start mt-2">
                            <img className="w-4" src="https://cdn-icons-png.flaticon.com/128/455/455691.png" alt="" /><p>Bulk Short URLs</p>
                        </div>
                        <div className="flex gap-4 items-start mt-2">
                            <img className="w-4" src="https://cdn-icons-png.flaticon.com/128/8944/8944297.png" alt="" /> <p>Fully Branded Domains</p>
                        </div>
                        <div className="flex gap-4 items-start mt-2">
                            <img className="w-4" src="https://cdn-icons-png.flaticon.com/128/8944/8944297.png" alt="" /> <p>Link Management Features</p>
                        </div>
                    </div>

                </div>
                <div className="max-w-2xl mx-auto py-10">
                    {!shortUrl ? (
                        <div className="mt-4  border rounded-xl bg-white text-center max-w-md mx-auto p-4">
                            <h4 className="text-2xl font-bold pt-4">Enter URL</h4>
                            <p className="pb-8 text-gray-500">Please enter your URL to get shorten URL</p>
                            <div className="px-4">
                                <input
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter")
                                            handleCreateShortUrl();
                                    }}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Enter long URL here"
                                    className="border border-gray-200 p-4 rounded-xl w-full mb-8 focus:border-2 focus:outline-none focus:border-purple-500 hover:border-purple-500"
                                    type="url"
                                />
                            </div>
                            <hr className="text-gray-200" />
                            <div className="px-4 pb-4">
                                <button
                                    className="border bg-purple-500 text-white px-4 py-2 mt-4  rounded-xl w-full"
                                    disabled={!input.trim() || loader}
                                    onClick={handleCreateShortUrl}>
                                    {loader ? <CircularProgress size={24} color="inherit" /> : "Shorten URL"}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="my-2 p-4 border rounded-xl bg-gray-50 text-center max-w-sm mx-auto">
                            <h4 className="text-2xl font-bold pt-4">Shorten URL QR code</h4>
                            <p className="pb-8 text-gray-500">Please scan this QR code to get short URL</p>

                            <QRCodeCanvas
                                value={shortUrl?.data?.tiny_url}
                                size={200}
                                className="mt-4 p-4 rounded-lg mx-auto  border"
                            />
                            <div className="flex pt-8 pb-4 items-center justify-center gap-4 text-gray-500">  <hr className="w-28 text-gray-300" />or <hr className="w-28 text-gray-300" /></div>

                            <div className="flex justify-center gap-2 items-center py-4  ">  <p className="text-purple-400 border border-purple-200 bg-purple-100 text-sm font-bold p-2 rounded-lg w-full truncate">{shortUrl?.data?.tiny_url}</p>
                                <button
                                    onClick={handleCopyToClipboard}
                                    className=" text-black border bg-white px-4 py-2 rounded-lg  flex items-center justify-center gap-1"
                                >
                                    <img className="w-4" src="https://cdn-icons-png.flaticon.com/128/9428/9428873.png" alt="" /> {copied ? "Copied!" : "Copy"}
                                </button>
                            </div>
                            <hr className="text-gray-300 " />
                            <div className="flex items-center justify-between">
                                <button onClick={() => { setShortUrl(null); setInput(""); setCopied(false) }} className="text-black border bg-white px-4 py-2 rounded-lg mt-4 ">{loader ? <CircularProgress size={24} color="inherit" /> : "Shorten another"}
                                </button>
                                <button onClick={() => window.open(shortUrl?.data?.tiny_url, "_blank")} className=" border bg-purple-500 text-white px-4 py-2 rounded-lg mt-4 "> {loader ? <CircularProgress size={24} color="inherit" /> : "Visit"}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;