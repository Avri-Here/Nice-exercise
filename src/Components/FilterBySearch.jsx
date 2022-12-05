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
          onChange={(e) => {
            // Search the array by parameters ..
            const searchResults = manageStateFunctions.filterBySearchParams(
              props.arrWorker,
              e.target.value
            );
            // Edit an array ..
            props.setArrWorker(searchResults);

            // There are no search results if the existing array (state) and the temporary array point to the same place and reset the counter (counterSearch)..

            searchResults === props.arrWorker
              ? setcounterSearch(0)
              : setcounterSearch(searchResults.length);

            // Actions when exiting the input ..

            if (!e.target.value) {
              setcounterSearch(0);
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
