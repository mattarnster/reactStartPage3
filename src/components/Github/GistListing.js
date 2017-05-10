import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import GitHub from 'github-api'

import { loadGists } from '../../actions/actionCreators'

import Gist from './Gist'

class GistListing extends PureComponent {

    componentDidMount() {
        this.getGists()
    }
    
    getGists() {
        let ghClient = new GitHub({
            token: this.props.github.ghToken
        })
        
        var me = ghClient.getUser()
        
        me.listGists().then((gists, err) => {
            this.props.dispatch(loadGists(gists.data))
        })
    }
    
    render() {
        const { gists } = this.props.github
        console.log(gists)
        return(
            <div className="gists">
                { gists.length > 0 ? gists.map( gist => { return <Gist key={ gist.id } data={ gist } /> } ) : null }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        github: state.github
    }
}

export default connect(mapStateToProps)(GistListing)