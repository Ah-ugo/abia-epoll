import React from "react";
import Intro from "../components/briefintro";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import Hero from "../components/hero";
import MainFooter from "../components/mainFooter";
import Services from "../components/votingserv";

export function Home() {
    return(
        <>
            <Header/>
            <Hero />
            <Services />
            <Intro />
            <MainFooter />
            <Footer />
        </>
    )
}