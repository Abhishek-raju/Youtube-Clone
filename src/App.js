import React from "react";
import { AppContext } from "./context/contextApi";


const App = () => {
    return (
       <AppContext>
         <div className="text-xxl">Hello World</div>
       </AppContext>
    );
};

export default App;
