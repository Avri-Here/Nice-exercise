
export default function FilterBySearch(props) {
  
  return (
    <>
      <label style={{ textAlign: "center", display: "grid" }}>
        Search for employees by name :
        <input
          type="text"
          placeholder="Strat Search .."
          style={{ width: "22vw", marginTop: "1vw" }}
          onChange={(e) => {
            props.setFilterBy({ run: "SearchIn", optional: e.target.value });


            // Actions when exiting the input ..

            if (!e.target.value) {

              
            }
          }}
        />

      </label>
      <br />
    </>
  );
}
