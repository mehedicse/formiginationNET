using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FormiginationUI.Models
{

    [Table("Profiles")]
    public class ProfileSettingsViewModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProfileId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public DateTime Birthday { get; set; }

        public int Gender { get; set; }
        public int MeritalStatus { get; set; }
        public string BloodGroup { get; set; }
        public string Religious { get; set; }
        public string Nationality { get; set; }
        public string NationalId { get; set; }
        public string BirthCertificate { get; set; }
        public string PassportNo { get; set; }
        public string SocialId { get; set; }
        public string About { get; set; }
    }
}
