console.log('This is inside lib2')

import { myFn, myFn1, superFn } from '@customrepo/common'
export function fn1(name:string):void {
  console.log('This is the name: %s, %d', name, myFn(2))
}

fn1('Batatas')
console.log(myFn1('Mega-Test'))
console.log(superFn('Super Mega', 200))
