import { useState } from 'react';

/*To-Do:
add styling, with two h aligned boxes, 
put form in left half, put entry list in right half
*/

let styles = {
	color: {
		color4: '#007FFF',
		color1: '#17224D',
		color3: '#F5FAFA',
		color2: '#17E9E1',
	}
}
styles = { ...styles,
	rubrik: {
		display: 'flex',
		flexDirection: 'column',
		width: '80vmin'
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		height: '60vmin',
		backgroundColor: styles.color.color4,
		borderRadius: '1vmin',
	},
	left: {
		width: '20vmin',
		backgroundColor: styles.color.color2,
		color: styles.color.color1,
		borderColor: styles.color.color2,
		borderRadius: '1vmin',
		padding:'2vmin 0 4vmin 0',
	},
	right: {
		width: '50vmin',
		backgroundColor: styles.color.color2,
		color: styles.color.color1,
		borderColor: styles.color.color2,
		borderRadius: '1vmin',
		padding:'2vmin 0 4vmin 0',
		marginLeft: '4vmin',
		height: '46vmin'
	},
	h1: {
		color: styles.color.color4
	},
	p: {
		margin: '0',
		fontSize: '3vmin'
	},
	input: {
		marginTop: '2vmin',
		marginBottom: '3vmin',
		backgroundColor: styles.color.color3,
		border: 'none',
		color: styles.color.color1,
		width: '18vmin',
		fontSize: '3vmin'
	},
	button: {
		marginTop: '2vmin',
		marginBottom: '3vmin',
		backgroundColor: styles.color.color3,
		border: 'none',
		color: styles.color.color1,
		width: '18vmin',
		fontSize: '3vmin',
		color: styles.color.color4
	},
	li: {
		listStyleType: 'none',
		borderBottom: 'solid black 0.5vmin',
		borderColor: styles.color.color3,
	}

}


const Rubrik = () => {
	const [entryList, setEntryList] = useState([]);
	const [newEntry, setNewEntry] = useState({
		firstName: '',
		lastName: '',
		phone: '',
	})

	const handleChange = (event) => {
		setNewEntry({...newEntry, [event.target.name]:event.target.value})
	}

	const handleSubmit = event => {
		event.preventDefault();
		setEntryList([...entryList, newEntry]);
		setNewEntry({
			firstName: '',
			lastName: '',
			phone: ''
		})
	}
	
	return (
 		<div className="Rubrik" style={styles.rubrik}>
			<h1 style={styles.h1}>How about this Rubrik?</h1>
			<div className='Container' style={styles.container}>
				<div className='leftCol' style={styles.left}>
					<form onSubmit={handleSubmit} style={styles.form}>
							<label>
								<p style={styles.p}>First Name</p>
								<input
									style={styles.input}
									name='firstName' 
									className='RubrikInputField' 
									value={newEntry.firstName}
									type='text'
									onChange={handleChange}
								/>
							</label>
							<label>
								<p style={styles.p}>Last Name</p>
								<input
									style={styles.input}
									name='lastName' 
									className='RubrikInputField' 
									value={newEntry.lastName}
									type='text'
									onChange={handleChange}
								/>
							</label>
							<label>
								<p style={styles.p}>Phone</p>
								<input
									style={styles.input}
									name='phone' 
									className='RubrikInputField' 
									value={newEntry.phone}
									type='text'
									onChange={handleChange}
								/>
							</label>
							<br />
							<button className='RubrikInputField' style={styles.button} type='submit'>Add entry</button>
					</form>
				</div>
				<div className='rightCol' style={styles.right}>
					<div className='RubrikDisplayList'>
						<p style={styles.p}>Rubrik-a:</p>
						<ul style={{padding:'2vmin'}}>
							{entryList.map( entry => (
								<li style={styles.li}>{entry.firstName} {entry.lastName}: {entry.phone}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Rubrik;
