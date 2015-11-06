using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using OpsAppsService;
using OpsModels.Ops;
using System.Collections.Generic;
using System;
using System.Web;
using System.IO;
using Microsoft.Net.Http.Headers;


// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FormiginationUI.Controllers
{
    public class ProfileController : Controller
    {
        

        // GET: /<controller>/
        public IActionResult ProfileSettings()
        {
            return View();
        }

        public IActionResult SaveProfileInfo(PersonalDetails ProfileObj)
        {
            ProfileDataService ProfileService = new ProfileDataService();
            var data =  ProfileService.SavePesonalDetails(ProfileObj);

            return Json(data);
        }
        public IActionResult SaveAccountInfo(GeneralAccount accountObj)
        {
            ProfileDataService ProfileService = new ProfileDataService();
            var data = ProfileService.SaveAccountInfo(accountObj);

            return Json(data);
        }
        public ActionResult UploadFile(IFormFile file)
        {

            
            var files = "";

            file.SaveAs("C://excel.xlsx");


            //var uploadStatus = "";
            //if (files != null)
            //{
            //    try
            //    {
            //        string uploadLocation = "";
            //        Users objUser = ((Users)(Session["CurrentUser"]));
            //        var companyId = objUser.CompanyId;
            //        //Logo Store Location 
            //        //Virtual Directory
            //        var logoPathWillbe = @"~/UploadAttendance/Attendance/" + companyId;
            //        //Creating Directory If Not exist
            //        uploadLocation = Utility.GetUploadPath(logoPathWillbe);
            //        foreach (var file in files)
            //        {
            //            var fileName = Path.GetFileName(file.FileName);
            //            var physicalPath = Path.Combine(Server.MapPath(logoPathWillbe), DateTime.Now.Ticks + fileName);
            //            file.SaveAs(physicalPath);

            //            Session["UploadAttendance"] = physicalPath;

            //        }

            //    }
            //    catch (Exception ex)
            //    {
            //        Session["UploadAttendance"] = null;
            //        uploadStatus = ex.Message;
            //    }
            //}

            // Return an empty string to signify success
            return Content("");
        }

        public ActionResult RemoveAttendanceExcel(string[] fileNames)
        {
            // The parameter of the Remove action must be called "fileNames"
            //var uploadStatus = "";
            //if (fileNames != null)
            //{
            //    string uploadLocation = "";


            //    try
            //    {
            //        Users objUser = ((Users)(Session["CurrentUser"]));
            //        var companyId = objUser.CompanyId;

            //        //Logo Store Location 
            //        //Virtual Directory
            //        var logoPathWillbe = @"~/UploadAttendance/Attendance/" + companyId;
            //        foreach (var fullName in fileNames)
            //        {
            //            var fileName = Path.GetFileName(fullName);
            //            var physicalPath = Path.Combine(Server.MapPath(logoPathWillbe), fileName);

            //            // TODO: Verify user permissions

            //            if (System.IO.File.Exists(physicalPath))
            //            {
            //                // The files are  actually removed from stored location
            //                System.IO.File.Delete(physicalPath);
            //                uploadStatus = "";
            //            }
            //        }

            //    }
            //    catch (Exception ex)
            //    {
            //        uploadStatus = ex.Message;
            //    }



            //}

            // Return an empty string to signify success
            return Content("");
        }

        public ActionResult ImportUplodedData()
        {
            var res = "";
            //try
            //{
            //    Users objUser = ((Users)(Session["CurrentUser"]));
            //    var importFilePath = Session["UploadAttendance"].ToString();

            //    IAttendanceUploadRepository attendanceUploadRepository = new BulkAttendanceUploadService();
            //    res = attendanceUploadRepository.ImportAttendanceUplodedData(importFilePath, objUser.UserId);
            //    //Audit Trial
            //    new AuditTrailDataService().SendAudit(new IAuditHendler().GetAuditInfo(objUser.UserId,
            //        "Save & Upload Attendance", "Insert & Upload ", res));
            //}
            //catch (Exception exception)
            //{
            //    res = exception.Message;
            //}
            // return Json(res, JsonRequestBehavior.AllowGet);
            return Json("");
        }

    }


}
