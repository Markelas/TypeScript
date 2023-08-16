function descendingOrder(n: number): number {
  let f = String(n);
  let arr = f.split("").reverse();
  n = Number(arr.join(""))
  return n;
}

descendingOrder(123456789)