import React from "react";
import Particleground from "particleground-light";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Brewski from "./components/Brewski";
import CloudNV from "./components/CloudNV";
import { Route } from "react-router-dom";
import Tracker from "./components/Tracker";


class App extends React.Component {

  state = {
    aboutMeOpen: false
  };

  toggleAboutMe = () => {
    if (this.state.aboutMeOpen) {
      this.setState({ aboutMeOpen: false })
    } else {
      this.setState({ aboutMeOpen: true })
    }
  };

  componentDidMount() {
    new Particleground(document.getElementById("particles"), {
        lineColor: "#536271", // light blue
        dotColor: "#2C3D55" // dark blue
    });
  };

  render() {
    return(
      <div id="particles" className="particle-style">
        <div id="intro" className="intro-style">
          <Nav
            aboutMeOpen={this.state.aboutMeOpen}
            toggleAboutMe={this.toggleAboutMe}
          />
          <Route exact path="/" component={Tracker(Carousel)} />
          <Route exact path="/brewski" component={Tracker(Brewski)} />
          <Route exact path="/cloudnv" component={Tracker(CloudNV)} />
        </div>
      </div>
    )
  }
}
  

export default App;
