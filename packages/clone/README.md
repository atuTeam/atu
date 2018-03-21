# Array and Object clone Deep

```
npm i --save @atu/clone
```

## Usage

```js
import { cloneDeep } from '@atu/clone'
```

test demo

```js
function testArrar() {
  const person=[{name:'zhou'},{name:'wang'}]
  let newA = cloneDeep(person)
  person[0].name='xin';
  return newA[0].name == 'zhou'
}
```

## LICENSE

[LICENSE](./LICENSE)
