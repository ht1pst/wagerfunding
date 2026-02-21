import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Home/Hero";
import Section2 from "./Home/Section2";
import Section3 from "./Home/Section3";
import Section4 from "./Home/Section4";
import Section5 from "./Home/Section5";
import Section6 from "./Home/Section6";
import ChaSection1 from "./Challenge/ChaSection1";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
              <Section6 />
            </>
          }
          
        />

         <Route
            path="/challenge"
            element={
               <>
              <ChaSection1/>
              </>
            }
          />
      </Routes>
    </Router>
  );
}

export default App;
