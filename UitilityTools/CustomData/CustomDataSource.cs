using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Utilities.CustomData
{
    public class CustomDataTableBuilder
    {

        public static DataTable GetCustomTable(DataTable dataTable, string destinationName)
        {
            return GetCustomTable(dataTable, destinationName, 0);
        }

        private static DataRow CustomDataRow(DataTable tableStructure, DataRow rowWithValue, int userId)
        {
            DataRow dr = tableStructure.NewRow();

            foreach (DataColumn column in tableStructure.Columns)
            {
                dynamic columnVal = "";
                bool isContain = rowWithValue.Table.Columns.Contains(column.ColumnName);
                if (isContain)
                {
                    dynamic columnValue = rowWithValue[column.ColumnName];
                    columnVal = CustomValueBind.ValueConverter(column.DataType, columnValue);
                    dr[column.ColumnName] = columnVal;


                }
                else
                {
                    if (column.ColumnName == "UserId")
                    {
                        if (userId > 0)
                        {
                            columnVal = userId;
                            dr[column.ColumnName] = columnVal;
                        }

                    }

                }


            }

            return dr;
        }

      


        public static DataTable GetCustomTable(DataTable dataTable, string tempTableName, int userId)
        {
            DataTable rDataTable = new DataTable(tempTableName);
            CommonConnection connection = new CommonConnection();
            try
            {
                if (tempTableName.Trim() != string.Empty)
                {
                    //string strDelete = string.Format("Delete {0} Where UserId={1}", tempTableName, userId);
                    string strDelete = string.Format("Delete {0} ", tempTableName, userId);

                    connection.ExecuteNonQuery(strDelete);
                }

                String sql = "Select top (0) * from " + tempTableName;
                var tableStructure = connection.GetDataTable(sql);
                foreach (DataRow rowWithValue in dataTable.Rows)
                {
                    tableStructure.Rows.Add(CustomDataRow(tableStructure, rowWithValue, userId));

                }
                rDataTable = tableStructure;
            }
            catch (Exception)
            {

                throw;
            }
            finally
            {
                connection.Close();
            }



            return rDataTable;
        }

        public static DataTable GetBulkDataTable(DataTable dataTable, string tempTableName, string refName, int refValue)
        {
            DataTable rDataTable = new DataTable(tempTableName);
            CommonConnection connection = new CommonConnection();
            try
            {


                String sql = "Select top (0) * from " + tempTableName;
                var tableStructure = connection.GetDataTable(sql);
                foreach (DataRow rowWithValue in dataTable.Rows)
                {
                    tableStructure.Rows.Add(CustomDataRow(tableStructure, rowWithValue, refName, refValue));

                }
                rDataTable = tableStructure;
            }
            catch (Exception)
            {

                throw;
            }
            finally
            {
                connection.Close();
            }



            return rDataTable;
        }


        private static DataRow CustomDataRow(DataTable tableStructure, DataRow rowWithValue, string refName, int refValue)
        {
            DataRow dr = tableStructure.NewRow();

            foreach (DataColumn column in tableStructure.Columns)
            {
                dynamic columnVal;
                bool isContain = rowWithValue.Table.Columns.Contains(column.ColumnName);
                if (isContain)
                {
                    dynamic columnValue = rowWithValue[column.ColumnName];

                    columnVal = CustomValueBind.ValueConverter(column.DataType, columnValue);

                    if (columnVal == null)
                    {
                        dr[column.ColumnName] = System.DBNull.Value;
                    }
                    else
                    {
                        dr[column.ColumnName] = columnVal;
                    }
                }
                else
                {
                    if (column.ColumnName == refName)
                    {


                        dr[column.ColumnName] = refValue;

                    }

                }


            }

            return dr;
        }
    }
}
