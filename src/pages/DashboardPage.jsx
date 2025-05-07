import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import structure from '../activities/structure.json';
import { auth } from "../services/firebase";

function DashboardPage() {
	const [name, setName] = useState("");

	useEffect(() => {
	  const user = auth.currentUser;
	  if (user) {
		setName(user.displayName || "usuário");
	  }
	}, []);

	return (
		<div>
			<h1>Dashboard</h1>
			<h1>Olá, {name}!</h1>
			<h2>Planetas desbloqueados:</h2>
			{structure.galaxies.map((galaxy) => (
				<div key={galaxy.title} style={{ marginBottom: '20px' }}>
					<h3>{galaxy.title}</h3>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
						{galaxy.planets.map((planet) => (
							<Link to={`/${planet.id}`} key={planet.id}>
								<button>{planet.title}</button>
							</Link>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

export default DashboardPage;