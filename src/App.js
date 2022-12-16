import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const ChangeValueButton = styled.button`
  display: inline-flex;

  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 36px;
  border: 0;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  margin: 1rem;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span></span>
        <ButtonWrapper>
          <ChangeValueButton>+</ChangeValueButton>
          <ChangeValueButton>-</ChangeValueButton>
        </ButtonWrapper>
      </header>
    </div>
  );
}

export default App;
