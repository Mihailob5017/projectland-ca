import React, { useState } from 'react';
import './App.css';

// Axios
import axios from 'axios';

// Components
import Input from './components/input/input.component';
import QuestionForm from './components/question-form/question-form.component';
import Question from './components/question/question.component';

// Helper Obj
const surveyObject = { title: '', deadline: '', questions: [] };

// Code
const App = () => {
	const [survey, setSurvey] = useState(surveyObject);

	const handleSubmit = async () => {
		try {
			const results = await axios.post(
				'http://projectest.xyz/api/surveys',
				survey
			);
			alert(results.data.message);
			setSurvey(surveyObject);
		} catch (error) {
			console.error(error.message);
			alert('Doslo je do greske');
			setSurvey(surveyObject);
		}
	};

	const setSurveyHandler = (name, value) => {
		let newValue;
		if (name === 'duplicate-question') {
			newValue = Object.assign({}, survey, {
				questions: [
					...survey.questions,
					survey.questions[survey.questions.length - 1],
				],
			});
		} else if (name === 'question') {
			newValue = Object.assign({}, survey, {
				questions: [...survey.questions, value],
			});
		} else {
			newValue = Object.assign({}, survey, { [name]: value });
		}
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
			<div className='app-body'>
				<label className='questions-label'>Survey Questions:</label>
				{survey['questions'].map((question, i) => (
					<Question key={i} num={i + 1} {...question} />
				))}
			</div>
			<div className='app-questions'>
				<QuestionForm
					addQuestion={(value) => setSurveyHandler('question', value)}
					doesPrevQuesionExist={survey.questions.length > 0}
					duplicateQuestion={() => setSurveyHandler('duplicate-question')}
				/>
			</div>{' '}
			<button
				onClick={handleSubmit}
				disabled={
					survey.title !== '' &&
					survey.deadline !== '' &&
					survey.questions.length > 0
						? false
						: true
				}
				className={`submit-btn ${
					survey.title !== '' &&
					survey.deadline !== '' &&
					survey.questions.length > 0
						? ''
						: 'disabled-btn'
				}`}
			>
				Submit Form
			</button>
		</div>
	);
};
export default App;
