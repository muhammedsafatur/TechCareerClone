import React from 'react'
import Navbar from "../components/Navbar";
import EventsSlider from "../components/EventsSlider";
import EtkinlikCard from '../components/EtkinlikCard';
function Home() {
	return (
		<>

			<Navbar />
			<EventsSlider/>
			<EtkinlikCard />

		</>
	)
}

export default Home