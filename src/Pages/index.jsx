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
        <div>
            <Header />
            <Toaster />
            <div className="max-w-7xl mx-auto pt-20 px-4 font-Bungee">
                <div>
                    <h1 className="max-w-2xl mx-auto text-3xl font-bold text-center">
                        The Original URL Shortener
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-center font-bold py-4">
                        Create shorter URLs with TinyURL.
                    </p>
                    <p className="text-start max-w-2xl mx-auto">
                        Want more out of your link shortener? Track link analytics, use branded domains for fully custom links, and manage your links with our paid plans.
                    </p>
                </div>
                <div className="max-w-2xl mx-auto pt-10">
                    {!shortUrl ? (
                        <>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Enter long URL here"
                                className="border p-4 rounded-xl w-full"
                                type="url"
                            />
                            <button
                                className="border bg-blue-500 text-white px-4 py-2 mt-4 rounded-xl w-full"
                                disabled={!input.trim() || loader}
                                onClick={handleCreateShortUrl}>
                                {loader ? <CircularProgress size={24} color="inherit" /> : "Shorten URL"}
                            </button>
                        </>
                    ) : (
                        <div className="mt-4 p-4 border rounded-xl bg-gray-50 text-center">
                            <QRCodeCanvas
                                value={shortUrl?.data?.tiny_url}
                                size={150}
                                className="mt-4 mx-auto pb-4"
                            />
                            <div className="flex items-center justify-center gap-4">  <hr className="w-28 text-gray-300" />or <hr className="w-28 text-gray-300" /></div>

                            <div className="flex justify-center gap-4 items-center py-4 flex-wrap ">  <p className="text-purple-400 border border-purple-200 bg-purple-100 text-lg font-bold p-2 rounded-lg">{shortUrl?.data?.tiny_url}</p>
                                <button
                                    onClick={handleCopyToClipboard}
                                    className=" text-black border bg-white px-4 py-2 rounded-lg  "
                                >
                                    {copied ? "Copied!" : "Copy"}
                                </button></div><hr className="text-gray-300" />
                            <button onClick={() => setShortUrl(null) } className="text-black border bg-green-200 px-4 py-2 rounded-lg mt-4">Shorten another</button>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;