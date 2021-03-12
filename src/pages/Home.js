import React from "react";
import styled from "styled-components";

import HomeHeader from "../components/HomeHeader";
import Departamentos from "../images/modern-apartment-architecture.jpg"


 /* const Header = styled.header`
  background: pink;
 //  height: 100px; 
  display: flex;
  
`; */

/* const Header__Logo = styled.div`
  width:50%;
  background:red;
  display:flex;
  justify-content: flex-start;
  align-items:center;
  div{
    margin-left: 50px;
    width: 40%;
    // height:80%; 
    // display: flex;
    //align-items: center; 
    background: green;
    display: flex;
    align-items: center;

    img{
      
      width:100%;
      height: auto;
      background: yellow;
    }
  }
  
`; */

/* const Header__Menu = styled.div`
  width:50%;
  background: lightblue;
  nav{
    ul{
      list-style-type: none;
      display:flex;
      flex-direction: row;
      
      li{
        a{
          text-decoration: none;
          color: black;
          
          :hover{
            background: orange;
          }
        }
      }
    }
  }
`; */

/* const Home__Hero = styled.div`

`;  */

const HomeHero = styled.div`
  height: calc(100vh - 120px);
  background: url(${Departamentos}) no-repeat fixed center;
  background-size: cover;
  /* background-position: center;
  background-repeat: no-repeat; */

`;

function Home(){
  return(
    <React.Fragment>
      {/* <Header>
        <Header__Logo>
          <div>
            <img src={Logo} alt= "Logo"/>
          </div>
        </Header__Logo>
        <Header__Menu>
          <nav>
            <ul>
              <li>
                <a href="#">NOSOTROS</a>
              </li>
              <li>
                <a href="#">PROYECTOS</a>
              </li>
              <li>
                <a href="#">PRECIOS</a>
              </li>
              <li>
                <a href="#">CONTACTO</a>
              </li>
            </ul>
          </nav>
        </Header__Menu>
      </Header> */}
      <HomeHeader/>
      <HomeHero></HomeHero>
    </React.Fragment>
  );
}

export default Home;
