using OpsModels.Ops;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UitilityTools;

namespace Ops.AppServices
{
    public class ProfileService
    {
        SqlQueryBuilder queryBuilder = new SqlQueryBuilder();

        public string SavePesonalDetails(PersonalDetails objPersonal)
        {
            var query=  queryBuilder.GetInsertQuery(objPersonal, "");
            return "Success";
        }

    }
}
