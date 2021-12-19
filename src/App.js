import React, { useState } from 'react';
import './App.css';

// Components
import Input from './components/input/input.component';

// Helper Obj
const surveyObject = { title: '', deadline: '', questions: [] };

// Code
const App = () => {
	const [survey, setSurvey] = useState(surveyObject);

	const setSurveyHandler = (name, value) => {
		const newValue = Object.assign({}, survey, { [name]: value });
		setSurvey(newValue);
	};

	return (
		<div className='app-container'>
			<h1 className='app-title'>Projectland Survey</h1>
			<div className='app-info'>
				<Input
					name='title'
					value={survey['title']}
					handleChange={setSurveyHandler}
					label='Survey Title'
				/>
				<Input
					type='date'
					name='deadline'
					value={survey['deadline']}
					handleChange={setSurveyHandler}
					label='Survey Deadline'
				/>
			</div>
		</div>
	);
};
export default App;
