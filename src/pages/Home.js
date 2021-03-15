import React from "react";
import styled from "styled-components";

import HomeHeader from "../components/HomeHeader";
import Footer from "../components/Footer";
import SubscribeForm from "../components/SubscribeForm";

import Departamentos from "../images/modern-apartment-architecture.jpg"
import Forte from "../images/UNbqDI-covFZlmpCSRuqcEtRERT2kKwpdN1vBpddtMCgq6ItThhZ7ilf9tRWhf2MLEV3SmCEiiFlA1TRRzm4F5F9wyMaFQhO9JO1GwhbygpF-pBHz73FtfhyNpn1bryYm5U.png";
import House from "../images/LOGO HOUSE PNG.png";
import Inalto from "../images/inalto-inmobiliaria-logo.png";
import Risso from "../images/logo-negro-color.png";


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
  width: 100%;
  background-color: gray;
  background-image: url(${Departamentos}) /* no-repeat fixed center */;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content:flex-end;

`;

const HeroForm = styled.div`
    height: 450px;
    width: 400px;
    margin-right: 300px;
    margin-bottom: 100px;
`;

const HomeSectionInmobiliarias = styled.section` //nombre?
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  .SectionTitle{
    margin: 50px 0;
    h1{

    }
  }
  .SectionContent{
  
    
    ul{
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding: 0;

      
      li{
        height: 180px;
        width: 180px;
        margin: auto 40px;
        display: flex;
        justify-content: center; 
        align-items: center;
        a{
          height: auto;
          width: auto;
          img{
            height: auto;
            width: auto;
            max-height: 100%;
            max-width: 100%;
          }
        }
      }
    }
  }
`;

const HomeSectionAbout = styled.section`
  height: 800px;
  
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
      <HomeHero>
        <HeroForm>
          <SubscribeForm/>
        </HeroForm>
      </HomeHero>
      <HomeSectionInmobiliarias>
        <div className="SectionTitle">
          <h1>INMOBILIARIAS</h1>
        </div>
        <div className="SectionContent">
          <ul>
            <li>
              <a href="#">
                <img src={Forte} alt="Logo Inmobilria Forte"/>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={House} alt="Logo Inmobilria Forte"/>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Risso} alt="Logo Inmobilria Forte"/>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Inalto} alt="Logo Inmobilria Forte"/>
              </a>
            </li>
          </ul>
        </div>
      </HomeSectionInmobiliarias>
      <HomeSectionAbout>

      </HomeSectionAbout>
      <Footer/>
    </React.Fragment>
  );
}

export default Home;
