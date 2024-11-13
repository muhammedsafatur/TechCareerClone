import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
	return (
		<>
			<Header />
			{/* Burada uygulamaya eklenecek olan componentler Header ve Footer gibi tek tek çağırılacaktır. */}
			<Footer />
		</>
	)
}

export default Home