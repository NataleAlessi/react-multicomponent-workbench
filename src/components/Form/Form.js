import { useReducer, useState } from 'react';
import './Form.css';

const formReducer = (state, event) => {
	if (event.reset) {
		return {
			apple: '',
			count: 100,
			name: '',
			'gift-wrap': false,
		}
	}
	return {
		...state, 
		[event.name]: event.value
	}
}

const Form = () => {
	const [formData, setFormData] = useReducer(formReducer, {
		count: 100,
	});
	const [submitting, setSubmitting] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			setFormData({
				reset: true
			})	
		}, 3000);
	}

	const handleChange = event => {
		const isCheckbox = event.type === 'checkbox';
		setFormData({
			name: event.target.name,
			value: isCheckbox ? event.target.checked : event.target.value
		})
	}
	
	return (
 		<div className="Form">
			<h1>How about them apples?</h1>
			<div className='Picciol'></div>
			<form onSubmit={handleSubmit}>
				<fieldset className='Fieldset' disabled={submitting}>
					<label>
						<p>Name</p>
						<input className='InputField' name='name' value={formData.name} onChange={handleChange}/>
					</label>
					<label>
						<p>Apples</p>
						<select className='InputField' name='apple' value={formData.apple} onChange={handleChange} >
						<option value=''>--Please choose an option--</option>
						<option value='fuji'>Fuji</option>
						<option value='jonahtan'>Jonahtan</option>
						<option value='honey-crisp'>Honey crisp</option>
						</select>
					</label>
					<label>
						<p>Count</p>
						<input className='InputField' type='number' name='count' value={formData.count} step='1' onChange={handleChange}/>
					</label>
					<label>
						<p>
							<input className='InputField' type='checkbox' name='gift-wrap' checked={formData['gift-wrap']} onChange={handleChange}/>
							Gift wrap
						</p>
					</label>
					<button className='InputField' type='submit'>Submit</button>
				</fieldset>
			</form>
			{submitting &&
				<div className='Message'>
					<p>You are submitting the following:</p>
					<ul>
						{Object.entries(formData).map(([name, value])=>(
							<li key={name}><strong>{name}</strong>:{value.toString()}</li>
						))}
					</ul>
				</div>
			}
		</div>
	);
}

export default Form;
