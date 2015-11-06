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
                FileDesc fileInfo = new FileDesc(f.ContentDisposition, f.Length);
                var webpath = HostingEnvironment.WebRootPath;

                var path = Path.Combine(webpath, "Documents");
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);

                }

                await f.SaveAsAsync(Path.Combine(path, fileInfo.FileName + DateTime.Now.ToString("_ddMMyyyyHHss") + fileInfo.Extension));
            }

            return Json("OK");
        }
    }
}
