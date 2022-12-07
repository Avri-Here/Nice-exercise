import Header from "./StaticPages/Header.jsx";
import AddEmployee from "./Input/AddEmployee.jsx";
import ListOfWorkers from "./ListRender/ListOfWorkers.jsx";

import { useState } from "react";

function Main() {
  const [arrWorker, setArrWorker] = useState(() => {

    // Check if arrWorker already exists in session storage and protect its deletion in case of refresh page.. 
    return sessionStorage.getItem("tempArrUsers")
      ? JSON.parse(sessionStorage.getItem("tempArrUsers"))
      : [];
  });

  const saveArrWorker = arr => {
    setArrWorker(arr);

    //Keep the data in session storage ..
    sessionStorage.setItem("tempArrUsers", JSON.stringify(arr));
  };

  return (
    <>
      <Header />
      <AddEmployee saveArrWorker={saveArrWorker} arrWorker={arrWorker} />
      <br />
      <ListOfWorkers saveArrWorker={saveArrWorker} arrWorker={arrWorker} />
    </>
  );
}

export default Main;
