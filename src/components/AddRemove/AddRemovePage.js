import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import Nav from '../Nav'
import TodayBar from '../TodayBar'
import AddRemoveForm from './AddRemoveForm'

class AddRemovePage extends PureComponent {
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
                        <span className="card-title">Add/Remove a site</span>
                        <p>Use the form below to add a new site, or use the listing beneath to remove a site.</p>
                        <AddRemoveForm />
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
