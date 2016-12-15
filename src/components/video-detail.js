import React from 'react'

const VideoDetail = ({video}) => {

    if(!video){
        return <div>Loading..</div>
    }
    const videoId = video.id.videoId
    const url = `https://www.youtube.com/embed/${videoId}`
    const channelTitle = video.snippet.channelTitle
    // const date = Date.parse(video.snippet.publishedAt)
    return(
            <section className="VideoDetail">
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe allowFullScreen className="embed-responsive-item" 
                    src={url}></iframe>
                </div>

                <div className="details">
                    <div className="video-title">
                        <h3><a href={url}>{video.snippet.title}</a></h3>
                        <h5 className="channel"><a href={url}>{channelTitle }</a></h5>
                        
                    </div>
                    <div className="video-desc"><p>{video.snippet.description}</p></div>
                    <div></div>

                </div>
            </div>


        </section>
    )
}

export default VideoDetail
