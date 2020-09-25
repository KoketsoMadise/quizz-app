import React from 'react';
import './styles.css';

function QuestionsCard(props) {
    const { questions, count, checkAns, userAns } = props;
    return (
        <div>
            {questions.map((item, index) => {
                if(index === count) {
                    return (
                        <div key={item.question}>
                            <h1 dangerouslySetInnerHTML={{__html: item.question}} />
                            <ul>
                            {item.answers.map(ans => (
                               <li key={ans} >
                                
                                <button className={userAns === ans ? 'correct' : ''} onClick={() => checkAns(ans, index)}>
                                    <span dangerouslySetInnerHTML={{__html: ans}} />
                                </button>
                               </li>
                            ))}
                            </ul>
                        </div>
                    )
                } else {
                    return null;
                }
            })}
            
        </div>
    )
}

export default QuestionsCard;
