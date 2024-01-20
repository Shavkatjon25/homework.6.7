import styled from "styled-components"
import Mainn from "./Mainn"
import Footer from "./Footer"
import { useEffect, useState } from "react"

const Continer=styled.div`
  width:540px;
  height:708px;
  margin-left:auto;
  margin-right:auto;
  padding-top:30px;
`
const Ekran=styled.div`
  width:100%;
  height:100%;
  background: ${props=>props.bg};
`


const Calc=styled.h2`
    font-weight:700px;
    font-size:32px;
    color:${props=> props.bg};
`
const Theme=styled.h3`
    font-weight:700px;
    font-size:12px;
    margin-top:20px;
    color:${props=> props.bg};
    
`
const Hed=styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:32px;
`
const Mod=styled.div`
    width:16px;
    height:16px;
    background: ${props=> props.bg};
    border-radius:16px;

`
const Dark=styled.div`
    display:flex;
    background: ${props=>props.bg};
    border-radius: 8px;
`
const Darmok=styled.div`
    display:flex;
    gap:26px;
    align-items:center;
`
const Modd=styled.div`
    display:flex;
    flex-direction:column;
`
const Sonlar=styled.div`
    display: flex;
    gap: 12px;
    color:${props=> props.bg};
 `


function App() {
  const [rqm , ozgartirish]=useState(0);

  const [count, setCoumt]= useState([
    {
      calc: `#FFF`,
      raqam: `#434A59`,
      orqaFon:`#3A4663`,
      raqamOrqasi:`#242D44`,
      btn:`#EAE3DC`,
      teng:`#D03F2F`,
      del:`#647198`,
      hed:`#181F33`,
      o:`#C85402`,
      ooo:`#242D44`
    },
  ]);

  const ranlar=[
    {
      calc: `#FFF`,
      raqam: `#434A59`,
      orqaFon:`#3A4663`,
      raqamOrqasi:`#242D44`,
      btn:`#EAE3DC`,
      teng:`#D03F2F`,
      del:`#647198`,
      hed:`#181F33`,
      o:`#C85402`,
      ooo:`#242D44`
    },
    {
      calc: `#36362C`,
      raqam: `#36362C`,
      orqaFon:`#E6E6E6`,
      raqamOrqasi:`#D2CDCD`,
      btn:`#E5E4E1`,
      teng:`#C85402`,
      del:`#378187`,
      hed:`#EEE`,
      o:`#C85402`,
      ooo:`#D2CDCD`
    },
    {
      calc: `#FFE53D`,
      raqam: `#FFE53D`,
      orqaFon:`#17062A`,
      raqamOrqasi:`#1E0936`,
      btn:`#331C4D`,
      teng:`#00DED0`,
      del:`#56077C`,
      hed:`#1E0936`,
      o:`#00DED0`,
      ooo:`#1E0936`
    },
  ]

useEffect(()=>{
  setCoumt([ranlar[rqm]])
}, [rqm])


  return (
    <Ekran bg={count[0].orqaFon}>
      <Continer>
      <Hed>
        <Calc bg={count[0].calc}>calc</Calc>
        <Darmok>
            <Theme bg={count[0].calc}>THEME</Theme>
            <Modd>
                <Sonlar bg={count[0].calc}>
                    <p>1 </p>
                    <p>2</p>
                    <p>3</p>
                </Sonlar>
                <Dark bg={count[0].ooo} >
                    <Mod bg={rqm == 0 ?  count[0].o: ""}  onClick={()=>{ozgartirish(0)}}></Mod>
                    <Mod bg={ rqm == 1 ? count[0].o: ""} onClick={()=>{ozgartirish(1)}}></Mod>
                    <Mod bg={rqm == 2 ? count[0].o: ""} onClick={()=>{ozgartirish(2)}}></Mod>
                </Dark>
            </Modd>
        </Darmok>
    </Hed>
        <Mainn rang={count[0]}></Mainn>
        <Footer rang={count[0]}/>
      </Continer>
    </Ekran>
  )
}
export default App