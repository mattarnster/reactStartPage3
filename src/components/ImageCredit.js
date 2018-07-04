import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadImageCredit } from '../actions/actionCreators';

class ImageCredit extends Component {

  state = {
    imageCredit: ''
  }

  convertUnicode(input) {
    return input.replace(/\\u(\w\w\w\w)/g,function(a,b) {
      var charcode = parseInt(b,16);
      return String.fromCharCode(charcode);
    });
  }

  componentDidMount() {
    fetch('/assets/imagecredit.json').then(
      (data) => {
        return data.json()
      }
    ).then(
      (json) => {
        this.props.dispatch(loadImageCredit(json))
      }
    )
  }

  render() {
    return (
      <div className="imagecredit">
        <p>Image credit: <a href={ this.props.imageCredit.url }>{ this.props.imageCredit.author ? this.props.imageCredit.author : 'Loading image credit...' }</a></p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      imageCredit: state.imageCredit
  }
}

export default connect(mapStateToProps)(ImageCredit)
