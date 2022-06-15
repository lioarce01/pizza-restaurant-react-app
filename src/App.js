import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyles } from "./globalStyles.js"
import Hero from "./components/Hero/index.js"
import Products from "./components/Products"
import { productData, productDataTwo } from "./components/Products/data"
import Feature from "./components/Feature/index.js"
import Footer from "./components/Footer/index.js"

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for you" data={productDataTwo} />
      <Footer />
    </Router>
  )
}

export default App
