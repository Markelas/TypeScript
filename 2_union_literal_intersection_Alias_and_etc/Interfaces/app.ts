//-------------------------------------ИНТЕРФЙСЫ----------------------------------//
//Интерфейс определяет свойства и методы, которые объект должен реализовать.
//Другими словами, интерфейс - это определение кастомного типа данных, но без реализации. Интерфейсы определяются с помощью ключевого слова interface.

interface User {
  //Вместо type написали interface
  name: string;
  age: number;
  skills: string[];
  log: (id: number) => string;
}

interface Role {
  roleId: number;
}

interface UserWithRole extends User, Role {
  //Тоже также добавляем новый тип
  car: string;
  createAt: Date;
}

let user: UserWithRole = {
  name: "asd",
  age: 23,
  skills: ["1", "2"],
  roleId: 1,
  car: "BWM",
  createAt: new Date(),
  log(id) {
    return "";
  },
};


interface UserDic {
  [index: number]: User //Означает, чьл у index может быть неограиченное число свойств, где ключом является число, а значение это User
  //Таким образом получаем обозначение словаря
}



//----------------------------------------------------------Отличие interface от type---------------------------------------------------/




interface UserInterf {
  name: string
};

interface UserInterf {
  age: number
}

//Один дополняет другой, получается, в User name и age

const someUser: UserInterf = {
  name: "as",
  age: 23,
}

//Полезно, если используем какую-либо библиотеку и мы дополняем значения
//Вред может принести может если будет не видно второе добавляе interface, лучше писать всегда в одном определении



// С type нельзя так добавлять, будет ошибка 

/* type UserInterf {
  name: string
};

type UserInterf { // Повторяющийся идентификатор "UserInterf".
  age: number
}*/



//--------------Также нельзя определить 2 значения в Interface, как в type----------------
type ID = string | number;

interface IDI {
  ID: string | number
}

// Интерфес позволяет работать с объектами, описанием классов
// А type с простыми типами (можно только внутри)

