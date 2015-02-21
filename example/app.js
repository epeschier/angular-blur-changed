angular
  .module('BlurChangedExample', ['purplefox.blurchanged'])

  .controller('BlurChangedCtrl', function () {
    var vm = this;

    vm.callback = callback;

    vm.value = "test";

    function callback(value) {
    	console.log("Value changed " + value)
    }
  });