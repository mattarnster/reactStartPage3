import React, { PureComponent } from 'react'

class NoSites extends PureComponent {
    render() {
        return (
            <div className="s12 m12">
                <div className="card cyan lighten-1">
                    <div className="card-content">
                        <span className="card-title white-text darken-4 center"
                              style={{ display: "block" }}><strong>Welcome to reactStartPage<sup>3</sup></strong></span>
                        <p className="white-text center">Hi there. reactStartPage<sup>3</sup> is currently being rebuilt.</p>
                        <br/>
                        <p className="white-text center">You can create an array of objects and place them in localStorage under the key 'sites' for the time being, just follow the format below:</p>
                        <div className="card-panel teal white-text">
                            <pre>[
{`
    {
        "name": 'My Website',
        "url": 'http://www.mattarnster.co.uk'
    }
`}
]</pre>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NoSites