import Header from './Components/Header.jsx';
import ListOfWorkers from './Components/ListOfWorkers.jsx';
import FormInput from './Components/FormInput.jsx';
import { useState } from 'react';



function App() {
  const [arrWorker, setArrWorker] = useState([]);
  return (
    <div className="App">
      <Header />
      <FormInput setArrWorker={setArrWorker} arrWorker={arrWorker} />
      <ListOfWorkers arrWorker={arrWorker} setArrWorker={setArrWorker} />
    </div>
  );
}

export default App;
