import React from "react";
import Slider from "../../components/Slider/Slider";
import Navbar from "../../components/Navbar/Navbar";
import Intro from "../../components/Inro/introcontainer";
import Footer from "../../components/Footer/Footercontaier";
import ProductShowcase from "../../components/productslist/ProductShowcase";



const Home = () => (

    <>

        <Navbar />

        <Slider />

        <Intro/>

        <ProductShowcase/>

        <Footer/>

    </>

)

export default Home