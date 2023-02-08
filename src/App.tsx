import React from 'react';
import './App.css';

import Subject from './components/Subject';
import Content from './components/Content';
import TOC from './components/TOC';

function App() {
  const contents = [
    {
      key: 1,
      link: 'https://namu.wiki/w/HTML',
      subject: 'HTML',
    },
    {
      key: 2,
      link: 'https://namu.wiki/w/CSS',
      subject: 'CSS',
    },
    {
      key: 3,
      link: 'https://namu.wiki/w/JavaScript',
      subject: 'JavaScript',
    },
  ];
  return (
    <div className="App">
      <Subject title="WEB3" subtitle="world wide web" />
      <TOC contents={contents} />
      <Content />
    </div>
  );
}

export default App;
