//-------------UNKNOWN----------------//
//Не знаем, что лежит в переменной, придёт извне, либо это ошибка, и можем заранее обозначить
//Используется в случаях, когда получаем переменную извне, хотим типизацию, но не знаем что это, затем можно ее перевести в any и уже далее определить ее тип

//Различия any и unknown

let input: unknown;

input = 3;
input = ["sf", "sadf"]; //Тип может меняться

// let res: string = input; //Но если попробуем присвоить значение unknown другой типизированной переменной, будет ошибка
// В отличие от any, мы бы смогли сделать присвоение
// unknown более строгий тип, использя его, мы не знаем что за тип, но нужно определить
// Можно положить unknown в any и потом совершить с ним нужные действия по приведению типа

function run(i: unknown) {
  if (typeof i == "number") {
    i++;
  } else {
    //Сужение типов для unknown работать не будет, он всегда будет unknown
    i;
  }
}

run(input);

//Где можем столкнуться с unknown

async function getData() {
  try {
    await fetch("");
  } catch (error) {
    //С недавнего времени ошибка была any, а сейчас стала unknown
    if (error instanceof Error) {
      //Поэтому нам нужно делать проверку, является ли это Error
      console.log(error.message);
    }
  }
}

async function getDataForce() {
  try {
    await fetch("");
  } catch (error) {
    if (error instanceof Error) {
      const e = error as Error; //Кастанём полученный error как Error, но такое приведение типов, можно только если там мы 100% понимаем, что есть error
      console.log(e.message);
    }
  }
}


// Посмотрим как работает unknow с другими типами
//Unknown и union с другим типом, всегда будет unknown
type U1 = unknown | null;
type U2 = unknown | number;
type U3 = unknown | string;
//Все будет unknown

//Если intersection unknown и любой другой тип, будет второй, узкий тип
type I1 = unknown & string; //unknown широкое понятие и берется узкое понятие, например, string