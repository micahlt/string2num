# string2num

`string2num` is a super-simple `npm` package for encoding strings into integers and decoding them.

## Usage

### Importing

```javascript
const s2n = require('string2num');
```

### Encoding

```javascript
s2n.encode('hello world!')
// returns 080512121500231518120439 as a string
```

### Decoding

```javascript
s2n.decode('080512121500231518120439')
// returns 080512121500231518120439
```
