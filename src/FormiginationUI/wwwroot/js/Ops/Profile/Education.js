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
        $("#btnEducationSave").click(function () {
            EducationManager.saveEducation();
        });
    },
    createEducationObj: function () {
        var obj = new Object();
        obj.EducationId = $("#txtEducationId").val();
        obj.GeneralAccount = $("#txtGeneralAccount").val();
        obj.EducationalLevel = $("#txtEducationalLevel").val();
        obj.DegreeTitle = $("#txtDegreeTitle").val();
        obj.EducationalGroup = $("#txtEducationalGroup").val();
        obj.InstituteName = $("#txtInstituteName").val();
        obj.YearofPassing = $("#txtYearofPassing").val();
        obj.Duration = $("#txtDuration").val();
        obj.Result = $("#txtResult").val();

        return obj;
    },
};