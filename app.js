"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sort_by_1 = require("sort-by");
const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
];
people.sort((0, sort_by_1.sortBy)("age"));
console.log(people);
//1) почему не могу импортировать пакет sort-by? https://runkit.com/embed/1feype3adw5s
//2) почему не могу в качестве типа для первого аргумента sortBy использовать массив?
// требует в обязательном порядке string, хотя в реализации они поддерживают массив
