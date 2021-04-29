import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const ListContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
  margin-top: 40px;
`;

const PortadaContainer = styled.div`
  box-sizing: border-box;
  width: calc(100% / 3);
  padding: 5px;
  display: flex;
  text-align: center;
  flex-direction: column;
  position: relative;
  & :hover {
    filter: none;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    width: calc(95% / 2);
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const Portada = styled.img`
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 45vh;
  object-fit: cover;
  filter: grayscale(80%);
`;

const FiltroWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  div{
    width: 150px;
    @media (max-width: 350px) {
    width: 120px;
  }
  }
`;

const PortadaTitle = styled.div`
  width: calc(100% - 10px);
  font-size: 22px;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  margin: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
  position: absolute;
  bottom: 9px;
  p {
    margin: 10px;
  }
`;

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function PropiedadesList({ propiedades }) {
  const classes = useStyles();
  const [tipo, setTipo] = React.useState("");
  const [categoria, setCategoria] = React.useState("");
  const [habitaciones, setHabitaciones] = React.useState("");
  const [banos, setBanos] = React.useState("");

  const handleChangeTipo = event => {
    setTipo(event.target.value);
  };

  const handleChangeCategoria = event => {
    setCategoria(event.target.value);
  };

  const handleChangeHabitaciones = event => {
    setHabitaciones(event.target.value);
  };

  const handleChangeBanos = event => {
    setBanos(event.target.value);
  };

  return (
    <React.Fragment>
      <FiltroWrapper>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id='demo-simple-select-placeholder-label-label'>
          TIPO
        </InputLabel>
        <Select
          labelId='demo-simple-select-placeholder-label-label'
          id='demo-simple-select-placeholder-label'
          value={tipo}
          onChange={handleChangeTipo}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value=''>
            <em>SELECCIONAR</em>
          </MenuItem>
          <MenuItem value={10}>ALQUILER</MenuItem>
          <MenuItem value={20}>VENTA</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id='demo-simple-select-placeholder-label-label'>
          CATEGORIA
        </InputLabel>
        <Select
          labelId='demo-simple-select-placeholder-label-label'
          id='demo-simple-select-placeholder-label'
          value={categoria}
          onChange={handleChangeCategoria}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value=''>
            <em>SELECCIONAR</em>
          </MenuItem>
          <MenuItem value={10}>CASA</MenuItem>
          <MenuItem value={20}>DEPARTAMENTO</MenuItem>
          <MenuItem value={30}>LOCAL</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id='demo-simple-select-placeholder-label-label'>
          HABITACIONES
        </InputLabel>
        <Select
          labelId='demo-simple-select-placeholder-label-label'
          id='demo-simple-select-placeholder-label'
          value={habitaciones}
          onChange={handleChangeHabitaciones}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value=''>
            <em>SELECCIONAR</em>
          </MenuItem>
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
          <MenuItem value={40}>+3</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id='demo-simple-select-placeholder-label-label'>
          BAÑOS
        </InputLabel>
        <Select
          labelId='demo-simple-select-placeholder-label-label'
          id='demo-simple-select-placeholder-label'
          value={banos}
          onChange={handleChangeBanos}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value=''>
            <em>SELECCIONAR</em>
          </MenuItem>
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
          <MenuItem value={40}>+3</MenuItem>
        </Select>
      </FormControl>
      </FiltroWrapper>
      <ListContainer>
        {propiedades.map(data => (
          <PortadaContainer>
            <Link to={`/project/${data._key}`}>
              <Portada src={data.logo} alt='' />
              <PortadaTitle>
                <p>{data.nombre}</p>
                <p>
                  {data.habitaciones} HABITACIONES - {data.banos} BAÑOS
                </p>
              </PortadaTitle>
            </Link>
          </PortadaContainer>
        ))}
      </ListContainer>
    </React.Fragment>
  );
}

export default PropiedadesList;
