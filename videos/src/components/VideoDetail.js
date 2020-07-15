import React from 'react';

const VideoDetail = (props) => {
    const video = props.video;
    if(!video){
        return <div></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title="video player"/>
            </div>
            <div className="ui segment">
                <div className="ui header">
                    {video.snippet.title}
                </div>
                {video.snippet.description}
            </div>
        </div>
    );
}

export default VideoDetail;