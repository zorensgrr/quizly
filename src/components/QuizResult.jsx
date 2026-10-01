import { categories } from '../categories';
import trophyAnimation from '../assets/trophy.svg';
import vincent from '../assets/vincent.jpg';

const QuizResult = function (props) {
  // VALUES
  const category = categories.find(obj => obj.title === props.quiz[0].category);

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
        <h4>di na importante kung tama o mali ka, ang mahalaga tinapos mo</h4>
        <img src={vincent} alt="si vincent" />
      </div>
    </section>
  );
};

export default QuizResult;
