

(function ($) {
    var kendo = window.kendo,
        ui = kendo.ui,
        Widget = ui.Widget,
        CHANGE = "change",
        BUTTONCLICK = "buttonclick",
        BLUR = "blur",
        ns = ".kendoTextBox";

    var TextBox = Widget.extend({
        // Kendo calls this method when a new widget is created
        init: function (element, options) {
            var that = this;
            Widget.fn.init.call(this, element, options);
            //Create a blur event handler.
            element = that.element
                           .on(BLUR + ns, $.proxy(that._blur, that));
            //Create the DOM elements to build the widget
            that._create();
            //Set the value from the options.value setting, if it was called with a static value
            if (options.value) {
                that.value(options.value);
            }
        },
        //List of all options supported and default values
        options: {
            name: "TextBox",
            value: null,
            width: "100$;",
            iconclass: "k-i-search",
        },
        //Convenience method to set the value of the control externally
        //Useful for event handlers in dependent methods to be able to
        //set the control's value and have it propogate to the MVVM subscribers
        set: function (value) {
            var that = this;
            if (that._old != value) {
                //It is different, update the value
                that._update(value);
                //Capture the new value for future change detection
                that._old = value;
                // trigger the external change event to notify subscribers
                that.trigger(CHANGE);
            }
        },
        //MVVM framework calls 'value' when the viewmodel 'value' binding changes
        value: function (value) {
            var that = this;

            if (value === undefined) {
                return that._value;
            }
            that._update(value);
            that._old = that._value;
        },
        //Export the events the control can fire
        events: [CHANGE, BUTTONCLICK],
        // this function creates each of the UI elements and appends them to the element
        // that was selected out of the DOM for this widget
        _create: function () {
            // cache a reference to this
            var that = this;

            // setup the icon
            var template = kendo.template(that._templates.icon);
            that.icon = $(template(that.options));

            // setup the textbox
            template = kendo.template(that._templates.textbox);
            that.textbox = $(template(that.options));


            that.icon.on("click", $.proxy(that._buttonclick, that));

            // append all elements to the DOM
            that.element.attr("name", that.options.name);
            that.element.addClass("k-input");
            that.element.css("width", "100%");
            that.element.wrap(that.textbox);

            that.element.after(that.icon);
        },
        //Fire the external event: buttonclick
        _buttonclick: function (element) {
            var that = this;
            that.trigger(BUTTONCLICK, { element: element });
            return that;
        },
        //HTML for the templates that comprise the widget
        _templates: {
            textbox: "<span style='width: #: width #px;' class='k-widget k-datepicker k-header tb'><span class='k-picker-wrap k-state-default'></span></span>",
            icon: "<span unselectable='on' class='k-select' role='button'><span unselectable='on' class='k-icon #: iconclass #'>select</span></span>"
        },
        //blur event handler - primary UI change detection entry point
        _blur: function () {
            var that = this;
            that._change(that.element.val());
        },
        //Update the internals of 'value'
        _update: function (value) {
            var that = this;
            that._value = value;
            that.element.val(value);
        },
        _change: function (value) {
            var that = this;
            //Determine if the value is different than it was before
            if (that._old != value) {
                //It is different, update the value
                that._update(value);
                //Capture the new value for future change detection
                that._old = value;
                // trigger the external change
                that.trigger(CHANGE);
            }
        }
    });
    ui.plugin(TextBox);
})(jQuery);




(function ($) {
    var kendo = window.kendo,
        ui = kendo.ui,
        Widget = ui.Widget,
        CHANGE = "change",
        BUTTONCLICK = "buttonclick",
        BLUR = "blur",
        ns = ".kendoTextBox";

    var AzTextBox = Widget.extend({
        // Kendo calls this method when a new widget is created
        init: function (element, options) {
            var that = this;
            Widget.fn.init.call(this, element, options);
            //Create a blur event handler.
            element = that.element
                           .on(BLUR + ns, $.proxy(that._blur, that));
            //Create the DOM elements to build the widget
            that._create();
            //Set the value from the options.value setting, if it was called with a static value
            if (options.value) {
                that.value(options.value);
            }
        },
        //List of all options supported and default values
        options: {
            name: "AzTextBox",
            value: null,
            width: "100$;",
           iconclass: "",
        },
        //Convenience method to set the value of the control externally
        //Useful for event handlers in dependent methods to be able to
        //set the control's value and have it propogate to the MVVM subscribers
        set: function (value) {
            var that = this;
            if (that._old != value) {
                //It is different, update the value
                that._update(value);
                //Capture the new value for future change detection
                that._old = value;
                // trigger the external change event to notify subscribers
                that.trigger(CHANGE);
            }
        },
        //MVVM framework calls 'value' when the viewmodel 'value' binding changes
        value: function (value) {
            var that = this;

            if (value === undefined) {
                return that._value;
            }
            that._update(value);
            that._old = that._value;
        },
        //Export the events the control can fire
        events: [CHANGE, BUTTONCLICK],
        // this function creates each of the UI elements and appends them to the element
        // that was selected out of the DOM for this widget
        _create: function () {
            // cache a reference to this
            var that = this;

            // setup the icon
            var template = kendo.template(that._templates.icon);
            that.icon = $(template(that.options));

            // setup the textbox
            template = kendo.template(that._templates.textbox);
            that.textbox = $(template(that.options));


            that.icon.on("click", $.proxy(that._buttonclick, that));

            // append all elements to the DOM
            that.element.attr("name", that.options.name);
            that.element.addClass("k-input");
            that.element.css("width", "100%");
            that.element.wrap(that.textbox);

            that.element.after(that.icon);
        },
        //Fire the external event: buttonclick
        _buttonclick: function (element) {
            var that = this;
            that.trigger(BUTTONCLICK, { element: element });
            return that;
        },
        //HTML for the templates that comprise the widget
        _templates: {
            textbox: "<span style='width: #: width #px;' class='k-widget k-datepicker k-header tb'><span class='k-picker-wrap k-state-default'></span></span>",
            icon: "<span unselectable='on' class='k-select' role='button'><span unselectable='on' class='k-icon #: iconclass #'>select</span></span>"
        },
        //blur event handler - primary UI change detection entry point
        _blur: function () {
            var that = this;
            that._change(that.element.val());
        },
        //Update the internals of 'value'
        _update: function (value) {
            var that = this;
            that._value = value;
            that.element.val(value);
        },
        _change: function (value) {
            var that = this;
            //Determine if the value is different than it was before
            if (that._old != value) {
                //It is different, update the value
                that._update(value);
                //Capture the new value for future change detection
                that._old = value;
                // trigger the external change
                that.trigger(CHANGE);
            }
        }
    });
    ui.plugin(AzTextBox);
})(jQuery);