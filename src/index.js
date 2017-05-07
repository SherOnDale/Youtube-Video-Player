import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';


const API_KEY = 'AIzaSyCAPkQKPPmDlCYgQmHf1Y_B7NUNDO8lFM8';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.retrieveVideo('clash of clans');
    }

    retrieveVideo(term) {
          YTSearch({key: API_KEY, term: term},videos => {
            this.setState( {videos: videos,
                selectedVideo: videos[0]
            } );
        });
    }

    render() {
        const retrieveVideo = _.debounce(term => {this.retrieveVideo(term)}, 300);
        return (
            <div>
                <SearchBar onSearchInputChange={retrieveVideo} />
                <VideoDetails video={this.state.selectedVideo} />
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={ this.state.videos } />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));