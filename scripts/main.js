$(function () {

 
  $('.helper').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('helper-active')
    $(this).children('.helper-answer').slideToggle()
  })

  function themeSwitcher() {
    if ($('.switch').css('left') == '43px') {
      $('.switch').css('left', "3px");
      $('.wrapper').toggleClass('wrapper-dark')
      $('.heading').toggleClass('heading-dark')
      $('.message-info').toggleClass('heading-dark')
    } else {
      $('.switch').css('left', "43px");
      $('.wrapper').removeClass('wrapper-dark');
      $('.heading').removeClass('heading-dark')
      $('.message-info').removeClass('heading-dark')
    }
  }
  $('.switch').on('click', function () {
    themeSwitcher();
  })

  $('.send').on('click', function (e) {
    e.preventDefault();
    var userMessage = $('.message-area').val();
    if (userMessage.length !== 0) {
      $('.messages-box').append(
        '<div class="user-message"><div class="user-text">' + userMessage + '</div><div class="user-image"><img src="content/user.jpg" alt=""><p class="user-name">Кирилл</p></div></div>');
      $('.message-area').val('');
      if (userMessage != 'Смени тему' && userMessage != "смени тему")
        messageChecker(userMessage);
      else {
        console.log('Буду я')
        if ($('.switch').css('left') == '43px') {
          $('.switch').css('left', "3px");
          $('.wrapper').toggleClass('wrapper-dark')
          $('.heading').toggleClass('heading-dark')
          $('.message-info').toggleClass('heading-dark')
          $('.messages-box').append(
            '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Что-то как-то темно стало..</div></div>');
        } else {
          $('.switch').css('left', "43px");
          $('.wrapper').removeClass('wrapper-dark');
          $('.heading').removeClass('heading-dark')
          $('.message-info').removeClass('heading-dark')
          $('.messages-box').append(
            '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Свет дали?</div></div>');
        }
      }
    } else {
      alert('Вы не ввели сообщение')
    }
  })

  $('.game').on('click', function (e) {
    e.preventDefault();
    $('.messages-box').append(
      '<div class="user-message"><div class="user-text">Хочу сыграть в игру</div><div class="user-image"><img src="content/user.jpg" alt=""><p class="user-name">Кирилл</p></div></div>');
    setTimeout(gameChoose(), 10000);
  })

  $('.weather').on('click', function (e) {
    e.preventDefault();
    weatherMessage = 'Погода'
    messageChecker(weatherMessage)
  })

  $('.random').on('click', function (e) {
    e.preventDefault();
    $('.messages-box').append(
      '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Выберите диапазон в формате "0,100"</div></div>');
      userNumberLine = prompt('Введите диапазон, среди которого нужно выбрать случайно число (От n до N):')
      $('.messages-box').append(
        '<div class="user-message"><div class="user-text">'+userNumberLine+'</div><div class="user-image"><img src="content/user.jpg" alt=""><p class="user-name">Кирилл</p></div></div>');
      getRandom(userNumberLine);
  })
})

