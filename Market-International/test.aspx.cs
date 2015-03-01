using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Market_International
{
    public partial class test : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }

        protected void LinkButton1_Click(object sender, CommandEventArgs e)
        {
            string Text = e.CommandArgument.ToString();
        }

    }
}