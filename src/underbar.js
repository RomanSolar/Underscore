(function() {
  'use strict';

  window._ = {};

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {
    return val;
  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   * IMPORTANT NOTE!
   * ===========
   *
   * The .first function is implemented for you, to help guide you toward success
   * in your work on the following functions. Whenever you see a portion of the
   * assignment pre-completed, be sure to read and understand it fully before
   * you proceed. Skipping this step will lead to considerably more difficulty
   * implementing the sections you are responsible for.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    }
    if (n <= 0) {
      return [];
    }
    return array.slice(-n);
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function(collection, iterator) {
     //console.log("COOL: "+collection);
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } if (!(Array.isArray(collection))) {
      for (var key in collection) {
        iterator(collection[key], key, collection);
      }
    }


    //console.log('COOL'+collection )
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target) {
    // TIP: Here's an example of a function that needs to iterate, which we've
    // implemented for you. Instead of using a standard `for` loop, though,
    // it uses the iteration helper `each`, which you will need to write.
    var result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {

    var result = [];
    var result2 = [];
    var truth = false;

    for (var i = 0; i < collection.length; i++) {
          //for all even numbers:
      if (collection[i] % 2 === 0 && test(collection[i]) === true) {
        truth = true;
        result.push(collection[i]);
      }
    }
    if (truth) {
      return result;
    }

    for (var i = 0; i < collection.length; i++) {
              //for odd even numbers:
      if (collection[i] % 2 === 1) {
              //truth = true;
        result2.push(collection[i]);
      }
    }
           // if(!truth){
    return result2;
           // }
  };


  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
    // TIP: see if you can re-use _.filter() here, without simply
    // copying code in and modifying it


    var result = [];
    var result2 = [];
    var truth = false;

    for (var i = 0; i < collection.length; i++) {
          //for all even numbers:
      if (collection[i] % 2 !== 0 && test(collection[i]) !== true) {
        truth = true;
        result.push(collection[i]);
      }
    }
    if (truth) {
      return result;
    }

    for (var i = 0; i < collection.length; i++) {
              //for odd even numbers:
      if (collection[i] % 2 !== 1) {
              //truth = true;
        result2.push(collection[i]);
      }
    }
           // if(!truth){
    return result2;
           // }

  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array, isSorted, iterator) {
    var result = [];


    //RM: In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.


    for (var i = 0; i < array.length; i++) {
      //push ONLY IF the array doesn not have this number already:
      if (! array.includes(array[i], i + 1)) {
        result.push(array[i]);
      }
    }


    if (iterator === undefined) {
      // manually sort array from smallest to largest:
      // loop through array backwards:
    //  return sortLeast(result);
      for (var i = result.length - 1; i >= 0; i--) {
        // loop again through the array, moving backwards:
        for (var j = i; j >= 0; j--) {
          if (result[i] < result[j]) {
            var temp = result[i];
            result[i] = result[j];
            result[j] = temp;
          }
        }
      }
      return result;
    }
    //console.log(iterator);
    //console.log(array);
    if (iterator !== undefined) {
      var result2 = [];
      var check = [];
      for (var i = 0; i < array.length; i++) {

        //if val=true, push 1. If val=false, push 2.
        if ( !check.includes(iterator(array[i])) && !result2.includes(array[i])) {
          result2.push(array[i]);
          check.push(iterator(array[i]));
   //       console.log(iterator(array[i]))
        }
        /*
        if (iterator(array[i]) === false && !result2.includes(2)) {
          result2.push(2);
        }
        */
      }
 //     console.log(iterator)
      //console.log(array);
      //return JSON.stringify(result2);
      return result2;

      var result3 = [];
      for (var i = 0; i < result2.length; i++) {
      //push ONLY IF the array doesn not have this number already:
        if (! result2.includes(result2[i], i + 1)) {
          result3.push(result2[i]);
        }
      }

    //  console.log(result3);

      //return sorted result3
     // return sortLeast(result3);

    }
  };


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
    var result = [];
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        result.push(iterator(collection[i]));
      }
      return result;
    }
    for (var key in collection) {
      result.push(iterator(collection[key]));
    }
    return result;


  };

  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    return _.map(collection, function(item) {
      return item[key];
    });
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as its second argument.
  //
  // Example:
  //   var numbers = [1,2,3];
  //   var sum = _.reduce(numbers, function(total, number){
  //     return total + number;
  //   }, 0); // should be 6
  //
  //   var identity = _.reduce([5], function(total, number){
  //     return total + number * number;
  //   }); // should be 5, regardless of the iterator function passed in
  //          No accumulator is given so the first element is used.
  _.reduce = function(collection, iterator, accumulator) {

    if (arguments.length === 2) {
      accumulator = collection[0];
      collection = collection.slice(1);
    }

    _.each(collection, function(item) {
      accumulator = iterator(accumulator, item);
    });

    return accumulator;
  };
















  // --------------------
  // ! END OF PART ONE !
  // --------------------
  //
  // Congrats! You've reached the end of Underbar Part 1!
  //
  // This means that you should return to Learn and move on to the next lesson:
  //    - Learn Unit: Debugging
  //    - Learn Lesson: Before Moving On
  //
  // CAUTION:
  //
  //   - Do not proceed on to Underbar Part 2 (below) without reading the
  //     slides on Scopes & Closure
  //
  // --------------------


  // _.contains Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
    // TIP: Try re-using reduce() here.

    //FROM UnderscoreDoc:: Returns true if all of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a false element is found.

    //if not iterator provided - return last element of the collection
    if (iterator === undefined) {
      return collection[collection.length - 1];
    }

    //if collection is array. Use the for loop for arrays
    //if any element does not pass condition - return false
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        if (!iterator(collection[i])) {
          return false;
        }
      }
    }

    //If collection is NOT array. It is most-likely object. Use the for-in loop
    //if any element does not pass condition - return false
    if (!Array.isArray(collection)) {
      for (var key in collection) {
        if (!iterator(collection[key])) {
          return false;
        }
      }
    }

    return true;
  };




  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
    // TIP: There's a very clever way to re-use every() here.

    //When not iterator provided, if at least 1 element is true - return true
    if (iterator === undefined) {
      return _.contains(collection, true); // _.contains Determine if the array or object contains a given value (using `===`).
    }

    //if collection is array. Use the for loop for arrays
    //If atleast one is true - return true;
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        if (iterator(collection[i])) {
          return true;
        }
      }
    }

    //If collection is NOT array. It is most-likely object. Use the for-in loop
    //If atleast one is true - return true;
    if (!Array.isArray(collection)) {
      for (var key in collection) {
        if (iterator(collection[key])) {
          return true;
        }
      }
    }

    //When nothing is true - return false
    return false;
  };





  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  _.extend = function(obj) {
    _.each(arguments, function(argObject) {
      //_.each applies the iterator function to every element
      //_.each does not return anything
      _.each(argObject, function(value, key) {
        obj[key] = value;
      });
    });
    return obj;
  };



  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
    _.each(arguments, function(argObject) {
      _.each(argObject, function(value, key) {
        //Only assign value if obj[key] is undefined
        if (obj[key] === undefined) {
          obj[key] = value;
        }
      });
    });
    return obj;
  };




  /**
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    // TIP: These variables are stored in a "closure scope" (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    var alreadyCalled = false;
    var result;

    // TIP: We'll return a new function that delegates to the old one, but only
    // if it hasn't been called before.
    return function() {
      if (!alreadyCalled) {
        // TIP: .apply(this, arguments) is the standard way to pass on all of the
        // infromation from one function call to another.
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      // The new function always returns the originally computed result.
      return result;
    };
  };



  // Memorize an expensive function's results by storing them.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
    var funcData = {}; //where we store all the results
    return function() {
      var arg = JSON.stringify(arguments);
      if (!funcData[arg]) {
        funcData[arg] = func.apply(this, arguments);
      }
      return funcData[arg];
    };
  };


  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
    var args = Array.prototype.slice.call(arguments, 2);
    setTimeout(function() {
      func.apply(this, args);
    }, wait);
  };


  /**
   * COLLECTION OPERATIONS
   * ==============================
   */

  // Randomizes the order of an array's contents.
  //
  // TIP: This function's test suite will ask that you not modify the original
  // input array. For a tip on how to make a copy of an array, see:
  // http://mdn.io/Array.prototype.slice
  _.shuffle = function(array) {
    /*
    var arr2 = array.slice();
    var currentIndex = arr2.length;
    var randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
    //for(var currentIndex = 0; currentIndex > 0; currentIndex--  ) {

    // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

    // And swap it with the current element.
      var currElem = arr2[currentIndex];
      var randElem = arr2[randomIndex];
    [currElem, randElem] = [randElem, currElem];
      //arr2[currElement] = randomElement;
     // arr2[randomElement] = currElement;
    }

    return arr2;
    */
    var arr2 = array.slice();
    for (var i = arr2.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr2[i];
      arr2[i] = arr2[j];
      arr2[j] = temp;
    }
    return arr2;
  };



/**
   * ADVANCED: EXTRA CREDIT BEGINS HERE
   * =================
   *
   * Note: This is the end of the required pre-course curriculum. Feel free to continue,
   * but everything beyond here is extra credit.
   */

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3])
  // returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  _.throttle = function(func, wait) {
  };
}());
