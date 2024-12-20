import React, { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Tours from './components/ToursList'
import NoTours from './components/NoTours'

function App() {
  // TODO: Set state loading and tours
const [loading, setLoading] = useState(true)
const [tours, setTours] = useState([])
  

  // TODO: Remove Tour by id and set the new state 
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours);
  }

  // COGER LOS DATOS DE UN JSON
  // TODO: Get Tours data from json 
  const fetchTours = async () => {
    const url = '/data.json';
    try {
      const response = await fetch(url)
      const data = await response.json()
      setLoading(false);
      setTours(data);
    }catch (error){
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
     fetchTours()
  }, []);

  return (
    <main>
      {loading && <Loading />}
      {!loading && tours.length === 0 && <NoTours fetchTours={fetchTours} />}
      {!loading && tours.length > 0 && <Tours tours={tours} removeTour={removeTour} />}   
    </main>
  )
}

export default App
