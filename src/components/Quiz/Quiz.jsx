import React from 'react'
import { useState } from 'react';
import './Quiz.css'
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const Quiz = () => {
    const questions = [
      {
        questionText: "select your age range",
        answerOptions: [
          { answerText: "0-12", isCorrect: false },
          { answerText: "13-17", isCorrect: false},
          { answerText: "18-40", isCorrect: false },
          { answerText: "40+", isCorrect: false },
        ],
      },
      {
        questionText: "what you feeling?",
        answerOptions: [
          { answerText: "Physical Pain", isCorrect: false },
          { answerText: "Headache", isCorrect: false },
          { answerText: "Fever", isCorrect: false },
          { answerText: "Other", isCorrect: false },
        ],
      },
      {
        questionText: "Where do you feel pain?",
        answerOptions: [
          { answerText: "arms or legs", isCorrect: false },
          { answerText: "ear", isCorrect: false},
          { answerText: "mouth", isCorrect: false },
          { answerText: "chest", isCorrect: false },
        ],
      },
      {
        questionText: "Are you on any medications?",
        answerOptions: [
          { answerText: "yes", isCorrect: false },
          { answerText: "no", isCorrect: false},
          
        ],
      },
      
      
    ];
    	const [currentQuestion, setCurrentQuestion] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [score, setScore] = useState(0);

      const handleAnswerOptionClick = (isCorrect) => {
        isCorrect =true;
        if (isCorrect) {
          setScore(score + 1);
          console.log(score);
        }

        if(score>0){
          console.log("doc1")
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