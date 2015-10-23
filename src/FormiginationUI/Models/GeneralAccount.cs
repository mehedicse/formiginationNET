using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FormiginationUI.Models
{
    public class GeneralAccount
    {
        public int GeneralAccountId { get; set; }
        public int UserName { get; set; }
        
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime LastPasswordChanged { get; set; }



    }
}
