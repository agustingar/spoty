import styled from "styled-components";


const BodyContainer = styled.div`
flex:0.8;
background: linear-gradient(#003427, #000);
color:#fff;
height: 100vh;
padding: 30px;
overflow-y:overlay;
&::-webkit-scrollbar{
    display: none;
}
`

const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom:1rem;;

`

const HeaderLeft = styled.div`
display: flex;
align-items: center;
flex: 0.5;
min-width: 1rem;
background-color: #fff;
color: #181818;
border-radius: 2rem;
padding: 10px;
height: 1.4rem;     
& input{
    border: none;
    width: 100%;
    
    ;
}

`

const HeaderRight = styled.div`
display: flex;
align-items: center;
padding: 1rem;
& h4{
    margin-left: 1rem;
}
`
const Info = styled.div`
display: flex;

& img{
    width: 30vh;
    margin: 0 20px;
    box-shadow: 0 4px 60px #000;
}
`
const InfoText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
& h1{
    margin-bottom: 1rem -1rem;
}
`
const Songs = styled.div`
margin: 1rem ;
`
const Icons = styled.div`
display: flex;
align-items: center;
margin: 1rem 0rem;
& .css-i4bv87-MuiSvgIcon-root{
    margin-right: 1rem;
}
& .playButton:hover{
transform: scale(1.2);
}
.playButton{
    transition: transform 200ms ease-in-out;

}


`

const SongRowContainer = styled.div`
display: flex;
align-items: center;
margin-left: rem;
&:hover{
    cursor: pointer;
    background-color: #fcfcfc;
    opacity: 0.8;
    color:#000000;
}
& img {
    height: 50px;
    width: 50px;
    object-fit:contain;
    
};
`
const  SongInfo = styled.div`
    margin: 1rem;
`


export {HeaderContainer,SongRowContainer,SongInfo,BodyContainer,Songs,Icons,Info,InfoText, HeaderLeft, HeaderRight} 

