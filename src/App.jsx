import styled from 'styled-components';
import './styles/App.css';
import GlobalStil from './styles/GlogalStil';
import TourSection from './components/TourSection';

const MainTitle = styled.h1`
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 400;
`

const MyButton = styled.button`
${(props) => console.log('props ===', props)}
background: ${(props) => props.$outline ? 'white' : 'black' };
color: ${(props) => props.$outline ? 'black' : 'white' };
border: 1px solid black;
padding: 5px 10px;
font-size: 17px;
cursor: pointer;
border-radius: 5px;
&:hover {
  ${(props) => props.$outline ? '#ccc' : '#3c3a3a' }; ;
}
&:active {
  background-color: tomato;
}
`
const RedBtn = styled(MyButton)`
  background-color: tomato;
  border-color: tomato;
  &:hover {
    background-color: #f7a395;
  }
`

export default function App() {
  console.log('App susikure');
  return (
    <div className='App container'>
      <GlobalStil />
      <MainTitle>Hello, world!</MainTitle>
      <hr />
      <TourSection />
      {/* <MyButton>Click Me</MyButton> */}
      {/* <MyButton $outline>Outline btn</MyButton> */}
      {/* <RedBtn $outline>Tomato btn</RedBtn> */}
      {/* <RedBtn as={'a'} href='#kazkur'>I am link btn</RedBtn> */}
    </div>
  );
}
