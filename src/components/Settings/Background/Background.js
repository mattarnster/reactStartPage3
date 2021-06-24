import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import tinycolor from 'tinycolor2'
import { setBackground } from '../../../actions/actionCreators';

class Background extends React.Component {

    constructor(props) {
        super(props)

        this.readerLoadEvent = this.boundReaderOnLoadEventHandler.bind(this)
        this.processFileUpload = this.processFileUpload.bind(this)
    }

    getComputedColor(withMargin) {
        var darkened = tinycolor(this.props.color)
        if (withMargin) {
            return {
                backgroundColor: darkened.darken(10),
                marginBottom: 0
            }
        }
        return {
            backgroundColor: darkened.darken(10)
        }
    }

    processFileUpload() {
        var fileInput = document.getElementById('fileInput')
        if (fileInput.files.length > 0) {
            let dataURL = URL.createObjectURL(fileInput.files[0])

            // Immediately change the background
            document.body.style.backgroundImage = 'url(' + dataURL + ')'

            // Store the result in local storage
            var reader = new FileReader()
            reader.readAsDataURL(fileInput.files[0])
            
            var boundEventHandler = this.readerLoadEvent

            reader.onload = boundEventHandler
        }
    }

    boundReaderOnLoadEventHandler(e) {
        this.props.dispatch(setBackground(e.currentTarget.result))
    }

    render() { 
        return (  
            <div className={ 'card ' + this.props.textColor } style={ this.getComputedColor() }>
                <div className="card-content">
                    <span className="card-title">Custom background</span>
                    <input type="file" id="fileInput" onChange={this.processFileUpload} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        color: state.color,
        textColor: state.textColor,
        background: state.background
    }
}

export default connect(mapStateToProps)(Background);