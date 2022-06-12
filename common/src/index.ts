// import { myFn } from '@customrepo/lib1'

console.log('This is inside common')

export function fn1(name:string):void {
  console.log('This is the name: %s, %d', name, 0)
}

fn1('João')
