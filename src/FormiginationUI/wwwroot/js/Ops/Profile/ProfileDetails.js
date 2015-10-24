var ProfileInfoManager = {
    saveProfileInfo: function () {

        var ProfileObj = ProfileInfoHelper.createProfileObj();
        var jsonParam = 'ProfileObj=' + ProfileObj;
        var serviceUrl = "../Account/SaveProfileInfo/";
        AjaxManager.SaveObject(serviceUrl, jsonParam, onSuccess);


        function onSuccess(jsonData) {
            if (jsonData == "Success") {

                AjaxManager.MsgBox('success', 'center', 'Success:', 'Profile Info Save/Update Successfully',
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

var ProfileInfoHelper = {
    init: function () {
        $("#DateOfBirth").data('kendoDatetimePicker')
    },
    createProfileObj: function () {
        var obj = new Object();
        obj.GeneralAccount = $("#GeneralAccount").val();
        obj.PersonalDetailsId = $("#PersonalDetailsId").val();
        obj.Name = $("#Name").val();
        obj.FatherName = $("#FatherName").val();
        obj.FatherRefId = $("#FatherRefId").val();
        obj.MotherName = $("#MotherName").val();
        obj.MotherRefId = $("#MotherRefId").val();
        obj.DateOfBirth = $("#DateOfBirth").val();
        obj.Gender = $("#Gender").val();
        obj.MeritalStatus = $("#MeritalStatus").val();
        obj.BloodGroup = $("#BloodGroup").val();
        obj.Religion = $("#Religion").val();
        obj.Country = $("#Country").val();
        obj.NationalIdNo = $("#NationalIdNo").val();
        obj.BirthCertificateNo = $("#BirthCertificateNo").val();
        obj.PassportNo = $("#PassportNo").val();
        obj.SocialSecuirityNo = $("#SocialSecuirityNo").val();
        obj.PresentAddress = $("#PresentAddress").val();
        obj.PermanentAddress = $("#PermanentAddress").val();
        obj.CurrentLocation = $("#CurrentLocation").val();
        obj.LandPhone = $("#LandPhone").val();
        obj.Mobile = $("#Mobile").val();
        obj.OfficePhone = $("#OfficePhone").val();

        return obj;
    },
};