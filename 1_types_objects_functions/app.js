"use strict";
// function getFullName(first: string, surname: string) :string {
//   return `${first} ${surname}`; //Будет возвращаться строка
// }
//Стрелочная функция
// const getFullName = (first: string, surname: string) :string => {
//   return `${first} ${surname}`;
// }
//Передача объектов в функцию
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`; //Будет возвращаться строка
}
const user = {
    firstname: "Mark",
    surname: "Girfanov",
    city: "NSK",
    age: 23,
    skills: {
        div: true,
        drive: true,
    },
};
console.log(getFullName(user)); //Отобразится Mark Girfanov, но если не передать какое-либо из значений, TS даст ошибку
//TS не даёт ошибиться и не обратиться к свойствам, которых нет
///Типизируем JSON 
let info = {
    officeId: 45,
    isOpened: false,
    contacts: {
        phone: "+79100000000",
        email: "my@email.ru",
        address: {
            city: "Москва",
        },
    },
};
//Массивы
const skills = ['Dev', 'DevOps', "Testing"]; //Если передаём String, то другие типы передать нельзя, например, если добавить в массив цифру 1, то будет ошибка
// const skillsNew: any[] = ['Dev', 'DevOps', 1]; //Можно использовать тип any[], но это не хорошо, нужно всё типизировать
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const res = skills
    .filter((s) => s !== 'DevOps')
    .map(s => s + '!')
    .reduce((a, b) => a + b);
console.log(res);
//Кортежи Tuples
const skillTuples = [1, "Dev"]; //Если оставим так, то в типе указано (string | number), т.е. в массиве или строка или число 
const skillTuplesNew = [1, "Dev"]; // Описание, что вначале идет number, а потом будет string
