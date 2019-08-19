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
    showBem: false,
  }

  toggleHeader = () => {
    this.setState(prevState => ({
      showHeader: !prevState.showHeader,
      showMain: false,
      showFooter: false,
      showSectionServices: false,
      showSectionTeam: false,
      showBem: false,
    }))
  }

  toggleMain = () => {
    this.setState(prevState => ({
      showMain: !prevState.showMain,
      showHeader: false,
      showFooter: false,
      showSectionServices: false,
      showSectionTeam: false,
      showBem: false,
    }))
  }

  toggleFooter = () => {
    this.setState(prevState => ({
      showFooter: !prevState.showFooter,
      showHeader: false,
      showMain: false,
      showSectionServices: false,
      showSectionTeam: false,
      showBem: false,
    }))
  }

  toggleSectionServices = () => {
    this.setState(prevState => ({
      showSectionServices: !prevState.showSectionServices,
      showHeader: false,
      showMain: false,
      showFooter: false,
      showSectionTeam: false,
      showBem: false,
    }))
  }

  toggleshowSectionTeam = () => {
    this.setState(prevState => ({
      showSectionTeam: !prevState.showSectionTeam,
      showHeader: false,
      showMain: false,
      showFooter: false,
      showSectionServices: false,
      showBem: false,
    }))
  }

  toggleBem = () => {
    this.setState(prevState => ({
      showBem: !prevState.showBem,
      showHeader: false,
      showMain: false,
      showFooter: false,
      showSectionServices: false,
      showSectionTeam: false,
    }))
  }

  render() {
    const { showHeader, showMain, showFooter, showSectionServices, showSectionTeam, showBem } = this.state;
    return (
      <div className="App">
      <LeftTool showHeader={showHeader} showMain={showMain} showFooter={showFooter} showSectionServices={showSectionServices} showSectionTeam={showSectionTeam} toggleHeader={this.toggleHeader} toggleMain={this.toggleMain} toggleFooter={this.toggleFooter} toggleSectionServices={this.toggleSectionServices} toggleshowSectionTeam={this.toggleshowSectionTeam} /> 
      <Content showBem={showBem} showHeader={showHeader} showMain={showMain} showFooter={showFooter} showSectionServices={showSectionServices} showSectionTeam={showSectionTeam}/>
      <RightTool showBem={showBem} toggleBem={this.toggleBem}/>
    </div>
    );
  }
}

export default App;