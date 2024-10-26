"use client";
import React from "react";
import Spline from '@splinetool/react-spline/next';

const LandingPg = () => {
    return (
        <>
            <div className="bg-cover bg-no-repeat w-screen h-screen" style={{ backgroundImage: "url('bg2.jpg')" }}>
                <div className="flex justify-center items-center">
                    <div className="flex flex-col justify-center gap-2 h-full w-full ml-24  mr-20">
                    <p className="text-5xl font-black tracking-wider meta-market-logo" >MetaMarket</p>
                        <h2 className="font-semibold text-2xl text-white">Amplifying Reach: AI Solutions for India's Unique Market</h2>
                    </div>
                    <div className="w-full h-full"><Spline
                        scene="https://prod.spline.design/pDThSb745xoWSRMP/scene.splinecode" />
                    </div>
                </div>
            </div >
            <div className="h-screen w-full flex justify-center items-center" style={{backgroundColor: "#161825"}}>
                <img src="flow3.svg" alt=""  width="60%"/>
            </div>
        </>

    )
}
export default LandingPg;