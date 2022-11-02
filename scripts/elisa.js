
let helloMessages = [
  "Привет!",
  "Здравствуйте!",
  timeHello()
]


function timeHello() {
  var date = new Date()

  if (date.getHours() >= 6 && date.getHours() <= 11) {
    return "Доброе утро!"
  } else if (date.getHours() >= 12 && date.getHours() <= 17) {
    return "Добрый день!"
  } else if (date.getHours() >= 18 && date.getHours() <= 23) {
    return "Доброго вечера!"
  } else {
    return "Доброй ночи!"
  }
}

$(function sayHello() {
  firstMessage = helloMessages[Math.floor(Math.random() * helloMessages.length)];
  actionRndMessage = actions[Math.floor(Math.random() * actions.length)];
  $('.hello-message').html(`${firstMessage} ${actionRndMessage}`)
})

const answerForDeals = [
  "У меня всё прекрасно",
  "Всё отлично",
  "Лучше не бывает!",
  "Лучше может быть только у Вас!"
]

const idk = [
  "Увы, я вас не понимаю",
  "Я даже и не знаю, что вам ответить",
  "Эх, знала бы я, как вам ответить..",
  "На это у меня, к сожалению, нет ответа"
]

const helloVariables = [
  "Привет",
  "Хай",
  "Здравствуйте"
]

const keyWords = [
  "А у тебя",
  "А у вас",
  "а у тебя",
  "а у вас",
  "у тебя дела",
  "а твои",
  "у тебя"
]

const keyWords_2 = [
  'игра',
  'сыграть',
  'сыгра',
  'поиграть'
]
const gameKeys = [
  "first", "second", "third"
]

const keyWords_3 = [
  "рандомное",
  "рандом",
  "случайное",
  "сгенерировать",
  "сгенерируй",
  "сген"
]

const keyWords_4 = [
  "google",
  "гугл",
]


const keyWords_5 = [
  "найди",
  "найти",
  "поиск"
]

const keyWords_6 = [
  "пока",
  "до встречи",
  "спасибо",
  "всего доброго",
  "спасибо за работу"

]

const keyWords_7 = [
  "привет",
  "приветик",
  "хай",
  "салют",
  "доброе у",
  "добрый в",
  "добрый д",
  "Здравствуйте"
]

const keyWordsGood = [
  "хорошо",
  "отлично",
  "круто",
  "замечательно",
  "невероятно"
]
const keyWordsBad = [
  "плохо",
  "отвратительно",
  "хуже не бывает",
  "могло быть и лучше",
  "грустно",
  "ужасно"
]

const answersForGood = [
  "Это же замечательно! Приступим к работе!",
  "Я очень за вас рада. Давай же поработаем тогда",
  "Надеюсь, после работы со мной будет ещё лучше!"
]

const answersForBad = [
  "Я думаю, работа и диалог со мной это исправит!",
  "Главное не расстраивайтесь, я всегда здесь",
  "Вам всего лишь стоит написать - найди мне смешные видео. Думаю, после этого ваше настроение стане лучше!",
  "У всех бывают взлёты и падения, но давайте подниматься вместе!"
]

const byeWords = [
  "Всего доброго!",
  "До встречи!",
  "Вы ведь зайдёте снова?",
  "До свидания.",
  "Уже всё? Эх, ну что ж - до свидания."
]

const actions = [
  "Чем займёмся?",
  "Какие буду пожелания?",
  "Чем я могу помочь?",
  "Как проходит ваш день?",
  "Как ваши дела сегодня?"
]
const userWords = [
  'Я точно выиграю, потому что выбрал - ',
  'Ты меня не победишь. Я выбрал - ',
  'Мой выбор пал на '
]

const gameVariables = {
  first: "Камень",
  second: "Бумага",
  third: "Ножницы"
}



function messageChecker(query) {
  lowerQuery = query.toLowerCase()
  for (let i = 0; i < keyWords.length; i++) {
    keyVariable = lowerQuery.includes(keyWords[i])

    console.log(`Итерация №${i} и ${keyVariable}`)
    if (keyVariable) {
      elisaAnswer()
      break;
    } else if (lowerQuery.includes('погода')) {
      city = prompt('Введите город:')
      return getWeather(city);
    }
    else if (!keyVariable && i === keyWords.length - 1) {
      messageChecker_2(lowerQuery)
      break;
    }
    console.log('Я выполняюсь?')
  }

}

function messageChecker_2(query) {
  for (let i = 0; i < keyWords_2.length; i++) {
    keyVariable = query.includes(keyWords_2[i])
    if (keyVariable) {
      gameChoose();
      break;
    } else if (!keyVariable && i === keyWords_2.length - 1) {
      messageChecker_3(query);
    }
  }
}

function messageChecker_3(query) {
  for (let i = 0; i < keyWords_3.length; i++) {
    keyVariable = query.includes(keyWords_3[i])
    if (keyVariable) {
      userLine = prompt('Введите диапозон: ')
      getRandom(userLine);
      break;
    } else if (!keyVariable && i === keyWords_3.length - 1) {
      messageChecker_4(query)
    }
  }
}


function messageChecker_4(query) {
  for (let i = 0; i < keyWords_4.length; i++) {
    keyVariable = query.includes(keyWords_4[i])
    if (keyVariable) {
      window.open('https://www.google.ru')
      break;
    } else if (!keyVariable && i === keyWords_4.length - 1) {
      messageChecker_5(query)
    }
  }
}

function messageChecker_5(query) {
  for (let i = 0; i < keyWords_5.length; i++) {
    keyVariable = query.includes(keyWords_5[i])
    if (keyVariable) {
      getAnswerGoogle(query)
      break;
    } else if (!keyVariable && i === keyWords_5.length - 1) {
      messageChecker_6(query)
    }
  }
}

function messageChecker_6(query) {
  for (let i = 0; i < keyWords_6.length; i++) {
    keyVariable = query.includes(keyWords_6[i])
    if (keyVariable) {
      sayBye();
      break;
    } else if (!keyVariable && i === keyWords_6.length - 1) {
      messageChecker_7(query)
    }
  }
}

function messageChecker_7(query) {
  for (let i = 0; i < keyWords_7.length; i++) {
    keyVariable = query.includes(keyWords_7[i])
    if (keyVariable) {
      // sayHello();
      break;
    } else if (!keyVariable && i === keyWords_7.length - 1) {
      messageChecker_8(query);
    }
  }
}
function messageChecker_8(query) {
  for (let i = 0; i < keyWordsBad.length; i++) {
    keyVariable = query.includes(keyWordsBad[i])
    if (keyVariable) {
      isBad(query);
      break;
    } else if (!keyVariable && i === keyWordsBad.length - 1) {
      messageChecker_9(query)
    }
  }
}
function messageChecker_9(query) {
  for (let i = 0; i < keyWordsGood.length; i++) {
    keyVariable = query.includes(keyWordsGood[i])
    if (keyVariable) {
      isGood(query);
      break;
    } else if (!keyVariable && i === keyWordsGood.length - 1) {
      elisaError();
    }
  }
}

function isGood(query){
  goodRndMessage = answersForGood[Math.floor(Math.random() * answersForGood.length)];
  console.log('Я выполняюсь')
  for (let i = 0; i < keyWordsGood.length; i++) {
    keyVariable = query.includes(keyWordsGood[i])
    if (keyVariable) {
      $('.messages-box').append(
        '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">' + goodRndMessage + '</div></div>');
      break;
    } else{

    }
    }
  }




function isBad(query) {
  badRndMessage = answersForBad[Math.floor(Math.random() * answersForBad.length)];
  console.log('Я выполняюсь')
  for (let i = 0; i < keyWordsBad.length; i++) {
    keyVariable = query.includes(keyWordsBad[i])
    if (keyVariable) {
      $('.messages-box').append(
        '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">' + badRndMessage + '</div></div>');
      break;
    } else{
      
    }
  }
  $('.messages-box').append(
    '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">' + badRndMessage + '</div></div>');
}

function sayHello() {
  helloRndMessage = helloMessages[Math.floor(Math.random() * helloMessages.length)];
  actionRndMessage = actions[Math.floor(Math.random() * actions.length)];
  $('.messages-box').append(
    '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">' + helloRndMessage + '</br>'+actionRndMessage+ '</div></div>');
}


function getAnswerGoogle(query) {
  googleLink = `https://www.google.ru/search?q=${query}`
  $('.messages-box').append(
    '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Здесь результат поиска: <a href="' + googleLink + '" class="search" target="_blank">Нажимай</a></div></div>');
}

function gameChoose() {
  $('.messages-box').append(
    '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Предлагаю сыграть в камень-ножнницы-бумага</div></div>');
  return getGameStone();
}

function getGameStone() {
  userRndMessage = userWords[Math.floor(Math.random() * userWords.length)];
  $('.messages-box').append(
    '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Итак, давайте найчём, вы первый. </br> Выберите - камень, бумага или ножницы</div></div>');
  userChoice = prompt('Выберите - камень, ножницы или бумага. Итак, ваш выбор?');
  $('.messages-box').append(
    '<div class="user-message"><div class="user-text">' + userRndMessage + userChoice + '</div><div class="user-image"><img src="content/user.jpg" alt=""><p class="user-name">Кирилл</p></div></div>');
  userChoice = userChoice.toLowerCase();
  if (userChoice.includes('ка')) {
    getStone(1);
  } else if (userChoice.includes('бу')) {
    getPapper(2);
  } else if (userChoice.includes('но')) {
    getScissors(3);
  } else {
    elisaError();
  }
}

// Правила игры - 
// 1 - камень
// 2 - бумага
// 3 - ножницы 

function getStone(stoneNumber) {
  computer = Math.round(Math.random(1, 3))
  console.log(`${computer} and ${stoneNumber}`)
  if (computer == 1) {
    $('.messages-box').append(
      '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Мне тоже выпал камень :) </br> Ничья.</div></div>');
  } else if (computer == 2) {
    $('.messages-box').append(
      '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Хехе, мне повезло!</br> Мне выпала бумага, я выиграла!</div></div>');
  } else {
    $('.messages-box').append(
      '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Эх, выпали ножницы...</br>Вы победили! Поздравляю!</div></div>');
  }
}


function getPapper(papperNumber) {
  computer = Math.round(Math.random(1, 3))
  console.log(`${computer} and ${papperNumber}`)
  if (computer == 1) {
    $('.messages-box').append(
      '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Эх, выпал камень...</br>Вы победили! Поздравляю!</div></div>');
  } else if (computer == 2) {
    $('.messages-box').append(
      '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Мне тоже выпала бумага :) </br> Ничья.</div></div>');
  } else {
    $('.messages-box').append(
      '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Хехе, мне повезло! Выпали ножницы</br>Я выиграла :)</div></div>');
  }
}
function getScissors(scissorsNumber) {
  computer = Math.round(Math.random(1, 3))
  console.log(`${computer} and ${scissorsNumber}`)
  if (computer == 1) {
    $('.messages-box').append(
      '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Хехе, мне повезло! Выпал камень</br>Я выиграла :)</div></div>');
  } else if (computer == 2) {
    $('.messages-box').append(
      '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Эх, выпала бумага... </br> Вы победили! Поздравляю!</div></div>');
  } else {
    $('.messages-box').append(
      '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Ух ты, мне тоже выпали ножницы!</br>Ничья :)</div></div>');
  }
}


function getWeather(city) {
  let apiKey = "420278c24eda6cdeacc22a08d823637e";
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
  axios.get(url).then(res => {
    console.log(res.data);
  })
  axios.get(url).then(res => {
    if (Math.round(res.data.main.temp) <= 0) {
      $('.messages-box').append(
        '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Погода в городе - ' + city + ' </br>Температура: ' + Math.round(res.data.main.temp) + '</br>На улице вода замерзает уже... Оденьтесь теплее</div></div>');
    } else if (Math.round(res.data.main.temp) > 0 && Math.round(res.data.main.temp) < 10) {
      $('.messages-box').append(
        '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Погода в городе - ' + city + ' </br>Температура: ' + Math.round(res.data.main.temp) + '</br>Конечно, холодно ещё на улице. Постарайтесь не замёрзнуть</div></div>');
    } else {
      $('.messages-box').append(
        '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Погода в городе - ' + city + ' </br>Температура: ' + Math.round(res.data.main.temp) + '</br>На улице тепло, можно даже и погулять :)</div></div>');
    }
  })
}


function getRandom(userLine) {
  console.log(typeof (userLine))
  if (userLine.includes(',')) {
    userNumbers = userLine.split(',')
  } else if (userLine.includes(' ')) {
    userNumbers = userLine.split(' ')
  } else if (userLine.includes(', ')) {
    userNumbers = userLine.split(', ')
  }
  userFirstNumber = parseInt(userNumbers[0], 10)
  userSecondNumber = parseInt(userNumbers[1], 10)
  console.log(`${typeof (userFirstNumber)} and ${typeof (userSecondNumber)}`)
  console.log(`${userFirstNumber} and ${userSecondNumber}`)
  result = Math.floor(Math.random() * userSecondNumber)
  return $('.messages-box').append(
    '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">Ваше число: ' + result + '</div></div>');

}

function elisaAnswer() {
  const howAreYou = answerForDeals[Math.floor(Math.random() * answerForDeals.length)];
  return $('.messages-box').append(
    '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text">' + howAreYou + '</div></div>');
}

function elisaError() {
  const idkAnswer = idk[Math.floor(Math.random() * idk.length)];
  return $('.messages-box').append(
    '<div class="elisa-message"><div class="elisa-image"><img src="content/elisa.png" alt=""><p class="elisa-name">Элиза</p></div><div class="elisa-text"> ' + idkAnswer + ' :(</div></div>');
}