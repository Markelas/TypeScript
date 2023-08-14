//--------------------VOID--------------------//
// Void означает, что функция ничего не возвращает
function logID(id: string | number): void {
  console.log(id);
}

const a = logID(1); // a имеет теперь тоже тип void

function multiply(f: number, s?: number) {
  if (!s) {
    return f * f;
  }
} //Получается, если будет параметр s, то  number, а если не будет s, то будет undefind

function multiply1(f: number, s?: number): number | void {
  //Добавим void, значит функция вернет либо number, или ничего
  if (!s) {
    return f * f;
  }
}

type voidFunc = () => void;

const f1: voidFunc = () => {};

const f2: voidFunc = () => {
  return true;
};

const b = f2();

const skills = ["dev", "driver"];

const user = {
  s: ['s'],
};

skills.forEach((skill) => user.s.push(skill));
