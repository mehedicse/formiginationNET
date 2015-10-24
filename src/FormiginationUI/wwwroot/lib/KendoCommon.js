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
    }
}