import React, { PureComponent } from 'react'

class Site extends PureComponent {
    render() {
        return (
            <div className="col s6 m3">
                <a href={ this.props.site.link }
                   className="card-panel bp-button blue darken-2 hoverable z-depth-1"
                   style={{ display: "block" }}>
                   <span className="white-text center"
                         style={{ display: "block" }}>{ this.props.site.name }</span>
                </a>
            </div>
        )
    }
}

export default Site