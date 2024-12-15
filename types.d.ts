declare module "sort-by" {
  // export function sortBy(property: string, map?: Function<T>): T;

  // так что-ли нужно писать, чтобы поддерживать и string, и string[]?
  export function sortBy(property: string | string[]): (a: T, b: T) => number;
  // export function sortBy(property: string[], map?: Function<T>): T;
}

//7) я так и не понял как это работает и зачем так пишут:
// function sortBy() в сигнатуре аргументов нет, но в реализации их активно используют
// и в типизации получается уже тоже совсем другая история - (a: T, b: T), как так?
//8) непонятно зачем такая вложенность - sort внутри себя вызывает sort-by.
// Почему нельзя напрямую sort-by вызывать у объекта
//9) после списывания ошибка всё равно никуда не ушла: TypeError: (0 , sort_by_1.sortBy) is not a function

// from @types/sort-by
//declare function sortBy<T>(...args: readonly string[]): (a: T, b: T) => number;
//declare function sortBy<T>(...args: Array<string | ((key: string, value: any) => any)>): (a: T, b: T) => number;

//export = sortBy;
