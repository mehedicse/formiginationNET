var EducationManager = {
    saveEducation: function () {

        var EducationObj = EducationHelper.createEducationObj();
        var jsonParam = 'EducationObj=' + EducationObj;
        var serviceUrl = "../Account/SaveEducation/";
        AjaxManager.SaveObject(serviceUrl, jsonParam, onSuccess);


        function onSuccess(jsonData) {
            if (jsonData == "Success") {

                AjaxManager.MsgBox('success', 'center', 'Success:', 'Education Info Save/Update Successfully',
                    [{
                        addClass: 'btn btn-primary',
                        text: 'Ok',
                        onClick: function ($noty) {
                            $noty.close();

                        }
                    }]);
            }
        }


    }
};

var EducationHelper = {
    init: function () {

    },
    createEducationObj: function () {
        var obj = new Object();
        obj.EducationId = $("#EducationId").val();
        obj.GeneralAccount = $("#GeneralAccount").val();
        obj.EducationalLevel = $("#EducationalLevel").val();
        obj.DegreeTitle = $("#DegreeTitle").val();
        obj.EducationalGroup = $("#EducationalGroup").val();
        obj.InstituteName = $("#InstituteName").val();
        obj.YearofPassing = $("#YearofPassing").val();
        obj.Duration = $("#Duration").val();
        obj.Result = $("#Result").val();

        return obj;
    },
};