// new file: npx create-react-app <file name>
// to run: npm start

// React router using react-router-dom
// the react router allos us to create a router to match the URLs to the individual components
// this allows us to create a single page app with fast reloading (like facebook, navs and stuff do not get reloaded)
// the content we want to load onClick will be written in their individual components and stored in the pages subfolder

import React from 'react'
// 1. npm install react-router-dom

// 2. import it into App.js as below
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

// 3. create a subfolder named pages for the components u wanna create routes for
//    create the components in the pages subfolder & import them into App.js
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'

function App() {
    return (
        // 4. now we will use the router. start with <Router> followed by the nav to store our links
        //    we will be using unordered list for the simple nav.
        //    define the link to the routes: <Link to="/text-of-your-choice">NameOfLink</Link>
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/contact">Get in Touch</Link>
                    </li>
                </ul>
            </nav>
            {/*  5. add <Switch> to change screen area when the links are accessed
         anything not in <Switch> will not get reloaded and still remain onClick 
         in <Switch>, we need to match 1 route to 1 component using:
         <Route exact path="/..."> <Component/></Route> 
         the url specified should match the <Link to="/..."> */}
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>

            </Switch>
        </Router>
    )
}

export default App;
