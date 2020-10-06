import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

class Nav extends PureComponent {

    getComputedColorStyle() {
        return {
            backgroundColor: this.props.color
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper" style={ this.getComputedColorStyle() }>
                    <Link to="/" className={'brand-logo center ' + this.props.textColor }>reactStartPage<sup>4</sup></Link>
                    <ul className="left hide-on-small-only">
                        <li><Link to="/manage-sites" className={ this.props.textColor }>Manage Sites</Link></li>
                        <li><Link to="/settings" className={ this.props.textColor }>Settings</Link></li>
                    </ul>
                    <ul className="right hide-on-small-only">
                        { this.props.github.ghAuthStatus && this.props.github.ghProfile ? <li className="gh-connected"><Link to="/settings" className={ this.props.textColor }><img alt="It's you!" src={ this.props.github.ghProfile.avatar_url } width="30" height="30"/>Connected to GitHub</Link></li> : null }
                    </ul>
                </div>

                <div className="nav-wrapper hide-on-med-and-up" style={ this.getComputedColorStyle() }>
                    <ul className="left">
                        <li><Link to="/manage-sites" className={ this.props.textColor }>Manage Sites</Link></li>
                        <li><Link to="/settings" className={ this.props.textColor }>Settings</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sites: state.sites,
        color: state.color,
        github: state.github,
        textColor: state.textColor
    }
}

export default connect(mapStateToProps)(Nav)