import { useState } from 'react';
import './Counter.css';

const Button = ({value, onClickFunc}) => {
	const handleClick = () => onClickFunc(value)
	return <p onClick={handleClick} className='Button'>Increment like +{value}</p>
}

const Counter = () => {
	
	const [count, setCount] = useState(0)
	const setCountFunc = (value) => {setCount(count + value)}

	return (
 		<div className="Counter">
			<h1>{count}</h1>
			<Button value={1} onClickFunc={setCountFunc} />
			<Button value={10} onClickFunc={setCountFunc} />
			<Button value={101} onClickFunc={setCountFunc} />
		</div>
	);
}

export default Counter;
