import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthData } from "../utils";

const initialState = {
  email: "",
  password: "",
};
const formReducer = (state, action) => {
  if (action.type === "EMAIL") {
    return {
      ...state,
      email: action.payload.value,
    };
  }
  if (action.type === "PASSWORD") {
    return {
      ...state,
      password: action.payload.value,
    };
  }
  return state;
};
const Auth = () => {
  const [formData, dispatch] = useReducer(formReducer, initialState);

  const changeHandler = (e) => {
    dispatch({ type: e.target.name, payload: { value: e.target.value } });
  };
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.email.includes("@") && formData.password.length !== 0) {
      return navigate("/todo");
    }
    return alert("password end login");
  };

  return (
    <Authe>
      <section>
        <form onSubmit={submitHandler}>
          <Control>
            <label htmlFor="email">Email</label>
            <input
              onChange={changeHandler}
              name="EMAIL"
              type="email"
              id="email"
              value={formData.email}
            />
          </Control>
          <Control>
            <label htmlFor="password">Password</label>
            <input
              onChange={changeHandler}
              name="PASSWORD"
              type="password"
              id="password"
              value={formData.password}
            />
          </Control>

          <button>Login</button>
        </form>
      </section>
    </Authe>
  );
};

export default Auth;
const Authe = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
`;
const Control = styled.div`
  margin-bottom: 0.5rem;
`;
