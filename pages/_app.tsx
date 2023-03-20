import '@/styles/globals.css'
// app.tsx
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Questionnaire from './components/common/Questionnaire';

const App = ({ Component, pageProps }: AppProps) => {
  const [age, setAge] = useState<number | null>(null);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if localStorage is available
      const ageString = localStorage.getItem('age');
      if (ageString !== null) {
        setAge(parseInt(ageString, 10));
      } else {
        setShowQuestionnaire(true);
      }
    }
  }, []);

  const handleAgeValidation = (validatedAge: number) => {
    setAge(validatedAge);
    setShowQuestionnaire(false);
  };

  return (
    <>
      <Component {...pageProps} />
      {showQuestionnaire && <Questionnaire onAgeValidation={handleAgeValidation} />}
    </>
  );
};

export default App;
