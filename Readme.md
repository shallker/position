
# position

  Position an element in DOM

## Installation

  Install with [component(1)](http://component.io):

    $ component install shallker/position

## Quick Start
```javascript
var position = require('position');
var el = document.getElementById('my-element');

position(el).at(100, 100).top().center();
```

## Internal Uses
```javascript
var position = require('position');
var awesomeProject = {};

awesomeProject.position = function (pageX, pageY) {
  return position(this.el).at(pageX, pageY);
}
```

## API

## position(Node element)
### .to(Node element)
### .at(Number pageX, Number pageY)
#### .top([Number offset])
#### .left([Number offset])
#### .right([Number offset])
#### .bottom([Number offset])
#### .center()


## Test
http://shallker.github.io/position/test/mouse.html   
http://shallker.github.io/position/test/element.html   

## Todo
- add `position: absolute` to element

## License

  MIT
