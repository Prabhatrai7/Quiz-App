import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of India?',
			answerOptions: [
				{ answerText: 'New Delhi', isCorrect: true },
				{ answerText: 'Mumbai', isCorrect: false },
				{ answerText: 'Chennai', isCorrect: false },
				{ answerText: 'Kolkata', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many side does cube has?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '4', isCorrect: true },
			],
		},
		{
			questionText: 'National Sports of India?',
			answerOptions: [
				{ answerText: 'Cricket', isCorrect: false },
				{ answerText: 'Football', isCorrect: false },
				{ answerText: 'Hockey', isCorrect: true },
				{ answerText: 'Golf', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleButtonClick = (isCorrect) => {		
		if (isCorrect === true) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answer) => (<button onClick={() => handleButtonClick(answer.isCorrect)}>{answer.answerText}</button>))}
					</div>
				</>
			)}
		</div>
	);
}
