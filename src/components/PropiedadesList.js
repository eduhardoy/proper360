import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const ListContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;

  ul {
    width: 100%;
    height: 100%;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0;

    li {
      height: auto;
      width: 45%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 20px;

      a {
        height: auto;
        width: auto;
        text-decoration: none;
        color: black;
        background-color: green;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        img {
          height: auto;
          width: auto;
          max-height: 100%;
          max-width: 100%;
        }
        div {
          position: absolute;
          background-color: white;
          height: 20%;
          width: 90%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          bottom: 10px;
          p {
            margin: 1px;
          }
        }
      }
    }
  }
`;

function PropiedadesList() {
  return (
    <React.Fragment>
      <ListContainer>
        <ul>
          <li>
            <Link to='/project'>
              <img src='./images/project.jpg' />
              <div>
                <p>DOMICILIO</p>
                <p>X HABITACIONES - X BAÑOS</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/project'>
              <img src='./images/project.jpg' />
              <div>
                <p>DOMICILIO</p>
                <p>X HABITACIONES - X BAÑOS</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/project'>
              <img src='./images/project.jpg' />
              <div>
                <p>DOMICILIO</p>
                <p>X HABITACIONES - X BAÑOS</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/project'>
              <img src='./images/project.jpg' />
              <div>
                <p>DOMICILIO</p>
                <p>X HABITACIONES - X BAÑOS</p>
              </div>
            </Link>
          </li>
        </ul>
      </ListContainer>
    </React.Fragment>
  );
}

export default PropiedadesList;
