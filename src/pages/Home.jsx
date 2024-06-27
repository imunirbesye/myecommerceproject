import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

import Header from "../layout/Header";
import HomeSlider1 from "../components/HomeSlider1";
import EditorsPick from "../layout/EditorsPick";
import BestSellerProducts from "../layout/BestSellerProducts";
import Carousel from "../layout/Carousel";
import Container from "../layout/Container";
import PracticeAdvice from "../layout/PracticeAdvise";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <>
      <HomeSlider1 />
      <EditorsPick />
      <BestSellerProducts />
      <Carousel />
      <Container />
      <PracticeAdvice />
    </>
  );
}
