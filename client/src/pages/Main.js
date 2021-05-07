import React, { Component } from 'react';
import api from "../api/api";
import ImageList from "../atoms/ImageList";
import Header from '../molecules/Header';

export default class Main extends Component {
    state = { images: [] };
    onSearchSubmit = async term => {
      const response = await api.get("/search/photos", {
        params: { 
          query: term 
        }
      });
  
      this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <Header onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}
