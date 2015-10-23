using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
 

namespace Utilities
{
    public class UniqCodeGeneratorFromIdPolicy
    {

        private const string UPDATE_IDPOLICY_WITH_STNUMBER =
           "Update IDPolicy set StartNumber = {0}, LastNumber = {1},YearName={2},MonthName={3},DateName={4} where EntityName = '{5}'";

        private const string UPDATE_IDPOLICY = "Update IDPolicy set LastNumber = {0},YearName={1},MonthName={2},DateName={3} where EntityName = '{4}'";

        //public string GenerateEntityId(string prefix, string suffix, bool useSeperator, CommonConnection connection, string enitityName,int transectionResetType)
        //{
        //    //transectionResetType = 1 then Yearly, 2 then Monthly, 3 then Daily
        //    string idCode = "";
        //    var idPolicy = GetIdPolicy(connection, enitityName);
        //    if (prefix == "")
        //    {
        //        prefix = idPolicy.Prefix.Trim();
        //    }
        //    if (suffix == "")
        //    {
        //        suffix =idPolicy.Suffix==null?"": idPolicy.Suffix.Trim();
        //    }
        //    if (idPolicy.LastNumber < 0)
        //    {
        //        idPolicy.LastNumber = 0;
        //    }
        //    if (transectionResetType == 1)
        //    {
        //        if (idPolicy.YearName == DateTime.Now.Year)
        //        {
        //            //idPolicy.LastNumber = 0;
        //        }
        //        else
        //        {
        //            idPolicy.LastNumber = 0;
        //        }
        //    }
        //    else if (transectionResetType == 2)
        //    {
        //        if (idPolicy.YearName == DateTime.Now.Year && idPolicy.MonthName == DateTime.Now.Month)
        //        {
        //            //idPolicy.LastNumber = 0;
        //        }
        //        else
        //        {
        //            idPolicy.LastNumber = 0;
        //        }
        //    }
        //    else
        //    {
        //        if (idPolicy.YearName == DateTime.Now.Year && idPolicy.MonthName == DateTime.Now.Month &&
        //            idPolicy.DateName == DateTime.Now.Day)
        //        {
        //            //idPolicy.LastNumber = 0;
        //        }
        //        else
        //        {
        //            idPolicy.LastNumber = 0;
        //        }
        //    }
        //    string newNumber = GenerateIDNumber(idPolicy.StartNumber, idPolicy.NumberDigit, idPolicy.LastNumber, enitityName, connection);
        //    if (useSeperator == false)
        //    {
        //        idCode = prefix + newNumber + suffix;
        //    }
        //    else
        //    {
        //        idCode = prefix + "-" + newNumber + "-" + suffix;
        //    }

        //    return idCode.Trim();
        //}

        //private IDPolicy GetIdPolicy(CommonConnection connection, string enitityName)
        //{
        //    string quary = string.Format("Select * from IDPolicy where EntityName = '{0}'", enitityName);

        //    return connection.Data<IDPolicy>(quary).FirstOrDefault();

        //}

        private string GenerateIDNumber(int startNumber, int digit, int lastNumber, string entityName, CommonConnection connection)
        {
            string num = "";
            var length = (lastNumber + 1).ToString().Length;
            var diff = digit - length;
            if (diff < 0)
            {
                try
                {
                    num = "000001";
                    startNumber = startNumber + 1;
                    lastNumber = 1;

                    string quary = string.Format(UPDATE_IDPOLICY_WITH_STNUMBER, startNumber, lastNumber, DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, entityName);
                    connection.ExecuteNonQuery(quary);
                }
                catch
                {
                    connection.RollBack();
                }
            }
            else
            {
                for (int i = 0; i < diff; i++)
                {
                    num += "0";
                }
                num = num + (lastNumber + 1);
                try
                {
                    lastNumber = lastNumber + 1;
                    string quary = string.Format(UPDATE_IDPOLICY, lastNumber, DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, entityName);
                    connection.ExecuteNonQuery(quary);
                }
                catch
                {
                    connection.RollBack();
                }


            }
            return num;

        }
    }
}
