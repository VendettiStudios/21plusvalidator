import { useState } from 'react';
import s from './Questionnaire.module.css';

interface QuestionnaireProps {
  onAgeValidation: (age: number) => void;
}

const Questionnaire = ({ onAgeValidation }: QuestionnaireProps) => {
  const handleAgeValidation = (age: number) => {
    if (typeof localStorage !== 'undefined') {
      // Store the user's age in local storage
      localStorage.setItem('age', age.toString());
    }
    onAgeValidation(age);
  };

  const handleYesClick = () => {
    handleAgeValidation(21);
  };

  const handleNoClick = () => {
    alert('Sorry, you must be 21 or older to access this app.');
  };

  return (
    <div className={s.questionnairemodal}>
      <form>
        <p>Are you 21 or older?</p>
        <div className={s.buttons}>
          <button onClick={handleYesClick}>Yes</button>
          <button onClick={handleNoClick}>No</button>
        </div>
      </form>
    </div>
  );
};

export default Questionnaire;
