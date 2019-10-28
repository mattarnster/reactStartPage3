import React, { PureComponent } from 'react'
import tinycolor from 'tinycolor2'

class Site extends PureComponent {

    getComputedStyles() {
        var darkened = tinycolor(this.props.color)
        return {
            backgroundColor: darkened.darken(10),
            display: 'block'
        }
    }

    render() {
        return (
            <div className="col s6 m3">
                <a href={ this.props.site.link }
                   className="card-panel bp-button hoverable z-depth-1"
                   style={ this.getComputedStyles() }>
                   <span className={ 'center ' + this.props.textColor }
                         style={{ display: "block" }}>{ this.props.site.name }</span>
                </a>
            </div>
        )
    }
}

export default Site