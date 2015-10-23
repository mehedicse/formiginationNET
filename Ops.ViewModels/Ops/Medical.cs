using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpsModels.Ops
{
    public class Medical
    {
        public int MedicalId { get; set; }
        public string DoctorName { get; set; }
        public HospitalOrClinic hospitalOrClinic { get; set; }
        public PrescriptionOrReport prescriptionOrReport { get; set; }
        public DateTime TreatementFrom { get; set; }
        public DateTime TreatementTo { get; set; }
        public string TreatementPurpose { get; set; }
        public string Description { get; set; }
        public int Status { get; set; }
    }
}
