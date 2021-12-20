import React, { useState } from 'react';
import './question-form.style.css';

// Code
const QuestionFormComponent = ({
	addQuestion,
	duplicateQuestion,
	doesPrevQuesionExist,
}) => {
	const [answers, setAnswers] = useState([]);
	const [question, setQuestion] = useState('');
	const [answerInput, setAnswerInput] = useState('');

	const addAnswer = () => {
		const newAnswers = [...answers, answerInput];
		setAnswers(newAnswers);
		setAnswerInput('');
	};

	const handleSubmit = () => {
		addQuestion({
			title: question,
			answers: [...answers],
		});
		setAnswers([]);
		setQuestion('');
	};

	return (
		<div className='question-wrapper'>
			<div className='qustion-form'>
				<label className='question-label'>Question:</label>
				<input
					type='text'
					value={question}
					onChange={(e) => setQuestion(e.target.value)}
					className='question-input'
				></input>
			</div>
			<div className='answers-form'>
				<div className='answers-input'>
					{answers.length < 5 ? (
						<>
							<input
								value={answerInput}
								onChange={(e) => setAnswerInput(e.target.value)}
								placeholder='Answer'
								type='text'
								className='answer-form'
							/>
							<button onClick={addAnswer} className='answer-submit'>
								Add Answer
							</button>
						</>
					) : (
						<></>
					)}
				</div>
				<label className='answer-label'>Answers:</label>
				{answers.map((el, i) => (
					<label key={i} className='single-answer'>
						{el}
					</label>
				))}
			</div>

			<div className='submit-div'>
				{answers.length >= 1 && question !== '' ? (
					<button onClick={handleSubmit} className='submit-question'>
						Add to Survey
					</button>
				) : (
					<></>
				)}
				{doesPrevQuesionExist ? (
					<button onClick={duplicateQuestion} className='submit-question'>
						Duplicate Last Question
					</button>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default QuestionFormComponent;
