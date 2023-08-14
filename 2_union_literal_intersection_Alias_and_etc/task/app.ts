// Типизируем 

/*
interface PayPost { // Запрос в виде платежа
  sum: number,
  from: number,
  to: number
}

enum PaymentStatus { //Указываем, какие типы ответа могут быть, это успешно или нет 
  Success = "success",
  Failed = "failed",
}

interface PayRequest extends PayPost {} // Разделили, что будет передаваться в запросе и что в ответе

interface DataSuccess {
  databaseId: number;
  sum: number;
  from: number;
  to: number;
}

interface DataFaild {
  errorMessage: string;
  errorCode: number;
}

interface PayRespone {
  status: PaymentStatus;
  data: DataSuccess | DataFaild; //Передаём, что есть либо успешная, либо нет
}
*/



//---------------------Можно улучшить этот код-------------------

interface PayPost { // Запрос в виде платежа
  sum: number,
  from: number,
  to: number
}

enum PaymentStatus { //Указываем, какие типы ответа могут быть, это успешно или нет 
  Success = "success",
  Failed = "failed",
}

interface PayRequest extends PayPost {} // Разделили, что будет передаваться в запросе и что в ответе

interface DataSuccess extends PayPost {
  databaseId: number; //Дополнительно получаем databaseId, остальное наследуем от PayPost
}

interface DataFaild {
  errorMessage: string;
  errorCode: number;
}

interface PayResponeSuccess {
  status: PaymentStatus.Success;
  data: DataSuccess; // Получая Siccess, мы можем передать в data только success, а не как в прошлом примере, могло ожидать и failed
}


interface PayResponeFaild {
  status: PaymentStatus.Failed;
  data: DataSuccess; //Передаём, что есть либо успешная, либо нет
}


// function get() : PayResponeSuccess | PayResponeFaild {
  
// }



//Запрос ниже

// // Запрос в виде платежа
// {
// 	"sum": 10000,
// 	"from": 2,
// 	"to": 4
// }
// // Ответ
// {
// 	"status": "success",
// 	"data": {
// 		"databaseId": 567,
// 		"sum": 10000,
// 		"from": 2,
// 		"to": 4
// 	}
// },
// {
// 	"status": "failed",
// 	"data": {
// 		"errorMessage": "Недостаточно средств",
// 		"errorCode": 4
// 	}
// }