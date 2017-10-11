import React from 'react';
import YouTube from 'react-native-youtube';

export default class VideoDetail extends React.Component{
    
    render(){
        console.log(this.props.navigation.state.params.videoID)
        return (
            <YouTube
            //ref='youtubePlayer'
            videoId={this.props.navigation.state.params.videoID}   // The YouTube video ID
            play={true}             // control playback of video with true/false
            fullscreen={true}       // control whether the video should play in fullscreen or inline
            loop={true}             // control whether the video should loop when ended
            apiKey = {'AIzaSyB2mh7rLe7t3YPoQ73r9jXv6YelCwEbe-E'}
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
           
            style={{ alignSelf: 'stretch', height: 300 }}
          />
        )
    }
}