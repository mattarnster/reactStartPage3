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
                        this.props.sites.length > 0 ? this.props.sites.map((site, index) => { return <Site key={ index } site={ site } color={ this.props.color } textColor={ this.props.textColor } /> } ) : <NoSites color={ this.props.color } textColor={ this.props.textColor } />
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sites: state.sites,
        color: state.color,
        textColor: state.textColor
    }
}

export default connect(mapStateToProps)(SitesListing)