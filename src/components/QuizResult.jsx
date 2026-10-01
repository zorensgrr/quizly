import { categories } from '../categories';
import trophyAnimation from '../assets/trophy.svg';
import correctIcon from '../assets/correct.png';
import inCorrectIcon from '../assets/incorrect.png';

const QuizResult = function (props) {
  // VALUES
  const category = categories.find(obj => obj.title === props.quiz[0].category);

  // CALCULATE SCORE
  let score = 0;

  props.quiz.forEach((question, index) => {
    if (props.answers[index] === question.correct_answer) score++;
  });

  console.log(score);

  return (
    <section className="result">
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

      <div className="results-content">
        <img className="result-trophy" src={trophyAnimation} alt="trophy" />
        <h4>Quiz Complete!</h4>
        <span>You scored</span>
        <p className="total-score">
          {score} / {props.totalQuestions}
        </p>
        <div className="score-breakdown-container">
          <div className="correct">
            <div className="icon-container">
              <img src={correctIcon} alt="check" />
              Correct
            </div>
            <p>{score}</p>
          </div>
          <div className="incorrect">
            <div className="icon-container">
              <img src={inCorrectIcon} alt="check" />
              Incorrect
            </div>
            <p>{Math.abs(score - props.totalQuestions)}</p>
          </div>
        </div>
      </div>
      <button onClick={props.tryAgain} className="try-again">
        Try again
      </button>
      <button onClick={props.resetQuiz} className="new-category">
        New category
      </button>
    </section>
  );
};

export default QuizResult;
