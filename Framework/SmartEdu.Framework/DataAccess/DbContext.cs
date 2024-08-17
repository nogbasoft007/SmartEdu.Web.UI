using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace SmartEdu.Framework.DataAccess
{
    public class DbContext: IDisposable
    {
        private readonly string _connectionString;
        private SqlConnection _connection;

        public DatabaseContext(string connectionString)
        {
            _connectionString = connectionString;
            _connection = new SqlConnection(_connectionString);
        }

        // Open the connection
        public void OpenConnection()
        {
            if (_connection.State == ConnectionState.Closed)
            {
                _connection.Open();
            }
        }

        // Close the connection
        public void CloseConnection()
        {
            if (_connection.State == ConnectionState.Open)
            {
                _connection.Close();
            }
        }

        // Example method to execute a query
        public DataTable ExecuteQuery(string query, SqlParameter[] parameters = null)
        {
            DataTable resultTable = new DataTable();

            using (SqlCommand command = new SqlCommand(query, _connection))
            {
                if (parameters != null)
                {
                    command.Parameters.AddRange(parameters);
                }

                using (SqlDataAdapter adapter = new SqlDataAdapter(command))
                {
                    adapter.Fill(resultTable);
                }
            }

            return resultTable;
        }

        // Example method to execute a non-query command
        public int ExecuteNonQuery(string query, SqlParameter[] parameters = null)
        {
            using (SqlCommand command = new SqlCommand(query, _connection))
            {
                if (parameters != null)
                {
                    command.Parameters.AddRange(parameters);
                }

                return command.ExecuteNonQuery();
            }
        }

        // Dispose pattern to clean up resources
        public void Dispose()
        {
            CloseConnection();
            _connection?.Dispose();
        }
    }
}
}
