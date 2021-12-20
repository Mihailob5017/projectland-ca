import React from 'react';
import './question.style.css';

const QuestionComponent = ({ num, answers, title }) => {
	return (
		<div className='single-question-info'>
			<label className='single-q-label'>
				<label className='text-bold'>{num + '. '}</label>
				{title}
			</label>
			<label className='single-a-label'>
				<label className='text-regular'>Answers:</label>
				{answers.map((answer) => `  "${answer}"  `)}
			</label>
		</div>
	);
};

export default QuestionComponent;
