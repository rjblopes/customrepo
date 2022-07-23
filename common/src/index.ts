import { myFn, myFn1, superFn } from '@customrepo/lib1'

console.log('This is inside common')

export function fn1(name:string):void {
  console.log('This is the name: %s, %d', name, myFn(2))
}

fn1('RicardoL')
console.log(myFn1('Test'))
console.log(superFn('Super', 99))
