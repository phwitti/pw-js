
/**
 * pw.js-library: contains some commen helper-function-shortcuts
 */
var pw = (new function() {

  /**
   * Contains functions to get an element by certain properties
   */
  this.by = new function() {
    
    /**
     * Get all objects under a certain parent by className
     * @param {Object} parent
     * @param {Number} className
     * @return {Object[]}
     */
    this.cn = function(parent, className) {
      return parent.getElementsByClassName(className);
    }

    /**
     * Get one certain object by its id
     * @param {string} id
     * @return {Object}
     */
    this.id = function(id) {
      return document.getElementById(id); 
    }
  }
  
  /**
   * Add a class to an object
   * @param {Object} element
   * @param {Number} className
   */
  this.ca = function(element, className) {
    var currentClassName = element.className;
    
    if (!this.ch(element, className)) {
      if ((currentClassName === null) || (currentClassName === "")) {
          element.className = className;
      } else {
          element.className += " " + className;
      }
    }
  }
  
  /**
   * Does an object have a certain class?
   * @param {Object} element
   * @param {Number} className
   * @return {Boolean}
   */
  this.ch = function(element, className) {
    return ((" " + element.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(" " + className + " ") > -1);
  }
  
  /**
   * Removes a class from an object
   * @param {Object} element
   * @param {Number} className
   */
  this.cr = function(element, className) {
    var currentClassName = element.className;
 
    if (currentClassName == className) {
      element.className = "";
      return;
    }
 
    var currentClasses = currentClassName.replace(/[\t\r\n\f]/g, " ").split(" ");
    var newClasses = [];
 
    for (var i = 0 ; i < currentClasses.length; i++) {
      if (className != currentClasses[i]) {
          newClasses.push(currentClasses[i]);
      }
    }
 
    element.className = newClasses.join(" ");
  }
  
  /**
   * Wrap an object with a div-block, returning it
   * @param {Object} element
   * @return {Object}
   */
  this.wc = function(element) {
    var wrap = document.createElement("div");
    var parent = element.parentNode;
    var sibling = element.nextSibling;

    wrap.appendChild(element);
    
    if (sibling) {
        parent.insertBefore(wrap, sibling);
    } else {
        parent.appendChild(wrap);
    }
    return wrap;
  }
  
  /**
   * Unwraps an object; Practically moves it outside of its parent and removes that
   * @param {Object} element
   */
  this.wr = function(element) {
    var wrap = element.parentNode;
    var parent = wrap.parentNode;
    var sibling = wrap.nextSibling;
    if (sibling) {
      parent.insertBefore(element, sibling);
    } else {
      parent.appendChild(element);
    }
    parent.removeChild(wrap);
  }
  
  /**
   * Create an ajax call
   * @param {string} callType - Either 'GET' or 'POST'
   * @param {string} url - url to call
   * @param {pwAjaxCallback} fn
   */
  this.xc = function(callType, url, fn) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open(callType, url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
      {
        fn(xmlhttp.responseText);
      }
    }
  }
  
  /**
   * Create an ajax call using 'GET'-callType
   * @param {string} url - url to call
   * @param {pwAjaxCallback} fn
   */
  this.xg = function(url, fn) {
    this.xc('GET', url, fn);
  }
  
  /**
   * Create an ajax call using 'POST'-callType
   * @param {string} url - url to call
   * @param {pwAjaxCallback} fn
   */
  this.xp = function(url, fn) {
    this.xc('POST', url, fn);
  }
}());

/**
 * A callback function called by the ajax-shortcut-functions of the pw.js-library
 * @callback pwAjaxCallback
 * @param {string} responseText
 */