using OpsModels.Ops;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Utilities;

namespace OpsAppsService
{
    public class MasterDataService : IMasterDataService
    {
        public List<BloodGroup> GetBloodGroup()
        {
            return Data<BloodGroup>.DataSource("Select * from BloodGroup");
        }

        public List<Country> GetCountry()
        {
            return Data<Country>.DataSource("Select * from Country");

        }

        public List<Gender> GetGender()
        {
            return Data<Gender>.DataSource("Select * from Gender");
        }

        public List<MeritalStatus> GetMeritalStatus()
        {
            return Data<MeritalStatus>.DataSource("Select * from MeritalStatus");

        }

        public List<Religion> GetReligion()
        {
            return Data<Religion>.DataSource("Select * from Religion");

        }
    }
}
