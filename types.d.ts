declare module "sort-by" {
  // export function sortBy(property: string, map?: Function<T>): T;

  // так что-ли нужно писать, чтобы поддерживать и string, и string[]?
  export function sortBy(property: string | string[], map?: Function<T>): T;
  // export function sortBy(property: string[], map?: Function<T>): T;
}
