import React from "react";
import Item from "./Item";

function List(props) {
  const { items, onClickDelete, onClickEdit } = props;
  // console.log(onClickDelete);
  // console.log(onClickEdit);

  // console.log(items);
  let elmItem = items.map((item, index) => (
    <Item key={index} item={item} index={index} onClickDelete={onClickDelete} onClickEdit={onClickEdit}></Item>
  ));

  return (
    <div className="panel panel-success">
      <div className="panel-heading">List Task</div>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>Task</th>
            <th style={{ width: "20%" }} className="text-center">
              Level
            </th>
            <th style={{ width: "20%" }}>Action</th>
          </tr>
        </thead>
        <tbody>{elmItem}</tbody>
      </table>
    </div>
  );
}

export default List;
