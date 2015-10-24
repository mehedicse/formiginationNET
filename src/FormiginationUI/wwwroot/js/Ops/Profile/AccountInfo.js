/// <reference path="~/lib/AjaxController.js" />

var AccountInfoManager = {
    saveAccountInfo: function () {
        debugger;
            var accountObj = AccountInfoHelper.createAccountObj();
            var jsonParam = 'accountObj=' + JSON.stringify(accountObj);
            var serviceUrl = "../Profile/SaveAccountInfo/";
            AjaxController.SaveObject(serviceUrl, jsonParam, onSuccess);
        

        function onSuccess(jsonData) {
            if (jsonData == "Success") {

                AjaxController.MsgBox('success', 'center', 'Success:', 'Account Info Save/Update Successfully',
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

var AccountInfoHelper = {
    init: function () {
        $("#btnAccountSave").click(function () {
            AccountInfoManager.saveAccountInfo();
        });
    },
    createAccountObj: function () {
        var obj = new Object();
        obj.GeneralAccountId = $("#txtGeneralAccountId").val();
        obj.Name = $("#txtName").val();
        obj.UserName = $("#txtUserName").val();
        obj.Email = $("#txtEmail").val();
        obj.AlternateEmail = $("#txtAlternateEmail").val();
        obj.Facebook = $("#txtFacebook").val();
        obj.Gmail = $("#txtGmail").val();
        obj.Yahoo = $("#txtYahoo").val();
        obj.LinkedIn = $("#txtLinkedIn").val();
        obj.Twitter = $("#txtTwitter").val();
        obj.Microsoft = $("#txtMicrosoft").val();
        obj.Skype = $("#txtSkype").val();
        obj.About = $("#txtAbout").val();

        return obj;
    },
};