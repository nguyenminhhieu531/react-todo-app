import React, { useState } from "react";

function Search(props) {
  const [strSearch, setStrSearch] = useState("");
  const { onClickGo } = props;

  function handleSearch() {
    console.log(strSearch);
    onClickGo(strSearch);
  }

  function handleClear() {
    setStrSearch("");
    onClickGo("");
  }

  function handleChange(e) {
    setStrSearch(e.target.value);
  }

  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="input-group">
        <input
          value={strSearch}
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Search for..."
        />
        <span className="input-group-btn">
          <button onClick={handleSearch} className="btn btn-info" type="button">
            Go
          </button>
          <button onClick={handleClear} className="btn btn-warning" type="button">
            Clear
          </button>
        </span>
      </div>
    </div>
  );
}

export default Search;
