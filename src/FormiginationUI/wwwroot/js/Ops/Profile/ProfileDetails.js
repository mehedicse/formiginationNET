var ProfileInfoManager = {
    saveProfileInfo: function () {

        var ProfileObj = ProfileInfoHelper.createProfileObj();
        var jsonParam = 'ProfileObj=' + ProfileObj;
        var serviceUrl = "../Profile/SaveProfileInfo/";
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
        
        $("#dpDateOfBirth").kendoDatePicker({ value: new Date() });
        kendoManager.ComboboxWithDS("cmbGender", "GenderTitle", "GenderId", "../Account/GetGenderComboData");
        kendoManager.ComboboxWithDS("cmbBloodGroup", "BloodGroupTitle", "BloodGroupId", "../Account/GetBloodGroupComboData");
        kendoManager.ComboboxWithDS("cmbMeritalStatus", "MeritalStatusTitle", "MeritalStatusId", "../Account/GetMeritalStatusComboData");
        kendoManager.ComboboxWithDS("cmbReligious", "RelegionTitle", "RelegionId", "../Account/GetReligionComboData");
        //  kendoManager.ComboboxWithDS("cmbCountry", "CountryName", "CountryId", "../Account/GetCountryComboData");
        $("#btnProfileSave").click(function () {
            ProfileInfoManager.saveProfileInfo();
        });
    },
    createProfileObj: function () {
        var obj = new Object();
        obj.GeneralAccount = $("#txtGeneralAccount").val();
        obj.PersonalDetailsId = $("#txtPersonalDetailsId").val();
        obj.Name = $("#txtName").val();
        obj.FatherName = $("#txtFatherName").val();
        obj.FatherRefId = $("#txtFatherRefId").val();
        obj.MotherName = $("#txtMotherName").val();
        obj.MotherRefId = $("#txtMotherRefId").val();
        obj.DateOfBirth = $("#dpDateOfBirth").val();
        obj.Gender = $("#cmbGender").val();
        obj.MeritalStatus = $("#cmbMeritalStatus").val();
        obj.BloodGroup = $("#cmbBloodGroup").val();
        obj.Religion = $("#cmbReligion").val();
        
        obj.NationalIdNo = $("#txtNationalIdNo").val();
        obj.BirthCertificateNo = $("#txtBirthCertificateNo").val();
        obj.PassportNo = $("#txtPassportNo").val();
        obj.SocialSecuirityNo = $("#txtSocialSecuirityNo").val();
        obj.PresentAddress = $("#txtPresentAddress").val();
        obj.PermanentAddress = $("#txtPermanentAddress").val();
        obj.CurrentLocation = $("#txtCurrentLocation").val();
        obj.LandPhone = $("#txtLandPhone").val();
        obj.Mobile = $("#txtMobile").val();
        obj.OfficePhone = $("#txtOfficePhone").val();

        return obj;
    },
};