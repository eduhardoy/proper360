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
  margin-top: 100px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3{
    width: 80%;
  }
  
`;

function Home(){
  return(
    <React.Fragment>
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
              <a href="/inmobiliaria">
                <img src={Forte} alt="Logo Inmobilria Forte"/>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={House} alt="Logo Inmobilria House"/>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Risso} alt="Logo Inmobilria Risso"/>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Inalto} alt="Logo Inmobilria Inalto"/>
              </a>
            </li>
          </ul>
        </div>
      </HomeSectionInmobiliarias>
      <HomeSectionAbout>
        <h2>What is Lorem Ipsum?</h2>
        <h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially unchanged. It was popularised in 
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including 
          versions of Lorem Ipsum.
        </h3>
        <h2>Where does it come from?</h2>
        <h3>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in 
          a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked 
          up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
          going through the cites of the word in classical literature, discovered the undoubtable 
          source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et 
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a 
          treatise on the theory of ethics, very popular during the Renaissance. The first line 
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those 
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero 
          are also reproduced in their exact original form, accompanied by English versions from 
          the 1914 translation by H. Rackham.
        </h3>
      </HomeSectionAbout>
      <Footer/>
    </React.Fragment>
  );
}

export default Home;
