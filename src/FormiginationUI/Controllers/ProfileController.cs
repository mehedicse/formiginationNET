using Microsoft.AspNet.Mvc;
using OpsAppService;
using OpsModels.Ops;


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
            ProfileService ProfileService = new ProfileService();
            var data =  ProfileService.SavePesonalDetails(ProfileObj);

            return Json(data);
        }
        public IActionResult SaveAccountInfo(GeneralAccount accountObj)
        {
            ProfileService ProfileService = new ProfileService();
            var data = ProfileService.SaveAccountInfo(accountObj);

            return Json(data);
        }
    }
}
