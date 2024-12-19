import { useEffect } from 'react';

const FetchData = ({ setData, setLoading }) => {
  useEffect(() => {
    setLoading(true);
    fetch('/data/movies.json')
      .then((res) => res.json())
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [setData, setLoading]);
};

export default FetchData;
