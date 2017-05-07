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
        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'surfboards'},videos => {
            this.setState( {videos} );
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetails video={this.state.videos[0]} />
                <VideoList videos={ this.state.videos } />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));