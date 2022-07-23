console.log('This is inside lib2')

import { myFn, myFn1, superFn } from '@customrepo/common'
export function fn1(name:string):void {
  console.log('This is the name: %s, %d', name, myFn(2))
}

fn1('Batatas Fritas')
console.log(myFn1('Test'))
console.log(superFn('Super', 99))
