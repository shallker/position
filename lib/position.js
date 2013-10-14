var $ = require('jquery');

module.exports = function (el) {
  return {
    /*
      Position element to an rectangle element
    */
    to: function (target) {
      var rect = target.getBoundingClientRect();
      var pageX = rect.left + window.pageXOffset;
      var pageY = rect.top + window.pageYOffset;
      var width = target.offsetWidth;
      var height = target.offsetHeight;

      return position.call(el, pageX, pageY, width, height);
    },

    /*
      Position element at a specific coordinate
    */
    at: function (pageX, pageY) {
      return position.call(el, pageX, pageY);
    }
  }
}

function position(pageX, pageY, width, height) {
  width = width || 0;
  height = height || 0;

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
    top(pageY + height + offset);
    return this;
  }

  position.left = function (offset) {
    offset = offset || 0;
    left(pageX - el.offsetWidth - offset);
    return this;
  }

  position.right = function (offset) {
    offset = offset || 0;
    left(pageX + width + offset);
    return this;
  }

  position.center = function () {
    if (direction === 'x')  return top(pageY + height / 2 - el.offsetHeight / 2);
    if (direction === 'y')  return left(pageX + width / 2 - el.offsetWidth / 2);
    return this;
  }

  return position.right().bottom();
}
