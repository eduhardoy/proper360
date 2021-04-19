import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { actions, types } from '../../store/actions/inmobiliarias'

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
        height: 150px;
        width: 150px;
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
  const dispatch = useDispatch()
  const { result } = useSelector(state => state.inmobiliarias)
  console.log(result)
  React.useEffect(() => {
    dispatch(actions.getInmobiliarias())
  }, [])

  return (
    <HomeSectionInmobiliarias id="inmobiliarias">
      <div className='SectionTitle'></div>
      <div className='SectionContent'>
        <ul>
          {result.map(inmo =>
            <li>
              <Link to='/inmobiliaria'>
                <img src={`data:image/png;base64, ${inmo.logo}`} alt='Logo Inmobilria Forte' />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </HomeSectionInmobiliarias>
  );
};

export default HomeInmobiliarias;
