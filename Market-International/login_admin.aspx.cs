using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Web;

namespace Market_International
{
    public partial class login_admin : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }

        protected void submit_Click(object sender, EventArgs e)
        {



            string user = TextBox1.Text;   //admin
            string passwrd = TextBox2.Text; //admin_03_24_1963

            sql_object sql_obj = new sql_object();
            if (sql_obj.admin_login(user, passwrd))
            {
                Login_error.Visible = false;
                Session["admin"] = "admin_log";
                Response.Redirect("./Admin_Home.aspx");
            }
            else
            {
                Login_error.Visible = true;

            }
        }

    }
}