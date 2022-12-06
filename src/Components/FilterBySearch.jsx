import { useState } from "react";

import manageStateFunctions from "../Utils/ManageStateFunctions";

export default function FilterBySearch(props) {
  // Number search results in screen..
  const [counterSearch, setcounterSearch] = useState(0);

  return (
    <>
      <label style={{ textAlign: "center", display: "grid" }}>
        Search for employees by name :
        <input
          type="text"
          style={{ width: "22vw", marginTop: "1vw" }}

          
          // During a delete operation look for optional omitted results ..
          onKeyDown={(event) => {
            if (event.key === "Backspace") {
              props.setArrWorker(
                JSON.parse(sessionStorage.getItem("tempArrUsers"))
              );
            }
          }}

          onChange={(e) => {
            // Search in array by parameters ..
            const searchResults = manageStateFunctions.filterBySearchParams(
              props.arrWorker,
              e.target.value
            );

            // There are no search results if the existing array (state) and the temporary array point to the same place and set the counterSearch to String : "0 , Try Again .." ..

            if (searchResults === props.arrWorker) {
              setcounterSearch("0 , Try Again ..");

              props.setArrWorker(
                JSON.parse(sessionStorage.getItem("tempArrUsers"))
              );
            } else {
              // Edit an array & searchResults ..

              setcounterSearch(searchResults.length);
              props.setArrWorker(searchResults);
            }

            // Actions when exiting the input ..

            if (!e.target.value) {
              setcounterSearch(0);

              // Restore the original array before the change ..

              props.setArrWorker(
                JSON.parse(sessionStorage.getItem("tempArrUsers"))
              );
            }
          }}
        />
        {counterSearch ? (
          <h5>Results : {counterSearch} </h5>
        ) : (
          <h5>Strat Search ..</h5>
        )}
      </label>
      <br />
    </>
  );
}
