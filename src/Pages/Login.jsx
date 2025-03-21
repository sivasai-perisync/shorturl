import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";

const Login = () => {
    const [focused, setFocused] = useState(false);

    return (
        <div className="max-w-7xl mx-auto mt-20 flex items-center justify-center flex-col border p-20 w-[500px] rounded-xl bg-gray-100">
            <div className="text-5xl pb-10">Login Page</div>
            <div className=" flex items-center justify-center">
                <TextField 

                    required
                    margin="dense"
                    id="name"
                    name="Email"
                    label="Email"
                    type="email"
                    onFocus={() => setFocused(true)}
                    variant="filled"

                    sx={{
                        "& .MuiInputBase-root": {
                            border: `2px solid ${focused ? "#F8F8F8" : "#F8F8F8"}`,
                            borderRadius: "8px",
                            backgroundColor: "white",
                        },
                        "& .MuiInputBase-root:hover": {
                            border: `1px solid ${focused ? "#1976D2" : "#BEBEBE"}`,
                            backgroundColor: "#F8F8F8",
                        },
                        "& .MuiInputBase-root.Mui-focused": {
                            border: "3px solid #1976D2",
                            backgroundColor: "white",
                        },
                        "& .MuiFilledInput-root:before, & .MuiFilledInput-root:after": {
                            display: "none",
                        },
                    }}
                />
            </div>
            <div className=" flex items-center justify-center">
                <TextField 

                    required
                    // margin="dense"
                    // id="name"
                    name="Password"
                    label="Password"
                    type="Password"
                    onFocus={() => setFocused(true)}
                    variant="filled"
                    sx={{
                        "& .MuiInputBase-root": {
                            border: `2px solid ${focused ? "#F8F8F8" : "#F8F8F8"}`,
                            borderRadius: "8px",
                            backgroundColor: "white",
                        },
                        "& .MuiInputBase-root:hover": {
                            border: `1px solid ${focused ? "#1976D2" : "#BEBEBE"}`,
                            backgroundColor: "#F8F8F8",
                        },
                        "& .MuiInputBase-root.Mui-focused": {
                            border: "3px solid #1976D2",
                            backgroundColor: "white",
                        },
                        "& .MuiFilledInput-root:before, & .MuiFilledInput-root:after": {
                            display: "none",
                        },
                    }}
                />
            </div>
            <div className="flex items-center gap-20 justify-between pt-10">
                <button className="border p-2 rounded-lg bg-white">Cancel</button>
                <button className="border p-2 rounded-lg bg-white">Submit</button>
            </div>
        </div>
    )
}
export default Login