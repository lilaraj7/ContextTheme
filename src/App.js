import React,{ createContext} from "react";
import ComponentA from "./ComponentA";
import { ThemeProvider } from "./ThemeContext";

export const ThemeContext = React.createContext()
function App() {
 

  
  return (
    <>
    <ThemeProvider>
      
      <ComponentA/>
    </ThemeProvider>
    </>
  );
}

export default App;

