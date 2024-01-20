import styled from "styled-components"

const Grid=styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    padding:32px;
    gap:10px;
    background: ${props=> props.bg};
    border-radius:10px;
`
const Raqam=styled.h2`
    font-size:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    background: ${props=>props.btn};
    color:${props=>props.bg};
    border-radius:10px;
    font-weight:700px;
    cursor: pointer;
    &:hover{
      opacity:0.8;
    }
`
const Raqam2=styled.h2`
    font-size:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    background: ${props=>props.bg};
    color:white;
    border-radius:10px;
    font-weight:700px;
    grid-column:span 2;
    cursor: pointer;
    &:hover{
      opacity:0.8;
    }
`

function Footer(count) {
  const ranglar=count.rang;
  return (
    <Grid bg={ranglar.raqamOrqasi}>
        <Raqam bg={ranglar.raqam} btn={ranglar.btn}>7</Raqam>
        <Raqam bg={ranglar.raqam} btn={ranglar.btn}>8</Raqam>
        <Raqam bg={ranglar.raqam} btn={ranglar.btn}>9</Raqam>
        <Raqam btn={ranglar.del} bg="white">DEL</Raqam>
        <Raqam bg={ranglar.raqam} btn={ranglar.btn}>4</Raqam>
        <Raqam bg={ranglar.raqam} btn={ranglar.btn}>5</Raqam>
        <Raqam bg={ranglar.raqam} btn={ranglar.btn}>6</Raqam>
        <Raqam bg={ranglar.raqam} btn={ranglar.btn}>+</Raqam>
        <Raqam bg={ranglar.raqam} btn={ranglar.btn}>1</Raqam>
        <Raqam bg={ranglar.raqam} btn={ranglar.btn}>2</Raqam>
        <Raqam bg={ranglar.raqam} btn={ranglar.btn}>3</Raqam>
        <Raqam bg={ranglar.raqam} btn={ranglar.btn}>-</Raqam>
        <Raqam bg={ranglar.raqam} btn={ranglar.btn}>.</Raqam>
        <Raqam bg={ranglar.raqam} btn={ranglar.btn}>0</Raqam>
        <Raqam bg={ranglar.raqam} btn={ranglar.btn}>/</Raqam>
        <Raqam bg={ranglar.raqam} btn={ranglar.btn}>x</Raqam>
        <Raqam2 bg={ranglar.del}>RESET</Raqam2>
        <Raqam2 bg={ranglar.teng}>=</Raqam2>
    </Grid>
  )
}

export default Footer