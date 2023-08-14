//-------------------------------------------NEVER------------------------------------//
// Never означает, что такое никогда не произойдет, поможет сделать код более безопасным

function generateError(message: string): never { //Означает, что функция никогда не вернется
  throw new Error(message);
}

function dumpError(): never { //Тоже никогда не вернется, если добавить в функцию return, то будет ошибка
  while(true) {}
}
//Функция никогда не завершается корректно и ничего не будет возвращено
//Отличие от void 
// Функция, которая ничего не возвращает, возвращает значение void. Однако функция которая никогда ничего не возвращает (или всегда выбрасывает ошибку), возвращает never.
//void - это то, что может быть присвоено (без strictNullChecking), но never никогда не может быть присвоено чему-либо, кроме never.

function rec(): never {
  return rec();
}

// const a: never = undefined ничего нельзя присвоить


//Рассмотрим пример

type paymentAction = 'refund' | 'checkout' | 'reject';
//Добавим другой тип в union "reject"
function processAction(action: paymentAction) {
  switch (action) {
    case "refund":
      //...
      break;
    case "checkout":
      //...
      break;
    default:
      //Можно добавить такую проверку, чтобы во время написания кода, можно было заметить, что добавлено новое значение
      //const _: never = action;
      throw new Error('Нет такого action');
  }
}



function isString(x: string | number) : boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return false;
  }
  generateError("oshibka"); //Эта функция возвращает never, поэтому условие отработает, это исчерпывающая проверка
}