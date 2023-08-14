//------------------------------------------------Aliases--------------------------------------------

type httpMethod = "post" | "get"; //Помогает определить конкретный тип и далее использовать краткую запись, вызывая просто httpMethod

type coolString = string; //Можем указывать обозначение

function fetchWithAut(url: string, method: httpMethod): 1 | -1 {  //Можем не указывать в передаче значений post или get, а заранее объявить, что это будет type httpMethod = "post" | "get";
  return 1;
}

//let meth = "post" //передать в функцию будет нельзя, так как тип будет не "post", а string

//Как решить? Нужно использовать const

const meth = "post"
fetchWithAut("https://fsdf.fds", meth); //Теперь при передаче значений, можем передать только post или get, другие значения уже нельзя






//////////////////////////////////////////////////////



// let user: {       //Чтобы не писать много типизаций, можно использовать Alias и заранее объявить
//   name: string,
//   age: number,
//   skills: string[],
// } = { 
//   name: "Mark",
//   age: 23,
//   skills: ["1", "2"]
// }

type User = {
  name: string,
  age: number,
  skills: string[],
}

let user: User = { //И теперь можно использовать 
  name: "Mark",
  age: 23,
  skills: ["1", "2"]
}

/////////////////////////////////////////////////////
//Можно добавить и соединить эти объявления типов

type UserNEW = {
  name: string,
  age: number,
  skills: string[],
}

type Role = {
  id: number;
}

type UserWithRole = UserNEW & Role


let userInfo: UserWithRole = { //Теперь они объединились name, age, skills и id
  name: "fdsfsdf",
  age: 23,
  skills: ["1", "2", "3", "4"],
  id: 1
}