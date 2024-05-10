using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApiThrottle;

namespace Banca
{
  public static class WebApiConfig
  {
    public static void Register(HttpConfiguration config)
    {
      // Web API configuration and services
      EnableCorsAttribute cors = new EnableCorsAttribute("*", "*", "*");
      config.EnableCors(cors);
      config.Formatters.Add(new JsonMediaTypeFormatter());
      GlobalConfiguration.Configuration.Formatters.XmlFormatter.SupportedMediaTypes.Clear();
      config.Formatters.Remove(config.Formatters.XmlFormatter);

      config.MessageHandlers.Add(new ThrottlingHandler()
      {
        Policy = ThrottlePolicy.FromStore(new PolicyConfigurationProvider()),

        Repository = new CacheRepository(),
        QuotaExceededResponseCode = HttpStatusCode.ServiceUnavailable,
        QuotaExceededMessage = "Too many calls! We can only allow {0} per {1}"
      });

      // Web API routes
      config.MapHttpAttributeRoutes();

      config.Routes.MapHttpRoute(
          name: "DefaultApi",
          routeTemplate: "api/{controller}/{action}/{id}",
          defaults: new { id = RouteParameter.Optional }
      );
    }
  }
}
