import { useEffect } from 'react';

const FetchData = ({ setData, setLoading }) => {
  useEffect(() => {
    setLoading(true);
    fetch('/data/movies.json')
      .then((response) => response.json())
      .then(setData)
      .catch((error) => console.error('Error al obtener los datos:', error))
      .finally(() => setLoading(false));
  }, [setData, setLoading]);

  return null; // Este componente no renderiza nada
};

export default FetchData;

