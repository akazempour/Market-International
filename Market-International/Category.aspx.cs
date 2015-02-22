using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Market_International
{
    public partial class Category : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["admin"] == null)
                Response.Redirect("./login_admin.aspx");

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

        protected void main_category_SelectedIndexChanged(object sender, EventArgs e)
        {
            int id;
            id = Convert.ToInt32(main_category.Text);
            sql_object sql_obj = new sql_object();
            if (sql_obj.show(id))
                CheckShow.Checked = true;
            else
                CheckShow.Checked = false;

            sub_Category_query(id);

        }

        protected void main_category_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                sql_object sql_obj = new sql_object();
                if (sql_obj.show(0))
                    CheckShow.Checked = true;
                else
                    CheckShow.Checked = false;

            }
        }

        protected void ButEdit_Click(object sender, EventArgs e)
        {
            string check = Request["hidden_text"];
            string GetValue = TextMainCat.Text;
            Int32 Show = (CheckShow.Checked == true ? 1 : 0);
            if (check == "true" && GetValue != "")
            {
                int id = Convert.ToInt32(main_category.Text);
                sql_object sql_obj = new sql_object();
                sql_obj.MainCatUpd(id, GetValue, Show);
                main_category_query();
            }

        }

        protected void ButAdd_Click(object sender, EventArgs e)
        {
            string check = Request["hidden_text"];
            string GetValue = TextMainCat.Text;
            Int32 Show = (CheckShow.Checked == true ? 1 : 0);

            if (check == "true" && GetValue != "")
            {
                sql_object sql_obj = new sql_object();
                sql_obj.MainCatAdd(GetValue,Show);
                main_category_query();
            }

        }

        protected void ButDel_Click(object sender, EventArgs e)
        {
            string check = Request["hidden_text"];

            if (check == "true")
            {
                int id = Convert.ToInt32(main_category.Text);
                sql_object sql_obj = new sql_object();
                sql_obj.MainCatDel(id);
                main_category_query();
            }

        }

        protected void SubAdd_Click(object sender, EventArgs e)
        {
            int id = 0 ;
            string check = Request["hidden_text"];
            string GetValue = SubText.Text;
            Int32 Show = (SubCheck.Checked == true ? 1 : 0);
            if (check == "true" && GetValue != "")
            {
                id = Convert.ToInt32(main_category.Text);
                sql_object sql_obj = new sql_object();
                sql_obj.SubCatAdd(id, GetValue, Show);
                sub_Category_query(id);
            }

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

        protected void SubEdit_Click(object sender, EventArgs e)
        {
            int IdCatMain = Convert.ToInt32(main_category.Text);
            string check = Request["hidden_text"];
            string GetValue = SubText.Text;
            Int32 Show = (SubCheck.Checked == true ? 1 : 0);
            if (check == "true" && GetValue != "")
            {
                int id = Convert.ToInt32(sub_category.Text);
                sql_object sql_obj = new sql_object();
                sql_obj.SubCatUpd(id, GetValue, Show);
                sub_Category_query(IdCatMain);
            }

        }

        protected void SubDel_Click(object sender, EventArgs e)
        {
            string check = Request["hidden_text"];
            int IdCatMain = Convert.ToInt32(main_category.Text);

            if (check == "true")
            {
                int id = Convert.ToInt32(sub_category.Text);
                sql_object sql_obj = new sql_object();
                sql_obj.SubCatDel(id);
                sub_Category_query(IdCatMain);
            }

        }

        protected void sub_category_SelectedIndexChanged(object sender, EventArgs e)
        {
            int id;
            id = Convert.ToInt32(sub_category.Text);
            sql_object sql_obj = new sql_object();
            if (sql_obj.SubShow(id))
                SubCheck.Checked = true;
            else
                SubCheck.Checked = false;

        }

        protected void sub_category_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                sql_object sql_obj = new sql_object();
                if (sql_obj.SubShow(0))
                    SubCheck.Checked = true;
                else
                    SubCheck.Checked = false;

            }

        }

    }

}