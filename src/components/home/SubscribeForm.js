import React from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import { useDispatch, useSelector } from "react-redux";
import { actionsClientes, typesClientes } from "../../store/actions/clientes";
import { ContactSupportOutlined } from "@material-ui/icons";

import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";

const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  font-family: sans-serif;
  @media (max-width: 750px) {
    border-radius: 0px;
    .MuiSnackbar-anchorOriginBottomCenter {
      width: 90%;
    }
  }
  form {
    font-family: "Lato", "Open-Sans", Helvetica, Sans-Serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      padding-top: 5%;
    }

    .Form-title {
      text-align: center;
      width: 80%;
      margin-right: 20px;
      h3 {
        font-size: 30px;
        margin: 15px;
        @media (max-width: 750px) {
          font-size: 25px;
        }
      }
      h1 {
        margin: 10px;
        font-weight: 300;
        font-family: "Poiret One", "Open-Sans", Helvetica, Sans-Serif;
        @media (max-width: 750px) {
          font-size: 30px;
        }
      }
    }
    .Form-txt {
      width: 83%;
      h2 {
        font-weight: lighter;
        @media (max-width: 750px) {
          font-size: 20px;
        }
      }
    }
    .Form-input {
      width: 78%;
      height: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 2px 2px 0 0;
      input {
        font-size: 15px;
        outline: none;
        width: 100%;
        height: 40px;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 0px solid black;
        border-radius: 10px 0 0 10px;
        background-color: rgba(255, 255, 255, 0.85);
      }
      button {
        border: none;
        border-radius: 0 10px 10px 0;
        color: black;
        background-color: #dcdcdb;
        height: 40px;
        width: 60px;
      }
    }
    .Form-msj {
      padding-top: 0;
      width: 70%;
      display: flex;
      justify-content: flex-end;
      h2 {
        font-weight: lighter;
        @media (max-width: 750px) {
          font-size: 20px;
        }
      }
    }
  }
`;

//Snackbar slide animation
function SlideTransition(props) {
  return <Slide {...props} direction='up' />;
}

const SubscribeForm = () => {
  const dispatch = useDispatch();
  const formState = useSelector(state => state.clientes.result[0]);

  const [datos, setDatos] = React.useState({
    email: "",
  });

  const handleInputChange = event => {
    /* console.log(event.target.name)
     console.log(event.target.value) */
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleForm = e => {
    e.preventDefault();
    /* console.log(datos) */
    dispatch(actionsClientes.postCliente(datos));
  };

  const [state, setState] = React.useState({
    open: false,
    vertical: "",
    horizontal: "",
  });

  const { vertical, horizontal, open } = state;

  const handleSnack = newState => () => {
    setState({
      open: true,

      ...newState,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <React.Fragment>
      <FormContainer>
        <form onSubmit={e => handleForm(e)}>
          <div className='Form-title'>
            <h3>BIENVENIDO A</h3>
            <h1>PROPER 360°</h1>
          </div>
          <div className='Form-txt'>
            <h2>ENCUENTRA LA PROPIEDAD QUE BUSCAS</h2>
          </div>
          <div className='Form-input'>
            <input
              name='email'
              onChange={handleInputChange}
              type='email'
              placeholder='Tu email'
            />
            <button
              type='submit'
              className='button'
              onClick={handleSnack({
                vertical: "bottom",
                horizontal: "center",
              })}
            >
              <SendIcon></SendIcon>
            </button>
          </div>
          <div className='Form-msj'>
            <h2>Suscríbete</h2>
          </div>
        </form>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          key={vertical + horizontal}
          autoHideDuration={3000}
        >
          <Alert severity='success' variant='filled'>
            Email registrado, gracias por suscribirte!
          </Alert>
        </Snackbar>
      </FormContainer>
    </React.Fragment>
  );
};

export default SubscribeForm;
