import React, {Component} from 'react';  // Imports the core React library which works with react components
import ReactDom from 'react-dom'; // used to add components to the DOM (the page)
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';  // import the searchBar component
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import _ from 'lodash';

const API_KEY  = 'AIzaSyBBv8MK66S0N2z82eydAzZwPZj1ZavOTyY';  // API_KEY for youtube



// create a new component
// component should produce some HTML
// this is a factory a class and not an instance of the component

class App extends Component {       // ES6 const is used for a App, so the value returned to it will not change
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
         }; // initial state has an empty array

         this.videoSearch('surfboards');
       
    }
    
    videoSearch(term){
         //call Youtube API and use a fat arrow callback function to return the videos
         YTSearch({key: API_KEY, term: term}, (videos) => {
            // this.setState({video)} is the same as this.setState({ videos : videos });
            this.setState({ 
                videos: videos, //will set the array to the videos returned
                selectedVideo: videos[0] // will set the selected video to the first video in the array
            }); // we can use this when the key and property have the same name
            console.log(videos);
        });
    }

    render() {
        const videoSearch = _.debounce((term)=> {this.videoSearch(term) }, 300); // calls videoSearch every 300ms

        return (
        <div>
            
            <SearchBar onSearchTermChange = {videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
                //this just updates app state
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} /> 
            
        </div>
        );    //// this is how we pass props 
          // this is JSX, which looks like HTML, but is actually javascript
    }
}


// Take this components HTMl and put it on the page (in the DOM)
//the first argument is the component and the second is the target container
ReactDom.render(<App />, document.querySelector('.container'));  //We are passing an instance now.  The tag creates an instance