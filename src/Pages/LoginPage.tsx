import React, { useState } from 'react';
import { UserLoginDTO } from '../../custom-typings/user';
import '../scss/login.scss';
import sendRequest from '../sendRequest';
import ApiErrors from '../apiErrors';
import Limits from '../limits';

export const LoginPage: React.FunctionComponent = () => {
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

    sendRequest('POST', 'http://localhost:8181/api/users.login', dto)
      .then(data => {
        const errorCode: number | undefined = data.data.error_code;
        if(errorCode === undefined) {
          localStorage.setItem("access_token", data.data.access_token);
          setError('');
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

  return (
    <div className="auth">
      <h1>Авторизация</h1>
      <p className="page-text">
        Для того, чтобы писать статьи нужно войти :). Вообще, по-хорошему, надо будет запилить регистрацию и
        возможность комментирования статей, но это потом, хорошо? (. ❛ ᴗ ❛.)
      </p>
      <p className="error-message">{error}</p>
      <div className="auth-field">
        <label htmlFor="login">Никнейм:</label>
        <input
          id="login"
          name="login"
          type="text"
          className={nickname.length < Limits.NicknameMin? 'bad-input' : ''}
          maxLength={Limits.NicknameMax}
          onChange={handleInputChange}
        />
      </div>
      <div className="auth-field">
        <label htmlFor="password">Пароль:</label>
        <input
          id="password"
          name="password"
          type="password"
          className={password.length < Limits.PasswordMin? 'bad-input' : ''}
          maxLength={Limits.PasswordMax}
          onChange={handleInputChange}/>
      </div>
      <button className="auth-button" onClick={loginHandler}>Войти</button>
    </div>
  )
}
