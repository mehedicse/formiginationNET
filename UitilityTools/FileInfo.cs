using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
 
 

namespace UitilityTools
{
    public class FileDesc
    {
        private long length;

        public FileDesc(string ContentDisposition)
        {
            if (!string.IsNullOrEmpty(ContentDisposition))
            {

                string[] arrStr = ContentDisposition.Split(';');

                FileName = (arrStr[2].Trim().Split('='))[1].ToString();
                Extension = "."+FileName.Split('.')[1].Replace('"',' ').ToString();
                FileName = FileName.Replace('"', ' ');
                FileName = FileName.Remove(FileName.Length- Extension.Length, Extension.Length);

            }
        }

        public FileDesc(string ContentDisposition, long length) : this(ContentDisposition)
        {
            this.length = length;
        }

        public FileDesc()
        {

        }

        public string FileName { get; set; }
        public string Extension { get; set; }
        public long Size { get; set; }


    }
}
