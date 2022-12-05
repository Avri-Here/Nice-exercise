import Header from './Components/Header.jsx';
import FormInput from './Components/FormInput.jsx';
import ListOfWorkers from './Components/ListOfWorkers.jsx';
import { useState } from 'react';



function App() {
  const [arrWorker, setArrWorker] = useState([]);
  return (
    <>
      <Header />
      <FormInput setArrWorker={setArrWorker} arrWorker={arrWorker} />
      <ListOfWorkers arrWorker={arrWorker} setArrWorker={setArrWorker} />
    </>
  );
}

export default App;
