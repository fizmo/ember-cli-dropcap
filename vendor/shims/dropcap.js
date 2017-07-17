(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['Dropcap'],
      __esModule: true,
    };
  }

  define('dropcap', [], vendorModule);
})();
