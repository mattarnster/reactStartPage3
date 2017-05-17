import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import Site from './Site'
import NoSites from './NoSites'

class SitesListing extends PureComponent {
    render() {
        return (
            <div className="sites row"
                 style={{ 
                    marginBottom: 0
                 }}>
                <div className="col s12 m12"
                     style={{ marginTop: 30 }}>
                    { 
                        this.props.sites.length > 0 ? this.props.sites.map((site, index) => { return <Site key={ index } site={ site } /> } ) : <NoSites />
                    }
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