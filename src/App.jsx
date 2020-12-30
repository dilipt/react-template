import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export function App() {
  return (
    <Container>
      <header>
        <h1>Frontend Template</h1>
      </header>
      <article>
        Feel free to add some content here.
      </article>
    </Container>
  );
}
