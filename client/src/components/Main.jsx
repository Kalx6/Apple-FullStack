import React from "react";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Alert from "./Alert/Alert";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FourthSection from "./FourthSection/FourthSection";
import FifthSection from "./FifthSection/FifthSection";
import SixthSection from "./SixthSection/SixthSection";
import YoutubeVideos from "./YoutubeVideos/YoutubeVideos";

function Main() {
  return (
    <>
      <Alert />;
      <FirstSection />;
      <SecondSection />;
      <ThirdSection />;
      <FourthSection />;
      <FifthSection />;
      <SixthSection />;{/* <YoutubeVideos /> */}
    </>
  );
}

export default Main;
