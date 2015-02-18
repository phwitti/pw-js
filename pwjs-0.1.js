
var pw = (new function() {
  
  /// get by
  
  // get by classname
  this.by = new function() {
    this.cn = function(parent, className) {
      return parent.getElementsByClassName(className);
    }

    // get by id
    this.id = function(id) {
      return document.getElementById(id); 
    }
  }
  
  /// class
  
  // class add
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
  
  // class has
  this.ch = function(element, className) {
    return ((" " + element.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(" " + className + " ") > -1);
  }
  
  // class remove
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
  
  /// events
  
  // event add
  this.ea = new function() {
    // mouse over
    this.mo = function(element, fn) {
      element.addEventListener("mouseover", fn, false);
    }
  }
  
  // event call
  this.ec = new function() {
    // click
    this.ck = function(element) {
      element.onclick.apply(element);
    }
  }
  
  /// wrap
  
  // wrap create
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
  
  // wrap remove
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
  
  /// ajax
  
  // ajax call
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
  
  // ajax get
  this.xg = function(url, fn) {
    this.xc('GET', url, fn);
  }
  
  // ajax post
  this.xp = function(url, fn) {
    this.xc('POST', url, fn);
  }
}());
