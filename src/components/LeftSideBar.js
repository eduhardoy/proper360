import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const LeftSideBarContainer = styled.aside`
  width: 200px;
  height: 100%;
  background-color: #44494a;
  border-right: 1px solid black;
`;

const SideBarLogo = styled.div`
  padding-top: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    height: auto;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
    color: white;
    font-size: 12px;
    text-align: center;
    img {
      height: Auto;
      width: 60%;
      min-width: 100px;
    }
  }
`;

const FilterGroups = styled.section`
  margin-top: 30px;
  color: white;
  font-size: 20px;
  dl {
    width: 100%;
    margin-top: 40px;
    dt {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      font-weight: bold;
      font-size: 25px;
    }
    dd {
      padding-top: 10px;
      max-width: 100%;
      margin: 0;
      font-size: 18px;
      display: flex;
      justify-content: center;
      summary {
        cursor: pointer;
        width: 100%;
        list-style: none;
        outline: none;
        text-decoration: none;
        padding-bottom: 2px;
        color: white;
        background-image: linear-gradient(currentColor, currentColor);
        background-position: 0% 100%;
        background-repeat: no-repeat;
        background-size: 0% 1px;
        transition: background-size 0.3s;
        :hover {
          background-size: 100% 1px;
        }
        :focus {
          background-size: 0% 1px;
        }
      }
      ul {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        li {
          font-size: 15px;
          padding: 5px;
        }
      }
      a {
        text-decoration: none;
        padding-bottom: 2px;
        color: white;
        background-image: linear-gradient(currentColor, currentColor);
        background-position: 0% 100%;
        background-repeat: no-repeat;
        background-size: 0% 1px;
        transition: background-size 0.3s;
        :hover,
        :focus {
          background-size: 100% 1px;
        }
        span {
          color: white;
        }
      }
    }
  }
`;

function LeftSideBar() {
  return (
    <LeftSideBarContainer>
      <SideBarLogo>
        <a href='/'>
          <img src='./images/360.png' alt='Logo proper' />
          <p>VOLVER A INICIO</p>
        </a>
      </SideBarLogo>
      <FilterGroups>
        <dl>
          <dt>ALQUILERES</dt>
          <dd>
            <details>
              <summary>DEPARTAMENTOS</summary>
              <ul>
                <Link to='/propiedades'>
                  <li>1 DORMITORIO</li>
                </Link>
                <Link to='/propiedades'>
                  <li>2 DORMITORIOS</li>
                </Link>
                <Link to='/propiedades'>
                  <li>3 DORMITORIOS</li>
                </Link>
              </ul>
            </details>
          </dd>
          <dd>
            <Link to='/propiedades'>
              <span>CASAS</span>
            </Link>
          </dd>
          <dd>
            <Link to='/propiedades'>
              <span>LOCALES</span>
            </Link>
          </dd>
        </dl>
        <dl>
          <dt>VENTAS</dt>
          <dd>
            <details>
              <summary>DEPARTAMENTOS</summary>
              <ul>
                <Link to='/propiedades'>
                  <li>1 DORMITORIO</li>
                </Link>
                <Link to='/propiedades'>
                  <li>2 DORMITORIOS</li>
                </Link>
                <Link to='/propiedades'>
                  <li>3 DORMITORIOS</li>
                </Link>
              </ul>
            </details>
          </dd>
          <dd>
            <Link to='/propiedades'>
              <span>CASAS</span>
            </Link>
          </dd>
          <dd>
            <Link to='/propiedades'>
              <span>LOCALES</span>
            </Link>
          </dd>
        </dl>
      </FilterGroups>
    </LeftSideBarContainer>
  );
}

export default LeftSideBar;
