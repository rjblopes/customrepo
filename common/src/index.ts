console.log('This is inside common')

export function myFn(i:number): number {
  return 10 * i
}

export function myFn1(s:string): string {
  return s + ' some other SUPER string'
}

export function superFn(s:string, n:number): string {
  return s + 'some other and ' + n
}