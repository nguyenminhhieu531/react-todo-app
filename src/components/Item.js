import React, { Component } from "react";

function Item(props) {
  function showElementLevel(level) {
    let elmLevel = "";
    if (level === 0) {
      elmLevel = <span className="label label-default">Small</span>;
    } else if (level === 1) {
      elmLevel = <span className="label label-info">Medium</span>;
    } else if (level === 2) {
      elmLevel = <span className="label label-danger">High</span>;
    }
    return elmLevel;
  }

  function handleDelete(id) {
    props.onClickDelete(id);
  }

  function handleEdit(item) {
    props.onClickEdit(item);
  }

  let item = props.item;
  let index = props.index;

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td>{item.name}</td>
      <td className="text-center">{showElementLevel(item.level)}</td>
      <td>
        <button onClick={() => handleEdit(item)} type="button" className="btn btn-warning">
          Edit
        </button>
        <button onClick={() => handleDelete(item.id)} type="button" className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Item;
