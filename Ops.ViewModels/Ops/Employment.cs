using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpsModels.Ops
{
    public class Employment
    {
        public GeneralAccount GeneralAccount { get; set; }
        public int EmploymentId { get; set; }
        public string CompanyName { get; set; }

        public CompanyBusiness CompanyBusiness { get; set; }

        public string CompanyLocation { get; set; }
        public string Position { get; set; }
        public string Department { get; set; }
        public string Responsibilities { get; set; }
        public DateTime EmploymentDateFrom { get; set; }
        public DateTime EmploymentDateTo { get; set; }
        public bool IsWorking { get; set; }

    }
}
