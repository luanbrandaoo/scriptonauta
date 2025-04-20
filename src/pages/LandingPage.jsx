import { Link } from 'react-router-dom';

function LandingPage() {
	return (
		<>
			<h1>Landing page aqui</h1>
			<Link to="/dashboard">
				<button>Entrar na plataforma</button>
			</Link>
		</>
	);
}

export default LandingPage;