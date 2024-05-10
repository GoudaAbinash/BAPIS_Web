using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Data;


namespace Banca.Controllers
{
  public class SecurityController : ApiController
  {
    //for security
    [HttpPost]
    [ActionName("TokenGuest")]
    [AllowAnonymous]
    public HttpResponseMessage TokenGuest()
    {
      var agent = HttpContext.Current.Request.UserAgent;
      var ticks = DateTime.UtcNow.Ticks;
      Random random = new Random();
      int id = random.Next(2000);
      string TokenKey = SecurityManager.GenerateToken(Convert.ToString(id), agent, ticks);

      return Request.CreateResponse(HttpStatusCode.OK, TokenKey);

    }
  }
}
