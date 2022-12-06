import { useState } from "react";

export default function FilterBySearch(props) {
  // Number search results in screen..
  

  return (
    <>
      <label style={{ textAlign: "center", display: "grid" }}>
        Search for employees by name :
        <input
          type="text"
          style={{ width: "22vw", marginTop: "1vw" }}
          onChange={(e) => {
            props.setFilterBy({ run: "SearchIn", optional: e.target.value });

            // There are no search results if the existing array (state) and the temporary array point to the same place and set the counterSearch to String : "0 , Try Again .." ..

            // Actions when exiting the input ..

            if (!e.target.value) {
              // props.setCounterResultsSearch(0);
            }
          }}
        />
        {props.counterResultsSearch ? (
          <h5>Results : {props.counterResultsSearch} </h5>
        ) : (
          <h5>Strat Search ..</h5>
        )}
      </label>
      <br />
    </>
  );
}
