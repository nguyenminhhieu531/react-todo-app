import React, { useEffect, useState } from "react";

function Form(props) {
  const [newTaskItem, setNewTaskItem] = useState({
    task_id: "",
    task_name: "",
    task_level: 0,
  });

  useEffect(() => {
    updateItem(props.itemSelected);
  }, [props.itemSelected]);

  function updateItem(item) {
    if (item !== null) {
      setNewTaskItem({
        task_id: item.id,
        task_name: item.name,
        task_level: item.level,
      });
    }
  }

  function handleChange(event) {
    const target = event.target; // input và select
    const value = target.value;
    const name = target.name;
    console.log(name);

    setNewTaskItem({
      ...newTaskItem,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let item = {
      id: newTaskItem.task_id,
      name: newTaskItem.task_name,
      level: newTaskItem.task_level,
    };

    props.onClicSubmit(item);
    setNewTaskItem({
      task_name: "",
      task_level: 0,
    });
  }

  function handleCancel() {
    props.onClickCancel();
  }

  return (
    <div className="row">
      <div className="col-md-offset-7 col-md-5">
        <form className="form-inline" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="sr-only">label</label>
            <input
              value={newTaskItem.task_name}
              onChange={handleChange}
              name="task_name"
              type="text"
              className="form-control"
              placeholder="Task Name"
            />
          </div>
          <div className="form-group">
            <label className="sr-only">label</label>
            <select
              value={newTaskItem.task_level}
              onChange={handleChange}
              name="task_level"
              id="inputDs"
              className="form-control"
              required="required"
            >
              Small
              <option value={0}>Small</option>
              <option value={1}>Medium</option>
              <option value={2}>High</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button onClick={handleCancel} type="button" className="btn btn-default">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
