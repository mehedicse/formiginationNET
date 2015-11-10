using OpsModels.Ops;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpsAppsService
{
  public  interface IMasterDataService
    {
        List<Gender> GetGender();
        List<BloodGroup> GetBloodGroup();
        List<MeritalStatus> GetMeritalStatus();
        List<Country> GetCountry();
        List<Religion> GetReligion();




    }
}
