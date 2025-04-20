import { Link } from 'react-router-dom';
import structure from '../activities/structure.json';

function DashboardPage() {
	return (
		<div>
			<h1>Dashboard</h1>
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