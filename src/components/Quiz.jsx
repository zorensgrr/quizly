import React from 'react';
import QuizResult from './QuizResult';
import { categories } from '../categories';

const shuffleAnswers = function (question) {
  return [question.correct_answer, ...question.incorrect_answers].sort(
    () => Math.random() - 0.5,
  );
};

const Quiz = function (props) {
  // STATE
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  // VALUES
  const totalQuestions = props.quiz.length;
  const question = props.quiz[currentQuestion];

  const category = categories.find(obj => obj.title === props.quiz[0].category);

  const answers = shuffleAnswers(question);

  const isQuizOver = currentQuestion + 1 === totalQuestions ? true : false;

  // PROGRESS
  const questionNumber = currentQuestion + 1;
  const progress = (questionNumber / totalQuestions) * 100;

  // HANDLER
  const nextQuestion = function (e) {
    e.preventDefault();

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  return (
    <section className="quiz">
      <form onSubmit={nextQuestion} className="quiz-form">
        <div className="quiz-header">
          <div className="header-left">
            <img src={category.image} alt={category.title} />
            <h3>{category.title}</h3>
          </div>

          <div className="header-right">
            <button
              onClick={props.resetQuiz}
              type="button"
              className="close-button"
            >
              ⓧ
            </button>
          </div>
        </div>

        <div className="quiz-progress">
          <div className="progress-info">
            <span>
              Question {questionNumber} of {totalQuestions}
            </span>

            <span>{Math.round(progress)}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <fieldset>
          <legend className="quiz-question">{question.question}</legend>

          <div className="answers-container">
            {answers.map((answer, index) => (
              <label className="answer-option" key={answer}>
                <input type="radio" name="answer" value={answer} required />

                <span className="answer-letter">
                  {String.fromCharCode(65 + index)}
                </span>

                <span className="answer-text">{answer}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="quiz-footer">
          <button className="next-button">
            {currentQuestion === totalQuestions - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Quiz;
