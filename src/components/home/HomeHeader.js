import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from '@material-ui/icons/Menu';

const StyledHomeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 99999;
  background-color: white;
  width: 100%;
  height: 70px;
  box-shadow: 0 2px 9px -1px hsl(0deg 2% 48% / 60%);
`;

const HeaderImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 30%;
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 80%;
      @media (max-width: 1024px) {
        height: 70%;
      }
    }
  }
`;

const HeaderMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 70%;
  @media (max-width: 1024px) {
    display: none;
  }
  nav {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      margin-right: 50px;
      li {
        padding: 20px;
        a {
          padding-bottom: 4px;
          font-size: 20px;
          text-decoration: none;
          color: black;
          background-image: linear-gradient(currentColor, currentColor);
          background-position: 50% 100%;
          background-repeat: no-repeat;
          background-size: 0% 1px;
          font-weight: 300;
          transition: background-size 0.3s;
          :hover,
          :focus {
            background-size: 100% 1px;
          }
        }
      }
    }
  }
`;

const ButtonOpenMenu = styled.button`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    outline: none;
    border: none;
    color: black;
    background-color: white;
    border-radius: 5px;
    top: 15px;
    right: 10px;
    height: 40px;
    width: 40px;
    cursor: pointer;
    svg {
      width: 40px;
    }
  }
`;

const ButtonCloseMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  color: white;
  outline: none;
  border: none;
  position: fixed;
  z-index: 9999999999;
  top: 0;
  right: 0;
  font-size: 40px;
  width: 40px;
  height: 40px;
  svg {
      width: 40px;
    }
`;

const MenuNav = styled.div`
  position: fixed;
  z-index: 99999999999;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: black;
  filter: opacity(0.8);
  display: none;
  nav{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
      li{
        text-align: center;
        padding: 20px;
        a{
        font-size: 20px;
        color: white;
        text-decoration: none;
        }
      }
    }
  }
`;

const HomeHeader = () => {
  const [menu, setMenu] = React.useState(false);

  const ActiveFilterMenu = () => setMenu(true);
  const DisableFilterMenu = () => setMenu(false);

  return (
    <StyledHomeHeader>
      <ButtonOpenMenu onClick={ActiveFilterMenu}>
        <MenuIcon />
      </ButtonOpenMenu>
      <HeaderImageContainer>
        <Link to='/'>
          <img
            src='https://live.staticflickr.com/65535/51132651295_d1cba6c406_n.jpg'
            alt='Logo proper'
          />
        </Link>
      </HeaderImageContainer>
      <HeaderMenuContainer>
        <nav>
          <ul>
            <li>
              <a href='/#inmobiliarias'>INMOBILIARIAS</a>
            </li>
            <li>
              <a href='/#about'>NOSOTROS</a>
            </li>
            <li>
              <a href='/#contact'>CONTACTO</a>
            </li>
          </ul>
        </nav>
      </HeaderMenuContainer>
      <MenuNav style={menu === true ? { display: "flex" } : { display: "none" }}>
        <ButtonCloseMenu
          onClick={DisableFilterMenu}
          style={menu === true ? { display: "flex" } : { display: "none" }}
        >
          <CloseIcon />
        </ButtonCloseMenu>
        <nav>
          <ul>
            <li>
              <a onClick={DisableFilterMenu} href='/#inmobiliarias'>INMOBILIARIAS</a>
            </li>
            <li>
              <a onClick={DisableFilterMenu} href='/#about'>NOSOTROS</a>
            </li>
            <li>
              <a onClick={DisableFilterMenu} href='/#contact'>CONTACTO</a>
            </li>
          </ul>
        </nav>
      </MenuNav>
    </StyledHomeHeader>
  );
};

export default HomeHeader;
