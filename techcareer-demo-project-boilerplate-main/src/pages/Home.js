import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import EventsSlider from "../components/EventsSlider";

function Home() {
	return (
		<>

			<Navbar />
			<Header />
			<Carousel/>
			<EventsSlider/>

			<Footer />
		</>
	)
}

export default Home