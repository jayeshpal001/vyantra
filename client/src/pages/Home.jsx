import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
// import CategorySection from "../components/CategorySection";
// import ProductSection from "../components/ProductSection";
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
      {/* <ProductSection /> */}

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
