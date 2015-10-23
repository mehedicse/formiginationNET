//Developer by Md Mohidul Islam Sobuj(Software Engineer), Date:5 November 2013
//Ezyframwork v1.0.0



(function ($) {
    $.fn.serializeFormJSON = function () {

        var jsonStr = "";
        $.each(function () {
            var name = $(this).attr("name");
            if (name != undefined) {
                var type = $(this).attr("type");
                if ((type == "checkbox" || type == "radio")) {
                    if ($(this).is(":checked")) {
                        jsonStr = jsonStr + '"' + name + '"' + ":" + '"' + true + '"' + ","; //1=true

                    } else {
                        jsonStr = +jsonStr + '"' + name + '"' + ":" + '"' + false + '"' + ","; //0=false
                    }

                } else if (type != "button" || type != "submit") {
                    jsonStr = jsonStr + '"' + name + '"' + ":" + '"' + $(this).val() + '"' + ",";
                }
            }
        });
        //$(divId + ' textarea').each(function () {

        //    var name = $(this).attr("name");
        //    if (name != undefined) {
        //        jsonStr = jsonStr + '"' + name + '"' + ":" + '"' + $(this).val() + '"' + ",";
        //    }
        //});

        jsonStr = "{" + jsonStr + "}";
        return jsonStr;
    };
})(jQuery);