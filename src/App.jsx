import styled from 'styled-components';
import './styles/App.css';

const MainTitle = styled.h1`
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 400;
`

const MyButton = styled.button`
${(props) => console.log('props ===', props)}
background: black;
color: white;
border: 1px solid black;
padding: 5px 10px;
font-size: 17px;
cursor: pointer;
border-radius: 5px;
&:hover {
  background-color: #3c3a3a;
}
&:active {
  background-color: tomato;
}
`

export default function App() {
  console.log('App susikure');
  return (
    <div className='App container'>
      <MainTitle>Hello, world!</MainTitle>
      <hr />
      <MyButton>Click Me</MyButton>
      <MyButton $outline>Outline btn</MyButton>
    </div>
  );
}
