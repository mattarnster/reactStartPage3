import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import Nav from '../Nav'
import TodayBar from '../TodayBar'
import AddSiteForm from './AddSiteForm'
import RemoveSiteListing from './RemoveSiteListing'

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

    render() {
        return (
        <div className="App">
            <Nav ghAuthStatus={ this.props.github.ghAuthStatus } />
            <TodayBar />
            <div className="container">
                <div className="card orange darken-1"
                     style={{
                        marginBottom: 0   
                     }}>
                    <div className="card-content white-text">
                        <span className="card-title">Add a site</span>
                        <p>Use the form below to add a new site, or use the listing beneath to remove a site.</p>
                        <AddSiteForm onSubmit={ this.onSubmit } />
                    </div>
                </div>
                <div className="card orange darken-1"
                     style={{
                        marginBottom: 0   
                     }}>
                    <div className="card-content white-text">
                        <span className="card-title">Remove a site</span>
                        <p>To remove a specific site, click on it below.</p>
                        <div className="card-content">
                            <RemoveSiteListing sites={ this.props.sites }
                                               removeSite={ this.removeSite } />
                        </div>
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
        github: state.github
    }
}

export default connect(mapStateToProps)(AddRemovePage);
