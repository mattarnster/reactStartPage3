import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import tinycolor from 'tinycolor2'

import Nav from '../Nav'
import TodayBar from '../TodayBar'
import AddSiteForm from './AddSiteForm'

import { addSite, removeSite } from '../../actions/actionCreators'

class AddRemovePage extends PureComponent {

    constructor() {
        super()

        this.onSubmit = this.onSubmit.bind(this)
        this.removeSite = this.removeSite.bind(this)
    }


    onSubmit(values) {
        this.props.dispatch(addSite(values))
    }

    removeSite(key) {
        this.props.dispatch(removeSite(key))
    }

    getComputedColor(withMargin) {
        var darkened = tinycolor(this.props.color)
        if (withMargin === true) {
            return {
                backgroundColor: darkened.darken(10),
                marginBottom: 0
            }
        }
        return {
            backgroundColor: darkened.darken(10)
        }
    }

    render() {
        return (
        <div className="App">
            <Nav ghAuthStatus={ this.props.github.ghAuthStatus } />
            <TodayBar />
            <div className="container">
                <div className="card"
                     style={ this.getComputedColor(true) }>
                    <div className={ 'card-content ' + this.props.textColor }>
                        <span className="card-title">Add a site</span>
                        <p>Use the form below to add a new site, or use the listing beneath to remove a site.</p>
                        <AddSiteForm textColor={ this.props.textColor } color={ this.props.color } onSubmit={ this.onSubmit } />
                        {
                            this.props.sites.map((site, key) => {
                                return  <div className="card-panel blue white-text"
                                            key={ key }>
                                            <span className="center"
                                                onClick={ () => this.removeSite(key) }
                                                style={{
                                                    display: 'block'
                                                }}>{ site.name } - {site.link}
                                            </span>
                                        </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sites: state.sites,
        github: state.github,
        color: state.color,
        textColor: state.textColor
    }
}

export default connect(mapStateToProps)(AddRemovePage);
