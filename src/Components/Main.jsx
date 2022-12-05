import Header from "./Header.jsx";
import FormInput from "./FormInput.jsx";
import ListOfWorkers from "./ListOfWorkers.jsx";

import { useState, useEffect } from "react";

function Main() {
  const [arrWorker, setArrWorker] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    // Keep the data in session storage for various actions such as saving the array before changes and more.. ..
    sessionStorage.setItem("tempArrUsers", JSON.stringify(arrWorker));
  }, [refresh]);

  const pushToArrWorker = (inputs) => {
    setArrWorker((oldArray) => [...oldArray, inputs]);
  };

  return (
    <>
      <Header />
      <FormInput
        pushToArrWorker={pushToArrWorker}
        arrWorker={arrWorker}
        setRefresh={setRefresh}
      />
      <br />
      <ListOfWorkers
        setArrWorker={setArrWorker}
        arrWorker={arrWorker}
        setRefresh={setRefresh}
      />
    </>
  );
}

export default Main;
