import Header from "./Header.jsx";
import FormInput from "./FormInput.jsx";
import ListOfWorkers from "./ListOfWorkers.jsx";

import { useState } from "react";

function Main() {
  const [arrWorker, setArrWorker] = useState([]);

  const saveArrWorker = (arr) => {
    setArrWorker(arr);

    
    //I just Keep the data in session storage אo remember how arrWorker looks like..
    sessionStorage.setItem("tempArrUsers", JSON.stringify(arr));
  };

  return (
    <>
      <Header />
      <FormInput saveArrWorker={saveArrWorker} arrWorker={arrWorker} />
      <br />
      <ListOfWorkers saveArrWorker={saveArrWorker} arrWorker={arrWorker} />
    </>
  );
}

export default Main;
