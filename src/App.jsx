import React from 'react';
import fetchQuizData from './utils/fetchQuizData';
import Intro from './components/Intro';
import QuizTypeForm from './components/QuizTypeForm';
import Quiz from './components/Quiz';
import brainCharacter from './assets/brain.png';
import './App.css';

const App = function () {
  // STATE
  const [quiz, setQuiz] = React.useState(null);
  const [answers, setAnswers] = React.useState({});

  // HANDLER FUNCTIONS
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
  };

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
        ) : (
          <Quiz quiz={quiz} resetQuiz={resetQuiz} />
        )}
      </main>
    </>
  );
};

export default App;
