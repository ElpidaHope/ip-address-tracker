import styled from 'styled-components';

export const StyledTracker = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: absolute;
  top: 5%;
  right: 0;
  left: 0;
  padding: 0 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h1 {
    font-size: 1.5rem;
    color: white;
  }

  .search-bar {
    width: 100%;
    display: flex;

    input {
      width: 100%;
      border-radius: 15px 0 0 15px;
      outline: none;
      border: none;
      padding-left: 20px;
      font-family: inherit;
      font-size: 1rem;
      cursor: pointer;
    }

    div {
      display: flex;
      background-color: black;
      padding: 20px;
      justify-content: center;
      border-radius: 0 15px 15px 0;
      cursor: pointer;
    }

    div:hover {
      background-color: ${({theme}) => theme.veryDarkGray};
    }
  }

  .container {
    background-color: white;
    border-radius: 15px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h4 {
      text-transform: uppercase;
      color: ${({theme}) => theme.darkGray};
      font-size: 0.7rem;
      margin-bottom: 10px;
      font-weight: 700;
    }

    h2 {
      font-size: 1.3rem;
    }
  }

  @media (min-width:768px) {
    .container {
      flex-direction: row;
      padding-left: 30px;
      padding-right: 30px;
    }

    .container {
      text-align: left;
    }

    .container div {
      flex: 25%;
    }

    .container div:not(:last-child) {
      border-right: 1px solid ${(theme) => theme.darkGray};
      padding-right: 90px;
    }

    .search-bar {
      width: 50%;
      margin: 0 auto;
    }
  }
`