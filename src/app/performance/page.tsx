import React from 'react';
import performanceSrc from "/public/performance.jpg";
import Hero from "@/components/hero";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Performance",
}

export default function Performance(){
    return (
        <div>
            <Hero imgUrl={ performanceSrc } altTxt={ "Performance" } content={ "Professional Cloud Hosting "}/>
        </div>
    )
}