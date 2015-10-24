using OpsModels.Ops;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UitilityTools;

namespace TestConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            var acc = new GeneralAccount();
            acc.Name = "Sobuj";
            acc.Email = "sobuj.ah@gmail.com";
            acc.GeneralAccountId = 0;
            acc.LastPasswordChanged = DateTime.Now;
            SqlQueryBuilder sb = new SqlQueryBuilder();
            sb.GetUpdateQuery(acc, "Name,Email,LastPasswordChanged", "GeneralAccountId="+ 1);
        }
    }
}
