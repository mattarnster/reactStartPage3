import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import Site from './Site'

class SitesListing extends PureComponent {
    render() {
        return (
            <div className="sites row">
                <div className="col s12 m12"
                     style={{ marginTop: 30 }}>
                    { this.props.sites.map(site => {
                        return <Site site={ site } />
                    }) }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sites: state.sites
    }
}

export default connect(mapStateToProps)(SitesListing)