import React, { Component } from 'react';
import './App.css';
import Navigation from './component/navigation/nav';
import ContentHeader from './component/contentheader/contentheader';
import Card from './component/card/card';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <ContentHeader></ContentHeader>
        <Card></Card>
      </div>
    );
  }
}

export default App;
