using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Market_International
{
    public partial class ClientRegister : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }

        protected void Ok_Click(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                if (Email.Text == Email1.Text && Password.Text == Password1.Text)
                {
                    EmailErr.Visible = false;
                    //FirstName.Text,
                }
                else if (Email.Text != Email1.Text)
                {
                    EmailErr.Text = "Emails are not the same.";
                    EmailErr.Visible = true;
                }
                else
                {
                    EmailErr.Text = "Passwords are not the same.";
                    EmailErr.Visible = true;
                }
            }

        }
    }
}