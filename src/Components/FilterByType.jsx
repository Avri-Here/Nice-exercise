import React from "react";

export default function FilterByType(props) {
  const filterWithAuthorAndTitle = (arr, searchParams) => {
    return arr.filter((item, index) => {
      const testString = item.Name.toLowerCase();
      return testString.startsWith(searchParams);
    });
  };
  return (
    <>
      <label htmlFor="name" dir="rtl" className="inputSer">
        חפש עובדים לפי שם :
        <input
          type="text"
          onChange={(e) => {
            props.setArrWorker(
              filterWithAuthorAndTitle(props.arrWorker, e.target.value)
            );
            if (!e.target.value) {
                console.log("FDxyg");
              props.setArrWorker(
                JSON.parse(sessionStorage.getItem("tempArrUsers"))
              );
            }
          }}
        />
      </label>
    </>
  );
}
