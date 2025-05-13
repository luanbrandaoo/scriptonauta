import { Link, useNavigate } from 'react-router-dom'; 
import { useEffect, useState } from "react";
import structure from '../activities/structure.json';
import { auth, checkUserHasData, logoutUser } from "../services/firebase";

function DashboardPage() {
	const [name, setName] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const user = auth.currentUser;
		if (user) {
			setName(user.displayName || "usuário");

			const checkData = async () => {
				const hasData = await checkUserHasData(user.uid);
				if (!hasData) {
					navigate('/register-data');
				}
			};

			checkData();
		} else {
			navigate('/login');
		}
	}, [navigate]);

	const handleLogout = async () => {
		try {
			await logoutUser();
			navigate('/login');
		} catch (error) {
			console.error(error);
		}
	};

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

			<hr />
			<button onClick={handleLogout} style={{ marginTop: '20px', backgroundColor: '#d9534f', color: '#fff' }}>
				Sair
			</button>
		</div>
	);
}

export default DashboardPage;