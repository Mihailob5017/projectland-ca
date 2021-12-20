import React, { useState } from 'react';
import './App.css';

// Components
import Input from './components/input/input.component';
import Question from './components/question/question.component';

// Helper Obj
const surveyObject = { title: '', deadline: '', questions: [] };

// Code
const App = () => {
	const [survey, setSurvey] = useState(surveyObject);

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
				{survey['questions'].map((question, i) => {
					return (
						<div key={i} className='single-question-info'>
							<label className='single-q-label'>
								<label className='text-bold'>{i + 1 + '. '}</label>
								{question.title}
							</label>
							<label className='single-a-label'>
								<label className='text-regular'>Answers:</label>
								{question.answers.map((answer) => `  "${answer}"  `)}
							</label>
						</div>
					);
				})}
			</div>
			<div className='app-questions'>
				<Question
					addQuestion={(value) => setSurveyHandler('question', value)}
					doesPrevQuesionExist={survey.questions.length > 0}
					duplicateQuestion={() => setSurveyHandler('duplicate-question')}
				/>
			</div>
		</div>
	);
};
export default App;
