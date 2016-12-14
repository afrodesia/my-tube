import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// Loading Custom Components
import _ from 'lodash'
import YTSearch from 'youtube-api-search';
// Search Component
import SearchBar from './components/search-bar'
// Video Component
import VideoList from './components/video-list'
import VideoListItem from './components/video-list-item'
import VideoDetail from './components/video-detail'
// Header Component
import Header from './components/header'

// Youtube API call 
const API_KEY = 'AIzaSyCtZkSrLR84V-S79zSgpMzgyY-SUMO8Ogc';

  

class App extends Component {

    constructor(props) {

        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('React.js')
    }
    
    videoSearch(term){

        YTSearch({key: API_KEY, term: term}, (videos) =>  {
            this.setState({
                videos: videos,
                selectedVideo:videos[0]
            })
        })
    }

    render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500)

    return (
        <div className="App">
            
            <Header />
            <SearchBar onSearchTermChange={videoSearch}/>

            <div className="container page">

                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos} />
            </div>
        </div>
    );
  }
}

export default App;
