// function getFullName(first: string, surname: string) :string {
//   return `${first} ${surname}`; //Будет возвращаться строка
// }



//Стрелочная функция
// const getFullName = (first: string, surname: string) :string => {
//   return `${first} ${surname}`;
// }



//---------------------------------------------------Передача объектов в функцию-------------------------------------/
function getFullName(userEntity: {
  firstname: string;
  surname: string;
}): string {
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





//---------------------------------------------------------Типизируем JSON-------------------------------------------/
let info: {
  officeId: number;
  isOpened: boolean;
  contacts: {
    phone: string;
    email: string;
    address: { city: string };
  };
} = {
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






//---------------------------------------------------Массивы-------------------------------------------------/

const skills = ['Dev', 'DevOps', "Testing"]; //Если передаём String, то другие типы передать нельзя, например, если добавить в массив цифру 1, то будет ошибка

// const skillsNew: any[] = ['Dev', 'DevOps', 1]; //Можно использовать тип any[], но это не хорошо, нужно всё типизировать

for (const skill of skills) {
  console.log(skill.toLowerCase());
}

const res = skills
  .filter((s : string) => s !== 'DevOps')
  .map(s => s + '!')
  .reduce((a, b) => a + b);

console.log(res);


//Можно объявлять массивы еще так:
const skillsS: Array<string> = ["Dev", "Driver"]


//------------------------------------------------Кортежи Tuples----=====--------------------------------------/

const skillTuples = [1, "Dev"] //Если оставим так, то в типе указано (string | number), т.е. в массиве или строка или число 

const skillTuplesNew: [number, string] = [1, "Dev"] // Описание, что вначале идет number, а потом будет string
//Tuples нужен только для типизации массива
const id = skillTuplesNew[0];
const skillName = skillTuplesNew[1];
//const q = skillTuplesNew[2]; //Появляется ошибка, что мы не можем обратиться к 3 элементу, так как его нет
//Можем пушить в массив новые элементы
skillTuplesNew.push('Driver'); //В рамках рантайма можем получить другую длину массива
skillTuplesNew.pop(); //Также удалить элемент массива
// const fdsf = skillTuplesNew[2]; //Но обратиться к пока еще не существующему элементу массива, мы не можем
const [skillId, skill] = skillTuplesNew //Можем также сделать деструкторизацию, тип будет number и затем string

const arr: [number, string, ...boolean[]] = [1, "sfdsf", true, true, false, true] //Можно использовать spread оператор, чтобы на все следующие значения использовать boolean


//---------------------------------------------------READONLY---------------------------------------------------/

const skillReadOnly: readonly [number, string] = [1, "Dev"];

//Чтобы сделать, неизменяемое значение в кортеже, или массиве используется readonly 

const skillReadOnlyGen: ReadonlyArray<string> = ["Dev", "Driver"];



//---------------------------------------------------ENUMS---------------------------------------------------/

//Допустим, нужно брать статус операции и чтобы не совершить ошибку в коде и указать не то значение, пользуемся enum

enum StatusCode { //3 статус кода
  SUCCESS = 1,
  IN_PROCESS = 2,
  FAILD = 3,
}

const result = {
  mes: "Успешно",
  statusCode: StatusCode.SUCCESS,
}

// 1 - успех, 2 -в процессе, 3 - отклонено

// if (res.statusCode === StatusCode.SUCCESS) {
//   // ---
// }

function action (status: StatusCode) {
  //...
}

action(StatusCode.SUCCESS) //Можем обращаться по enum

////

enum Roles { //Можно использовать как роль для пользователя
  ADMIN,
  USER
}

// enum похож на объект

// Также, можем объявлять enum как константу
const enum Rol {
  Adm = 1,
  Use = 2,
}

const res2 = Rol.Adm //В JS будет отображение, что просто передается значение 1


//-------------------------------Задание, перевести из кода JS в TS ---------------------------------/
// async function getFaqs(req) {
// 	const res = await fetch('/faqs', {
// 		method: 'POST',
// 		body: JSON.stringify(req)
// 	});
// 	const data = await res.json();
// 	return data;
// }

enum QuestionStatus{ //Передаем обозначения статусов, которые могут быть в запросе
  Published = "published",
  Draft = "draft",
  Deleted = "deleted",
}

async function getFaqs(req: {
  topicId: number;
  status?: QuestionStatus //Используем enum, как статус, со знаком ?, значит опционально, может быть, а может и нет
}) : Promise<{ //Что она возвращает, указываются все типы значений
  question: string;
  answer: string;
  tags: string[];
  likes: number;
  status: QuestionStatus;
}[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}


// /* Запрос */
// {
// 	"topicId": 5,
// 	"status": "published" // "draft", "deleted"
// }
// /* Ответ */
// [
// 	{
// 		"question": "Как осуществляется доставка?",
// 		"answer": "быстро!",
// 		"tags": [
// 			"popular",
// 			"new"
// 		],
// 		"likes": 3,
// 		"status": "published"
// 	}
// ]