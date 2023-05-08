import style from './style.module.css';
import React, { useContext } from 'react';
import { useRef } from 'react';
import Input from '../Input';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import apiCalls from '../../Helpers/apiCalls';
import { userContext } from '../LayOut';
// import apiCalls from '../../Helpers/apiCalls';
// import { userContext } from "../../App";

function Login() {
  const { setUser } = useContext(userContext);
  const userEmailInput = useRef();
  const userPasswordInput = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await apiCalls('post', 'user/login', {
    email: e.target.children[1].value,
    password: e.target.children[2].value,
    });
    localStorage.token = data.data.token;
    setUser(data.data.user);
    navigate('../');
  };
  return (
    <div className={style.formLoginContainer}>
      <form className={style.formLogin} onSubmit={handleSubmit}>
        <h2 className={style.header}>התחבר</h2>
        <Input
          className={style.inputLogin}
          type="email"
          name="input"
          placeholder="אימייל"
          required={true}
          inputRef={userEmailInput}
        />
        <Input
          className={style.inputLogin}
          type="password"
          name="input"
          placeholder="סיסמה"
          required={true}
          inputRef={userPasswordInput}
        />
        <div className={style.login_buttons}>
          <Button type="submit" className={style.login_button} text="התחבר" />
          <Button
            type="text"
            className={style.login_button}
            text="הרשמה"
            onClick={() => navigate('../register')}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
