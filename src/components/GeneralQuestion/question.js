import React, { useState } from 'react';
import './question.css';
import Popup from 'reactjs-popup';

const Question = () => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);
  // const [isEmpty,setEmpty] = useState(false)

  const onChangeAnswer = (e) => {
    const inputText = e.target.value;
    const numberOfWords = inputText.trim().split(/\s+/).filter(Boolean).length;
    
    if (numberOfWords <= 300) {
      setAnswer(inputText);
      setError(false);
    } else {
      setError(true);
    }
  };

  const onClickClearAll = () => {
    setAnswer('');
    setError(false);
  };


  const onClickSubmit = ()=>{
    if (answer!==''){
      alert("Thank you!.. Your test is submitted . Wait for your results")
    }
    else{
      alert("Answer canot be empty ,please enter your answer..")
    }
    
  }

  return (
    <div>
      <a href="#generalQuestion">Open</a>
      <div id="generalQuestion">
        <div className="pop-content">
          <h1 className="question_heading">Describe about your favourite politician/actor/person/any topic in few words...</h1>
          <textarea
            placeholder="Please enter your thoughts here in 300 words...."
            className="textarea_element"
            rows={5}
            cols={40}
            value={answer}
            onChange={onChangeAnswer}
          ></textarea>
          {error && (
            <p style={{ color: 'red', margin: '10px' }}>Maximum limit of words is exceeded....</p>
          )}
          <div className="buttons_container">
            <button type="button" className="clear_all_button" onClick={onClickClearAll}>
              Clear All
            </button>
           
            <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }}>
              {/* <button className="close_button">
                <a href="#w">Close</a>
              </button> */}
              <button type="button" class="btn btn-danger"><a href="#">Close</a></button>
              <button
                type="button"
                className="close_button"
                style={{ backgroundColor: 'green', color: 'white' }}
                onClick={onClickSubmit}
              >
                Submit
              </button>
              

            
              


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
