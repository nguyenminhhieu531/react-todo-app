import React, { Component } from "react";

function Sort(props) {
  function handleSort(orderBy, orderDir) {
    console.log("handleSort: ", orderBy + "-" + orderDir);
    props.onClickSort(orderBy, orderDir);
  }

  let orderBy = props.orderBy;
  let orderDir = props.orderDir;
  let strSort = orderBy + "-" + orderDir;
  return (
    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
      <div className="dropdown">
        <button
          className="btn btn-default dropdown-toggle"
          type="button"
          id="dropdownMenu1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Sort by <span className="caret" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li>
            <a onClick={() => handleSort("name", "asc")} role="button">
              Name ASC
            </a>
          </li>
          <li>
            <a onClick={() => handleSort("name", "desc")} role="button">
              Name DESC
            </a>
          </li>
          <li role="separator" className="divider" />
          <li>
            <a onClick={() => handleSort("level", "asc")} role="button">
              Level ASC
            </a>
          </li>
          <li>
            <a onClick={() => handleSort("level", "desc")} role="button">
              Level DESC
            </a>
          </li>
        </ul>
        <span className="label label-success label-medium">{strSort}</span>
      </div>
    </div>
  );
}

export default Sort;
