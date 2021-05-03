import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Search from "./Components/Search";
// import { ByName, ByID } from "./Components/Sort";
import loading from "./assets/loading.gif";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fitchData = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItems(result.data);
      setIsLoading(false);
    };

    fitchData();
  }, [query]);

  // const nameSorted = () => {
  //   setItems(items.sort((a, b) => (a.name > b.name ? 1 : -1)));
  //   console.log(items);
  // };

  return (
    <div className="App">
      <Header />
      <Search getQuery={q => setQuery(q)} />

      <div className="row">{/* <div className="filtered">
          <h5>Sorted By</h5>
          <ByName name="Name" nameSorted={nameSorted} />
          <ByID id="Number" />
        </div> */}</div>
      {!isLoading ? (
        <div className="img_container">
          {items.map(item => (
            <div className="item" key={item.char_id}>
              <img className="avatar" src={item.img} alt={item.name} />
              <div className="overlay">
                <h3 className="name">{item.name}</h3>
                <h4 className="nickname">{item.nickname}</h4>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="loading">
          <img src={loading} alt="loading.." />
        </div>
      )}
    </div>
  );
};

export default App;
