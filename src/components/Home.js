import React, { Component } from "react";
import { Navigate } from "react-router-dom";
// import BarChart from "../Chart/chart01";
// import LineChart from "../Chart/chart02";
// import PieChart from "../Chart/chart03";
import { UserData } from "../Chart/data";
import { useState } from "react";


function Home({ isLogin }) {
    console.log("home", isLogin)
    // if (!isLogin) return (<Navigate replace to="/login" />)
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });
    return (

        <div >
            <div className=" grid grid-cols-4" >
                <div className=" bg-slate-600 w-[300px] h-[300px] flex m-4">

                </div>
                <div className=" bg-slate-600 w-[300px] h-[300px] flex m-4">
                    
                </div>
                <div className=" bg-slate-600 w-[300px] h-[300px] flex m-4">
                    
                </div>
                <div className=" bg-slate-600 w-[300px] h-[300px] flex m-4">
                    
                </div>
                <div className=" bg-slate-600 w-[300px] h-[300px] flex m-4">
                    
                </div>
                <div className=" bg-slate-600 w-[300px] h-[300px] flex m-4">
                    
                </div>
                <div className=" bg-slate-600 w-[300px] h-[300px] flex m-4">
                    
                </div>
                <div className=" bg-slate-600 w-[300px] h-[300px] flex m-4">
                    
                </div>
                <div className=" bg-slate-600 w-[300px] h-[300px] flex m-4">
                    
                </div>
                <div className=" bg-slate-600 w-[300px] h-[300px] flex m-4">
                    
                </div>
                <div className=" bg-slate-600 w-[300px] h-[300px] flex m-4">
                    
                </div>
            </div>
            {/* <div style={{ "width":"300px"}}>
            </div>

            <div style={{ "width":"300px"}}>
            </div> */}
            {/* <div><Social/></div> */}
        </div>


    )
}

export default Home;
