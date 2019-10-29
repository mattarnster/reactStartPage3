import React, { PureComponent } from 'react'

class GistOps extends PureComponent {
    render() {
        return(
            <div className="gist-ops">
                <button className="btn blue white-text" onClick={ () => this.props.backup() }><i className="small left material-icons">backup</i>Create backup to Github</button>
            </div>
        )
    }
}

export default GistOps