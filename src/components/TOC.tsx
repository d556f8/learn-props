import React from 'react';

interface Technology {
  link: string;
  subject: string;
}

function TOC(props: { contents: Technology[] }) {
  const { contents } = props;
  return (
    <nav>
      <ul>
        {contents.map((content) => (
          <li key={content.subject}>
            <a href={content.link}>{content.subject}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TOC;
