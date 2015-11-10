using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using OpsAppsService;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FormiginationUI.Controllers
{
    public class MasterController : Controller
    {
        IMasterDataService service = new MasterDataService();
        // GET: /<controller>/
        public JsonResult GetGender()
        {
            return Json(service.GetGender());
        }
        public JsonResult GetBloodGroup()
        {
            return Json(service.GetBloodGroup());
        }
        public JsonResult GetCountry()
        {
            return Json(service.GetCountry());
        }
        public JsonResult GetMeritalStatus()
        {
            return Json(service.GetMeritalStatus());
        }
        public JsonResult GetReligion()
        {
            return Json(service.GetReligion());
        }

    }
}
