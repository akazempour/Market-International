using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Market_International
{
    public partial class AdminOffer : System.Web.UI.Page
    {
        DataTable dataReader = null; 
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                sql_object sql_obj = new sql_object();
                dataReader = sql_obj.get_offer_query();

                GridView1.DataSource = dataReader;
                GridView1.DataBind();
                sql_obj.close_connection();
            }
        }



        protected void GridView1_Sorting(object sender, GridViewSortEventArgs e)
        {
            sql_object sql_obj = new sql_object();
            dataReader = sql_obj.get_offer_query();

            GridView1.DataSource = dataReader;
            GridView1.DataBind();
            sql_obj.close_connection();

        }

        protected void GridView1_RowEditing(object sender, GridViewEditEventArgs e)
        {
            GridView1.EditIndex = e.NewEditIndex;
            sql_object sql_obj = new sql_object();
            dataReader = sql_obj.get_offer_query();

            GridView1.DataSource = dataReader;
            GridView1.DataBind();
            sql_obj.close_connection();
 

        }

        protected void GridView1_RowUpdating(object sender, GridViewUpdateEventArgs e)
        {
            int test = 1;
            string test1 = GridView1.Rows[e.RowIndex].Cells[1].Text;
            GridViewRow row = GridView1.Rows[e.RowIndex];
            String str = ((TextBox)(row.Cells[2].Controls[0])).Text;
        }

        protected void GridView1_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            string test1 = GridView1.Rows[e.RowIndex].Cells[1].Text;
        }

        protected void GridView1_RowCancelingEdit(object sender, GridViewCancelEditEventArgs e)
        {
            GridView1.EditIndex = -1;
            sql_object sql_obj = new sql_object();
            dataReader = sql_obj.get_offer_query();

            GridView1.DataSource = dataReader;
            GridView1.DataBind();
            sql_obj.close_connection();
            //string test1 = GridView1.Rows[e.RowIndex].Cells[1].Text;
            //GridView1.EditIndex = -1;            

        }

        protected void GridView1_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            GridView1.PageIndex = e.NewPageIndex;
            sql_object sql_obj = new sql_object();
            dataReader = sql_obj.get_offer_query();

            GridView1.DataSource = dataReader;
            GridView1.DataBind();
            sql_obj.close_connection();

        }


        
    }
}