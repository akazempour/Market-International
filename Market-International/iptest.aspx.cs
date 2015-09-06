using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Market_International
{
    public partial class iptest : System.Web.UI.Page
    {
        // Returns JSON string
        string GET(string url)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            try
            {
                WebResponse response = request.GetResponse();
                using (Stream responseStream = response.GetResponseStream())
                {
                    StreamReader reader = new StreamReader(responseStream, Encoding.UTF8);
                    return reader.ReadToEnd();
                }
            }
            catch (WebException ex)
            {
                WebResponse errorResponse = ex.Response;
                using (Stream responseStream = errorResponse.GetResponseStream())
                {
                    StreamReader reader = new StreamReader(responseStream, Encoding.GetEncoding("utf-8"));
                    String errorText = reader.ReadToEnd();
                    // log errorText
                }
                throw;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack == true)
            {
                string test = Request["ip"]; 
            }
            sql_object SqlObj = new sql_object();
            //SqlObj.addvisitor(longtitude[1], latitute[1], asn[1], ipaddress[1], areacode[1], continent_code[1], city[1],
              //  visitzone[1], Region[1], country_code[1], isp[1], postal_code[1], country[1], country_code[1]);
 
        }
    }
}