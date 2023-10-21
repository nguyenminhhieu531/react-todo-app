import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import Control from "./components/Control";
import Form from "./components/Form";
import List from "./components/List";
import { filter, includes, orderBy as funcOrderBy } from "lodash";
import { v4 as uuidv4 } from "uuid";

function App(props) {
  const [items, setItems] = useState([]);
  const [isShowForm, setIsShowForm] = useState(false);
  const [strSearch, setStrSearch] = useState("");
  const [orderBy, setOrderBy] = useState("name");
  const [orderDir, setOrderDir] = useState("asc");
  const [itemSelected, setItemSelected] = useState(null);

  useEffect(() => {
    let itemsLocalStorage = JSON.parse(localStorage.getItem("task"));
    setItems(itemsLocalStorage);
  }, []);

  function handleSubmit(item) {
    let newObjItem = null;
    let newArrItem = [];
    if (item.id !== "") {
      // edit
      items.forEach((elm, key) => {
        if (elm.id === item.id) {
          items[key].name = item.name;
          items[key].level = +item.level;
        }
      });
    } else {
      // add
      newObjItem = {
        ...item,
        id: uuidv4(),
        level: +item.level,
      };
      newArrItem = [...items, newObjItem];
      setItems(newArrItem);
    }

    setIsShowForm(false);
    localStorage.setItem("task", JSON.stringify(newArrItem));
  }

  function handleEdit(item) {
    setItemSelected(item);
    setIsShowForm(true);
  }

  function handleDelete(id) {
    let newData = items.filter((item) => item.id !== id);
    setItems(newData);
    localStorage.setItem("task", JSON.stringify(newData));
  }

  const handleSort = (orderBy, orderDir) => {
    setOrderBy(orderBy);
    setOrderDir(orderDir);
  };

  const handleToggleForm = () => {
    setIsShowForm(!isShowForm);
    setItemSelected(null);
  };

  function handleSearch(value) {
    setStrSearch(value);
  }

  function closeForm() {
    setIsShowForm(false);
  }

  let itemsFilter = [];

  // Search Cách 1
  itemsFilter = filter(items || [], (item) => {
    return includes(item.name.toLowerCase(), strSearch.toLowerCase());
  });
  // Search Cách 2
  // itemsOrigin.forEach((item) => {
  //   if (item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
  //     items.push(item);
  //   }
  // });

  // Sort
  itemsFilter = funcOrderBy(itemsFilter, [orderBy], [orderDir]);

  let elmForm = null;
  if (isShowForm) {
    elmForm = <Form onClicSubmit={handleSubmit} itemSelected={itemSelected} onClickCancel={closeForm}></Form>;
  }

  return (
    <div>
      <div className="container">
        <Title></Title>
        <Control
          orderBy={orderBy}
          orderDir={orderDir}
          onClickSearchGo={handleSearch}
          isShowForm={isShowForm}
          onClickAdd={handleToggleForm}
          onClickSort={handleSort}
        ></Control>
        {elmForm}
        <List onClickEdit={handleEdit} items={itemsFilter} onClickDelete={handleDelete}></List>
      </div>
    </div>
  );
}

export default App;
