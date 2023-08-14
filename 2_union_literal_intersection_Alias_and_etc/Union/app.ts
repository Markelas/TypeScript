//------------------------Union----------------------------//
const arr = ["asdf", 1];
// (string | number)

function logId(id: string | number) {
  console.log(id);
}
logId(1);
logId("fsdf");

//С union можем передать в функцию либо строку, либо число, также можно передавать и boolean
//Но мы не можем использовать никакие методы, так как не понятно, что это, string или number

function logIdNEW(id: string | number | boolean) {
  //Можем сузить типы, которые принимаем
  if (typeof id === "string") {
    console.log(id);
  } else if (typeof id === "number") {
    console.log(id);
  } else {
    console.log(id);
  }
} //Для каждого типа мы создали ветку, по которой он выполняется

function logError(err: string | string[]) {
  //Будет получать либо 1 строку, либо массив из строк
  if (Array.isArray(err)) {
    //Проверяем, если это массив, то выполняем что-то
    console.log(err);
  } else {
    //И если это не массив, то выполняем что-то, как со строкой
    console.log(err);
  }
}

///// Union и объекты

function logObject(obj: { a: number } | { b: number }) {
  //Будет получать либо 1 строку, либо массив из строк
  if ("a" in obj) {
    //Можем также брать объект и если совпадает, то больше к нему обратиться нельзя
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

//////

function logMultipleIds(a: string | number, b: string | boolean) {
  if (a === b) {
    //Можем сделать проверку по типу, если у них тип String, то обращаемся, как к строке
    a.toUpperCase;
    b.toLowerCase;
  } else {
    console.log(a); //Иначе, как number
  }
}

/////////
// Если написать
const a = 1 //Тип будет единица
//Если добавим тип к числу
let b: 1 = 1;
//Поменять уже не сможем на b = 2, так как мы задали тип 1