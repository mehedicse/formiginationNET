using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Utilities.Model
{
    public class ReturnResult
    {
        public String Operation { get; set; }
        public String Message { get; set; }
        //public String MessageType { get; set; }
        public dynamic DataResult { get; set; }

    }
}
