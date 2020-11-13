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

## Other notes

`string2num` was specifically designed to allow [Scratch](https://scratch.mit.edu/) users to communicate with servers and between clients using [number-restrcited cloud variables](https://scratch.mit.edu/info/faq#clouddata).  If you are using this in the context of Scratch, download the charmap array [here](https://raw.githubusercontent.com/micahlt/string2num/master/scratch_charmap.txt) or if you're looking for a simplified approach, just remix the [existing project](https://scratch.mit.edu/projects/449215900/) and go from there.  
