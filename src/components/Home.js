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

    const DATA = [
        {
            name: "Table"
        },
        {
            name: "Doll"
        },
        {
            name: "PS5"
        },
        {
            name: "Computer"
        },
        {
            name: "Table"
        },
        {
            name: "Doll"
        },
        {
            name: "PS5"
        },
        {
            name: "Computer"
        },
        {
            name: "Table"
        },
        {
            name: "Doll"
        },
        {
            name: "PS5"
        },
        {
            name: "Computer"
        },
        {
            name: "Table"
        },
        {
            name: "Doll"
        },
        {
            name: "PS5"
        },
        {
            name: "Computer"
        },
        {
            name: "Table"
        },
        {
            name: "Doll"
        },
        {
            name: "PS5"
        },
        {
            name: "Computer"
        }
    ]

    return (
        <div className=" grid grid-cols-4" >
            {DATA.map(data => (
                <div className=" bg-slate-400 w-[300px] h-[300px] flex m-4 items-center justify-center hover:bg-slate-800 duration-1000">
                    <p className=" text-3xl text-white">{data.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Home;
