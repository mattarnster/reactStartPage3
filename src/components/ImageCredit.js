import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadImageCredit } from '../actions/actionCreators';

class ImageCredit extends Component {

  state = {
    imageCredit: ''
  }

  componentDidMount() {
    fetch('/assets/imagecredit.txt').then(
      (data) => {
        return data.text()
      }
    ).then(
      (text) => {
        this.props.dispatch(loadImageCredit(text))
      }
    )
  }

  render() {
    return (
      <div className="imagecredit">
        <p>Image credit: <a href="https://www.unsplash.com">
        { this.props.imageCredit ? this.props.imageCredit : 'Loading image credit...' }</a></p>
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
