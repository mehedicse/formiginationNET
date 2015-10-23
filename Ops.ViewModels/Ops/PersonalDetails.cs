using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpsModels.Ops
{
    public class PersonalDetails
    {
        public GeneralAccount GeneralAccount { get; set; }

        public int PersonalDetailsId { get; set; }

        public string Name { get; set; }
        public string FatherName { get; set; }
        public int FatherRefId { get; set; }//GeneralAccountId
        public bool FatherIsConnect { get; set; }
        public string MotherName { get; set; }
        public int MotherRefId { get; set; }//GeneralAccountId
        public bool MotherIsConnect { get; set; }

        public DateTime DateOfBirth { get; set; }
               
        public Gender Gender { get; set; }
               
        public MeritalStatus MeritalStatus { get; set; }
           
        public BloodGroup BloodGroup { get; set; }
        public Religion Religion { get; set; }
   
        public Country Country { get; set; }//Nationality
        public string NationalIdNo { get; set; }
        public string BirthCertificateNo { get; set; }
        public string PassportNo { get; set; }
        public string SocialSecuirityNo { get; set; }
        public string PresentAddress { get; set; }
        public string PermanentAddress { get; set; }
        public string CurrentLocation { get; set; }
        public string LandPhone { get; set; }
        public string Mobile { get; set; }
        public string OfficePhone { get; set; }

        










    }
}
