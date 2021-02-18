import React from "react";
import { Body, Button, About, Skills } from "./BodyStyle";

const Home = () => {
  return (
    <>
      <Body>
        <h3> Welcome </h3>
        <p style={{ lineHeight: "1.0" }}>
          Yhe yhc cjchksd cKJCBkj dcnlclLJCliu uochl kjdnckjs sjcnszl sdjncsl
          sducnsl sOLC sgchstd csjshg sjyc jhcbs ygcsj cskugcs cygks suykdgyus
          ewuyyusg siuchgsk jhsuye suygcs suydgcs ciusgs siudcgs uiilsh hjscjsdj
          duycgs duycs syucs cyu uhiuag 8hgrhr 8rhg
        </p>
        <Button>Read more</Button>
      </Body>
      <About>
        <h3>My Capabalities</h3>
        <Skills>
          <section>
            <h4>hello</h4>
            <p className={{ fontSize: "2rem" }}>
              {" "}
              Mina angazi noma ngiteza yini oe what
            </p>
          </section>
          <section>
            <h4>hello</h4>
          </section>
          
        </Skills>
      </About>
    </>
  );
};

export default Home;
