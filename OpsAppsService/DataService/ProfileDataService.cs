using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpsModels.Ops;
using UitilityTools;
using Utilities;

namespace OpsAppsService
{
    public class ProfileDataService
    {
        SqlQueryBuilder sqlBuilder = new SqlQueryBuilder();
        public Result SavePesonalDetails(PersonalDetails profileObj)
        {
            Result result = new Result();
            var db = new CommonConnection();
            var sql = "";
            if (profileObj.PersonalDetailsId == 0)
            {
                sql = sqlBuilder.GetInsertQuery<PersonalDetails>(profileObj);
                db.ExecuteNonQuery(sql);
            }

            return result;
        }

        public object SaveAccountInfo(GeneralAccount accountObj)
        {
            throw new NotImplementedException();
        }
    }
}
