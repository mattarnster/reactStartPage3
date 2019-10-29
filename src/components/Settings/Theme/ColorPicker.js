import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import tinycolor from 'tinycolor2'

import { ChromePicker } from 'react-color'

class ColorPicker extends PureComponent {

    getComputedColor(withMargin) {
        var darkened = tinycolor(this.props.color)
        if (withMargin) {
            return {
                backgroundColor: darkened.darken(10),
                marginBottom: 0
            }
        }
        return {
            backgroundColor: darkened.darken(10),
        }
    }
    
    render() { 
        return (
            <div className="card"
                    style={ this.getComputedColor() }>
                <div className={ 'card-content ' + this.props.textColor}>
                    <span className="card-title">Theme</span>
                    <p>Choose your favorite color to customize the theme</p>
                    <br/>
                    <ChromePicker 
                        color={ this.props.color === '' ? '#fff' : this.props.color }
                        onChangeComplete={ this.props.onColorChange } />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        color: state.color,
        textColor: state.textColor
    }
}

export default connect(mapStateToProps)(ColorPicker);