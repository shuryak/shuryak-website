import sendRequest from './sendRequest';
import ApiErrors from './apiErrors';

export const refreshTokenPair = () => {
  const refreshTokenDto = {
    refresh_token: localStorage.getItem("refresh_token")
  }

  sendRequest('POST', 'http://localhost:8181/api/users.refreshTokenPair', refreshTokenDto)
    .then(data => {
      const errorCode: number | undefined = data.data.error_code;

      if(errorCode === undefined) {
        localStorage.setItem("access_token", data.data.access_token);
        localStorage.setItem("access_expires_in", data.data.access_expires_in);
        localStorage.setItem("refresh_token", data.data.refresh_token);
        localStorage.setItem("refresh_expires_in", data.data.refresh_expires_in);
        return;
      }

      alert('Ошибка обновления токена! Пожалуйста, повторите попытку входа!')
    });
}