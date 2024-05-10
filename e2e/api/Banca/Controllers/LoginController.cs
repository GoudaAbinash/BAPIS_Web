using Banca.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Banca.Controllers
{
  public class LoginController : ApiController
  {
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    [HttpPost]
    [ActionName("Authenticate")]
    public dynamic Authenticate(Login obj)
    {
      string response = string.Empty;
      try
      {
        response = obj.Authenticate(obj);
        var res = Request.CreateResponse(HttpStatusCode.OK);
        Common c = new Common();
        string token = c.TokenGuest();
        var finalRes = new {res =response, token = token };
        //res.Content = new StringContent(finalRes, System.Text.Encoding.UTF8, "application/json");
        return finalRes;
      }
      catch (Exception ex)
      {
        return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
      }
    }
  }
}
