import PropTypes from "prop-types";
import { useState } from "react";

const FilterBySearch = ({ setFilterOrsort }) => {

  
  const [input, setInput] = useState("");

  return (
    <>
      <label style={{ textAlign: "center", display: "grid" }}>
        Search for employees by name :
        <input
          value={input}
          type="text"
          placeholder="Start Search .."
          style={{ width: "22vw", marginTop: "1vw" }}
          onChange={(e) => {
            setFilterOrsort({ type: "SearchIn", by: e.target.value });
            setInput(e.target.value);
          }}
          onBlur={() => {
            setFilterOrsort({ type: "default", by: "default" });
            setInput("");
          }}
        />
      </label>
      <br />
    </>
  );
};

FilterBySearch.propTypes = {
  setFilterOrsort: PropTypes.func,
};

export default FilterBySearch;
