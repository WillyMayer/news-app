import Business from "./components/Business"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Technology from "./components/technology"
import Home from "./components/Home"
import Entertainment from "./components/Entertainment"
import Sports from "./components/sports"

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="business" element={<Business />}/>
          <Route path="technology" element={<Technology />}/>
          <Route path="" element={<Home />}/>
          <Route path="entertainment" element={<Entertainment />}/>
          <Route path="sport" element={<Sports />}/>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
