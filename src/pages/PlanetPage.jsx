import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import structure from '../activities/structure.json';

function PlanetPage() {
    const { planetId } = useParams();
    const navigate = useNavigate();
    const [planet, setPlanet] = useState(null);
    const [galaxy, setGalaxy] = useState(null);

    //verificar se planeta existe
    useEffect(() => {
        const galaxyFound = structure.galaxies.find((galaxy) =>
            galaxy.planets.some((planet) => planet.id === planetId)
        );

        if (galaxyFound) {
            const planetFound = galaxyFound.planets.find((planet) => planet.id === planetId);
            setGalaxy(galaxyFound);
            setPlanet(planetFound);
        } else {
            navigate('/404');
        }
    }, [planetId, navigate]);

    if (!planet || !galaxy) {
        return null;
    }

    return (
        <div>
            <h1>{galaxy.title}</h1>
            <h2>{planet.title}</h2>
            <h3>{planet.description}</h3>
            <button onClick={() => navigate(`/${planetId}/activities`)}>
                Iniciar atividades desse planeta
            </button>
        </div>
    );
}

export default PlanetPage;