import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const LeftSideBarContainer = styled.aside`
  width: 100%;
  height: 100%;
  background-color: #44494a;
  border-right: 1px solid black;
`;

const SideBarLogo = styled.div`
  padding-top: 70px;
  width: 100%;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    height: auto;
    width: 90%;
    img {
      height: Auto;
      width: 100%;
    }
  }
`;

const FilterGroups = styled.section`
  margin-top: 60px;
  color: white;
  font-size: 20px;
  dl {
    width: 100%;
    margin-top: 60px;
    margin-left: 20px;
    dt {
      display: flex;
      margin-left: 40px;
      margin-bottom: 10px;
      font-weight: bold;
    }
    dd {
      padding-top: 10px;
      max-width: 100%;
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
          <img src='./images/logow.png' alt='Logo proper' />
        </a>
      </SideBarLogo>
      <FilterGroups>
        <dl>
          <dt>ALQUILERES</dt>
          <dd>
            <Link to='/propiedades'>
              <span>Departamentos</span>
            </Link>
          </dd>
          <dd>
            <Link to='/propiedades'>
              <span>Casas</span>
            </Link>
          </dd>
          <dd>
            <Link to='/propiedades'>
              <span>Locales Comerciales</span>
            </Link>
          </dd>
        </dl>
        <dl>
          <dt>VENTAS</dt>
          <dd>
            <Link to='/propiedades'>
              <span>Departamentos</span>
            </Link>
          </dd>
          <dd>
            <Link to='/propiedades'>
              <span>Casas</span>
            </Link>
          </dd>
          <dd>
            <Link to='/propiedades'>
              <span>Locales Comerciales</span>
            </Link>
          </dd>
        </dl>
      </FilterGroups>
    </LeftSideBarContainer>
  );
}

export default LeftSideBar;
