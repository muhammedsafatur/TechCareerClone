import { Route, Routes } from 'react-router-dom';
import './reset.css';
import './common.css';
import Home from './pages/Home';
import Deneme from './pages/Deneme';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/deneme" element={<Deneme />} />
		</Routes>
	);
}

export default App;
