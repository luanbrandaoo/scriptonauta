// código reutilizavel para a página de atividades de todos os planetas, que ira ler o json do planeta, e montar todos os construtores de atividades correspondentes, passando as informaçoes necessarias como parametro. 
// além de inserir uma barra de progresso e outros elementos.

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import structure from '../activities/structure.json';

function ActivitiesPage() {
    const { planetId } = useParams();
    const navigate = useNavigate();
    const [planet, setPlanet] = useState(null);

    //verificar se planeta existe
    useEffect(() => {
        const planetFound = structure.galaxies
            .flatMap((galaxy) => galaxy.planets)
            .find((planet) => planet.id === planetId);

        if (planetFound) {
            setPlanet(planetFound);
        } else {
            navigate('/404');
        }
    }, [planetId, navigate]);

    if (!planet) {
        return null;
    }

    return (
        <div>
            <h1>Atividades do planeta</h1>
            <p>Aqui estarão as atividades relacionadas ao planeta "{planet.title}"</p>
        </div>
    );
}

export default ActivitiesPage;