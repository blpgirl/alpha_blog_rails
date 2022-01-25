import React from "react"
import PropTypes from "prop-types"

// the others dont need {} because it's a default class that we are importing
import { SketchPicker } from 'react-color';

class Colorpicker extends React.Component {
  constructor(props) {
        super(props);
        this.state = { color: '#fff', selector: props.selector };
        this.handleChange = this.handleChange.bind(this);
  }

  //handleChangeComplete = (color) => {
  //  this.setState({ color: color.hex });
  //};

  handleChange(color, event) {
    //console.log(color.hex);
    // change tha page background color
    document.getElementById("page-content").style.background = color.hex;
    // set the color in the input to save it on database in their profile
    let elem = document.querySelector('#'+this.state.selector)
    elem.value = color.hex;
  }

  render() {
    // on SketchPicker onChangeComplete={ this.handleChangeComplete }
    return (
        <React.Fragment>
          <SketchPicker
            color={ this.state.color }
            onChange={ this.handleChange }
          />
        </React.Fragment>
      );
  }
}

Colorpicker.propTypes = {};

export default Colorpicker
