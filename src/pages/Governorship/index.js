import React from "react";
import { Carousel } from "antd";
import { Ikonne } from "../Candidates/Ikonne";
import { Otti } from "../Candidates/otti";
import { Header } from "../../components/header";
import { Nana } from "../Candidates/nana";
import { Greg } from "../Candidates/greg";
import { Ikechi } from "../Candidates/ikechi";
import { Footer } from "../../components/footer";
import MainFooter from "../../components/mainFooter";

export default function MainVotingPage() {
  return (
    <div style={{ backgroundColor: "#364d79", height: "100vh" }}>
      <Header />
      <Carousel
        afterChange={(currentslide) => {
          console.log(currentslide);
        }}
        style={{ height: "90vh" }}>
        <div>
          <Ikonne />
        </div>
        <div>
          <Otti />
        </div>
        <div>
          <Nana />
        </div>
        <div>
          <Greg />
        </div>
        <div>
          <Ikechi />
        </div>
      </Carousel>
      <MainFooter />
      <Footer />
    </div>
  );
}
