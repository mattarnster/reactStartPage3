import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import GitHub from 'github-api'

import { loadGists, replaceSites } from '../../../actions/actionCreators'

import Gist from './Gist'

class GistListing extends PureComponent {

    constructor() {
        super()

        this.replaceSites = this.replaceSites.bind(this)
      }

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

    replaceSites(gist) {
        fetch(gist.files['sites.json'].raw_url).then( (data) => {
            return data.json()
        }).then( (json) => {
            this.props.dispatch(replaceSites(json))
            alert('Your bookmarks have been replaced with the contents of the GitHub gist.');
            window.location = "/"
        })
    }

    render() {
        const { gists } = this.props.github
        return(
            <div className="gists">
                <br/>
                <p>You can choose a gist to replace your current bookmarks list from here:</p>
                <br/>
                { gists.length > 0 ? gists.map( gist => { return <Gist key={ gist.id } data={ gist } replaceSites={ this.replaceSites } /> } ) : <h5 className="center-align"><i className="material-icons">cloud_download</i> Fetching your gists...</h5> }
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
