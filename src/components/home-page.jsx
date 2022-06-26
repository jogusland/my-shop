import React from "react";
import Layout from "./shared/layout";
import Hero from "./hero/hero";
import FeaturedCollection from "./featured-collection/featured-collection";
import MainSection from "./main-section/main-section";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedCollection />
      </Layout>
    </>
  );
};

export default HomePage;
