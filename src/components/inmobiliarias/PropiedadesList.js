import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ReactGA from "react-ga";

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
  div {
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

function PropiedadesList({ propiedades, queries }) {
  const classes = useStyles();
  const [tipo, setTipo] = React.useState(0);
  const [categoria, setCategoria] = React.useState(0);
  const [habitaciones, setHabitaciones] = React.useState(0);
  const [banos, setBanos] = React.useState(0);

  const [queryTipo, setQueryTipo] = React.useState("");
  const [queryCategoria, setQueryCategoria] = React.useState("");
  const [queryHabitaciones, setQueryHabitaciones] = React.useState("");
  const [queryBanos, setQueryBanos] = React.useState("");

  const handleChangeTipo = event => {
    setTipo(event.target.value);
    if (event.target.value !== 0) {
      setQueryTipo(`&tipo=${event.target.value}`);
    } else {
      setQueryTipo("");
    }
  };

  const handleChangeCategoria = event => {
    setCategoria(event.target.value);
    if (event.target.value !== 0) {
      setQueryCategoria(`&categoria=${event.target.value}`);
    } else {
      setQueryCategoria("");
    }
  };

  const handleChangeHabitaciones = event => {
    setHabitaciones(event.target.value);
    if (event.target.value !== 0) {
      setQueryHabitaciones(`&habitaciones=${event.target.value}`);
    } else {
      setQueryHabitaciones("");
    }
  };

  const handleChangeBanos = event => {
    setBanos(event.target.value);
    if (event.target.value !== 0) {
      setQueryBanos(`&banos=${event.target.value}`);
    } else {
      setQueryBanos("");
    }
  };

  const CreateQueries = () => {
    return `?${queryTipo}${queryCategoria}${queryHabitaciones}${queryBanos}`;
  };

  queries(CreateQueries);

  const ClickHandlerCategoriaCasa = () => {
    ReactGA.event({
      category: "Filtro CATEGORIA",
      action: "Seleccion CASA como CATEGORIA",
    });
  };

  const ClickHandlerCategoriaDepartamento = () => {
    ReactGA.event({
      category: "Filtro CATEGORIA",
      action: "Seleccion DEPARTAMENTO como CATEGORIA",
    });
  };

  const ClickHandlerCategoriaLocal = () => {
    ReactGA.event({
      category: "Filtro CATEGORIA",
      action: "Seleccion LOCAL como CATEGORIA",
    });
  };

  const ClickHandlerTipoAlquiler = () => {
    ReactGA.event({
      category: "Filtro TIPO",
      action: "Seleccion ALQUILER como TIPO",
    });
  };

  const ClickHandlerTipoVenta = () => {
    ReactGA.event({
      category: "Filtro TIPO",
      action: "Seleccion VENTA como TIPO",
    });
  };

  const ClickHandlerHabitacionesUna = () => {
    ReactGA.event({
      category: "Filtro HABITACIONES",
      action: "Seleccion UNA como HABITACIONES",
    });
  };

  const ClickHandlerHabitacionesDos = () => {
    ReactGA.event({
      category: "Filtro HABITACIONES",
      action: "Seleccion DOS como HABITACIONES",
    });
  };

  const ClickHandlerHabitacionesTres = () => {
    ReactGA.event({
      category: "Filtro HABITACIONES",
      action: "Seleccion TRES como HABITACIONES",
    });
  };

  const ClickHandlerHabitacionesCuatro = () => {
    ReactGA.event({
      category: "Filtro HABITACIONES",
      action: "Seleccion CUATRO O MAS como HABITACIONES",
    });
  };

  const ClickHandlerPropiedad = propiedad => {
    ReactGA.event({
      category: "PROPIEDAD",
      action: `Seleccion ${propiedad}`,
    });
  };

  const ClickHandlerBarrio = barrio => {
    ReactGA.event({
      category: "BARRIO",
      action: `Seleccion ${barrio}`,
    });
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
            <MenuItem value={0}>
              <em>TODAS</em>
            </MenuItem>
            <MenuItem onClick={ClickHandlerTipoAlquiler} value={"Alquiler"}>
              ALQUILER
            </MenuItem>
            <MenuItem onClick={ClickHandlerTipoVenta} value={"Venta"}>
              VENTA
            </MenuItem>
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
            <MenuItem value={0}>
              <em>TODAS</em>
            </MenuItem>
            <MenuItem onClick={ClickHandlerCategoriaCasa} value={"Casa"}>
              CASA
            </MenuItem>
            <MenuItem
              onClick={ClickHandlerCategoriaDepartamento}
              value={"Departamento"}
            >
              DEPARTAMENTO
            </MenuItem>
            <MenuItem onClick={ClickHandlerCategoriaLocal} value={"Local"}>
              LOCAL
            </MenuItem>
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
            <MenuItem value={0}>
              <em>TODAS</em>
            </MenuItem>
            <MenuItem onClick={ClickHandlerHabitacionesUna} value={1}>
              1
            </MenuItem>
            <MenuItem onClick={ClickHandlerHabitacionesDos} value={2}>
              2
            </MenuItem>
            <MenuItem onClick={ClickHandlerHabitacionesTres} value={3}>
              3
            </MenuItem>
            <MenuItem onClick={ClickHandlerHabitacionesCuatro} value={4}>
              4 o más
            </MenuItem>
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
            <MenuItem value={0}>
              <em>TODAS</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4 o más</MenuItem>
          </Select>
        </FormControl>
      </FiltroWrapper>
      <ListContainer>
        {propiedades.map(data => (
          <PortadaContainer key={data._key}>
            <Link
              onClick={() => {
                ClickHandlerPropiedad(data.nombre);
                ClickHandlerBarrio(data.barrio);
              }}
              to={`/project/${data._key}`}
            >
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
