import React from 'react';  // Imports the core React library which works with react components
import ReactDom from 'react-dom'; // used to add components to the DOM (the page)
import SearchBar from './components/searchBar';  // import the searchBar component

const API_KEY  = 'AIzaSyBBv8MK66S0N2z82eydAzZwPZj1ZavOTyY';  // API_KEY for youtube

// create a new component
// component should produce some HTML
// this is a factory a class and not an instance of the component

const App = () =>  {       // ES6 const is used for a App, so the value returned to it will not change
    return (
    <div>
        <SearchBar />
    </div>
    );      // this is JSX, which looks like HTML, but is actually javascript
}


// Take this components HTMl and put it on the page (in the DOM)
//the first argument is the component and the second is the target container
ReactDom.render(<App />, document.querySelector('.container'));  //We are passing an instance now.  The tag creates an instance