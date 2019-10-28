import React, { PureComponent } from 'react'

class NoSites extends PureComponent {
    render() {
        return (
            <div className="s12 m12">
                <div className="card" style={{ backgroundColor: this.props.color }}>
                    <div className={ 'card-content ' + this.props.textColor }>
                        <span className="card-title center"
                              style={{
                                  display: 'block'
                              }}>Welcome to reactStartPage<sup>4</sup></span>
                        <p className="center">A project by <a href="https://twitter.com/mattarnster">@mattarnster</a></p>
                        <br />
                        <p className="center">This is your own personal start page. <br /> All of your data is stored locally within your web-browser.</p>
                        <br />
                        <p className="center">Click 'Manage Sites' in the top-left to get started!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NoSites