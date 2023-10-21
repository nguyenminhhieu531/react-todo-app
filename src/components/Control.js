import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

function Control(props) {
  // constructor(props) {
  //   super(props);

  //   this.state = {};
  //   this.handleAdd = this.handleAdd.bind(this);
  // }

  function handleAdd() {
    props.onClickAdd();
  }

  let elmButton = "";
  if (props.isShowForm === false) {
    elmButton = (
      <button onClick={handleAdd} type="button" className="btn btn-info btn-block">
        Add Task
      </button>
    );
  } else {
    elmButton = (
      <button onClick={handleAdd} type="button" className="btn btn-success btn-block">
        Close Form
      </button>
    );
  }

  let orderBy = props.orderBy;
  let orderDir = props.orderDir;
  let onClickSort = props.onClickSort;
  return (
    <div className="row">
      <Search onClickGo={props.onClickSearchGo}></Search>
      <Sort onClickSort={onClickSort} orderBy={orderBy} orderDir={orderDir}></Sort>
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">{elmButton}</div>
    </div>
  );
}

export default Control;
