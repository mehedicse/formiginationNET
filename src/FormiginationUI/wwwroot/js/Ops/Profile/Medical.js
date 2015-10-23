var MedicalManager = {
    saveMedical: function () {

        var MedicalObj = MedicalHelper.createMedicalObj();
        var jsonParam = 'MedicalObj=' + MedicalObj;
        var serviceUrl = "../Account/SaveMedical/";
        AjaxManager.SaveObject(serviceUrl, jsonParam, onSuccess);


        function onSuccess(jsonData) {
            if (jsonData == "Success") {

                AjaxManager.MsgBox('success', 'center', 'Success:', 'Medical Info Save/Update Successfully',
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

var MedicalHelper = {
    init: function () {

    },
    createMedicalObj: function () {
        var obj = Object();
        obj.MedicalId = $("#MedicalId").val();
        obj.DoctorName = $("#DoctorName").val();
        obj.hospitalOrClinic = $("#hospitalOrClinic").val();
        obj.prescriptionOrReport = $("#prescriptionOrReport").val();
        obj.TreatementFrom = $("#TreatementFrom").val();
        obj.TreatementTo = $("#TreatementTo").val();
        obj.TreatementPurpose = $("#TreatementPurpose").val();
        obj.Description = $("#Description").val();
       
        return obj;
    },
};