import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');


  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --orange-color: hsl(25, 97%, 53%);

    --white-color: hsl(0, 0%, 100%);
    --light-grey-color: hsl(217, 12%, 63%);
    --medium-grey-color: hsl(216, 12%, 54%);
    --dark-blue-color: hsl(213, 19%, 18%);
    --very-dark--blue--color: hsl(216, 12%, 8%);
  }

  body {
  
    font-size: 15px;
    font-family: 'Overpass', sans-serif;
  }
`;
