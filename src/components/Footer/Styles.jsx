import styled from "styled-components";

const FooterContainer = styled.div`
position: fixed;
bottom: 0;
height: 9rem;
width: 100%;
background-color:#181818;
color: #fff;
display: flex;
justify-content: space-between;
`

const FooterLeft = styled.div` 
flex:0.33;
display: flex;
align-items: center;
max-width: 300px;
padding: 0rem 1rem;
& img {
    height: 60px;
    width: 60px;
    margin-right: 20px;
    object-fit: contain;
    
}
`

const FooterCenter = styled.div  `  
flex:0.33;
display: flex;
align-items: center;
justify-content: space-between;
max-width: 300px;
& 
.shuffle,
 .repeat{
  color: #00ff00;
  transition: transform 200ms ease-in-out;
}
 .shuffle:hover,
 .repeat:hover,
 .icon:hover{

transform: scale(1.3);
}

`


    const FooterRight = styled.div`
    flex:0.25;
    display: flex;
    align-items: center;
  justify-content: center;
  margin-right:1rem;
  & .css-187mznn-MuiSlider-root{
    color:#00ff00;
    width: 70%;
  }
`

export {FooterContainer, FooterCenter, FooterLeft, FooterRight} 