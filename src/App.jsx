import React from 'react';
import Intro from './components/Intro';
import QuizTypeForm from './components/QuizTypeForm';
import Quiz from './components/Quiz';
import QuizResult from './components/QuizResult';
import fetchQuizData from './utils/fetchQuizData';
import brainCharacter from './assets/brain.png';
import './App.css';

const App = function () {
  // STATE
  const [quiz, setQuiz] = React.useState(null);
  const [answers, setAnswers] = React.useState({});
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [isGameOver, setIsGameOver] = React.useState(false);

  // VALUES
  const totalQuestions = quiz?.length ?? 0;
  const question = quiz?.[currentQuestion];

  // FUNCTIONS
  const getFormData = async function (e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    if (!formData.get('category')) {
      alert('Please select a category');
      return;
    }

    setQuiz(await fetchQuizData(formData));
  };

  const resetQuiz = function () {
    setQuiz(null);
    setAnswers({});
    setCurrentQuestion(0);
    setIsGameOver(false);
  };

  const nextQuestion = function () {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsGameOver(true);
    }
  };

  //////////////////////
  return (
    <>
      <header>
        <div className="header-left">
          <img src={brainCharacter} alt="logo" />
          <h1 className="welcome-badge">Quizly</h1>
        </div>
        <p>Think · Learn · Grow</p>
      </header>

      <main className="app">
        {!quiz?.length ? (
          <>
            <Intro />
            <QuizTypeForm onSubmit={getFormData} />
          </>
        ) : !isGameOver ? (
          <Quiz
            quiz={quiz}
            resetQuiz={resetQuiz}
            totalQuestions={totalQuestions}
            question={question}
            currentQuestion={currentQuestion}
            nextQuestion={nextQuestion}
          />
        ) : (
          <QuizResult />
        )}
      </main>
    </>
  );
};

export default App;
