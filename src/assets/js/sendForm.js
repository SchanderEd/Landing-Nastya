document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.footer__form');
  const formBtn = document.querySelector('.footer__form-btn');
  const btnText = document.querySelector('.form-btn__content');
  const loadSpinner = document.querySelector('.spinner');
  
  form.addEventListener('submit', formSend);

  const textError = 'Ошибка!';
  const errorClass = 'error-message';
  const successText = 'Отправлено!';
  const commonText = 'Отправить';

  const changeTextBtn = (str, classStyle) => {
    btnText.textContent = str;
    btnText.classList.add(classStyle);
  }

  const commonBtnText = () => {
    if (btnText.classList.contains(errorClass)) {
      btnText.classList.remove(errorClass);
    }
    btnText.textContent = commonText;
  }

  async function formSend(e) {
    e.preventDefault();

    // let error = formValidate(form);

    let formData = new FormData(form);
    formBtn.disabled = true;
    formBtn.classList.add('_sending');
    btnText.classList.add('hidden');
    loadSpinner.classList.add('spinner--active')
    let response = await fetch('./telegram.php', {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      formBtn.disabled = false;
      changeTextBtn(successText);
      form.reset();
      formBtn.classList.remove('_sending');
      btnText.classList.remove('hidden');
      btnText.textContent = successText;
      loadSpinner.classList.remove('spinner--active')

      setTimeout(commonBtnText, 2000);
    } else {
      alert('Ошибка отправки');
      formBtn.disabled = false;
      changeTextBtn(textError, errorClass);
      formBtn.classList.remove('_sending');
      btnText.classList.remove('hidden');
      loadSpinner.classList.remove('spinner--active')

      setTimeout(commonBtnText, 2000);
    }
  }
})