import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const LeftSideBarContainer = styled.aside`
  width: 180px;
  height: 100%;
  background-color: #44494a;
  border-right: 2px solid black;
  padding-top: 80px;
  @media (max-width: 1024px) {
    border-right: none;
    width: 100%;
    padding-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const FilterGroups = styled.section`
  margin-top: 50px;
  color: white;
  font-size: 20px;
  @media (max-width: 1024px) {
    margin-top: 0px;
  }
  dl {
    width: 100%;
    margin-top: 40px;
    dt {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      font-weight: bold;
      font-size: 20px;
      @media (max-width: 1024px) {
        font-size: 25px;
      }
    }
    dd {
      padding-top: 10px;
      max-width: 100%;
      margin: 0;
      font-size: 15px;
      display: flex;
      justify-content: center;
      @media (max-width: 1024px) {
        font-size: 18px;
      }
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
          font-size: 12px;
          padding: 5px;
          @media (max-width: 1024px) {
            font-size: 16px;
          }
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
