import React, { PureComponent } from 'react'

class Gist extends PureComponent {
    getFiles() {
        return 'test.png'
    }

    render() {
        return (
            <div className="gist card light-blue">
                <div className="card-content white-text">
                    <span className="card-title">{ this.props.data.id.substring(0, 8) } - { this.getFiles() }</span>
                </div>
            </div>
        )
    }
}

export default Gist