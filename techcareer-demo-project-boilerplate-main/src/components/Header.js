import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<>
			<span>Header</span>
			<Link to="/">Ana sayfa</Link>
			<Link to="/deneme">Deneme</Link>
		</>
	)
}

export default Header