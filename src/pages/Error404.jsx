import { Link } from 'react-router-dom';

function Error404() {
	return (
		<div>
			<h1>404 - Página não encontrada</h1>
			<p>A página que você está tentando acessar não existe.</p>
			<Link to="/">
				<button>Voltar para a página inicial</button>
			</Link>
		</div>
	);
}

export default Error404;