import React from "react";
import { AppContext } from "./context/contextApi";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Feed from "./components/Feed"
import Header from "./components/Header"
import LeftNav from "./components/LeftNav"
import leftNavMenuItem from "./components/LeftNavMenuItem"
import SearchResult from "./components/SearchResult"
import SearchResultVideo from "./components/SearchResultVideoCard"
import SuggestionVideo from "./components/SuggestionVideoCard"
import VideoCard from "./components/VideoCard"
import VideoDetails from "./components/VideoDetails"



const App = () => {
    return (

       <AppContext>
        <BrowserRouter>
          <div className="flex flex-col">
            <Header />
            <Routes>
              <Route path="/" element={<Feed />}/>
              <Route path="/SearchResult/:searchQuery" element={<SearchResult />}/>
              <Route path="/video/:id" element={<VideoDetails/>}/>
            </Routes>
          </div>
        </BrowserRouter>
       </AppContext>
    );
};

export default App;
