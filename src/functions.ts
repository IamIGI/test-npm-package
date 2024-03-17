import { SayHelloProps } from './types';

export function testString(text: string) {
  return text === 'text';
}

export function sayHello({ firstName, lastName, age }: SayHelloProps) {
  console.log('Hello');
  console.log(`Your firstname is: ${firstName}`);
  if (lastName) console.log(`Your lastname is: ${lastName}`);
  if (age) console.log(`Your age is: ${age}`);
}
