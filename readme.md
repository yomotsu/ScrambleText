# ScrambleText

Free version of Greensock's Scramble Text like text shuffle effect.

[![Latest NPM release](https://img.shields.io/npm/v/scramble-text.svg)](https://www.npmjs.com/package/scramble-text)
![MIT License](https://img.shields.io/npm/l/scramble-text.svg)

## demos

- [basic](https://yomotsu.github.io/ScrambleText/examples/basic.html)
- [idling](https://yomotsu.github.io/ScrambleText/examples/idling.html)
- [options](https://yomotsu.github.io/ScrambleText/examples/options.html)

## Usage

### as Standalone lib

Copy ScrambleText.js from /dist/ScrambleText.js and place it in your project.

```
<script src="./js/ScrambleText.js"></script>
```

### with NPM

```
$ npm install --save scramble-text
```

then

```
import ScrambleText from 'scramble-text';
```

### Applying effects

```html
<p id="text1">Scramble Text</p>
<button onclick="startFx()">start trigger</button>
```

```javascript
var element = document.getElementById( 'text1' );
var scrambleText = new ScrambleText( element ).play();

// you can start the effect whenever you want
function startFx() {

	scrambleText.start();

}
```

## APIs

### Constructor

```
ScrambleText( element, options )
```

### Options

| param        | required |     |
| ------------ | -------- | --- |
| `timeOffset` | optional | relay between each steps in millisecons |
| `chars`      | optional | array of custom characters |
| `callback`   | optional | function that is called when ended the effect |

e.g.
```javascript
var scrambleText = new ScrambleText(
	document.getElementById( 'text' ),
	{
		timeOffset : 200,
		chars: [
			'安','以','宇','衣','於',
			'加','幾','久','計','己',
			'左','之','寸','世','曽',
			'太','知','川','天','止',
			'奈','仁','奴','称','乃',
			'波','比','不','部','保',
			'末','美','武','女','毛',
			'也','為','由','恵','与',
			'良','利','留','礼','呂',
			'和','遠','无'
		],
		callback: function () { console.log( 'ended' ); }
	}
);
```

### Methods

- `play()`
- `start()`
- `stop()`

e.g.
```javascript
var element = document.getElementById( 'text1' );
var scrambleText = new ScrambleText( element ).start().play();
```
