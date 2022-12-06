import React, {useEffect} from "react";
import { Navbar, StoriesList, SingleStory, AllAuthors, SingleAuthor } from "./";
import { fetchStoriesAsync } from "../features/stories/storiesSlice";
import { fetchAuthorsAsync } from "../features/authors/authorsSlice";
import { useDispatch } from "react-redux";
import {Routes, Route} from 'react-router-dom';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStoriesAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAuthorsAsync());
  }, [dispatch]);

  return (
    <div id="main">
      <div className="column container">
        <div id="header">
          <h1>Readium</h1>
        </div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/stories' element={ <StoriesList />} />
        <Route path='/stories/:storyId' element={ <SingleStory /> } />
        <Route path='/authors' element={ <AllAuthors /> } />
        <Route path='/authors/:authorId' element={ <SingleAuthor /> } />
      </Routes>
     
    </div>
  );
};

export default App;
