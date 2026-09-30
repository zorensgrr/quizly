import CategoryCard from './CategoryCard';
import { categories } from '../categories.js';

const QuizTypeForm = function (props) {
  // NUMBER OF ITEMS
  const itemCounts = [5, 10, 20, 30];

  // ELEMENTS
  const cardElements = categories.map(category => (
    <CategoryCard key={category.id} {...category} />
  ));

  const numberChoicesEl = itemCounts.map(count => (
    <div className="item-option" key={count}>
      <input
        type="radio"
        id={`items-${count}`}
        name="item-count"
        value={count}
        defaultChecked={count === 5}
      />
      <label htmlFor={`items-${count}`}>{count}</label>
    </div>
  ));

  return (
    <section className="form">
      <form onSubmit={props.onSubmit} className="quiz-type-form">
        <fieldset>
          <legend>Choose a category</legend>
          <div className="category-container">{cardElements}</div>
        </fieldset>
        <div className="form-bottom">
          <fieldset>
            <legend>Number of items</legend>
            <div className="items-container">{numberChoicesEl}</div>
          </fieldset>
          <button>Start Quiz</button>
        </div>
      </form>
    </section>
  );
};

export default QuizTypeForm;
