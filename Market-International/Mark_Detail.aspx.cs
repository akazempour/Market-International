using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Market_International
{
    public partial class Mark_Detail : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack == true)
            {
                string id = (Request["OfferId"].ToString());
                decimal OfferAmount = Convert.ToDecimal(Request[id]);
                Response.Redirect("./OfferRegister.aspx?id=" + id + "&amount=" + OfferAmount);

            }

        }
    }
}