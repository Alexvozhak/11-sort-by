import { sortBy } from "sort-by";

interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

people.sort(sortBy("name"));
console.log(people);

//1) почему не собирается проект на runkit? https://runkit.com/embed/1feype3adw5s
//2) почему не могу в качестве типа для первого аргумента sortBy использовать string[]?
// требует в обязательном порядке string, хотя в реализации поддерживается и массив. Использовать union type string | string[]?
// на сколько это корректно так писать?
//3) непонятная ошибка в рантайме TypeError: (0 , sort_by_1.sortBy) is not a function
//4) я так и не понял зачем в пакете sort-by экспортируется функция sort, почему её просто не сделали приватной?
//5) вообще непонятно как типизировать sort
//6) опять же, непонятно что вы имеете ввиду под базовыми знаниями JS (я прочитал одну книгу по JS для чайников), но
// мне катастрофически не хватает знаний JS для выполнения ваших ДЗ по TS, chatgpt не вывозит
//so...пошел подглядывать в @types/sort-by
