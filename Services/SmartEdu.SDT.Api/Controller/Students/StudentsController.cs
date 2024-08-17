using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SmartEdu.SDT.Api.Controller.Students
{
    
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : ControllerBase
    {
        // GET: api/students
        [HttpGet]
        public IActionResult GetStudents()
        {
            // Logic to get students
            return Ok(new List<Student> { new Student { Id = 1, Name = "John Doe" } });
        }

        // GET: api/students/{id}
        [HttpGet("{id}")]
        public IActionResult GetStudent(int id)
        {
            // Logic to get a single student by id
            return Ok(new Student { Id = id, Name = "John Doe" });
        }

        // POST: api/students
        [HttpPost]
        public IActionResult AddStudent([FromBody] Student student)
        {
            // Logic to add a new student
            return CreatedAtAction(nameof(GetStudent), new { id = student.Id }, student);
        }

        // PUT: api/students/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateStudent(int id, [FromBody] Student student)
        {
            // Logic to update a student
            return NoContent();
        }

        // DELETE: api/students/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteStudent(int id)
        {
            // Logic to delete a student
            return NoContent();
        }
    }

    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
