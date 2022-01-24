import React from "react"
import PropTypes from "prop-types"
class Article extends React.Component {
  render () {
    //let description = this.props.description;
    // the dangerouslySetInnerHTML is because it was escaping special characters like '
    // <p className="card-text mb-3" dangerouslySetInnerHTML={{__html: description}} />
    return (
      <React.Fragment>
        <h5 className="card-title"><a href={this.props.path} className={this.props.class}>
        {this.props.title}</a></h5>
        <p className="card-text mb-3" >{this.props.description}</p>
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  class: PropTypes.string,
  description: PropTypes.string
};
export default Article
