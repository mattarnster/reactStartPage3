import React, { PureComponent } from 'react'

class Gist extends PureComponent {
    

    getStyle() {
        return {
            cursor: 'pointer'
        }
    }

    render() {
        return (
            <div className="gist card light-blue hoverable" style={this.getStyle()} onClick={ () => this.props.replaceSites(this.props.data) }>
                <div className="card-content white-text">
                    <span>{ this.props.data.id.substring(0, 8) } - { this.props.data.description ? this.props.data.description : 'No description' }</span>
                </div>
            </div>
        )
    }
}

export default Gist