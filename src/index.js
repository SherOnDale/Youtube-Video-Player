import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyCAPkQKPPmDlCYgQmHf1Y_B7NUNDO8lFM8';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'clash of clans'},videos => {
            this.setState( {videos: videos,
                selectedVideo: videos[0]
            } );
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetails video={this.state.selectedVideo} />
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={ this.state.videos } />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));