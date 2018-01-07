import React, {Component} from 'react'; // needs to be imported into all components


class SearchBar extends Component  {

    // We use the constructor to setup the state
    constructor(props) {
        super(props); // this calls the constructor on the parent class Component

        // state is an object available to all classes, only inside the constructor do we change state this way
        this.state = { term: '' }; // we are recording the state of the search term on initialisation
    }
    
    // the render function uses a fat arrow to take an event and use the value to set the state
    render() {
        return (
        <div>
            <input onChange = {event => this.setState({ term: event.target.value})} />
            Value of the input: {this.state.term}
        </div>
        );
    }

}

// functional component
/*
const SearchBar = () => {
    return <input />;        // returns an input element
}; */

export default SearchBar;  // this will export the component


