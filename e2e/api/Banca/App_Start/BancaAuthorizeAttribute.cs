using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;


namespace Banca
{
    public class BancaAuthorizeAttribute : AuthorizeAttribute
    {

        public override void OnAuthorization(System.Web.Http.Controllers.HttpActionContext actionContext)
        {

            if (AuthorizeRequest(actionContext))
            {
                return;
            }
            HandleUnauthorizedRequest(actionContext);
        }

        protected override void HandleUnauthorizedRequest(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            //Code to handle unauthorized request
            actionContext.Response = new HttpResponseMessage(System.Net.HttpStatusCode.Unauthorized);
        }

        private bool AuthorizeRequest(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            try
            {
                var UserAgent = actionContext.Request.Headers.UserAgent.ToString();
                var TokenKey = actionContext.Request.Headers.Authorization.Parameter.ToString();
                if (TokenKey.ToString() == "")
                {
                    TokenKey = actionContext.Request.Headers.GetValues("X-Token").First();
                }
                Boolean Obj = SecurityManager.IsTokenValid(TokenKey, UserAgent);
                return Obj;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
