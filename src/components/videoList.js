import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) =>{
    
    // the video array returned is iterated over and returns an array of VideoListItems
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key= {video.etag} 
                video={video} /> 

        );
    });
    
    // here we are returning an array of videos
    return (
    <ul className="col-md-4 list-group">
        {videoItems}
    </ul>
    );
};

export default VideoList;