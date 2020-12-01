import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

test('Counter renders', () => {
	const {container} = render(
		<Counter />
		)
	expect(container.textContent[0]).toBe('0')
	expect(container.textContent).toBe('0Increment like +1Increment like +10Increment like +101')

	const button1 = screen.getByText('Increment like +1')
	fireEvent.click(button1)
	expect(container.textContent.slice(0,1)).toBe('1')
	const button2 = screen.getByText('Increment like +10')
	fireEvent.click(button2)
	expect(container.textContent.slice(0,2)).toBe('11')
	const button3 = screen.getByText('Increment like +101')
	fireEvent.click(button3)
	expect(container.textContent.slice(0,3)).toBe('112')
	fireEvent.click(button1)
	expect(container.textContent.slice(0,3)).toBe('113')
})