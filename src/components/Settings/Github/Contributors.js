
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './contributors.css';

import {
	getGhContributors,
  } from '../../../actions/actionCreators'

class Contributors extends PureComponent {

    componentDidMount() {
		this.props.dispatch(getGhContributors())
    }

    render() {
		const { contributors } = this.props.github;

		console.log(contributors);
		
		const contributorsList = contributors.map(contributor => 
		<li className="item-contributor" key={contributor.id}>
			<a href={contributor.html_url} target="_blank" rel="noopener noreferrer">
				<img src={contributor.avatar_url} alt={contributor.login}/>
			</a>
		</li>);

        return(
			<div className="card-content">
				<p>Contributors</p>
				<ul className="list-contributors">
					{contributorsList}
				</ul>
			</div>
			
        )
    }
}

const mapStateToProps = (state) => {
    return {
        github: state.github
    }
}

export default connect(mapStateToProps)(Contributors)
