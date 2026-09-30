const decodeHTML = function (html) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = html;
  return textarea.value;
};

const fetchQuizData = async function (formData) {
  try {
    // Fetch API
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${formData.get('item-count')}&category=${formData.get('category')}&difficulty=easy&type=multiple`,
    );
    const data = await response.json();

    // Decode Data from API
    const decodedQuiz = data.results.map(question => ({
      ...question,
      category: decodeHTML(question.category),
      question: decodeHTML(question.question),
      correct_answer: decodeHTML(question.correct_answer),
      incorrect_answers: question.incorrect_answers.map(decodeHTML),
    }));

    return decodedQuiz;
  } catch (err) {
    console.error(err);
    alert('Something went wrong, please try again');
    return null;
  }
};

export default fetchQuizData;
