import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { UserLoginDTO } from '../../custom-typings/user';
import '../scss/login.scss';
import sendRequest from '../sendRequest';
import ApiErrors from '../apiErrors';
import Limits from '../limits';
import { UsersMethods } from '../apiMethods';

export const LoginPage: React.FunctionComponent = () => {
  const history = useHistory();
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const loginHandler = () => {
    if(nickname.length < Limits.NicknameMin && password.length < Limits.PasswordMin) {
      setError('Недопустимая длина никнейма и пароля!');
      return;
    } else if(nickname.length < Limits.NicknameMin) {
      setError('Недопустимая длина никнейма!');
      return;
    } else if(password.length < Limits.PasswordMin) {
      setError('Недопустимая длина пароля!');
      return;
    }

    const dto: UserLoginDTO = {
      nickname,
      password
    };

    sendRequest('POST', UsersMethods.Login, dto)
      .then(data => {
        const errorCode: number | undefined = data.data.error_code;

        if(errorCode === undefined) {
          localStorage.setItem("access_token", data.data.access_token);
          localStorage.setItem("access_expires_in", data.data.access_expires_in);
          localStorage.setItem("refresh_token", data.data.refresh_token);
          localStorage.setItem("refresh_expires_in", data.data.refresh_expires_in);
          location.replace('/');
          return;
        }

        let errorMessage: string = '';

        switch (errorCode) {
          case ApiErrors.BadAuth:
            errorMessage = 'Пользователь с таким никнеймом или паролем не существует!';
            break;
          case ApiErrors.InvalidFieldLength:
            errorMessage = 'Недопустимая длина никнейма или пароля!';
            break;
          default:
            errorMessage = 'Непредвиденная ошибка!';
        }

        setError(errorMessage)
      });
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;

    if(name === 'login') {
      setNickname(target.value);
    } else if(name === 'password') {
      setPassword(target.value);
    }
  }

  if(localStorage.getItem("access_token") === null) {
    return (
      <div className="auth">
        <h1>Авторизация</h1>
        <p className="page-text">
          Для того, чтобы писать статьи нужно войти :). Вообще, по-хорошему, надо будет запилить регистрацию и
          возможность комментирования статей, но это потом, хорошо? (. ❛ ᴗ ❛.)
        </p>
        <p className="error-message">{error}</p>
        <div className="field-block">
          <label htmlFor="login">Никнейм:</label>
          <input
            id="login"
            name="login"
            type="text"
            className={nickname.length < Limits.NicknameMin? 'auth-input bad-input' : 'auth-input'}
            maxLength={Limits.NicknameMax}
            onChange={handleInputChange}
          />
        </div>
        <div className="field-block">
          <label htmlFor="password">Пароль:</label>
          <input
            id="password"
            name="password"
            type="password"
            className={password.length < Limits.PasswordMin? 'auth-input bad-input' : 'auth-input'}
            maxLength={Limits.PasswordMax}
            onChange={handleInputChange}/>
        </div>
        <button className="auth-button" onClick={loginHandler}>Войти</button>
      </div>
    )
  } else {
    return (
      <React.Fragment>
        <h1>Ты авторизовался :D</h1>
        <p className="page-text">
          Я очень рад, что ты не хочешь оставаться инкогнито 🕵️, но <mark>авторизация уже успешно выполнена</mark>, ты
          в системе, не переживай!
          (☞ﾟヮﾟ)☞  Можешь вернуться на главную страницу:
        </p>
        <button onClick={() => {history.push('/')}}>На главную! 📃</button>
      </React.Fragment>
    )
  }
}
