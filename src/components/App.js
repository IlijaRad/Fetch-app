import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = {images: []};

    onSearchSubmit = async(term) => {
        let response = await fetch("https://api.unsplash.com/search/photos?"  + new URLSearchParams({
            query: term
        }),{
            headers: {
                Authorization: 'Client-ID TuNDY1tabr6tAugW4fb-MAtS-AvsEiz8h9hUHMPb2js'
            }
        })
        let json = await response.json();
        this.setState({images: json.results});
    }

    render(){
        return (
            <div className ="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;