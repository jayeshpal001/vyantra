import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
// import CategorySection from "../components/CategorySection";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Categories */}
      <CategorySection />

      {/* Products */}
      <FeaturedProducts />

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
