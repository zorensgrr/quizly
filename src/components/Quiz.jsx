import React from 'react';
import { categories } from '../categories';

const Quiz = function (props) {
  // FUNCTIONS
  const shuffleAnswers = function (question) {
    return [question.correct_answer, ...question.incorrect_answers].sort(
      () => Math.random() - 0.5,
    );
  };

  const nextQuestion = function (e) {
    e.preventDefault();

    props.nextQuestion();
  };

  // VALUES
  const category = categories.find(obj => obj.title === props.quiz[0].category);
  const answers = shuffleAnswers(props.question);

  // PROGRESS
  const questionNumber = props.currentQuestion + 1;
  const progress = (questionNumber / props.totalQuestions) * 100;

  //////////////////////
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
              Question {questionNumber} of {props.totalQuestions}
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
          <legend className="quiz-question">{props.question.question}</legend>

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
            {props.currentQuestion === props.totalQuestions - 1
              ? 'Finish'
              : 'Next'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Quiz;
