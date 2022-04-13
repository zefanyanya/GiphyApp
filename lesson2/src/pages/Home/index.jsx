import Gif from "../../components/Gif";
// import config from "../../lib/config";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import { setQuery } from "../../queryReducer/queryAction";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { Toolbar } from "@material-ui/core";
// import { Toolbar } from "@material-ui/core";

const Home = () => {
  // const [gifs, setGifs] = useState([]);
  // const [text, setText] = useState("");
  const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;
  const currentQuery = useSelector((state) => state.query.value);
  const dispatch = useDispatch();
  // const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // const handleInput = (e) => {
  //   setText(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    getGifs();
  };

  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${currentQuery
      .replace(/\s+/g, "+")
      .toLowerCase()}&api_key=${GIPHY_KEY}&limit=12`;

    const response = await fetch(url)
      .then((res) => res.json())
      .catch((e) => console.log(e));
    console.log(response.data);
    setResults(response.data);
  };

  return (
    <div>
      <Toolbar>
        <SearchBar
          className="searchbar"
          query={currentQuery}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </Toolbar>
      <br />
      <div className="container">
        {results.map((it) => (
          <Gif
            className="card"
            key={it.id}
            source={it.images.downsized.url}
            title={it.title}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
