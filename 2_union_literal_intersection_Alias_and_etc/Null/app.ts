//---------------------------Тип NULL-------------------------/
const n: null = null;
// const n1: null = undefined;
// null не может быть назначен как number и другие типы как boolean, string и другие
const n2: any = null; //Зато с any можно

interface User {
  name: string;
}

function getUser() {
  if (Math.random() > 0.5) {
    return null; //Мы должны указать что возвращаем null, иначе будет ошибка
  } else {
    //Так как значения может и не быть
    return {
      name: "Vasya",
    } as User;
  }
}

const user = getUser();
if (user) {
  const n55 = user.name;
}
// Отличие undefind и null
// null явно заданно, что этого объекта нет
// undefind говорит, что мы его не задали и возможно его можем получить в run time

//Если нет объекта и это осознанно, нужно возвращать null