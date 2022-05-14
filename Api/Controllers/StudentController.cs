using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : ControllerBase
    {
        private List<Student> _studentList = new List<Student>()
        {
            new Student{Name = "George", Age = 21},
            new Student{Name = "James", Age = 22},
            new Student{Name = "John", Age = 23},
            new Student{Name = "Sammy", Age = 24},
        };
        [HttpGet]
        [EnableCors("MyPolicy")]
        public IEnumerable<Student> Get()
        {
            return this._studentList;
        }
    }
}
