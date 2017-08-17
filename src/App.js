import React from 'react'

var fgColor = '#af0000';

var style = {
	padding: '25px 35px',
	border: 'solid 1px',
	borderRadius: '8px',
	borderColor: fgColor,
	fontFamily: 'Arial',
	fontSize: '2em',
	transition: '0.2s',
	width: '100%'
}, hoverStyle = {
	backgroundColor: fgColor,
	color: 'white'
}, blurStyle = {
	backgroundColor: 'white',
	color: fgColor
};

Object.assign(hoverStyle, style);
Object.assign(blurStyle, style);

class Button extends React.Component {
	constructor(props) {
		super(props);

		this.onMouseOver = this.onMouseOver.bind(this);
		this.onMouseOut = this.onMouseOut.bind(this);

		this.state = {
			style: blurStyle
		}
	}

	render() {
		return (
			<button style={this.state.style} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
				LAUNCH
			</button>
		);
	}

	onMouseOver() {
		this.setState({style: hoverStyle});
	}

	onMouseOut() {
		this.setState({style: blurStyle});
	}
}

var blkColor = 'blue';

var blkStyle = {
	margin: '20px 0 20px 0',
	padding: '10px 10px 10px 25px',
	border: 'solid 1px ' + blkColor,
	borderLeft: 'solid 5px ' + blkColor,
}

class Block extends React.Component {
	constructor(props) {
		super(props);


	}

	render() {
		return (
			<div style={blkStyle}>
				<h4 style={{color: blkColor}}>
					{this.props.header}
				</h4>
				{this.props.children}
			</div>
		);
	}
}

export default function() {
	return (
		<div style={{margin: '15px'}}>
			<Block header="Rocket Launcher">
				<p>Press button below.</p>
			</Block>
			<Button />
		</div>
	);
}
