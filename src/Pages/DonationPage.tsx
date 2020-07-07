import React from 'react';
import '../scss/main.scss';
import '../scss/donation.scss';

export const DonationPage = () => {
  return (
    <React.Fragment>
      <h1 className="page-header">Донат</h1>
      <p className="page-text">
        Если нравится контент, можно поддержать меня донатом. Просто укажите сумму пожертвования и нажмите
        "<mark>Подарить</mark>"! Если хотите, в комментарии платежа можете указать своё имя, никнейм, кличку Вашей
        собаки, и тогда интернет это не забудет, а я буду рад!
      </p>
      <div className="yandex-form">
        <form
          method="POST"
          action="https://money.yandex.ru/quickpay/confirm.xml"
        >
          <input type="hidden" name="receiver" value="410015672579074"/>
          <input type="hidden" name="formcomment" value="shuryak"/>
          <input type="hidden" name="short-dest" value="shuryak"/>
          <input type="hidden" name="label" value="$order_id"/>
          <input type="hidden" name="quickpay-form" value="donate"/>
          <input type="hidden" name="targets" value="Пожертвование shuryak"/>
          <label htmlFor="sum">Введите сумму:</label>
          <input type="number" name="sum" id="sum" defaultValue="50" datatype="number" min="0" max="15000"/>
          <label htmlFor="comment">Комментарий (необязательно):</label>
          <textarea name="comment" id="comment" placeholder="ʕ ᵔᴥᵔ ʔ"/>
          <input type="hidden" name="need-fio" value="false"/>
          <input type="hidden" name="need-email" value="false"/>
          <input type="hidden" name="need-phone" value="false"/>
          <input type="hidden" name="need-address" value="false"/>
          <div className="payment-type">
            <label className="radio-container">Яндекс.Деньгами
              <input type="radio" defaultChecked={true} name="paymentType" value="PC"/>
                <span className="checkmark"/>
            </label>
            <label className="radio-container">Банковской картой
              <input type="radio" name="paymentType" value="AC"/>
              <span className="checkmark"/>
            </label>
          </div>
          <button type="submit">Подарить</button>
        </form>
      </div>
    </React.Fragment>
  );
}
