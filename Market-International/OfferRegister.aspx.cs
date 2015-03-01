using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Market_International
{
    public partial class OfferRegister : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack == false)
            {
                if (Request["id"] != null)
                {
                    string id = Request["id"].ToString();
                    string OfferRound = Request["amount"].ToString();
                    decimal amount = Convert.ToDecimal(OfferRound);
                    sql_object SqlObj = new sql_object();
                    DetailObject DetailObj = SqlObj.GetDetail(id);
                    Item.Text = DetailObj.title;
                    Offer.Text = amount.ToString();
                    Fieldid.Value = id;
                }
            }
        }
        protected void Ok_Click(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                if (Email.Text == Email1.Text )
                {
                    EmailErr.Visible = false;
                    sql_object SqlObj = new sql_object();
                    string Gender = Male.Checked == true ? "M" : "F";
                    SqlObj.AddOffer(Convert.ToInt32(Fieldid.Value), Convert.ToDecimal(Offer.Text));                     
                    Response.Redirect("~/Default.aspx");
                }
                else if (Email.Text != Email1.Text)
                {
                    EmailErr.Text = "Emails are not the same.";
                    EmailErr.Visible = true;
                }
            }

        }

        protected void Cancel_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/Default.aspx");
        }


    }
}