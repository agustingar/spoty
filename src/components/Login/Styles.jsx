import styled from "styled-components";

const LoginContainer = styled.div`
display: grid;
place-items:center;
height:100vh;
background-color:#000;
& img {
    width:100%;
}
& .bot{
    color: #000000;
    font-size: 1rem;
    text-transform:none;
    background-color: #ffffff;
    border-radius: 2rem;
    padding: 1rem;
}
`


const LoginButton = styled.a`
padding: 1rem;
background-color: #1db954;
border-radius: 3rem;
color: white;
text-decoration: none;
text-transform: uppercase;
font-weight: bolder;
`




export {LoginContainer, LoginButton}