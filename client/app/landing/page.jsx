"use client";
import React from "react";

import Spline from '@splinetool/react-spline/next';
import Link from "next/link";

const LandingPg = () => {
    return (
        <>
            <div className="bg-cover bg-no-repeat w-screen h-screen" style={{ backgroundImage: "url('bg2.jpg')" }}>
                <div className="flex justify-center items-center">
                    <div className="flex flex-col justify-center gap-2 h-full w-full mx-16 ">
                        <h1 className="font-bold text-6xl text-white">IndiSense</h1>
                        <h2 className="font-semibold text-3xl text-white">Amplifying Reach: AI Solutions for India's Unique Market</h2>
                        <Link href="/prompt">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
                        </Link>
                    </div>
                    <div className="w-full h-full"><Spline
                        scene="https://prod.spline.design/pDThSb745xoWSRMP/scene.splinecode" />
                    </div>
                </div>

            </div >
        </>

    )
}
export default LandingPg;