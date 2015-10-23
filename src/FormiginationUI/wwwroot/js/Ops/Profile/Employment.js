var EmploymentManager = {
    saveEmployment: function () {

        var EmploymentObj = EmploymentHelper.createEmploymentObj();
        var jsonParam = 'EmploymentObj=' + EmploymentObj;
        var serviceUrl = "../Account/SaveEmployment/";
        AjaxManager.SaveObject(serviceUrl, jsonParam, onSuccess);


        function onSuccess(jsonData) {
            if (jsonData == "Success") {

                AjaxManager.MsgBox('success', 'center', 'Success:', 'Employment Info Save/Update Successfully',
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

var EmploymentHelper = {
    init: function () {

    },
    createEmploymentObj: function () {
        var obj = Object();
        obj.GeneralAccount = $("#GeneralAccount").val();
        obj.EmploymentId = $("#EmploymentId").val();
        obj.CompanyName = $("#CompanyName").val();
        obj.CompanyBusiness = $("#CompanyBusiness").val();
        obj.CompanyLocation = $("#CompanyLocation").val();
        obj.Position = $("#Position").val();
        obj.Department = $("#Department").val();
        obj.Responsibilities = $("#Responsibilities").val();
        obj.EmploymentDateFrom = $("#EmploymentDateFrom").val();
        obj.EmploymentDateTo = $("#EmploymentDateTo").val();
        obj.IsWorking = $("#IsWorking").val();

        return obj;
    },
};