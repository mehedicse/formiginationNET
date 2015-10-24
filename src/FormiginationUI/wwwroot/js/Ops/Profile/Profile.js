$(document).ready(function () {

    $("#tabstrip").kendoTabStrip({
        animation: {
            // fade-out current tab over 1000 milliseconds
            close: {
                //duration: 1000,
                effects: "fadeOut"
            },
            // fade-in new tab over 500 milliseconds
            open: {
                //duration: 500,
                effects: "fadeIn"
            }
        }
    });
    //profileDetailsManager.init();
 

    //$("#nav-manu").kendoMenu();

    ProfileInfoHelper.init();
    AccountInfoHelper.init();
    EducationHelper.init();
    EmploymentHelper.init();
    MedicalHelper.init();
    MedicalHelper.init();
});
