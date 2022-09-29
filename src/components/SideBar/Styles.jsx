import styled from "styled-components";


const SideBarContainer = styled.div`
background-color:#000;
height: 100vh;
flex:0.2;
min-height: 240px;
color:#fff;
padding-left: 1rem;
& img {
height: 5rem;
padding: 10px;
margin-right: auto;
}
& hr{
    border: 1px solid smokegray;
    width: 90%;
    margin: 10px auto;
}
`

const Playlists =styled.div`
margin: 5px 10px;

`
const Choices =styled.div`
display: flex;
align-items: center;
color:gray;
height: 40px;
cursor: pointer;
transition: 300ms color ease-in;
& :hover{
    color: #fff;
}
& h4{
    margin: 1rem
}
`



export {SideBarContainer, Playlists,Choices} 