// TYPE GUARD

function logId(id: string | number) {
  if (typeof id === "string") {
    console.log(id); //Если это строка, то делает это
  } else {
    console.log(id); //Если это число, то это
  }
}



//-------------------------------С Type Guard------------------------------------------//

function isString (x: string | number): x is string { //Это Type Guard
  return typeof x === "string"
}

//Теперь можно записть с использованием Type Guard

function logIdNEW(id: string | number) {
  if (isString(id)) { //Если 
    console.log(id); //Если это строка, то делает это
  } else {
    console.log(id); //Если это число, то это
  }
}



//---------------------------Более сложный Type Guard------------------------------------//

interface User { //Создали интерфейсы
  name: string;
  email: string;
  login: string;
}

interface Admin {
  name: string;
  role: number;
}

const user: User = { //Создали объект с пользователем
  name: 'Марк',
  email: "fsdfsdf@fdsfs.dsf",
  login: "Marko",
}

function isAdmin(user: User | Admin): user is Admin {
  return "role" in user; //Если "role" есть в объекте user (но ключ "role", есть только у Admin)
}

function isAdminAlternative(user: User | Admin): user is Admin {
  return (user as Admin).role !== undefined; //Если Юзера представить как админ и при проверке по ключу, ответ будет не undefined, значит это админ
}

function setRoleZero(user: User | Admin) {
  if (isAdmin(user)) {
    user.role = 0;
  } else {
    throw new Error('Пользователь не администратор')
  }
}

//-----------------------------------------------------Test--------------------------------------------------//
interface IPayment {
	sum: number;
	from: number;
	to: number;
}

enum PaymentStatus {
	Success = 'success',
	Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
	databaseId: number;
}

interface IDataFailed {
	errorMessage: string;
	errorCode: number;
}

interface IResponseSuccess {
	status: PaymentStatus.Success;
	data: IDataSuccess;
}

interface IResponseFailed {
	status: PaymentStatus.Failed;
	data: IDataFailed;
}

type f = (res: IResponseSuccess | IResponseFailed) => number;

type Res = IResponseSuccess | IResponseFailed; //Обозначили Res как union type, чтобы не повторяться


function isSuccess(res: Res): res is IResponseSuccess { //ТАЙП ГАРД Проверяем, является ли полученный результат успешным
  if (res.status === PaymentStatus.Success) { //Делаем проверку с помощью поля статус, если у полученного ответа будет совпадать результат из поля enum
    return true; //Возвращаем правда, что функция успешна
  }
  return false
}

function getIdFromData(res: Res) :number {
  if (isSuccess(res)) { //Если функция выше успешна
    return res.data.databaseId; //Возвращаем Id ответа
  } else {
    throw new Error(res.data.errorMessage) //Если нет, то выходит ошибка
  }
}