/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = 10 + 20
console.log('la somma di questi valori è' + ' ' + sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 21)
console.log(random)
// ho usato math.floor per avere solo numeri interi e math.random per generare un numero diverso a ogni esecuzione moltiplicato per 21 per avere i valori compresi tra 0 e 20

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: 'Sara',
  surname: 'Severgnini',
  age: 19,
}
console.log('presentazione di me', me)
// ho creato un oggetto con le proprietà richieste e l'ho fatto risultare in console

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age
console.log(me)
// ho usato la keyword delete per eliminare la proprietà age dall'oggetto precedentemente creato

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ['html', 'css', 'javascript']
console.log(me)
//ho aggiunto l'array skills all'oggetto creato prima con dentro i linguaggi di programmazione che conosco e l'ho mostrato in console

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push('new element')
console.log(me)
// ho usato la proprietà .push() per aggiungere un elemento all'array creato dentro l'oggetto di prima

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop()
console.log(me)
//ho usato la proprietà .pop() per eliminare ultimo elemento dell'array creato dentro l'oggetto di prima

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  const randomnumbers = Math.floor(Math.random() * 7)
  return randomnumbers
}
console.log(dice())
// ho creato la funzione dice e dentro una variabile dove ho riusato Math.floor e Math.random moltiplicati per il numero che mi serviva, ho chiuso la variabile con return per farla risultare e l'ho mostrata in console

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = function (num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}
console.log('Il numero maggiore è:', whoIsBigger(4, 8))
// ho creato la funzione e le ho assegnato due numeri come parametri poi ho usato un if per far risultare il maggiore dei due

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = function (stringa) {
  return stringa.split(' ')
}
console.log(splitMe('i like reading and cooking'))
//ho creato la funzione e le ho assegnato come parametro una stringa poi usando return ho applicato la proprietà .split() per dividere la stringa assegnando uno spazio vuoto come separatore, poi l'ho fatta resultare in console

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function (stringa, booleano) {
  if (booleano === true) {
    return stringa.slice(1)
  } else {
    return stringa.slice(0, -1)
  }
}
console.log(deleteOne('ciao', true))
console.log(deleteOne('ciao', false))
//creta la funzione e assegnati una stringa e un booleano come parametri ho usato un if per far risultare quello che mi serviva e la proprieta .slice per eliminare il primo carattere nel primo caso e l'ultimo nel secondo caso

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = function (stringa) {
  return stringa.replace(/[0-9]/g, '')
}
console.log(onlyLetters('i have 1 sister and 2 dogs'))
// creata la funzione ho usato la proprietà replace che ho cercato su google perchè mi sono bloccata sulla parte dei numeri da eliminare

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = function (stringa) {}
console.log(isThisAnEmail('info@epicode.school'))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = function () {
  const giorniDellaSettimana = [
    'Domenica',
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato',
  ]
  // è una variabile con tutti i giorni della settimana
  const oggi = new Date()
  // questa variabile serve a ottenere il giorno di oggi
  const giornoIndex = oggi.getDay()
  // questa serve per avere l'indice del giorno di oggi

  return giorniDellaSettimana[giornoIndex]
  // Ritorna il giorno corrispondente
}
console.log(whatDayIsIt())
// mostra in console il giorno della settimana corrente

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = function (number) {
  const result = {
    sum: 0,
    values: [],
  }
  //la variabile per vedere il risultato

  for (let i = 0; i < number; i++) {
    const value = dice()
    // invocazione della precedente funzione ed estrazione dei numeri
    result.values.push(value)
    // Aggiungi il valore all'oggetto
    result.sum += value
    // Somma il valore al totale
  }

  return result
  // Ritorna l'oggetto con la somma e i valori
}

console.log(rollTheDices(6))
//mostra in console

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = function (data) {
  const today = new Date()
  // variabile che ci da la data corrente
  const pastDate = new Date(data)
  // Crea un oggetto Date dall'input

  const differenceInTime = today - pastDate
  // Calcolo della differenza

  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24))
  // Converte la differenza da millisecondi a giorni

  return differenceInDays
  // Ritorna il numero di giorni trascorsi
}

console.log(howManyDays('2022-12-18'))
// mostra in console

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = function () {
  const myBirthday = '04-25'
  // variabile con la data del mio compleanno
  const today = new Date()
  // variabile che ci da la data corrente
  const todayFormatted = `${today.getMonth() + 1}-${today.getDate()}`
  // variabile per formattare la data di oggi nel formato MM-DD

  if (todayFormatted === myBirthday) {
    return true
  } else {
    return false
  }
  // if per ritornare il risultato
}
console.log(isTodayMyBirthday())
//mostra in console

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = function (object, stringa) {
  if (stringa in object) {
    delete object.stringa
    // Elimina la proprietà chiamata come la stringa che passa come secondo parametro
  }

  return object
  // Ritorna l'oggetto dopo aver eliminato la proprietà
}
const object = {
  city: 'Milano',
  letters: 'A',
  stringa: 'ciao',
}
// oggetto che passa come primo parametro della funzione

console.log(deleteProp(object, 'stringa'))
//mostra in console

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function (movies) {
  const mostRecent = movies.reduce((latest, current) => {
    return parseInt(current.Year) > parseInt(latest.Year) ? current : latest
  })
  // per trovare il film più recente uso il metodo reduce

  return mostRecent
  // Restituisce il film più recente
}

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function () {
  return movies.length
  // Restituisce il numero di film nell'array
}
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = function () {
  return movies.map((movie) => movie.Year)
  // Utilizzo la proprietà map per creare un array di anni
}
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = function () {
  return movies.filter((movie) => {
    const year = parseInt(movie.Year)
    // questa variabile mi serve a convertire l'anno in numero
    return year >= 1001 && year <= 2000
    // questo return serve a controllare che l'anno appertenga al millennio scorso
  })
}
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function () {
  return movies.reduce((accumulator, movie) => {
    return accumulator + parseInt(movie.Year)
  }, 0)
  // usiamo return e la proprietà reduce per convertire gli anni che abbiamo come stringhe in numeri e per poi sommarli e ritornare il significato
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = function (stringa) {
  return movies.filter(
    (movie) => movie.Title.toLowerCase().includes(stringa.toLowerCase())
    // Verifica se il titolo contiene la stringa cercata
  )
}

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = function (stringa) {
  const result = {
    match: [],
    unmatch: [],
  }
  // questo è l'oggetto con i due array in cui andranno divisi i film

  movies.forEach((movie) => {
    if (movie.Title.toLowerCase().includes(stringa.toLowerCase())) {
      result.match.push(movie)
      // questo if Aggiunge a match i titoli che contengono la stringa cercata
    } else {
      result.unmatch.push(movie)
      // Altrimenti vengo aggiunti a unmatch
    }
  })
  // uso un forEach per dividere i film

  return result
  // Restituisce l'oggetto con i due array
}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = function (number) {
  const newMovies = []
  //array in cui tornano tutti i film in altre posizioni

  for (let i = 0; i < movies.length; i++) {
    if (i !== number) {
      // uso un if dentro a un for per capire se l'indice non è quello da rimuovere
      newMovies.push(movies[i])
      // e nel caso lo aggiunge all'array rimanente
    }
  }

  return newMovies
  //ritorna il nuovo array senza l'elemento che era nella posizione da rimuovere
}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const A = function () {
  const container = document.getElementById('container')
  return container
}
// uso .getElementById per selezionare l'elemento
console.log(A)
//se ci fossero elementi con quel Id li mostrerebbe in console

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const B = function () {
  const celle = document.querySelectorAll('td')
  return celle
}
// con .querySelectorAll possiamo selezionare ogni tag assegnato nella pagina
console.log(B)
// dovrebbe mostrarli in console

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const C = function () {
  const celle = document.querySelectorAll('td')
  //seleziona gli elementi

  celle.forEach((celle) => {
    console.log(celle.textContent)
  })
  // stampa il testo contenuto in console
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const D = function () {
  const links = document.querySelectorAll('a')
  // Seleziono tutti i link nella pagina

  links.forEach((link) => {
    link.style.backgroundColor = 'red'
  })
  // imposta lo sfondo su rosso
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const E = function (text) {
  const list = document.getElementById('myList')
  //seleziona la lista non ordinata con id myList

  const newItem = document.createElement('li')
  //crea un nuovo elemento

  newItem.textContent = text
  //imposta il testo

  list.appendChild(newItem)
  // aggiunge il nuovo elemento <li> alla lista
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const F = function () {
  const list = document.getElementById('myList')
  //seleziona la lista

  list.innerHTML = ''
  // Svuoto la lista impostando l'innerHTML su una stringa vuota
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const G = function () {
  const rows = document.querySelectorAll('tr')
  // Seleziona tutti gli elementi <tr> nel documento

  rows.forEach((row) => {
    row.classList.add('test')
  })
  // aggiungie la classe "test" ad ogni tag <tr>
}
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
console.log(newestMovie(movies))
//mostra in console l'esercizio 12

console.log(countMovies())
//mostra in console l'esercizio 13

console.log(onlyInLastMillennium())
//mostra in console l'esercizio 15

console.log(sumAllTheYears())
//mostra in console l'esercizio 16

console.log(searchByTitle('Avengers'))
//mostra in console l'esercizio 17

console.log(searchAndDivide('Avengers'))
//mostra in console l'esercizio 18

console.log(removeIndex(2))
//mostra in console l'esercizio 19
