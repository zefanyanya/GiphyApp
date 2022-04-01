// import React, { Component } from 'react'
import Gif from '../../components/Gif'
import config from '../../lib/config'
import { useEffect, useState } from 'react'
// import data from '../../data/gifs';
// import SearchBar from '../../components/SearchBar';

const Home = () => {
    const [gifs, setGifs] = useState ([]);
    const [text, setText] = useState("");
    // const API_KEY = process.env.REACT_APP_GIPHY_KEY;

    // const  handleInput = (e) => {
    //   setText({ text: e.target.value });
    // }

    const handleSubmit = (e) => {
      e.preventDefault();
      const query = e.target.value;
      getGifs(query);
    };

    const handleChange = (e) => {
      e.preventDefault();
      setText((prevState) => (prevState = e.target.value));
      getGifs(text);
    };
  
    useEffect(() => {
      if (text !== "") {
        console.log(text);
        getGifs(text);
      }
    },[getGifs]);

    const getGifs = async (e) => {
      // e.preventDefault();
    
        const gifs = await fetch(
            `${config.GIPHY_BASE_URL}/gifs/search?q=${text}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12}`
          ).then((response) => response.json());
    setGifs(gifs.data);
        };
  
      return (
        <div> 
          <form className="form-search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-search__input"
                    required
                    onChange={handleChange}
                  />
              <button type="submit" className="form-search__button">Search</button>
          </form>


            <div className="gifs">
              {gifs?.map((gif) => (
                  <Gif
                    key={gif.id}
                    url={gif.images.original.url}
                    title={gif.title}
                  />
                  // <img src={gif.images.original.url} className="Gif" />
              ))}
            </div>
            </div>
      );        
};
export default Home;

