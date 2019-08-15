import React, { Component } from 'react';
import LeftTool from './components/LeftTool/LeftTool';
import Content from './components/Content/Content';
import RightTool from './components/RightTool/RightTool';
import './App.scss';

class App extends Component {
  state = {
    showHeader: false,
    showMain: false,
    showFooter: false,
    showSectionServices: false,
    showSectionTeam: false,
  }

  toggleHeader = () => {
    this.setState(prevState => ({
      showHeader: !prevState.showHeader,
    }))
  }

  toggleMain = () => {
    this.setState(prevState => ({
      showMain: !prevState.showMain,
    }))
  }

  toggleFooter = () => {
    this.setState(prevState => ({
      showFooter: !prevState.showFooter,
    }))
  }

  toggleSectionServices = () => {
    this.setState(prevState => ({
      showSectionServices: !prevState.showSectionServices,
    }))
  }

  toggleshowSectionTeam = () => {
    this.setState(prevState => ({
      showSectionTeam: !prevState.showSectionTeam,
    }))
  }

  render() {
    const { showHeader, showMain, showFooter, showSectionServices, showSectionTeam } = this.state;
    return (
      <div className="App">
      <LeftTool showHeader={showHeader} showMain={showMain} showFooter={showFooter} showSectionServices={showSectionServices} showSectionTeam={showSectionTeam} toggleHeader={this.toggleHeader} toggleMain={this.toggleMain} toggleFooter={this.toggleFooter} toggleSectionServices={this.toggleSectionServices} toggleshowSectionTeam={this.toggleshowSectionTeam} /> 
      <Content showHeader={showHeader} showMain={showMain} showFooter={showFooter} showSectionServices={showSectionServices} showSectionTeam={showSectionTeam}/>
      <RightTool />
    </div>
    );
  }
}

export default App;