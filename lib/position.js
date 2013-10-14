var $ = require('jquery');

module.exports = function (el) {
  return {
    /*
      Position element to an target element or mouse event
    */
    to: function (target) {
      var rect = target.getBoundingClientRect();
      var pageX = rect.left + window.pageXOffset;
      var pageY = rect.top + window.pageYOffset;

      return position.call(el, pageX, pageY);
    },

    /*
      Position element at a specific coordinate
    */
    at: function (pageX, pageY) {
      return position.call(el, pageX, pageY);
    }
  }
}

function position(pageX, pageY) {
  var el = this;
  var direction = 'x';

  var position = function () {
    return this;
  }.call({});

  function top(distance) {
    $(el).css('top', distance + 'px');
    direction = 'y';
  }

  function left(distance) {
    $(el).css('left', distance + 'px');
    direction = 'x';
  }

  position.top = function (offset) {
    offset = offset || 0;
    top(pageY - el.offsetHeight - offset);
    return this;
  }

  position.bottom = function (offset) {
    offset = offset || 0;
    top(pageY + offset);
    return this;
  }

  position.left = function (offset) {
    offset = offset || 0;
    left(pageX - el.offsetWidth - offset);
    return this;
  }

  position.right = function (offset) {
    offset = offset || 0;
    left(pageX + offset);
    return this;
  }

  position.center = function () {
    if (direction === 'x') top(pageY - el.offsetHeight / 2);
    if (direction === 'y') left(pageX - el.offsetWidth / 2);
    return this;
  }

  return position.right().bottom();
}
