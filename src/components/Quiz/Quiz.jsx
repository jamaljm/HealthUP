import React from 'react'
import { useState } from 'react';
import './Quiz.css'
import { Link } from "react-router-dom";

const Quiz = () => {
    const questions = [
      {
        questionText: "what you feeling?",
        answerOptions: [
          { answerText: "Physical Pain", isCorrect: false },
          { answerText: "Headache", isCorrect: false },
          { answerText: "Fever", isCorrect: true },
          { answerText: "Other", isCorrect: false },
        ],
      },
      {
        questionText: "Where do you feel pain?",
        answerOptions: [
          { answerText: "dsxf ", isCorrect: false },
          { answerText: "Elon Musk", isCorrect: true },
          { answerText: "Bill Gates", isCorrect: false },
          { answerText: "Tony Stark", isCorrect: false },
        ],
      },
      {
        questionText: "The iPhone was created by which company?",
        answerOptions: [
          { answerText: "Apple", isCorrect: true },
          { answerText: "Intel", isCorrect: false },
          { answerText: "Amazon", isCorrect: false },
          { answerText: "Microsoft", isCorrect: false },
        ],
      },
      {
        questionText: "How many Harry Potter books are there?",
        answerOptions: [
          { answerText: "1", isCorrect: false },
          { answerText: "4", isCorrect: false },
          { answerText: "6", isCorrect: false },
          { answerText: "7", isCorrect: true },
        ],
      },
    ];
    	const [currentQuestion, setCurrentQuestion] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [score, setScore] = useState(0);

      const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
          setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setShowScore(true);
        }
      };
    
    
  return (
    <>
      {showScore ? (
              <Link to="/doctorcard">
                  <div className='submit-button-doctor'>
                        <button className='submit-button-doctor'>Consult best doctor</button>
                  </div>
       </Link>
      ) : (
                  <>
                      <div className="question-sectioncard">
          <div className="question-section">
            <div className="question-count">
              <span>Consult a doctor</span>
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
                          </div>
                          </div>
        </>
      )}
    </>
  );
}

export default Quiz