using Microsoft.AspNet.Mvc;
using FormiginationUI.Models;


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

        public IActionResult SaveProfile(ProfileSettingsViewModel model)
        {
           
           

            return Json("OK");
        }
    }
}
