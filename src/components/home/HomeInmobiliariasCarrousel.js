import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import { Link } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import {
  actionsInmobiliarias,
  typesInmobiliarias,
} from "../../store/actions/inmobiliarias";

const CarouselSection = styled.section`
  padding-top: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    width: 80%;
    text-align: center;
    padding: 10px;
    @media (max-width: 750px) {
      font-size: 20px;
    }
  }
`;

const CarouselContainer = styled.div`
  width: 80%;
  margin: auto;
  @media (max-width: 1000px) {
    width: 100%;
  }
  .rec.rec-arrow {
    background-color: white;
    box-shadow: none;
    font-size: 3em;
    :hover {
      color: black;
    }
    :focus {
      color: black;
    }
    :disabled {
      visibility: hidden;
    }
  }

  .rec.rec-dot {
    visibility: hidden;
  }
`;

const InmobiliariaLogo = styled.div`
  width: 150px;
  height: 150px;
  color: white;
  font-size: 30px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    height: 150px;
    width: 150px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: auto;
      width: auto;
      max-height: 100%;
      max-width: 100%;
    }
    @media (max-width: 1000px) {
      width: 120px;
    }
    @media (max-width: 750px) {
      width: 100px;
    }
    @media (max-width: 320px) {
      width: 80px;
    }
  }
`;

function HomeInmobiliariasCarrousel() {
  const dispatch = useDispatch();
  const { result } = useSelector(state => state.inmobiliarias);
  function Shuffle(o) {
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  }
  var resultNew = Shuffle(result);
  React.useEffect(() => {
    dispatch(actionsInmobiliarias.getInmobiliarias());
  }, []);

  //Breakpoints carrousel - TESTEAR RESPONSIVE -
  const breakPoints = [
    { width: 320, itemsToShow: 2 },
    { width: 375, itemsToShow: 2 },
    { width: 425, itemsToShow: 4 },
    { width: 768, itemsToShow: 4 },
    { width: 1024, itemsToShow: 5 },
    { width: 1440, itemsToShow: 5 },
    { width: 2560, itemsToShow: 5 },
  ];

  return (
    <CarouselSection id='inmobiliarias'>
      <h1>INMOBILIARIAS Y DESARROLLADORES INMOBILIARIOS</h1>
      <CarouselContainer>
        <Carousel breakPoints={breakPoints}>
          {resultNew.map(inmo => (
            <InmobiliariaLogo>
              <Link to={`/inmobiliaria/${inmo._key}`}>
                <img src={`${inmo.logo}`} alt='Logo Inmobiliaria' />
              </Link>
            </InmobiliariaLogo>
          ))}
        </Carousel>
      </CarouselContainer>
    </CarouselSection>
  );
}

export default HomeInmobiliariasCarrousel;
