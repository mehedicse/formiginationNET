 

var LoggedInUserName = '';
var serviceRoot = "..";
var CurrentUser = null;
var AjaxController = {



    //MVC call
    GetJsonResult: function (serviceUrl, jsonParams, isAsync, isCache, successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            async: isAsync,
            cache: isCache,
            url: serviceUrl,
            data: jsonParams,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: successCallback,
            error: errorCallback
        });
    },

    GetJson: function (serviceUrl, jsonParams, successCallback, errorCallback) {
        jQuery.ajax({
            url: serviceUrl,
            data: jsonParams,
            type: "POST",
            processData: true,
            contentType: "application/json",
            dataType: "json",
            success: successCallback,
            error: errorCallback
        });
    },
    SendJson: function (serviceUrl, jsonParams, successCallback, errorCallback) {
        jQuery.ajax({
            url: serviceUrl,
            data: jsonParams,
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: successCallback,
            error: errorCallback
        });
    },

    SaveObject: function (serviceUrl, jsonParams, successCallback) {
        jQuery.ajax({
            url: serviceUrl,
            async: false,
            type: "POST",
            data: "{" + jsonParams + "}",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: successCallback,
            error: function(error) {
                alert(error);
            }
        });
    },



    //Custome Message Box designed By Mazhar
    //======================================================================================
    MsgBox: function (messageBoxType, displayPosition, messageBoxHeaderText, messageText, buttonsArray) {
        var n = noty({
            textHeader: messageBoxHeaderText,
            text: messageText,
            type: messageBoxType,
            modal: true,
            dismissQueue: true,
            layout: displayPosition,
            theme: 'defaultTheme',
            buttons: buttonsArray
         
        });
        $(".btn-primary").focus();
        //console.log('html: ' + n.options.id);
    },
    //======================================================================================



    getGridConfig: function (opt, urllink, sortColumnName, orderBy) {

        return $.extend(true, {
            url: urllink,
            datatype: 'json',
            mtype: 'GET',
            pager: jQuery('#pager'),
            rowNum: 10,
            rowList: [5, 10, 15, 20, 50, 100],
            sortname: sortColumnName,
            sortorder: orderBy, //"DESC" OR ASC,
            viewrecords: true,
            jsonReader: {
                root: "Data",
                page: "PageIndex",
                total: "TotalPages",
                records: "TotalCount",
                repeatitems: false
            },
            loadBeforeSend: function (xhr) {
                xhr.setRequestHeader("content-type", "application/json");
            },
            prmNames: { page: 'pageIndex', rows: 'pageSize', sort: 'orderByField', order: 'orderByType' },
            height: 'auto'
        }, opt);
    },
    multilineGridColumn: function (el, cellval, opts) {
        $(el).attr('style', 'white-space: normal;');
        $(el).html(cellval);
        //return 'style="white-space: normal;'
    },
    disablePopup: function (popupDivName, backgroundDivName) {
        $(popupDivName).fadeOut("slow");
        $(backgroundDivName).fadeOut("slow");
    },

    centerPopup: function (popupDivName) {
        var windowWidth = document.documentElement.clientWidth;
        var windowHeight = document.documentElement.clientHeight;
        var popupHeight = $(popupDivName).height();
        var popupHeight = popupHeight;
        var popupWidth = $(popupDivName).width();

        $(popupDivName).css({
            "position": "absolute",
            "top": windowHeight / 2 - popupHeight / 2,
            "left": windowWidth / 2 - popupWidth / 2,
            "height": popupHeight
        });

        $('#backgroundPopup').css({
            "height": windowHeight
        });

    },

    showlink: function (el, cellval, opts) {
        var op = { baseLinkUrl: opts.baseLinkUrl, showAction: opts.showAction, addParam: opts.addParam };
        if (!isUndefined(opts.colModel.formatoptions)) {
            op = $.extend({}, op, opts.colModel.formatoptions);
        }
        idUrl = op.baseLinkUrl + op.showAction + '?id=' + opts.rowId + op.addParam;
        if (isString(cellval)) {	//add this one even if its blank string
            $(el).html("<a class=\"aColumn\" href=\"#\"" + "onclick=\"Page.Test(' " + opts.rowId + "')\">" + cellval + "</a>");
        } else {
            $.fn.fmatter.defaultFormat(el, cellval);
        }
    },
    jqGridDate: function (el, cellval, opts) {
        if (!isEmpty(cellval) && cellval != "/Date(-62135596800000)/")
            $(el).html(AjaxManager.changeDateFormat(cellval, 0));
    },
    jqGridDateTime: function (el, cellval, opts) {

        if (!isEmpty(cellval) && cellval != "/Date(-62135596800000)/")
            $(el).html(AjaxManager.changeDateFormat(cellval, 1));
    },
    changeDateFormat: function (value, isTime) {
        var time = value.replace(/\/Date\(([0-9]*)\)\//, '$1');
        var date = new Date();
        date.setTime(time);
        if (isTime == 0) {
            return (date.getDate().toString().length == 2 ? date.getDate() : '0' + date.getDate()) + '-' + ((date.getMonth() + 1).toString().length == 2 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)) + '-' + date.getFullYear();
        }
        else {
            return (date.getDate().toString().length == 2 ? date.getDate() : '0' + date.getDate()) + '-' + ((date.getMonth() + 1).toString().length == 2 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)) + '-' + date.getFullYear()
       + '<br> ' + (date.getHours().toString().length == 2 ? date.getHours() : '0' + date.getHours()) + ':' + (date.getMinutes().toString().length == 2 ? date.getMinutes() : '0' + date.getMinutes()) + ':' + (date.getSeconds().toString().length == 2 ? date.getSeconds() : '0' + date.getSeconds());
        }
    },
    getCurrentDateTime: function () {
        var date = new Date();
        var day = (date.getDate().toString().length == 2 ? date.getDate() : '0' + date.getDate()).toString();
        var month = ((date.getMonth() + 1).toString().length == 2 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)).toString();
        var year = date.getFullYear().toString();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var suffix = "AM";
        if (hours >= 12) {
            suffix = "PM";
            hours = hours - 12;
        }
        if (hours == 0) {
            hours = 12;
        }

        if (minutes < 10)
            minutes = "0" + minutes
        //var CurrentDateTime = day + "/" + month + "/" + year + " " + hours + ":" + minutes + " " + suffix;
        //var CurrentDateTime = day + "/" + month + "/" + year + " " + hours + ":" + minutes;
        var CurrentDateTime = day + "-" + month + "-" + year;
        return CurrentDateTime;
    },
    changeToSQLDateFormat: function (value, isTime) {
        var time = value.replace(/\/Date\(([0-9]*)\)\//, '$1');
        var date = new Date();
        date.setTime(time);
        var dd = (date.getDate().toString().length == 2 ? date.getDate() : '0' + date.getDate()).toString();
        var mm = ((date.getMonth() + 1).toString().length == 2 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)).toString();
        var yyyy = date.getFullYear().toString();
        var timeformat = "";
        if (isTime == 1) {
            timeformat = (date.getHours().toString().length == 2 ? date.getHours() : '0' + date.getHours()) + ':' + (date.getMinutes().toString().length == 2 ? date.getMinutes() : '0' + date.getMinutes()) + ':' + (date.getSeconds().toString().length == 2 ? date.getSeconds() : '0' + date.getSeconds());
        }
        var sqlFormatedDate = mm + '/' + dd + '/' + yyyy + ' ' + timeformat;
        return sqlFormatedDate;

    },
    changeReverseDateFormat: function (value) {
        dtvalue = value.split('-');
        var datetime = dtvalue[1] + "/" + dtvalue[0] + "/" + dtvalue[2];
        return datetime;
    },
    changeFormattedDate: function (value, format) {
        var date = new Date(value);
        if (format == "DDMMYYYY") {
            return (date.getDate().toString().length == 2 ? date.getDate() : '0' + date.getDate()) + '-' + ((date.getMonth() + 1).toString().length == 2 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)) + '-' + date.getFullYear();
        }
        if (format == "MMDDYYYY") {
            return ((date.getMonth() + 1).toString().length == 2 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)) + '-' + (date.getDate().toString().length == 2 ? date.getDate() : '0' + date.getDate()) + '-' + date.getFullYear();
        }
    },
    getDayDifference: function (date1, date2) {

        // The number of milliseconds in one day
        var ONE_DAY = 1000 * 60 * 60 * 24;

        // Convert both dates to milliseconds
        var date1_ms = new Date(date1).getTime();
        var date2_ms = new Date(date2).getTime();

        // Calculate the difference in milliseconds
        var difference_ms = Math.abs(date1_ms - date2_ms);

        // Convert back to days and return
        return Math.round(difference_ms / ONE_DAY);

    },
    hideMasterDetailsForPrint: function () {
        $("#header").hide();
        $("#dynamicmenu").hide();
        $("#divWelcome").hide();
        $("#content").hide();
        $("#main").css({
            "background-color": "#ffffff"
        });
        $("body").css({
            "background-color": "#ffffff"
        });
        $("#footer").hide();
    },
    showMasterDetailsForPrint: function () {
        $("#header").show();
        $("#dynamicmenu").show();
        $("#divWelcome").show();
        $("#content").show();
        $("#main").css({
            "background-color": "#A6D77B"
        });
        $("body").css({
            "background-color": "#A6D77B"
        });
        $("#footer").show();
    }
};                       //End AjaxManager

var MenuManager = {

    getMenu: function (moduleId) {
        var pathName = window.location.pathname;
        var pageName = pathName.substring(pathName.lastIndexOf('/') + 1);
        var serviceURL = "../Menu/SelectMenuByUserPermission/";
        var jsonParam = "";// "moduleId=" + moduleId;
        AjaxManager.GetJsonResult(serviceURL, jsonParam, false, false, onSuccess, onFailed);
        function onSuccess(jsonData) {
            //MenuManager.populateMenus(jsonData);
        }
        function onFailed(error) {
            window.alert(error.statusText);
        }
    },
    getCurrentUser: function (menuRefresh) {
        var jsonParam = '';
        var pathName = window.location.pathname;
        var pageName = pathName.substring(pathName.lastIndexOf('/') + 1);
        var serviceURL = "";
        if (pageName.toLowerCase() == "home.mvc") {
            serviceURL = "./Home/GetCurrentUser";
        }
        else {
            serviceURL = "./GetCurrentUser";
        }
        AjaxManager.SendJson(serviceURL, jsonParam, onSuccess, onFailed);
        function onSuccess(jsonData) {
            CurrentUser = jsonData;
            if (CurrentUser != undefined) {
                if (menuRefresh == true) {
                    MenuManager.getMenu(1);
                }
                $("#headerLogo").attr('style', 'background-image: url("..' + CurrentUser.FullLogoPath + '") !important');
            }

        }
        function onFailed(error) {
            window.alert(error.statusText);
        }
    },


    IsStringEmpty: function (str) {
        if (str && str != '')
            return false;
        else
            return true;
    },



    addchiledMenu: function (objMenuOrginal, menuId, objMenuList) {
        var chiledMenuArray = [];
        var newMenuArray = [];
        for (var j = 0; j < objMenuList.length; j++) {
            if (objMenuList[j].ParentMenuId == menuId) {
                var objMenu = new Object();
                objMenu = objMenuOrginal;
                var objChiledMenu = new Object();
                objChiledMenu.id = objMenuList[j].MenuId;
                objChiledMenu.itemId = objMenuList[j].MenuId;
                objChiledMenu.text = objMenuList[j].MenuName;
                if (objMenuList[j].MenuPath == "") {
                    objMenu.url = "";
                }
                else {
                    objMenu.url = objMenuList[j].MenuPath;
                }
                objChiledMenu.spriteCssClass = "html";
                chiledMenuArray = objMenuOrginal.items;
                if (chiledMenuArray == undefined || chiledMenuArray.length == 0) {
                    chiledMenuArray = [];
                }
                else {
                    objChiledMenu.expanded = true,
                    objChiledMenu.spriteCssClass = "folder";
                }
                newMenuArray = MenuManager.chiledMenu(objChiledMenu, objMenuList[j].MenuId, objMenuList);
                chiledMenuArray.push(objChiledMenu);
                objMenu.items = chiledMenuArray;
            }
        }
        return chiledMenuArray;
    }

};

var currencyConverter = {

    add_commas: function (nStr) {
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    },
    digitToWordConverter: function (junkVal) {
        junkVal = Math.floor(junkVal);
        var obStr = new String(junkVal);
        numReversed = obStr.split("");
        actnumber = numReversed.reverse();

        if (Number(junkVal) >= 0) {
            //do nothing
        }
        else {
            alert('wrong Number cannot be converted');
            return false;
        }
        if (Number(junkVal) == 0) {
            document.getElementById('container').innerHTML = obStr + '' + 'Rupees Zero Only';
            return false;
        }
        if (actnumber.length > 9) {
            alert('Oops!!!! the Number is too big to covertes');
            return false;
        }

        var iWords = ["Zero", " One", " Two", " Three", " Four", " Five", " Six", " Seven", " Eight", " Nine"];
        var ePlace = ['Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];
        var tensPlace = ['dummy', ' Ten', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'];

        var iWordsLength = numReversed.length;
        var totalWords = "";
        var inWords = new Array();
        var finalWord = "";
        j = 0;
        for (i = 0; i < iWordsLength; i++) {
            switch (i) {
                case 0:
                    if (actnumber[i] == 0 || actnumber[i + 1] == 1) {
                        inWords[j] = '';
                    }
                    else {
                        inWords[j] = iWords[actnumber[i]];
                    }
                    inWords[j] = inWords[j] + ' Only';
                    break;
                case 1:
                    tens_complication();
                    break;
                case 2:
                    if (actnumber[i] == 0) {
                        inWords[j] = '';
                    }
                    else if (actnumber[i - 1] != 0 && actnumber[i - 2] != 0) {
                        inWords[j] = iWords[actnumber[i]] + ' Hundred and';
                    }
                    else {
                        inWords[j] = iWords[actnumber[i]] + ' Hundred';
                    }
                    break;
                case 3:
                    if (actnumber[i] == 0 || actnumber[i + 1] == 1) {
                        inWords[j] = '';
                    }
                    else {
                        inWords[j] = iWords[actnumber[i]];
                    }
                    if (actnumber[i + 1] != 0 || actnumber[i] > 0) {
                        inWords[j] = inWords[j] + " Thousand";
                    }
                    break;
                case 4:
                    tens_complication();
                    break;
                case 5:
                    if (actnumber[i] == 0 || actnumber[i + 1] == 1) {
                        inWords[j] = '';
                    }
                    else {
                        inWords[j] = iWords[actnumber[i]];
                    }
                    if (actnumber[i + 1] != 0 || actnumber[i] > 0) {
                        inWords[j] = inWords[j] + " Lakh";
                    }
                    break;
                case 6:
                    tens_complication();
                    break;
                case 7:
                    if (actnumber[i] == 0 || actnumber[i + 1] == 1) {
                        inWords[j] = '';
                    }
                    else {
                        inWords[j] = iWords[actnumber[i]];
                    }
                    inWords[j] = inWords[j] + " Crore";
                    break;
                case 8:
                    tens_complication();
                    break;
                default:
                    break;
            }
            j++;
        }

        function tens_complication() {
            if (actnumber[i] == 0) {
                inWords[j] = '';
            }
            else if (actnumber[i] == 1) {
                inWords[j] = ePlace[actnumber[i - 1]];
            }
            else {
                inWords[j] = tensPlace[actnumber[i]];
            }
        }
        inWords.reverse();
        for (i = 0; i < inWords.length; i++) {
            finalWord += inWords[i];
        }
        return finalWord;
    }
};

var FileManager = {
    showFilePopup: function (container, valueContainer) {
        //alert(valueContainer);
        jQuery(container).dialog("destroy");
        jQuery(container).dialog({
            height: 257,
            modal: true,
            title: "File Upload",
            width: 381,
            //bgiframe: true,            
            //autoOpen: false, 
            resizable: false

        });
    },

    getUploadedFileDetails: function (jsonData) {
        alert(jsonData.message);
        alert(jsonData.webpath);
        FileManager.closeFilePopup(container);
    },

    closeFilePopup: function (container) {
        jQuery(container).dialog("close");
        jQuery(container).dialog("destroy");
    }
};


