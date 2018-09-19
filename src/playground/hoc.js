import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>Some details go here: {props.info}</p>
	</div>
);

const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAuthenticated ? (
				<WrappedComponent {...props} />
			): (
				<p>Please Log In</p>
			)}
		</div>
	);
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="DETAILS" />, document.getElementById('app'));
