using System;
using System.Collections.Generic;
//using System.Linq;
using System.Web;

/// <summary>
/// Summary description for MyHandler
/// </summary>
public class MyHttpRemovalHandler: IHttpModule
{
	public MyHttpRemovalHandler()
	{		
	}

    #region IHttpModule Members

    public void Dispose()
    {        
    }

    public void Init(HttpApplication context)
    {
        //context.BeginRequest += new EventHandler(this.handle_EndRequest);
        context.EndRequest += new EventHandler(this.handle_EndRequest);
    }

    void handle_EndRequest(object sender, EventArgs e)
    {
        try
        {
            HttpResponse response = HttpContext.Current.Response;
            if (response != null)
            {
                System.Collections.Specialized.NameValueCollection responseHeaders = response.Headers;

                

                if (responseHeaders != null)
                {
                    responseHeaders.Remove("X-AspNet-Version");
                    responseHeaders.Remove("Server");
                    responseHeaders.Remove("ETag");
                    //We can do this in from Config file also
                    responseHeaders.Remove("X-Powered-By");                
                }
            }
        }
        catch (Exception ex)
        {
            
        }
    }

    #endregion
}