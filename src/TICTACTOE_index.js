import React from 'react'
import ReactDOM from 'react-dom'


const screenSwitcher = () => window.innerWidth > window.innerHeight
const styleSwitch = screenSwitcher()

let style = {
	color: {
		background: 'rgb(34, 120, 144)',
		secondary: 'rgb(4, 37, 36)',
		primary: 'rgb(249, 153, 48)'
	},
	container: {
		'display': 'flex',
		'flexDirection': 'column',
		'alignItems': 'center',
	}
}

style = {...style,
	wrapper: {
		'backgroundColor': style.color.background,
		'width': styleSwitch ? '99vmax' : '98vmin',
		'height': !styleSwitch ? '99vmax' : '98vmin',
		'borderRadius': '8vmin',
		'font': '2vmin Arial, sans-serif',
	},
	board: {...style.container,
		'width': '20vmin',
		'height': '20vmin',
		'marginTop': '10vmin'
	},
	row: {
		'display': 'flex'
	},
	square: {...style.container,
		'width': styleSwitch ? '12vmin' : '12vmax',
		'height': styleSwitch ? '12vmin' : '12vmax',
		'backgroundColor': style.color.secondary,
		'margin': '1vmin',
		'justifyContent': 'center',
		'fontSize': styleSwitch ? '6vmin' : '6vmax',
		'color': style.color.primary,
		'borderRadius': '1vmin'
	},
	message: {...style.container,
		'width': '40vmin',
		'height': '40vmin',
		'marginTop': '5vmin',
		'fontWeight': 'bold',
		'fontSize': styleSwitch ? '3vmin' : '3vmax',
		'color': style.color.primary
	},
	button: {
		'backgroundColor': style.color.secondary,
		'borderRadius': '6vmin',
		'borderStyle': 'none',
		'marginBottom': '8vmin',
		'fontSize': styleSwitch ? '4vmin' : '5vmin',
		'padding': '1vmin',
		'fontWeight': 'bold',
		'outline': '0',
		'color': style.color.primary
	}
}


class Square extends React.Component {
	render() {
		return (
			<div
				style={style.square}
				onClick={this.props.setCheck}
			>
				{this.props.check}
			</div>
			)
	}
}

class Board extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			squares: ['', '', '', '', '', '', '', '', ''],
			player: 'X',
			winner: ''
		}
		this.resetGame = this.resetGame.bind(this)
	}

	setCheck(index) {
		if(this.state.winner || this.state.squares[index]) {return}
		
		let nextSquares = [...this.state.squares]
		nextSquares[index] = this.state.player

		this.setState({
			squares: nextSquares,
			player: this.state.player === 'X' ? 'O' : 'X',
			winner: this.calculateWinner(nextSquares)
		})
	}

	calculateWinner(squares) {
		if(squares[0] && squares[0] === squares[1] && squares[0] === squares[2]) {return squares[0]}
		if(squares[3] && squares[3] === squares[4] && squares[3] === squares[5]) {return squares[3]}
		if(squares[6] && squares[6] === squares[7] && squares[6] === squares[8]) {return squares[6]}
		if(squares[0] && squares[0] === squares[3] && squares[0] === squares[6]) {return squares[0]}
		if(squares[1] && squares[1] === squares[4] && squares[1] === squares[7]) {return squares[1]}
		if(squares[2] && squares[2] === squares[5] && squares[2] === squares[8]) {return squares[2]}
		if(squares[0] && squares[0] === squares[4] && squares[0] === squares[8]) {return squares[0]}
		if(squares[2] && squares[2] === squares[4] && squares[2] === squares[6]) {return squares[2]}
		return ''
	}

	resetGame() {
		this.setState({
			squares: ['', '', '', '', '', '', '', '', ''],
			player: 'X',
			winner: ''
		})
	}

	render() {
		return (
			<div style={style.container} >
				<div style={style.board} >
					<button style={style.button} onClick={this.resetGame}>Reset Game</button>
					<div style={style.row}>
						<Square check={this.state.squares[0]} setCheck={() => this.setCheck(0)} />
						<Square check={this.state.squares[1]} setCheck={() => this.setCheck(1)} />
						<Square check={this.state.squares[2]} setCheck={() => this.setCheck(2)} />
					</div>
					<div style={style.row}>
						<Square check={this.state.squares[3]} setCheck={() => this.setCheck(3)} />
						<Square check={this.state.squares[4]} setCheck={() => this.setCheck(4)} />
						<Square check={this.state.squares[5]} setCheck={() => this.setCheck(5)} />
					</div>
					<div style={style.row}>
						<Square check={this.state.squares[6]} setCheck={() => this.setCheck(6)} />
						<Square check={this.state.squares[7]} setCheck={() => this.setCheck(7)} />
						<Square check={this.state.squares[8]} setCheck={() => this.setCheck(8)} />
					</div>

				<div style={style.message}>
					{this.state.winner ? 
						<div style={style.message}>Winner: {this.state.winner}</div>
						: <div style={style.message} > Next: {this.state.player}</div>
					}
				</div>
				</div>
			</div>


		)
	}
}

class Game extends React.Component {
	render() {
		return (
			<div style={style.wrapper}>
				<Board />
			</div>
		)
	}
}



ReactDOM.render(
	<Game />,
	document.getElementById('root')
);