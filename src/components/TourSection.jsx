
import styled from 'styled-components'
import Grid from './styled/GridStyled'


const Card = styled.div`
  border: 1px solid #000;
  box-shadow: ${(props) => props.$special ? '5px 5px 5px gray' : 'none'}
`
const Image = styled.img`
width: 100%;
`
const InfoBlock = styled.div`
padding: 20px 15px;
background-color: #fff;
`
const CardTitle = styled.h3`
font-size: 18px;`
const CardDate = styled.p`
color: grey; `
const CardText = styled.p`
line-height: 1.5;`

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

export default function TourSection() {
  return (
    <div>
      <MainTitle>Tour Section</MainTitle>
      <Grid $nbOfColums='4'>
<Card>
  <Image src='https://www.w3schools.com/w3images/newyork.jpg' />
  <InfoBlock>
<CardTitle>New York</CardTitle>
<CardDate>Frti 27 Now 2016</CardDate>
<CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, sint?</CardText>
<MyButton>Buy Now</MyButton>
  </InfoBlock>
</Card>
<Card $special>
  <Image src='https://www.w3schools.com/w3images/newyork.jpg' />
  <InfoBlock>
<CardTitle>New York</CardTitle>
<CardDate>Frti 27 Now 2016</CardDate>
<CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, sint?</CardText>
<MyButton>Buy Now</MyButton>
  </InfoBlock>
</Card>
      </Grid>

    </div>
  )
}
