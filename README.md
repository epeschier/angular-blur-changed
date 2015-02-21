# angular-blur-changed
Angular directive that fires an event on blur and changed.

[![NPM](https://img.shields.io/npm/v/angular-blur-changed.svg)](https://www.npmjs.com/package/angular-blur-changed)

This is a simple directive that will trigger a function when an input element is blurred AND the value has changed.

## Why was this created?
The blur event always triggers an event but most of the time you only want to be notified when the actual value has changed.

## Usage:

1. Include the blur-changed-directive as a dependency for your app.

    ```js
    angular.module('myApp', ['purplefox.blurchanged'])
    ```
    
2. Use the directive in your view:

  ```html
  <input blur-changed="myCallback" />
  ```
  
3. Set a callback method in your controller:
  ```js
  function myCallback(value) {
    	console.log("Value changed " + value)
    }
  ```
