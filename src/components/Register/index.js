import style from './style.module.css';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import apiCalls from '../../Helpers/apiCalls';

export default function Register() {
  const [gender, setGender] = useState();
  const userfNameInput = useRef();
  const userlNameInput = useRef();
  const userEmailInput = useRef();
  const firstPassword = useRef();
  const navigate = useNavigate();

  const onChooseGender = (e) => {
    setGender(e.target.value);
  };
  const handleSubmit = async (e) => {
      e.preventDefault();
    const user = await apiCalls('post', 'user/register', {
        fName: e.target.children[1].value,
        lName: e.target.children[2].value,
        email: e.target.children[3].value,
        password: e.target.children[4].value,
        gender: gender,
      });
      navigate('../login');
  };

  return (
    <div className={style.formLoginContainer}>
      <form className={style.formLogin} onSubmit={handleSubmit}>
        <h2 className={style.header}>הרשמה</h2>
        <Input
          className={style.inputLogin}
          type="text"
          name="fName"
          required={true}
          placeholder="שם פרטי"
          inputRef={userfNameInput}
        />
        <Input
          className={style.inputLogin}
          type="text"
          name="lName"
          required={true}
          placeholder="שם משפחה"
          inputRef={userlNameInput}
        />
        <Input
          className={style.inputLogin}
          type="email"
          name="input"
          required={true}
          placeholder="אימייל"
          inputRef={userEmailInput}
        />
        <Input
          className={style.inputLogin}
          type="password"
          name="firstPassword"
          required={true}
          placeholder="סיסמה"
          inputRef={firstPassword}
        />
        <div className={style.radio_container}>
          <label className={style.radio} htmlFor="male">
            זכר
            {'  '}
            <Input
              type="radio"
              id="male"
              name="gender"
              onInput={onChooseGender}
              value="male"
            />
          </label>
          <label className={style.radio} htmlFor="female">
            נקבה
            {'  '}
            <Input
              type="radio"
              id="female"
              name="gender"
              onInput={onChooseGender}
              value="female"
            />
          </label>
        </div>
        <div className={style.login_buttons}>
          <Button className={style.login_button} text="הירשם" type="submit" />
          <Button
            onClick={() => {
              navigate('/login');
            }}
            className={style.login_button}
            text="התחבר"
            type="text"
          />
        </div>
      </form>
    </div>
  );
}
