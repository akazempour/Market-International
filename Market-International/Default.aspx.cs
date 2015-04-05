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
    public partial class Default : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            if(IsPostBack==true)
            {
                string id = (Request["OfferId"].ToString());
                decimal OfferAmount = Convert.ToDecimal(Request[id]);
                Response.Redirect("./OfferRegister.aspx?id=" + id + "&amount=" + OfferAmount);

            }
            else
            {
                if (Session["visitor"] == null)
                {
                    RegisterVisitor();
                }
               /*  if (!(Session["visitor"].ToString() == "86.81.102.253"  || Session["visitor"].ToString() ==  "87.208.82.191") )
                {
                    Response.Redirect("./WebForm2.aspx");
                }  */


            }
        }
        private void RegisterVisitor()
        {
            string ipAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if (string.IsNullOrEmpty(ipAddress))
            {
                ipAddress = Request.ServerVariables["REMOTE_ADDR"];
            }

            if(ipAddress.Length == 3)
            {
                ipAddress = "86.81.102.253"; 
            }
            
            string APIKey = "37daa2782cd3c6f1df7e2b511c073b624c3d5ed0c771675985296bfb9aa96ffa";
            string url = string.Format("http://api.ipinfodb.com/v3/ip-city/?key={0}&ip={1}&format=json", APIKey, ipAddress);
            using (WebClient client = new WebClient())
            {
                string json = client.DownloadString(url);
                Location location = new JavaScriptSerializer().Deserialize<Location>(json);

                sql_object SqlObj = new sql_object();
                SqlObj.addvisitor(location.IPAddress, location.CountryName, location.CountryCode, location.CityName, 
                    location.RegionName, location.ZipCode, location.Latitude, location.Longitude, location.TimeZone);

                Session["visitor"] = location.IPAddress;
            }


        }
    }
}