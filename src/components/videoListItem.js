import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    
    const imageUrl = video.snippet.thumbnails.default.url;

    //the above is the same as this line
    //const video =props.video;

    return (
        //when the list item is clicked it calls the onVideoSelect function, which was passed in and returns the
        //video in context, so app state can be updated.
         <li onClick={()=> onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>


         </li>
    );
};

export default VideoListItem;