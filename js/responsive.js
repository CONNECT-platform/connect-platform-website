'use strict';

(function() {
  var allClass = [
    'desktop', 'laptop',
    'tablet', 'tablet-portrait', 'tablet-landscape',
    'mobile', 'mobile-portrait', 'mobile-landscape',
  ];

  function sync() {
    var body = document.querySelector('body');
    var classes = window.getComputedStyle(body, ':before')
      .getPropertyValue('content').replace(/\"/g, '').split(',');

    var classMap = {};

    for (var index = 0; index < allClass.length; index++)
      classMap[allClass[index]] = false;

    for (var index = 0; index < classes.length; index++)
      classMap[classes[index].trim()] = true;

    for (var index = 0; index < allClass.length; index++) {
      var clazz = allClass[index];
      if (classMap[clazz] && !body.classList.contains(clazz))
        body.classList.add(clazz);

      if (!classMap[clazz] && body.classList.contains(clazz))
        body.classList.remove(clazz);
    }
  };

  if (window.addEventListener) {
    window.addEventListener('load', sync);
    window.addEventListener('resize', sync);
  }
  else if (window.attachEvent) {
    window.attachEvent('load', sync);
    window.attachEvent('resize', sync);
  }
})();
