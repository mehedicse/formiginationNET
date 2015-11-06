var kendoManager = {

    Combobox: function (ctrl, textfield, valueField) {
        $("#" + ctrl).kendoComboBox({
            placeholder: "Select",
            dataTextField: textfield,
            dataValueField: valueField,
            dataSource: [],
            change: function () {

                if (this.value() == this.text()) {
                    this.value('');

                }
            }
        });
    },
    ComboboxWithDS: function (ctrl, textfield, valueField, url) {
        $("#" + ctrl).kendoComboBox({
            placeholder: "Select",
            dataTextField: textfield,
            dataValueField: valueField,
            dataSource: {
                transport: {
                    read: {
                        url: url,
                        dataType: "json",
                        asyn: true,
                        cache: false,
                        contentType: "application/json; charset=utf-8",
                    }
                }
            },
            change: function () {

                if (this.value() == this.text()) {
                    this.value('');

                }
            }
        });
    },
    //Upload: function (ctrId, url) {

    //    $("#" + ctrId).kendoUpload({
    //        async: {
    //            saveUrl: url + "SaveFile",
    //            removeUrl: url + "RemoveFile",
    //            autoUpload: true
    //        }
    //    });
    //},

    Upload: function (ctrId, url) {
        $("#" + ctrId).kendoUpload({
            //upload: onUpload,
            multiple: false,
            success: onSuccess,
           error: onError,
           select: onSelect,
           // progress: onProgress,
            async: {
                saveUrl: url + "UploadFile",
                removeUrl: url + "RemoveFile",
                autoUpload: true
            },
            localization: {
                select: "Select file"
            }
        });

        function onUpload(e) {
            var files = e.files;
            $.each(files, function () {
                if ((this.extension != ".xls") && (this.extension != ".xlsx")) {
                    alert("Only .xls/.xlsx files can be uploaded.");
                    e.preventDefault();
                }
            });
        }

        function onSuccess(e) {
            var files = e.files;
            if (e.operation == "upload") {
                //LeaveWithoutPayUploadManager.ImportUplodedData();
            }
        }
        function onError(e) {
            var files = e.files;

            if (e.operation == "upload") {
                alert("Failed to uploaded " + files.length + " files");
            }
        }
        function onSelect(e) {

            //if (!LeaveWithoutPayUploadUploadHelper.SalaryMonthValidate()) {
            //    e.preventDefault();

            //    //AjaxManager.MsgBox('warning', 'center', 'Warning', "Please select salary month", [
            //    //    {
            //    //        addClass: 'btn btn-primary',
            //    //        text: 'Ok',
            //    //        onClick: function ($noty) {
            //    //            $noty.close();

            //    //        }
            //    //    }
            //    //]);

            //}

        }
        function onProgress(e) {

            //$("#progressOT").data("kendoProgressBar").value(e.percentComplete);
           // $("#" + ctrId).append().html("Upload progress : " + e.percentComplete + "% : " + getFileInfo(e));
            //$('#progressOT').val(e.percentComplete);
        }

        function getFileInfo(e) {
            return $.map(e.files, function (file) {
                var info = file.name;

                // File size is not available in all browsers
                if (file.size > 0) {
                    info += " (" + Math.ceil(file.size / 1024) + " KB)";
                }
                return info;
            }).join(", ");
        }
    },
}