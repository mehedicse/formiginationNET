using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpsModels.Ops
{
    public class Education
    {

        public int EducationId { get; set; }
        public GeneralAccount GeneralAccount { get; set; }
        public EducationalLevel EducationalLevel { get; set; }

        public string DegreeTitle { get; set; }//Exam/Degree Title

        public EducationalGroup EducationalGroup { get; set; }//Concentration/Major/Group

        public string InstituteName { get; set; }

        public int YearofPassing { get; set; }
        public decimal Duration { get; set; }

        public string Result { get; set; }
    }
}
