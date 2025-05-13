import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';
import { checkUserHasData, saveUserData } from '../services/firebase';

const RegisterDataPage = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [dob, setDob] = useState('');
  const [institution, setInstitution] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    const checkIfUserHasData = async () => {
      if (user) {
        const hasData = await checkUserHasData(user.uid);
        if (hasData) {
          navigate("/dashboard");
        } else {
          setLoading(false);
        }
      }
    };

    checkIfUserHasData();
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && surname && dob && institution) {
      try {
        const userData = {
          name,
          surname,
          dob,
          institution,
          planets: [],
          galaxies: [],
        };

        await saveUserData(user.uid, userData);
        navigate("/dashboard");
      } catch (error) {
        alert("Erro ao salvar dados. Tente novamente.");
      }
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="register-data-container">
      <h2>Complete seu registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sobrenome"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="date"
          placeholder="Data de Nascimento"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          type="text"
          placeholder="Instituição"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
        />
        <button type="submit">Continuar</button>
      </form>
    </div>
  );
};

export default RegisterDataPage;
