import React from "react"
import PropTypes from "prop-types"
// Installed it before with yarn add react-timestamp
import Timestamp from "react-timestamp"

class Article extends React.Component {
  render () {
    //let description = this.props.description;
    // the dangerouslySetInnerHTML is because it was escaping special characters like '
    // <p className="card-text mb-3" dangerouslySetInnerHTML={{__html: description}} />
    return (
      <React.Fragment>
        <h5 className="card-title"><a href={this.props.path} className={this.props.class_css}>
        {this.props.title}</a></h5>
        <p className="card-text mb-3" >{this.props.description}</p>

        <small className="pb-2"><Timestamp relative date={this.props.created_at} autoUpdate />,
        last updated: <Timestamp date={this.props.updated_at}  /></small>
      </React.Fragment>
    );
  } // render

  // when the component is going to be used this method is called
  componentDidMount() {
      var self = this;
      // this._timer = setInterval(function() { self.forceUpdate() }, 1000);
  }

  // is called when the component is going to be remove from the DOM or the web page
  componentWillUnmount() {
    //if (this._timer) {
    //    clearInterval(this._timer);
    //    this._timer = null;
    //}
  }


} // class Article

// declaration of properties we will be using
Article.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  class_css: PropTypes.string,
  description: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string
};
export default Article
