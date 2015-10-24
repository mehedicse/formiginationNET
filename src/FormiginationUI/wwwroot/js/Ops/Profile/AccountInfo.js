var AccountInfoManager = {
    saveAccountInfo: function () {

            var accountObj = AccountInfoHelper.createAccountObj();
            var jsonParam = 'accountObj=' + accountObj;
            var serviceUrl = "../Account/SaveAccountInfo/";
            AjaxManager.SaveObject(serviceUrl, jsonParam, onSuccess);
        

        function onSuccess(jsonData) {
            if (jsonData == "Success") {

                AjaxManager.MsgBox('success', 'center', 'Success:', 'Account Info Save/Update Successfully',
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

    },
    createAccountObj: function () {
        var obj = new Object();
        obj.GeneralAccountId = $("#GeneralAccountId").val();
        obj.Name = $("#Name").val();
        obj.UserName = $("#UserName").val();
        obj.Email = $("#Email").val();
        obj.AlternateEmail = $("#AlternateEmail").val();
        obj.Facebook = $("#Facebook").val();
        obj.Gmail = $("#Gmail").val();
        obj.Yahoo = $("#Yahoo").val();
        obj.LinkedIn = $("#LinkedIn").val();
        obj.Twitter = $("#Twitter").val();
        obj.Microsoft = $("#Microsoft").val();
        obj.Skype = $("#Skype").val();
        obj.About = $("#About").val();

        return obj;
    },
};