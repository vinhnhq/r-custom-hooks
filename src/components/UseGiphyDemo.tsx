import { useState, useRef } from "react";

import { useGiphy } from "../hooks/asyncHooks";

const UseGiphyDemo = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  const [results, loading] = useGiphy(query);

  return (
    <div className="App">
      <div>
        <h1>Async React Hooks</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setQuery(search);
          }}
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for Gifs!"
          />
          <button style={{ marginLeft: "10px" }} type="submit">
            Search
          </button>
        </form>
        <br />

        {loading ? (
          <h1>GIVE ME GIFS</h1>
        ) : (
          Array.isArray(results) &&
          results.map((item) => <video autoPlay loop key={item} src={item} />)
        )}
      </div>
    </div>
  );
};

export default UseGiphyDemo;
