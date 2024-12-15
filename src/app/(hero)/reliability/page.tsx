import React from 'react';
import reliabilitySrc from "/public/reliability.jpg";
import Hero from "@/components/hero";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Reliability",
}

export default function Reliability(){
    return (
        <div>
            <Hero imgUrl={ reliabilitySrc } altTxt={ "Reliability" } content={ "Super high reliability hosting "}/>
        </div>
    )
}