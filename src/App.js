import React, { useState } from 'react';
import getQuestions from './api';
import QuestionsCard from './questionsCard';

function App() {

  const [questions, setQuestions] = useState([]);
  const [isGameOver, setGameOver] = useState(false);
  const [loading, setloading] = useState(false);
  const [count, setCount] = useState(0);
  const [userAns, setUserAns] = useState();


  const start = async () => {
    setloading(true);
    const newQuestion = await getQuestions();

    console.log(newQuestion);

    const ans = newQuestion.results.map(qs => ({
      ...qs,
      answers: [ ...qs.incorrect_answers, qs.correct_answer ].sort(() => Math.random() - 0.5)
    }))

    setQuestions(ans);
    console.log(ans);

    setGameOver(false);
    setloading(false);
  }

  const nextQuestion = () => {

  }

  const checkAns = (ans, index) => {
    
    if (questions[index].correct_answer === ans) {
      console.log('true');
      setUserAns(ans);
    } else {
      console.log('false');
      setUserAns(ans);
    }

  }
  

  return (
    <div className="App">
      <h1>
        Who wants to be a developer?
      </h1>

      {loading ? <p>Loading game...</p> : <button onClick={start}>start</button>}

      {!isGameOver ? <QuestionsCard userAns={userAns} count={count} checkAns={checkAns} questions={questions} /> : null}

      <button onClick={nextQuestion}>Next quesion</button>

    </div>
  );
}

export default App;
