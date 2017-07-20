import React, {Component} from 'react';
import QuickProjectView from './QuickProjectView';

class Project extends Component {
	render() {
		return (
			<div>
				<p>Project List</p>
				<QuickProjectView />
				<QuickProjectView />
				<QuickProjectView />
			</div>
		)
	}
}

export default Project;