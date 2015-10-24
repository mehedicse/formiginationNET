using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UitilityTools
{
    public class SqlQueryBuilder
    {
        public string GetInsertQuery<T>(T obj, string columns)
        {
            StringBuilder sbValues = new StringBuilder();
            StringBuilder sbColumns = new StringBuilder();

            string[] arrColumns = columns.Split(',');
            Type entityType = typeof(T);
            PropertyDescriptorCollection properties = TypeDescriptor.GetProperties(entityType);


            string qryTmp = "Insert into {0} ({1}) values({2})";
            string tableName = entityType.Name;
         
            foreach (PropertyDescriptor prop in properties)

            {
               
                foreach (var item in arrColumns)
                {
                    dynamic val;
                    if (item.ToLower().Equals(prop.Name.ToLower()))
                    {
                        if (prop.PropertyType.Name == "DateTime")
                        {
                            var value = prop.GetValue(obj);
                            if (value != null)
                            {
                                var date = (DateTime)value;
                                sbValues.Append("'");
                                sbValues.Append(date);
                                sbValues.Append("'");

                                sbValues.Append(",");

                                sbColumns.Append(item);
                                sbColumns.Append(",");

                                break;
                            }
                        }
                        else
                        {
                            //var isType = TypeArray().Contains(prop.PropertyType.Name);
                            //if (isType)
                            //{
                            val = prop.GetValue(obj);
                            if (val != null)
                            {
                                sbValues.Append("'");
                                sbValues.Append(val);
                                sbValues.Append("'");
                                
                                sbValues.Append(",");

                                sbColumns.Append(item);
                                sbColumns.Append(",");

                                break;
                            }

                            //}


                        }
                    }

                }


            }
            sbColumns.Remove(sbColumns.Length - 1, 1);
            sbValues.Remove(sbValues.Length - 1, 1);

            var rvStr = string.Format(qryTmp, tableName, sbColumns.ToString(), sbValues.ToString());
            return rvStr;

        }

    }
}
