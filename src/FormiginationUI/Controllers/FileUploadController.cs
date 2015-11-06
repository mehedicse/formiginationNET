using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using UitilityTools;

namespace FormiginationUI.Controllers
{
    public class FileUploaderController : Controller
    {


        public IHostingEnvironment HostingEnvironment { get; set; }
       public FileUploaderController(IHostingEnvironment hostingEnvironment)
        {
            HostingEnvironment = hostingEnvironment;
        }
        /// <summary>
        /// Action that shows multiple file upload.
        /// </summary>
        public async Task<JsonResult> UploadFile(IList<IFormFile> files)
        {

            HostingEnvironment.IsDevelopment();
           



            foreach (var f in files)
            {
                FileDesc fileInfo = new FileDesc(f.ContentDisposition,f.Length);

                await f.SaveAsAsync(Path.Combine(HostingEnvironment.WebRootPath, "newFile_"+DateTime.Now.ToString("ddMMyyyyHHss") + files.IndexOf(f)));
            }

            return Json("OK");
        }
    }
}
