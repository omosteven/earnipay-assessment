import {
  Gallery,
  GetInTouch,
  LatestNews,
  NextTopView,
  OurServices,
  TopView,
  WhatOurCustomersSay,
} from "../components";
import Layout from "../components/layout/Layout";

const HomePage = () => {
  return (
    <>
      <Layout>
        <TopView />
        <NextTopView />
        <Gallery />
        <OurServices />
        <WhatOurCustomersSay />
        <LatestNews />
        <GetInTouch />
      </Layout>
    </>
  );
};

export default HomePage;
