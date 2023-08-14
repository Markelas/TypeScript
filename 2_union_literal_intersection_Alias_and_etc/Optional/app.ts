interface User {
  login: string;
  password?: string; // ? Обозначает опциональность свойства, можно передавать пароль или нет
}

const user: User = {
  login: "fsdf@fsd.fdsf",
  password: "4324324",
};

///////////////////////
function multiply(first: number, second?: number | undefined): number {
  //Можно передавать, что второй параметр либо есть, либо это число или undefined
  if (!second) {
    //Если числа нет, то воспользоваться им нельзя
    return first * first;
  }
  return first * second; //Если есть, то работаем с ним
}

interface UserPro {
  login: string;
  password?: {
    type: "primary" | "secondary";
  };
}

function testPass(user: UserPro) {
  const t = user.password?.type; //Мы можем обратиться к свйоству объекта, которого может и не быть, так как указан ? в UserPro и может быть не передан
  const s = user.password!.type; // ! знак означает, что 100% здесь не будет undefined, точно будет какое-либо значение, нужно использовать очень аккуратно
}

function test(param?: string) {
  const t = param ?? multiply(5); // ?? означает, что если param будет undefined или null, то выполяем функцию и возвращается результат в t
}



