import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyBrJVj16NLJOitoi3SbtIuwtIbM4ZGSTpQ'; // Uppercase because constant value needs not to be changed

class App extends React.Component{

    state = { videos: [], selectedVideo: null };
    onTermSubmit = async (term) =>{
        const response = await youtube.get('/search',{
            params:{
                q: term,
                key: KEY,
                part: 'snippet',
                maxResults: 5,
                type: 'video'
            }
        })
        // console.log(response);
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
        // console.log('From the app ',video);
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ui eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="ui five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;