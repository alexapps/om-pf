import React from "react";
import Hero from "../components/Hero/Hero";
import { Content } from '../components/Content/Content';
import Carousel from '../components/Carousel/Carousel';
import Features from "../components/Features/Features";
import { heroOne, heroTwo, heroThree } from '../data/HeroData';
import Footer from "../components/Footer/Footer";

const Home = () => {
    return <>
    <Hero />
    <Features />
    <Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
            <Carousel />
            <Footer />
    </> 
};

export default Home;