import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import { Link } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { actions, types } from '../../store/actions/inmobiliarias'


const CarouselSection = styled.section`
    margin-top: 80px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const CarouselContainer= styled.div`
    width: 80%;
    margin: auto;

    .rec.rec-arrow {

        background-color: white;
        box-shadow: none;
        font-size: 3em;
        :hover{
            color: black;
        }
        :focus{
            color: black;
        }
        :disabled{
             visibility: hidden; 
        }
    }

    .rec.rec-dot{
        visibility: hidden;
    }
                
`;

const InmobiliariaLogo = styled.div`
    width: 100%;
    height: 200px;
    color: white;
    font-size: 30px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
        height: 180px;
        width: 180px;
        margin: auto 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            height: auto;
            width: auto;
            max-height: 100%;
            max-width: 100%;
        }
    }
`;

function HomeInmobiliariasCarrousel(){

    const dispatch = useDispatch()
    const { result } = useSelector(state => state.inmobiliarias)
    console.log(result)
    React.useEffect(() => {
    dispatch(actions.getInmobiliarias())
    }, [])
    
    //Breakpoints carrousel - TESTEAR RESPONSIVE -
    const breakPoints =[
        {width: 320, itemsToShow: 1},
        {width: 375, itemsToShow: 1},
        {width: 425, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1024, itemsToShow: 5},
        {width: 1440, itemsToShow: 5},
        {width: 2560, itemsToShow: 5}
    ] 

    return(
        <CarouselSection>
            <h1>INMOBILIARIAS</h1>
            <CarouselContainer>
                <Carousel breakPoints={breakPoints}>
                    {result.map(inmo =>
                        <InmobiliariaLogo>
                            <Link to='/inmobiliaria'>
                                <img src={`data:image/png;base64, ${inmo.logo}`} alt='Logo Inmobilria'/>
                            </Link>
                        </InmobiliariaLogo>
                    )}
                </Carousel>
            </CarouselContainer>
        </CarouselSection>
    );
}

export default HomeInmobiliariasCarrousel;