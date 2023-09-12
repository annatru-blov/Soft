import React from 'react';
import './cube.css'; 

class Cube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRotating: false,
    };
  }

  handleRotateClick = () => {
    this.setState((prevState) => ({
      isRotating: !prevState.isRotating,
    }));
  };

  render() {
    const { isRotating } = this.state;

    return (
      <div
        className={`cube ${isRotating ? 'rotate' : ''}`}
        onClick={this.handleRotateClick}
      >
        <div className="side front"></div>
        <div className="side back"></div>
        <div className="side top"></div>
        <div className="side bottom"></div>
        <div className="side left"></div>
        <div className="side right"></div>
      </div>
    );
  }
}

export default Cube;
