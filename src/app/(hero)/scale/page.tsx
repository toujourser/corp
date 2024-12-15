import React from 'react';
import scaleSrc from "/public/scale.jpeg";
import Hero from "@/components/hero";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Scale",
}


export default function Scale(){
    return (
        <div>
            <Hero imgUrl={ scaleSrc } altTxt={ "Reliability" } content={ "Scale Cloud Hosting "}/>
        </div>
    )
}