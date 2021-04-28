import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [tipo, setTipo] = React.useState("");
  const [categoria, setCategoria] = React.useState("");
  const [habitaciones, setHabitaciones] = React.useState("");

  const handleChangeTipo = event => {
    setTipo(event.target.value);
  };

  const handleChangeCategoria = event => {
    setCategoria(event.target.value);
  };

  const handleChangeHabitaciones = event => {
    setHabitaciones(event.target.value);
  };

  return (
    <div>
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
            <em>None</em>
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
            <em>None</em>
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
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
          <MenuItem value={40}>+3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
