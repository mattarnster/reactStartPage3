import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import Nav from '../Nav'
import TodayBar from '../TodayBar'
import AddRemoveForm from './AddRemoveForm'

import { addSite } from '../../actions/actionCreators'

class AddRemovePage extends PureComponent {

    constructor() {
        super()

        this.onSubmit = this.onSubmit.bind(this)
    }


    onSubmit(values) {
        this.props.dispatch(addSite(values))
    }

    render() {
        return (
        <div className="App">
            <Nav ghAuthStatus={ this.props.github.ghAuthStatus } />
            <TodayBar />
            <div className="container">
                <div className="card cyan darken-1"
                     style={{
                        marginBottom: 0   
                     }}>
                    <div className="card-content white-text">
                        <span className="card-title">Add a site</span>
                        <p>Use the form below to add a new site, or use the listing beneath to remove a site.</p>
                        <AddRemoveForm onSubmit={ this.onSubmit } />
                    </div>
                </div>
                <div className="card cyan darken-1"
                     style={{
                        marginBottom: 0   
                     }}>
                    <div className="card-content white-text">
                        <span className="card-title">Remove a site</span>
                        <p>To remove a specific site, click on it below.</p>
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
