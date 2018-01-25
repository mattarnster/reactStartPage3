import React, { Component } from 'react'

export default class ImageCredit extends Component {

  state = {
    imageCredit: ''
  }

  componentDidMount() {
    fetch('/assets/imagecredit.txt').success( (text) => {
      this.setState({
        imageCredit: text
      })
    })
  }

  render() {
    return (
      <div className="imagecredit">
        <p>Image credit: <a href="https://www.unsplash.com">
        { this.state.imageCredit ? this.state.imageCredit : 'Loading image credit...' }</a></p>
      </div>
    )
  }
}
