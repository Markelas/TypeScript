let a = 5;
let b: string = a.toString();

///////// string и String
// let e: string = new String(a);
// Это не одно и тоже, тип string и более сложный тип, String, который является объектом
let ea: string = new String(a).valueOf(); //Такая запись будет уже правильна, valueOf возвращает примитивное значение

let fs: boolean = new Boolean(a).valueOf(); //Также и с другими типами

let c = "fdsf432";
let d: number = parseInt(c); //Проверяем число, также и можем в TS сразу преобразовать тип

interface User {
  name: string;
  email: string;
  login: string;
}

const user: User = { // Без User, у user будет просто объектный тип и далее, обозначая интерфейс User, происходит проверка, что этот объект подходит под условия интерфейса
  name: "Vasya",
  email: "vasya@yandex.ru",
  login: "vasya2010"
}

const user1: User = { 
  name: "Vasya",
  email: "vasya@yandex.ru",
  login: "vasya2010"
} as User  //Тоже самое что и прошлая запись

const user2 = <User> { 
  name: "Vasya",
  email: "vasya@yandex.ru",
  login: "vasya2010"
} //Тоже самое что и прошлая запись, но не рекомендуется, так как <> зарезервировано в React используется компонент


// Например, хотим 
interface Admin {
  name: string;
  role: number;
}