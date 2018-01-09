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
        <div className="search-bar">
            <input 
                value={this.state.term}
                onChange = {event => this.onInputChange(event.target.value)} />
             
        </div>
        );
        //could add this to the div to see the contents of the search bar
        // Value of the input: {this.state.term}
    }

    // this is fired when the input changes in the search bar
    onInputChange(term){
        this.setState({term}); //set the new state
        this.props.onSearchTermChange(term);  // call onSearchTermChange
    }

}

// functional component
/*
const SearchBar = () => {
    return <input />;        // returns an input element
}; */

export default SearchBar;  // this will export the component


