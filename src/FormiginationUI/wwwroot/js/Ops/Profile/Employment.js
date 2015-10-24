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
        $("#btnEmployment").click(function () {
            EmploymentManager.saveEmployment();
        });
    },
    createEmploymentObj: function () {
        var obj = new Object();
        obj.GeneralAccount = $("#txtGeneralAccount").val();
        obj.EmploymentId = $("#txtEmploymentId").val();
        obj.CompanyName = $("#txtCompanyName").val();
        obj.CompanyBusiness = $("#txtCompanyBusiness").val();
        obj.CompanyLocation = $("#txtCompanyLocation").val();
        obj.Position = $("#txtPosition").val();
        obj.Department = $("#txtDepartment").val();
        obj.Responsibilities = $("#txtResponsibilities").val();
        obj.EmploymentDateFrom = $("#txtEmploymentDateFrom").val();
        obj.EmploymentDateTo = $("#txtEmploymentDateTo").val();
        obj.IsWorking = $("#txtIsWorking").val();

        return obj;
    },
};