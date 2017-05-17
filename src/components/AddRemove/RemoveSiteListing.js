import React, { PureComponent } from 'react'

class RemoveSiteListing extends PureComponent {
    render() {
        return (
            <div className="col s12 m12">
                {
                    this.props.sites.map((site, key) => {
                        return  <div className="card-panel blue white-text"
                                     key={ key }>
                                    <span className="center"
                                          onClick={ () => this.props.removeSite(key) }
                                          style={{
                                              display: 'block'
                                          }}>{ site.name }
                                    </span>
                                </div>
                    })
                }
            </div>
        )
    }
}

export default RemoveSiteListing