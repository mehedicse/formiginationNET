using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpsModels.Ops
{
    public class GeneralAccount
    {
        public int GeneralAccountId { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string AlternateEmail { get; set; }
        public DateTime LastPasswordChanged { get; set; }
        public string Facebook { get; set; }
        public string Gmail { get; set; }
        public string Yahoo { get; set; }
        public string LinkedIn { get; set; }
        public string Twitter { get; set; }
        public string Microsoft { get; set; }
        public string Skype { get; set; }

        public string About { get; set; }


    }
}
