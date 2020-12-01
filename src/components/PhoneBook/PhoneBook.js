import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const PhoneBookForm = ({ addEntryToPhoneBook }) => {
	const [editingContact, setEditingContact] = useState({
		userFirstName: 'Coder',
		userLastName: 'Byte',
		userPhone: '8885559999'
	});

	const handleChange = (e) => {
		const target = e.target
		const value = target.value
		const name = target.name

		setEditingContact({...editingContact, [name]: value})
	};

	const handleAddUser = () => {
		addEntryToPhoneBook(editingContact)
		setEditingContact({
			userFirstName: '',
			userLastName: '',
			userPhone: ''
		})
	};

	return (
		<form onSubmit={e => { handleAddUser(); e.preventDefault()}} >
			<label>First name:</label>
			<br />
			<input
				className='userFirstName'
				name='userFirstName'
				type='text'
				value={editingContact.userFirstName}
				onChange={handleChange}
			/>
			<br />
			<input
				className='userLastName'
				name='userLastName'
				type='text'
				value={editingContact.userLastName}
				onChange={handleChange}
			/>
			<br />
			<input
				className='userPhone'
				name='userPhone'
				type='text'
				value={editingContact.userPhone}
				onChange={handleChange}
			/>
			<br />
			<input
				className='submitButton'
				type='submit'
				value='Add User'
			/>
		</form>
	);
};

const InformationTable = ({contacts}) => {
	console.log(contacts);
	return (
		<table className='InformationTable'>
			<thead>
				<tr>
					<th>First name</th>
					<th>Last name</th>
					<th>Phone</th>
				</tr>
			</thead>
			<tbody>
				{contacts.map(contact =>
					<tr>
						<th>First name</th>
						<th>Last name</th>
						<th>Phone</th>
					</tr>
				)}
			</tbody>
		</table>
	);
};


const PhoneBook = (props) => {
	const [contacts, setContacts] = useState([]);

	const addEntryToPhoneBook = (contact) => {
		setContacts([...contacts, contact])
	};

	return (
		<section>
			<PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
			<InformationTable contacts={contacts} />
		</section>
	);
};


export default PhoneBook;


// ReactDOM.render(
// 	<PhoneBook />,
// 	document.getElementById('root')
// )