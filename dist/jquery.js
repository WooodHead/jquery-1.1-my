/* prevent execution of jQuery if included more than once */
if (typeof window.jQuery == "undefined") {
    /*
     * jQuery 1.1 - New Wave Javascript
     *
     * Copyright (c) 2007 John Resig (jquery.com)
     * Dual licensed under the MIT (MIT-LICENSE.txt)
     * and GPL (GPL-LICENSE.txt) licenses.
     *
     * $Date$
     * $Rev$
     */

    // Global undefined variable
    window.undefined = window.undefined;

    /**
     * Create a new jQuery Object
     *
     * @constructor
     * @private
     * @name jQuery
     * @param String|Function|Element|Array<Element>|jQuery a selector
     * @param jQuery|Element|Array<Element> c context
     * @cat Core
     */
    var jQuery = function(a, c) {
        // If the context is global, return a new object
        if (window == this)
            return new jQuery(a, c);

        // Make sure that a selection was provided
        a = a || document;

        // HANDLE: $(function)
        // Shortcut for document ready
        // Safari reports typeof on DOM NodeLists as a function
        if (jQuery.isFunction(a) && !a.nodeType && a[0] == undefined)
            return new jQuery(document)[jQuery.fn.ready ? "ready" : "load"](a);

        // Handle HTML strings
        if (typeof a == "string") {
            var m = /^[^<]*(<.+>)[^>]*$/.exec(a);

            a = m ?
                // HANDLE: $(html) -> $(array)
                jQuery.clean([m[1]]) :

                // HANDLE: $(expr)
                jQuery.find(a, c);
        }

        return this.setArray(
            // HANDLE: $(array)
            a.constructor == Array && a ||

            // HANDLE: $(arraylike)
            // Watch for when an array-like object is passed as the selector
            (a.jquery || a.length && a != window && !a.nodeType && a[0] != undefined && a[0].nodeType) && jQuery.makeArray(a) ||

            // HANDLE: $(*)
            [a]);
    };

    // Map over the $ in case of overwrite
    if (typeof $ != "undefined")
        jQuery._$ = $;

    // Map the jQuery namespace to the '$' one
    var $ = jQuery;

    /**
     * This function accepts a string containing a CSS or
     * basic XPath selector which is then used to match a set of elements.
     *
     * The core functionality of jQuery centers around this function.
     * Everything in jQuery is based upon this, or uses this in some way.
     * The most basic use of this function is to pass in an expression
     * (usually consisting of CSS or XPath), which then finds all matching
     * elements.
     *
     * By default, $() looks for DOM elements within the context of the
     * current HTML document.
     *
     * @example $("div > p")
     * @desc Finds all p elements that are children of a div element.
     * @before <p>one</p> <div><p>two</p></div> <p>three</p>
     * @result [ <p>two</p> ]
     *
     * @example $("input:radio", document.forms[0])
     * @desc Searches for all inputs of type radio within the first form in the document
     *
     * @example $("div", xml.responseXML)
     * @desc This finds all div elements within the specified XML document.
     *
     * @name $
     * @param String expr An expression to search with
     * @param Element|jQuery context (optional) A DOM Element, Document or jQuery to use as context
     * @cat Core
     * @type jQuery
     * @see $(Element)
     * @see $(Element<Array>)
     */

    /**
     * Create DOM elements on-the-fly from the provided String of raw HTML.
     *
     * @example $("<div><p>Hello</p></div>").appendTo("#body")
     * @desc Creates a div element (and all of its contents) dynamically, 
     * and appends it to the element with the ID of body. Internally, an
     * element is created and it's innerHTML property set to the given markup.
     * It is therefore both quite flexible and limited. 
     *
     * @name $
     * @param String html A string of HTML to create on the fly.
     * @cat Core
     * @type jQuery
     * @see appendTo(String)
     */

    /**
     * Wrap jQuery functionality around a single or multiple DOM Element(s).
     *
     * This function also accepts XML Documents and Window objects
     * as valid arguments (even though they are not DOM Elements).
     *
     * @example $(document.body).background( "black" );
     * @desc Sets the background color of the page to black.
     *
     * @example $( myForm.elements ).hide()
     * @desc Hides all the input elements within a form
     *
     * @name $
     * @param Element|Array<Element> elems DOM element(s) to be encapsulated by a jQuery object.
     * @cat Core
     * @type jQuery
     */

    /**
     * A shorthand for $(document).ready(), allowing you to bind a function
     * to be executed when the DOM document has finished loading. This function
     * behaves just like $(document).ready(), in that it should be used to wrap
     * all of the other $() operations on your page. While this function is,
     * technically, chainable - there really isn't much use for chaining against it.
     * You can have as many $(document).ready events on your page as you like.
     *
     * See ready(Function) for details about the ready event. 
     * 
     * @example $(function(){
     *   // Document is ready
     * });
     * @desc Executes the function when the DOM is ready to be used.
     *
     * @example jQuery(function($) {
     *   // Your code using failsafe $ alias here...
     * });
     * @desc Uses both the shortcut for $(document).ready() and the argument
     * to write failsafe jQuery code using the $ alias, without relying on the
     * global alias.
     *
     * @name $
     * @param Function fn The function to execute when the DOM is ready.
     * @cat Core
     * @type jQuery
     * @see ready(Function)
     */

    jQuery.fn = jQuery.prototype = {
        /**
         * The current version of jQuery.
         *
         * @private
         * @property
         * @name jquery
         * @type String
         * @cat Core
         */
        jquery: "1.1",

        /**
         * The number of elements currently matched.
         *
         * @example $("img").length;
         * @before <img src="test1.jpg"/> <img src="test2.jpg"/>
         * @result 2
         *
         * @property
         * @name length
         * @type Number
         * @cat Core
         */

        /**
         * The number of elements currently matched.
         *
         * @example $("img").size();
         * @before <img src="test1.jpg"/> <img src="test2.jpg"/>
         * @result 2
         *
         * @name size
         * @type Number
         * @cat Core
         */
        size: function() {
            return this.length;
        },

        length: 0,

        /**
         * Access all matched elements. This serves as a backwards-compatible
         * way of accessing all matched elements (other than the jQuery object
         * itself, which is, in fact, an array of elements).
         *
         * @example $("img").get();
         * @before <img src="test1.jpg"/> <img src="test2.jpg"/>
         * @result [ <img src="test1.jpg"/> <img src="test2.jpg"/> ]
         * @desc Selects all images in the document and returns the DOM Elements as an Array
         *
         * @name get
         * @type Array<Element>
         * @cat Core
         */

        /**
         * Access a single matched element. num is used to access the
         * Nth element matched.
         *
         * @example $("img").get(0);
         * @before <img src="test1.jpg"/> <img src="test2.jpg"/>
         * @result [ <img src="test1.jpg"/> ]
         * @desc Selects all images in the document and returns the first one
         *
         * @name get
         * @type Element
         * @param Number num Access the element in the Nth position.
         * @cat Core
         */
        get: function(num) {
            return num == undefined ?

                // Return a 'clean' array
                jQuery.makeArray(this) :

                // Return just the object
                this[num];
        },

        /**
         * Set the jQuery object to an array of elements. This operation is
         * completely destructive - be sure to use .pushStack() if you wish to maintain
         * the jQuery stack.
         *
         * @example $("img").setArray([ document.body ]);
         * @result $("img").setArray() == [ document.body ]
         *
         * @private
         * @name setArray
         * @type jQuery
         * @param Elements elems An array of elements
         * @cat Core
         */
        setArray: function(a) {
            this.length = 0;
            [].push.apply(this, a);
            return this;
        },

        /**
         * Execute a function within the context of every matched element.
         * This means that every time the passed-in function is executed
         * (which is once for every element matched) the 'this' keyword
         * points to the specific element.
         *
         * Additionally, the function, when executed, is passed a single
         * argument representing the position of the element in the matched
         * set.
         *
         * @example $("img").each(function(i){
         *   this.src = "test" + i + ".jpg";
         * });
         * @before <img/><img/>
         * @result <img src="test0.jpg"/><img src="test1.jpg"/>
         * @desc Iterates over two images and sets their src property
         *
         * @name each
         * @type jQuery
         * @param Function fn A function to execute
         * @cat Core
         */
        each: function(fn, args) {
            return jQuery.each(this, fn, args);
        },

        /**
         * Append content to the inside of every matched element.
         *
         * This operation is similar to doing an appendChild to all the
         * specified elements, adding them into the document.
         *
         * @example $("p").append("<b>Hello</b>");
         * @before <p>I would like to say: </p>
         * @result <p>I would like to say: <b>Hello</b></p>
         * @desc Appends some HTML to all paragraphs.
         *
         * @example $("p").append( $("#foo")[0] );
         * @before <p>I would like to say: </p><b id="foo">Hello</b>
         * @result <p>I would like to say: <b id="foo">Hello</b></p>
         * @desc Appends an Element to all paragraphs.
         *
         * @example $("p").append( $("b") );
         * @before <p>I would like to say: </p><b>Hello</b>
         * @result <p>I would like to say: <b>Hello</b></p>
         * @desc Appends a jQuery object (similar to an Array of DOM Elements) to all paragraphs.
         *
         * @name append
         * @type jQuery
         * @param <Content> content Content to append to the target
         * @cat DOM/Manipulation
         * @see prepend(<Content>)
         * @see before(<Content>)
         * @see after(<Content>)
         */
        append: function() {
            return this.domManip(arguments, true, 1, function(a) {
                this.appendChild(a);
            });
        },

        html: function(val) {
            return val == undefined ?
                (this.length ? this[0].innerHTML : null) :
                this.empty().append(val);
        },

        /**
         * @private
         * @name domManip
         * @param Array args
         * @param Boolean table Insert TBODY in TABLEs if one is not found.
         * @param Number dir If dir<0, process args in reverse order.
         * @param Function fn The function doing the DOM manipulation.
         * @type jQuery
         * @cat Core
         */
        domManip: function(args, table, dir, fn) {
            var clone = this.length > 1;
            var a = jQuery.clean(args);
            if (dir < 0)
                a.reverse();

            return this.each(function() {
                var obj = this;

                if (table && this.nodeName.toUpperCase() == "TABLE" && a[0].nodeName.toUpperCase() == "TR")
                    obj = this.getElementsByTagName("tbody")[0] || this.appendChild(document.createElement("tbody"));

                jQuery.each(a, function() {
                    fn.apply(obj, [clone ? this.cloneNode(true) : this]);
                });

            });
        }
    };

    /**
     * Extends the jQuery object itself. Can be used to add functions into
     * the jQuery namespace and to add plugin methods (plugins).
     * 
     * @example jQuery.fn.extend({
     *   check: function() {
     *     return this.each(function() { this.checked = true; });
     *   },
     *   uncheck: function() {
     *     return this.each(function() { this.checked = false; });
     *   }
     * });
     * $("input[@type=checkbox]").check();
     * $("input[@type=radio]").uncheck();
     * @desc Adds two plugin methods.
     *
     * @example jQuery.extend({
     *   min: function(a, b) { return a < b ? a : b; },
     *   max: function(a, b) { return a > b ? a : b; }
     * });
     * @desc Adds two functions into the jQuery namespace
     *
     * @name $.extend
     * @param Object prop The object that will be merged into the jQuery object
     * @type Object
     * @cat Core
     */

    /**
     * Extend one object with one or more others, returning the original,
     * modified, object. This is a great utility for simple inheritance.
     * 
     * @example var settings = { validate: false, limit: 5, name: "foo" };
     * var options = { validate: true, name: "bar" };
     * jQuery.extend(settings, options);
     * @result settings == { validate: true, limit: 5, name: "bar" }
     * @desc Merge settings and options, modifying settings
     *
     * @example var defaults = { validate: false, limit: 5, name: "foo" };
     * var options = { validate: true, name: "bar" };
     * var settings = jQuery.extend({}, defaults, options);
     * @result settings == { validate: true, limit: 5, name: "bar" }
     * @desc Merge defaults and options, without modifying the defaults
     *
     * @name $.extend
     * @param Object target The object to extend
     * @param Object prop1 The object that will be merged into the first.
     * @param Object propN (optional) More objects to merge into the first
     * @type Object
     * @cat JavaScript
     */
    jQuery.extend = jQuery.fn.extend = function() {
        // copy reference to target object
        var target = arguments[0],
            a = 1;

        // extend jQuery itself if only one argument is passed
        if (arguments.length == 1) {
            target = this;
            a = 0;
        }
        var prop;
        while (prop = arguments[a++])
        // Extend the base object
            for (var i in prop) target[i] = prop[i];

        // Return the modified object
        return target;
    };

    jQuery.extend({

        isFunction: function(fn) {
            return fn && typeof fn == "function";
        },

        /**
         * A generic iterator function, which can be used to seemlessly
         * iterate over both objects and arrays. This function is not the same
         * as $().each() - which is used to iterate, exclusively, over a jQuery
         * object. This function can be used to iterate over anything.
         *
         * The callback has two arguments:the key (objects) or index (arrays) as first
         * the first, and the value as the second.
         *
         * @example $.each( [0,1,2], function(i, n){
         *   alert( "Item #" + i + ": " + n );
         * });
         * @desc This is an example of iterating over the items in an array,
         * accessing both the current item and its index.
         *
         * @example $.each( { name: "John", lang: "JS" }, function(i, n){
         *   alert( "Name: " + i + ", Value: " + n );
         * });
         *
         * @desc This is an example of iterating over the properties in an
         * Object, accessing both the current item and its key.
         *
         * @name $.each
         * @param Object obj The object, or array, to iterate over.
         * @param Function fn The function that will be executed on every object.
         * @type Object
         * @cat JavaScript
         */
        // args is for internal usage only
        each: function(obj, fn, args) {
            if (obj.length == undefined)
                for (var i in obj)
                    fn.apply(obj[i], args || [i, obj[i]]);
            else
                for (var i = 0, ol = obj.length; i < ol; i++)
                    if (fn.apply(obj[i], args || [i, obj[i]]) === false) break;
            return obj;
        },


        className: {
            // internal only, use addClass("class")
            add: function(elem, c) {
                jQuery.each(c.split(/\s+/), function(i, cur) {
                    if (!jQuery.className.has(elem.className, cur))
                        elem.className += (elem.className ? " " : "") + cur;
                });
            },

            // internal only, use removeClass("class")
            remove: function(elem, c) {
                elem.className = c ?
                    jQuery.grep(elem.className.split(/\s+/), function(cur) {
                        return !jQuery.className.has(c, cur);
                    }).join(" ") : "";
            },

            // internal only, use is(".class")
            has: function(t, c) {
                t = t.className || t;
                return t && new RegExp("(^|\\s)" + c + "(\\s|$)").test(t);
            }
        },

        clean: function(a) {
            var r = [];

            jQuery.each(a, function(i, arg) {
                if (!arg) return;

                if (arg.constructor == Number)
                    arg = arg.toString();

                // Convert html string into DOM nodes
                if (typeof arg == "string") {
                    // Trim whitespace, otherwise indexOf won't work as expected
                    var s = jQuery.trim(arg),
                        div = document.createElement("div"),
                        tb = [];

                    var wrap =
                        // option or optgroup
                        !s.indexOf("<opt") && [1, "<select>", "</select>"] ||

                        (!s.indexOf("<thead") || !s.indexOf("<tbody") || !s.indexOf("<tfoot")) && [1, "<table>", "</table>"] ||

                        !s.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] ||

                        // <thead> matched above
                        (!s.indexOf("<td") || !s.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] ||

                        [0, "", ""];

                    // Go to html and back, then peel off extra wrappers
                    div.innerHTML = wrap[1] + s + wrap[2];

                    // Move to the right depth
                    while (wrap[0]--)
                        div = div.firstChild;

                    // Remove IE's autoinserted <tbody> from table fragments
                    if (jQuery.browser.msie) {

                        // String was a <table>, *may* have spurious <tbody>
                        if (!s.indexOf("<table") && s.indexOf("<tbody") < 0)
                            tb = div.firstChild && div.firstChild.childNodes;

                        // String was a bare <thead> or <tfoot>
                        else if (wrap[1] == "<table>" && s.indexOf("<tbody") < 0)
                            tb = div.childNodes;

                        for (var n = tb.length - 1; n >= 0; --n)
                            if (tb[n].nodeName.toUpperCase() == "TBODY" && !tb[n].childNodes.length)
                                tb[n].parentNode.removeChild(tb[n]);

                    }

                    arg = div.childNodes;
                }

                if (arg.length === 0)
                    return;

                if (arg[0] == undefined)
                    r.push(arg);
                else
                    r = jQuery.merge(r, arg);

            });

            return r;
        },

        /**
         * Remove the whitespace from the beginning and end of a string.
         *
         * @example $.trim("  hello, how are you?  ");
         * @result "hello, how are you?"
         *
         * @name $.trim
         * @type String
         * @param String str The string to trim.
         * @cat JavaScript
         */
        trim: function(t) {
            return t.replace(/^\s+|\s+$/g, "");
        },

        makeArray: function(a) {
            var r = [];

            if (a.constructor != Array)
                for (var i = 0, al = a.length; i < al; i++)
                    r.push(a[i]);
            else
                r = a.slice(0);

            return r;
        },

        inArray: function(b, a) {
            for (var i = 0, al = a.length; i < al; i++)
                if (a[i] == b)
                    return i;
            return -1;
        },

        /**
         * Merge two arrays together, removing all duplicates.
         *
         * The new array is: All the results from the first array, followed
         * by the unique results from the second array.
         *
         * @example $.merge( [0,1,2], [2,3,4] )
         * @result [0,1,2,3,4]
         * @desc Merges two arrays, removing the duplicate 2
         *
         * @example $.merge( [3,2,1], [4,3,2] )
         * @result [3,2,1,4]
         * @desc Merges two arrays, removing the duplicates 3 and 2
         *
         * @name $.merge
         * @type Array
         * @param Array first The first array to merge.
         * @param Array second The second array to merge.
         * @cat JavaScript
         */
        merge: function(first, second) {
            var r = [].slice.call(first, 0);

            // Now check for duplicates between the two arrays
            // and only add the unique items
            for (var i = 0, sl = second.length; i < sl; i++)
            // Check for duplicates
                if (jQuery.inArray(second[i], r) == -1)
                // The item is unique, add it
                    first.push(second[i]);

            return first;
        },

        /**
         * Filter items out of an array, by using a filter function.
         *
         * The specified function will be passed two arguments: The
         * current array item and the index of the item in the array. The
         * function must return 'true' to keep the item in the array, 
         * false to remove it.
         *
         * @example $.grep( [0,1,2], function(i){
         *   return i > 0;
         * });
         * @result [1, 2]
         *
         * @name $.grep
         * @type Array
         * @param Array array The Array to find items in.
         * @param Function fn The function to process each item against.
         * @param Boolean inv Invert the selection - select the opposite of the function.
         * @cat JavaScript
         */


        /**
         * Translate all items in an array to another array of items.
         *
         * The translation function that is provided to this method is 
         * called for each item in the array and is passed one argument: 
         * The item to be translated.
         *
         * The function can then return the translated value, 'null'
         * (to remove the item), or  an array of values - which will
         * be flattened into the full array.
         *
         * @example $.map( [0,1,2], function(i){
         *   return i + 4;
         * });
         * @result [4, 5, 6]
         * @desc Maps the original array to a new one and adds 4 to each value.
         *
         * @example $.map( [0,1,2], function(i){
         *   return i > 0 ? i + 1 : null;
         * });
         * @result [2, 3]
         * @desc Maps the original array to a new one and adds 1 to each
         * value if it is bigger then zero, otherwise it's removed-
         * 
         * @example $.map( [0,1,2], function(i){
         *   return [ i, i + 1 ];
         * });
         * @result [0, 1, 1, 2, 2, 3]
         * @desc Maps the original array to a new one, each element is added
         * with it's original value and the value plus one.
         *
         * @name $.map
         * @type Array
         * @param Array array The Array to translate.
         * @param Function fn The function to process each item against.
         * @cat JavaScript
         */
        map: function(elems, fn) {
            // If a string is passed in for the function, make a function
            // for it (a handy shortcut)
            if (typeof fn == "string")
                fn = new Function("a", "return " + fn);

            var result = [],
                r = [];

            // Go through the array, translating each of the items to their
            // new value (or values).
            for (var i = 0, el = elems.length; i < el; i++) {
                var val = fn(elems[i], i);

                if (val !== null && val != undefined) {
                    if (val.constructor != Array) val = [val];
                    result = result.concat(val);
                }
            }

            var r = result.length ? [result[0]] : [];

            check: for (var i = 1, rl = result.length; i < rl; i++) {
                for (var j = 0; j < i; j++)
                    if (result[i] == r[j])
                        continue check;

                r.push(result[i]);
            }

            return r;
        }
    });

    /**
     * Contains flags for the useragent, read from navigator.userAgent.
     * Available flags are: safari, opera, msie, mozilla
     *
     * This property is available before the DOM is ready, therefore you can
     * use it to add ready events only for certain browsers.
     *
     * There are situations where object detections is not reliable enough, in that
     * cases it makes sense to use browser detection. Simply try to avoid both!
     *
     * A combination of browser and object detection yields quite reliable results.
     *
     * @example $.browser.msie
     * @desc Returns true if the current useragent is some version of microsoft's internet explorer
     *
     * @example if($.browser.safari) { $( function() { alert("this is safari!"); } ); }
     * @desc Alerts "this is safari!" only for safari browsers
     *
     * @property
     * @name $.browser
     * @type Boolean
     * @cat JavaScript
     */

    /*
     * Whether the W3C compliant box model is being used.
     *
     * @property
     * @name $.boxModel
     * @type Boolean
     * @cat JavaScript
     */
    new function() {
        var b = navigator.userAgent.toLowerCase();

        // Figure out what browser is being used
        jQuery.browser = {
            safari: /webkit/.test(b),
            opera: /opera/.test(b),
            msie: /msie/.test(b) && !/opera/.test(b),
            mozilla: /mozilla/.test(b) && !/(compatible|webkit)/.test(b)
        };

        // Check to see if the W3C box model is being used
        jQuery.boxModel = !jQuery.browser.msie || document.compatMode == "CSS1Compat";
    };


    jQuery.each({
        appendTo: "append",

    }, function(i, n) {
        jQuery.fn[i] = function() {
            var a = arguments;
            return this.each(function() {
                for (var j = 0, al = a.length; j < al; j++)
                    jQuery(a[j])[n](this);
            });
        };
    });


    jQuery.each({

        addClass: function(c) {
            jQuery.className.add(this, c);
        },
        empty: function() {
            while (this.firstChild)
                this.removeChild(this.firstChild);
        }
    }, function(i, n) {
        jQuery.fn[i] = function() {
            return this.each(n, arguments);
        };
    });


    jQuery.extend({
        expr: {
            "": "m[2]=='*'||a.nodeName.toUpperCase()==m[2].toUpperCase()",
            "#": "a.getAttribute('id')==m[2]",
            ":": {
                // Position Checks
                lt: "i<m[3]-0",
                gt: "i>m[3]-0",
                nth: "m[3]-0==i",
                eq: "m[3]-0==i",
                first: "i==0",
                last: "i==r.length-1",
                even: "i%2==0",
                odd: "i%2",

                // Child Checks
                "nth-child": "jQuery.nth(a.parentNode.firstChild,m[3],'nextSibling',a)==a",
                "first-child": "jQuery.nth(a.parentNode.firstChild,1,'nextSibling')==a",
                "last-child": "jQuery.nth(a.parentNode.lastChild,1,'previousSibling')==a",
                "only-child": "jQuery.sibling(a.parentNode.firstChild).length==1",

                // Parent Checks
                parent: "a.firstChild",
                empty: "!a.firstChild",

                // Text Check
                contains: "jQuery.fn.text.apply([a]).indexOf(m[3])>=0",

                // Visibility
                visible: 'a.type!="hidden"&&jQuery.css(a,"display")!="none"&&jQuery.css(a,"visibility")!="hidden"',
                hidden: 'a.type=="hidden"||jQuery.css(a,"display")=="none"||jQuery.css(a,"visibility")=="hidden"',

                // Form attributes
                enabled: "!a.disabled",
                disabled: "a.disabled",
                checked: "a.checked",
                selected: "a.selected||jQuery.attr(a,'selected')",

                // Form elements
                text: "a.type=='text'",
                radio: "a.type=='radio'",
                checkbox: "a.type=='checkbox'",
                file: "a.type=='file'",
                password: "a.type=='password'",
                submit: "a.type=='submit'",
                image: "a.type=='image'",
                reset: "a.type=='reset'",
                button: 'a.type=="button"||a.nodeName=="BUTTON"',
                input: "/input|select|textarea|button/i.test(a.nodeName)"
            },
            ".": "jQuery.className.has(a,m[2])",
            "@": {
                "=": "z==m[4]",
                "!=": "z!=m[4]",
                "^=": "z&&!z.indexOf(m[4])",
                "$=": "z&&z.substr(z.length - m[4].length,m[4].length)==m[4]",
                "*=": "z&&z.indexOf(m[4])>=0",
                "": "z",
                _resort: function(m) {
                    return ["", m[1], m[3], m[2], m[5]];
                },
                _prefix: "z=a[m[3]]||jQuery.attr(a,m[3]);"
            },
            "[": "jQuery.find(m[2],a).length"
        },

        // The regular expressions that power the parsing engine
        parse: [
            // Match: [@value='test'], [@foo]
            /^\[ *(@)([a-z0-9_-]*) *([!*$^=]*) *('?"?)(.*?)\4 *\]/i,

            // Match: [div], [div p]
            /^(\[)\s*(.*?(\[.*?\])?[^[]*?)\s*\]/,

            // Match: :contains('foo')
            /^(:)([a-z0-9_-]*)\("?'?(.*?(\(.*?\))?[^(]*?)"?'?\)/i,

            // Match: :even, :last-chlid
            /^([:.#]*)([a-z0-9_*-]*)/i
        ],

        token: [
            /^(\/?\.\.)/, "a.parentNode",
            /^(>|\/)/, "jQuery.sibling(a.firstChild)",
            /^(\+)/, "jQuery.nth(a,2,'nextSibling')",
            /^(~)/,
            function(a) {
                var s = jQuery.sibling(a.parentNode.firstChild);
                return s.slice(0, jQuery.inArray(a, s));
            }
        ],

        find: function(t, context) {
            // Quickly handle non-string expressions
            if (typeof t != "string")
                return [t];

            // Make sure that the context is a DOM Element
            if (context && !context.nodeType)
                context = null;

            // Set the correct context (if none is provided)
            context = context || document;

            // Handle the common XPath // expression
            if (!t.indexOf("//")) {
                context = context.documentElement;
                t = t.substr(2, t.length);

                // And the / root expression
            } else if (!t.indexOf("/")) {
                context = context.documentElement;
                t = t.substr(1, t.length);
                if (t.indexOf("/") >= 1)
                    t = t.substr(t.indexOf("/"), t.length);
            }

            // Initialize the search
            var ret = [context],
                done = [],
                last = null;

            // Continue while a selector expression exists, and while
            // we're no longer looping upon ourselves
            while (t && last != t) {
                var r = [];
                last = t;

                t = jQuery.trim(t).replace(/^\/\//i, "");

                var foundToken = false;

                // An attempt at speeding up child selectors that
                // point to a specific element tag
                var re = /^[\/>]\s*([a-z0-9*-]+)/i;
                var m = re.exec(t);

                if (m) {
                    // Perform our own iteration and filter
                    jQuery.each(ret, function() {
                        for (var c = this.firstChild; c; c = c.nextSibling)
                            if (c.nodeType == 1 && (c.nodeName == m[1].toUpperCase() || m[1] == "*"))
                                r.push(c);
                    });

                    ret = r;
                    t = jQuery.trim(t.replace(re, ""));
                    foundToken = true;
                } else {
                    // Look for pre-defined expression tokens
                    for (var i = 0; i < jQuery.token.length; i += 2) {
                        // Attempt to match each, individual, token in
                        // the specified order
                        var re = jQuery.token[i];
                        var m = re.exec(t);

                        // If the token match was found
                        if (m) {
                            // Map it against the token's handler
                            r = ret = jQuery.map(ret, jQuery.isFunction(jQuery.token[i + 1]) ?
                                jQuery.token[i + 1] :
                                function(a) {
                                    return eval(jQuery.token[i + 1]);
                                });

                            // And remove the token
                            t = jQuery.trim(t.replace(re, ""));
                            foundToken = true;
                            break;
                        }
                    }
                }

                // See if there's still an expression, and that we haven't already
                // matched a token
                if (t && !foundToken) {
                    // Handle multiple expressions
                    if (!t.indexOf(",")) {
                        // Clean the result set
                        if (ret[0] == context) ret.shift();

                        // Merge the result sets
                        jQuery.merge(done, ret);

                        // Reset the context
                        r = ret = [context];

                        // Touch up the selector string
                        t = " " + t.substr(1, t.length);

                    } else {
                        // Optomize for the case nodeName#idName
                        var re2 = /^([a-z0-9_-]+)(#)([a-z0-9\\*_-]*)/i;
                        var m = re2.exec(t);

                        // Re-organize the results, so that they're consistent
                        if (m) {
                            m = [0, m[2], m[3], m[1]];

                        } else {
                            // Otherwise, do a traditional filter check for
                            // ID, class, and element selectors
                            re2 = /^([#.]?)([a-z0-9\\*_-]*)/i;
                            m = re2.exec(t);
                        }

                        // Try to do a global search by ID, where we can
                        if (m[1] == "#" && ret[ret.length - 1].getElementById) {
                            // Optimization for HTML document case
                            var oid = ret[ret.length - 1].getElementById(m[2]);

                            // Do a quick check for node name (where applicable) so
                            // that div#foo searches will be really fast
                            ret = r = oid &&
                                (!m[3] || oid.nodeName == m[3].toUpperCase()) ? [oid] : [];

                        } else {
                            // Pre-compile a regular expression to handle class searches
                            if (m[1] == ".")
                                var rec = new RegExp("(^|\\s)" + m[2] + "(\\s|$)");

                            // We need to find all descendant elements, it is more
                            // efficient to use getAll() when we are already further down
                            // the tree - we try to recognize that here
                            jQuery.each(ret, function() {
                                // Grab the tag name being searched for
                                var tag = m[1] != "" || m[0] == "" ? "*" : m[2];

                                // Handle IE7 being really dumb about <object>s
                                if (this.nodeName.toUpperCase() == "OBJECT" && tag == "*")
                                    tag = "param";

                                jQuery.merge(r,
                                    m[1] != "" && ret.length != 1 ?
                                    jQuery.getAll(this, [], m[1], m[2], rec) :
                                    this.getElementsByTagName(tag)
                                );
                            });

                            // It's faster to filter by class and be done with it
                            if (m[1] == "." && ret.length == 1)
                                r = jQuery.grep(r, function(e) {
                                    return rec.test(e.className);
                                });

                            // Same with ID filtering
                            if (m[1] == "#" && ret.length == 1) {
                                // Remember, then wipe out, the result set
                                var tmp = r;
                                r = [];

                                // Then try to find the element with the ID
                                jQuery.each(tmp, function() {
                                    if (this.getAttribute("id") == m[2]) {
                                        r = [this];
                                        return false;
                                    }
                                });
                            }

                            ret = r;
                        }

                        t = t.replace(re2, "");
                    }

                }

                // If a selector string still exists
                if (t) {
                    // Attempt to filter it
                    var val = jQuery.filter(t, r);
                    ret = r = val.r;
                    t = jQuery.trim(val.t);
                }
            }

            // Remove the root context
            if (ret && ret[0] == context) ret.shift();

            // And combine the results
            jQuery.merge(done, ret);

            return done;
        },

    });
    /*
     * A number of helper functions used for managing events.
     * Many of the ideas behind this code orignated from 
     * Dean Edwards' addEvent library.
     */
    jQuery.event = {

        // Bind an event to an element
        // Original by Dean Edwards
        add: function(element, type, handler, data) {
            // For whatever reason, IE has trouble passing the window object
            // around, causing it to be cloned in the process
            if (jQuery.browser.msie && element.setInterval != undefined)
                element = window;

            // if data is passed, bind to handler
            if (data)
                handler.data = data;

            // Make sure that the function being executed has a unique ID
            if (!handler.guid)
                handler.guid = this.guid++;

            // Init the element's event structure
            if (!element.events)
                element.events = {};

            // Get the current list of functions bound to this event
            var handlers = element.events[type];

            // If it hasn't been initialized yet
            if (!handlers) {
                // Init the event handler queue
                handlers = element.events[type] = {};

                // Remember an existing handler, if it's already there
                if (element["on" + type])
                    handlers[0] = element["on" + type];
            }

            // Add the function to the element's handler list
            handlers[handler.guid] = handler;

            // And bind the global event handler to the element
            element["on" + type] = this.handle;

            // Remember the function in a global list (for triggering)
            if (!this.global[type])
                this.global[type] = [];
            this.global[type].push(element);
        },

        guid: 1,
        global: {},

        handle: function(event) {
            if (typeof jQuery == "undefined") return false;

            // Empty object is for triggered events with no data
            event = jQuery.event.fix(event || window.event || {});

            // returned undefined or false
            var returnValue;

            var c = this.events[event.type];

            var args = [].slice.call(arguments, 1);
            args.unshift(event);

            for (var j in c) {
                // Pass in a reference to the handler function itself
                // So that we can later remove it
                args[0].handler = c[j];
                args[0].data = c[j].data;

                if (c[j].apply(this, args) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    returnValue = false;
                }
            }

            // Clean up added properties in IE to prevent memory leak
            if (jQuery.browser.msie) event.target = event.preventDefault = event.stopPropagation = event.handler = event.data = null;

            return returnValue;
        },

        fix: function(event) {
            // Fix target property, if necessary
            if (!event.target && event.srcElement)
                event.target = event.srcElement;

            // Calculate pageX/Y if missing and clientX/Y available
            if (event.pageX == undefined && event.clientX != undefined) {
                var e = document.documentElement,
                    b = document.body;
                event.pageX = event.clientX + (e.scrollLeft || b.scrollLeft);
                event.pageY = event.clientY + (e.scrollTop || b.scrollTop);
            }

            // check if target is a textnode (safari)
            if (jQuery.browser.safari && event.target.nodeType == 3) {
                // store a copy of the original event object 
                // and clone because target is read only
                var originalEvent = event;
                event = jQuery.extend({}, originalEvent);

                // get parentnode from textnode
                event.target = originalEvent.target.parentNode;

                // add preventDefault and stopPropagation since 
                // they will not work on the clone
                event.preventDefault = function() {
                    return originalEvent.preventDefault();
                };
                event.stopPropagation = function() {
                    return originalEvent.stopPropagation();
                };
            }

            // fix preventDefault and stopPropagation
            if (!event.preventDefault)
                event.preventDefault = function() {
                    this.returnValue = false;
                };

            if (!event.stopPropagation)
                event.stopPropagation = function() {
                    this.cancelBubble = true;
                };

            return event;
        }
    };

    jQuery.fn.extend({

        /**
         * Bind a function to be executed whenever the DOM is ready to be
         * traversed and manipulated. This is probably the most important 
         * function included in the event module, as it can greatly improve
         * the response times of your web applications.
         *
         * In a nutshell, this is a solid replacement for using window.onload, 
         * and attaching a function to that. By using this method, your bound Function 
         * will be called the instant the DOM is ready to be read and manipulated, 
         * which is exactly what 99.99% of all Javascript code needs to run.
         *
         * There is one argument passed to the ready event handler: A reference to
         * the jQuery function. You can name that argument whatever you like, and
         * can therefore stick with the $ alias without risc of naming collisions.
         * 
         * Please ensure you have no code in your &lt;body&gt; onload event handler, 
         * otherwise $(document).ready() may not fire.
         *
         * You can have as many $(document).ready events on your page as you like.
         * The functions are then executed in the order they were added.
         *
         * @example $(document).ready(function(){ Your code here... });
         *
         * @example jQuery(function($) {
         *   // Your code using failsafe $ alias here...
         * });
         * @desc Uses both the shortcut for $(document).ready() and the argument
         * to write failsafe jQuery code using the $ alias, without relying on the
         * global alias.
         *
         * @name ready
         * @type jQuery
         * @param Function fn The function to be executed when the DOM is ready.
         * @cat Events
         * @see $.noConflict()
         * @see $(Function)
         */
        ready: function(f) {
            // If the DOM is already ready
            if (jQuery.isReady)
            // Execute the function immediately
                f.apply(document, [jQuery]);

            // Otherwise, remember the function for later
            else {
                // Add the function to the wait list
                jQuery.readyList.push(function() {
                    return f.apply(this, [jQuery])
                });
            }

            return this;
        }
    });

    jQuery.extend({
        /*
         * All the code that makes DOM Ready work nicely.
         */
        isReady: false,
        readyList: [],

        // Handle when the DOM is ready
        ready: function() {
            // Make sure that the DOM is not already loaded
            if (!jQuery.isReady) {
                // Remember that the DOM is ready
                jQuery.isReady = true;

                // If there are functions bound, to execute
                if (jQuery.readyList) {
                    // Execute all of them
                    jQuery.each(jQuery.readyList, function() {
                        this.apply(document);
                    });

                    // Reset the list of functions
                    jQuery.readyList = null;
                }
                // Remove event lisenter to avoid memory leak
                if (jQuery.browser.mozilla || jQuery.browser.opera)
                    document.removeEventListener("DOMContentLoaded", jQuery.ready, false);
            }
        }
    });



    new function() {

        // A fallback to window.onload, that will always work
        jQuery.event.add(window, "load", jQuery.ready);

    };




}
