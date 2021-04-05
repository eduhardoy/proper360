import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const HomeSectionInmobiliarias = styled.section`
  //nombre?
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .SectionTitle {
    margin: 30px 0;
    h1 {
      font-weight: 300;
      font-size: 30px;
    }
  }
  .SectionContent {
    ul {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding: 0;

      li {
        height: 180px;
        width: 180px;
        margin: auto 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          height: auto;
          width: auto;
          img {
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

const HomeInmobiliarias = () => {
  return (
    <HomeSectionInmobiliarias>
      <div className='SectionTitle'></div>
      <div className='SectionContent'>
        <ul>
          <li>
            <Link to='/inmobiliaria'>
              <img src='./images/inalto.png' alt='Logo Inmobilria Forte' />
            </Link>
          </li>
          <li>
            <Link to='/inmobiliaria'>
              <img src='./images/inalto.png' alt='Logo Inmobilria House' />
            </Link>
          </li>
          <li>
            <Link to='/inmobiliaria'>
              <img src='./images/inalto.png' alt='Logo Inmobilria Risso' />
            </Link>
          </li>
          <li>
            <Link to='/inmobiliaria'>
              <img src='./images/inalto.png' alt='Logo Inmobilria Inalto' />
            </Link>
          </li>
        </ul>
      </div>
    </HomeSectionInmobiliarias>
  );
};

export default HomeInmobiliarias;
