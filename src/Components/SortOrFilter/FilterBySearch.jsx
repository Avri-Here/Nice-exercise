export default function FilterBySearch({ setFilterOrsort }) {
  return (
    <>
      <label style={{ textAlign: "center", display: "grid" }}>
        Search for employees by name :
        <input
          type="text"
          placeholder="Start Search .."
          style={{ width: "22vw", marginTop: "1vw" }}
          onChange={(e) => {
            setFilterOrsort({ type: "SearchIn", by: e.target.value });
          }}
        />
      </label>
      <br />
    </>
  );
}
