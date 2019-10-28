import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import tinycolor from 'tinycolor2'

import Nav from '../Nav'
import TodayBar from '../TodayBar'
import GithubConfig from '../GithubConfig'

import { ChromePicker } from 'react-color'

import { setColor } from '../../actions/actionCreators'

class SettingsPage extends PureComponent {

    constructor() {
        super()

        this.onColorChange = this.onColorChange.bind(this)
    }


    onColorChange(values) {
        this.props.dispatch(setColor(values.hex))
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
            backgroundColor: darkened.darken(10),
        }
    }

    render() {
        return (
        <div className="App">
            <Nav ghAuthStatus={ this.props.github.ghAuthStatus } />
            <TodayBar />
            <div className="container">
                <div className="card"
                     style={ this.getComputedColor() }>
                    <div className="card-content white-text">
                        <span className="card-title">Theme</span>
                        <p>Choose your favorite color to customize the theme</p>
                        <br/>
                        <ChromePicker 
                            color={ this.props.color === '' ? '#fff' : this.props.color }
                            onChangeComplete={ this.onColorChange } />
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="card"
                     style={ this.getComputedColor() }>
                    <div className="card-content white-text">
                        <span className="card-title">Github</span>
                        <p>Configure the link to GitHub for exporting your sites.</p>
                        <br/>
                        <GithubConfig />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        color: state.color,
        github: state.github
    }
}

export default connect(mapStateToProps)(SettingsPage);
