import React from 'react';

function Subject(props: { title: string, subtitle: string }) {
  const { title, subtitle } = props;
  return (
    <header>
      <h1>{title}</h1>
      {subtitle}
    </header>
  );
}

export default Subject;
