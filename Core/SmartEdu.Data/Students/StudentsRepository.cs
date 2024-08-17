using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartEdu.Data.Students
{
    public class StudentsRepository : IStudentsRepository
    {
        private readonly DatabaseContext _dbContext;

        public StudentRepository(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Student> GetAllStudents()
        {
            var students = new List<Student>();

            string query = "SELECT Id, Name, DateOfBirth, Grade FROM Students";
            var dataTable = _dbContext.ExecuteQuery(query);

            foreach (DataRow row in dataTable.Rows)
            {
                students.Add(new Student
                {
                    Id = Convert.ToInt32(row["Id"]),
                    Name = row["Name"].ToString(),
                    DateOfBirth = Convert.ToDateTime(row["DateOfBirth"]),
                    Grade = row["Grade"].ToString()
                });
            }

            return students;
        }

        public Student GetStudentById(int id)
        {
            string query = "SELECT Id, Name, DateOfBirth, Grade FROM Students WHERE Id = @Id";
            var parameters = new[]
            {
                new SqlParameter("@Id", id)
            };

            var dataTable = _dbContext.ExecuteQuery(query, parameters);
            if (dataTable.Rows.Count == 0)
            {
                return null;
            }

            var row = dataTable.Rows[0];
            return new Student
            {
                Id = Convert.ToInt32(row["Id"]),
                Name = row["Name"].ToString(),
                DateOfBirth = Convert.ToDateTime(row["DateOfBirth"]),
                Grade = row["Grade"].ToString()
            };
        }

        public void AddStudent(Student student)
        {
            string query = "INSERT INTO Students (Name, DateOfBirth, Grade) VALUES (@Name, @DateOfBirth, @Grade)";
            var parameters = new[]
            {
                new SqlParameter("@Name", student.Name),
                new SqlParameter("@DateOfBirth", student.DateOfBirth),
                new SqlParameter("@Grade", student.Grade)
            };

            _dbContext.ExecuteNonQuery(query, parameters);
        }

        public void UpdateStudent(Student student)
        {
            string query = "UPDATE Students SET Name = @Name, DateOfBirth = @DateOfBirth, Grade = @Grade WHERE Id = @Id";
            var parameters = new[]
            {
                new SqlParameter("@Id", student.Id),
                new SqlParameter("@Name", student.Name),
                new SqlParameter("@DateOfBirth", student.DateOfBirth),
                new SqlParameter("@Grade", student.Grade)
            };

            _dbContext.ExecuteNonQuery(query, parameters);
        }

        public void DeleteStudent(int id)
        {
            string query = "DELETE FROM Students WHERE Id = @Id";
            var parameters = new[]
            {
                new SqlParameter("@Id", id)
            };

            _dbContext.ExecuteNonQuery(query, parameters);
        }
    }
}
}
