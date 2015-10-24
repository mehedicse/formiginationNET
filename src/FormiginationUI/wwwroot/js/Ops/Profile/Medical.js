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
        $("#btnMedicalSave").click(function () {
            MedicalManager.saveMedical();
        });
    },
    createMedicalObj: function () {
        var obj = new Object();
        obj.MedicalId = $("#txtMedicalId").val();
        obj.DoctorName = $("#txtDoctorName").val();
        obj.hospitalOrClinic = $("#txthospitalOrClinic").val();
        obj.prescriptionOrReport = $("#txtprescriptionOrReport").val();
        obj.TreatementFrom = $("#txtTreatementFrom").val();
        obj.TreatementTo = $("#txtTreatementTo").val();
        obj.TreatementPurpose = $("#txtTreatementPurpose").val();
        obj.Description = $("#txtDescription").val();
       
        return obj;
    },
};