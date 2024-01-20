import styled from "styled-components"


const Ota=styled.div`
    width: 540px;
    height: 128px;
    background: ${props=>props.bg};
    display:flex;
    justify-content:end;
    align-items:center;
    padding:30px;
    border-radius:10px;
    margin-bottom:24px;
`
const Son=styled.h1`
    color:${props=>props.bg};
    font-size:56px;
    font-weight:700px;
`


function Mainn(count) {
  const ranglar=count.rang;
  return (
    <Ota bg={ranglar.hed}>
        <Son bg={ranglar.calc}>399.981</Son>
    </Ota>
  )
}

export default Mainn