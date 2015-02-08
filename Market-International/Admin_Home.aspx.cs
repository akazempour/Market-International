using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Market_International
{
    public partial class Admin_Home : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                main_category_query();
                sub_Category_query(0);
            }

        }


        private void main_category_query()
        {
            sql_object sql_obj = new sql_object();
            SqlDataReader dataReader = sql_obj.get_category_query();
            main_category.DataSource = dataReader;
            main_category.DataValueField = "id";
            main_category.DataTextField = "Category";
            main_category.DataBind();
            sql_obj.close_connection();
        }

        private void sub_Category_query(int IdCategory)
        {
            int IdCatLoc = IdCategory;
            sql_object sql_obj = new sql_object();
            if (IdCategory == 0)
                IdCatLoc = sql_obj.GetFirstCat();

            SqlDataReader dataReader = sql_obj.get_sub_cat_query(IdCatLoc);
            sub_category.DataSource = dataReader;
            sub_category.DataValueField = "id";
            sub_category.DataTextField = "Cat_sub";
            sub_category.DataBind();
            sql_obj.close_connection();


        }

        protected void main_category_SelectedIndexChanged(object sender, EventArgs e)
        {
            int id = Convert.ToInt32(main_category.Text);
            sub_Category_query(id);
        }

        protected void sub_category_SelectedIndexChanged(object sender, EventArgs e)
        {
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            int id_Cat = Convert.ToInt32(main_category.Text);
            int id_SubCat = Convert.ToInt32(sub_category.Text);
            string url = "./AdminDetailAdd.aspx?action=add&id_subcat=" + id_SubCat;
            Response.Redirect(url); 
        }


    }
}