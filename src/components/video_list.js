import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    var VideoLists = props.videos.map(video => {
        return <VideoListItem key={ video.etag } video={ video } />
    });
    return (
        <ul className="col-md-4 list-group">
            { VideoLists }
        </ul>
    );
}

export default VideoList;