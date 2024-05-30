using BookingV2.Repositories.Req;
using BookingV2.Repositories.Rsp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace BookingV2.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        private RoleServices roleServices;
        public RoleController() 
        {
            roleServices = new RoleServices(); 
        }
        [HttpPost("id")]
        public IActionResult GetRoleById([FromBody] SimpleReq simpleReq)
        {
            var res = new SingleRsp();
            res = roleServices.Read(simpleReq.Id);
            return Ok(res);
        }
        [HttpGet]
         public IActionResult GetAllRoles()
        {
            var res = roleServices.ReadAll();
            return Ok(res);
        }
    }
}
