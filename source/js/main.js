const phoneInputs = document.querySelectorAll('input[data-tel-input]');

 if (phoneInputs) {
    const getInputNumbersValue = function (input) {
      return input.value.replace(/\D/g, '');
    };

    const onPhoneInput = function (e) {
      const input = e.target;
      const inputNumbersValue = getInputNumbersValue(input);
      let formattedInputValue = '';

      if (!inputNumbersValue) {
        input.value = '';
        return;
      }

      if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
        if (inputNumbersValue[0] === '9') {
          inputNumbersValue = '7' + inputNumbersValue;
        }
        const firstSymbols = (inputNumbersValue[0] === '8') ? '8' : '+7';
        formattedInputValue = firstSymbols + ' ';
        if (inputNumbersValue.length > 1) {
          formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
        }
      } else {
        // not russian
        formattedInputValue = '+7' + inputNumbersValue.substring(0, 10);
      }
      input.value = formattedInputValue;
    };

    const onPhoneKeyDown = function (e) {
      const input = e.target;
      if (e.keyCode === 8 && getInputNumbersValue(input).length === 1) {
        input.value = '';
      }
    };

    for (let i = 0; i < phoneInputs.length; i++) {
      const input = phoneInputs[i];
      input.addEventListener('focus', function (evt) {
        evt.target.value = '+7 (___)___-__-__';
      });
      input.addEventListener('input', onPhoneInput);
      input.addEventListener('keydown', onPhoneKeyDown);
    }
  }

  // Swiper

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      650: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      1024: {
        slidesPerView: 4,
        spaceBetween: 20
      },
    }
  });
