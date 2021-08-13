import React from 'react'
import About from './About'
import Error from './Error'
import NavBar from './NavBar'
import People from './People'
import Person from './Person'
import Home from './Home'
import {BrowseRouter as Route, Router, Switch} from 'react'

function ReactRouterDom() {
    return (
        <>
        <Route>
            <NavBar />
        
        <Switch>
            <Route exact path='/'>
                    <Home />

            </Route>
            <Route path='/about'>
                    <About />

            
            <Route path='/peope'>
                    <People />

            </Route>
            </Route>
            <Router path="/person/:id" children={<Person/>}></Router>
            <Route path='*'> {/* "*" means that this page will always render*/}
                    <Error />

            </Route>
                

        </Switch>
        </Route>
            
        </>
    )
}

export default ReactRouterDom
