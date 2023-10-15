import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Field from './components/field';
import Languages from './components/languages';
import Translate from './components/translate';


function App() {
  const [language, setLanguage] = useState('es');
  const [text, setText] = useState('');
  return (
    <div className="App">
      <Field onChange={setText}/>
      <Languages language={language} onLanguageChange={setLanguage}/>
      <hr/>
      <Translate text={text} language={language}/>
    </div>
  );
}

export default App;
