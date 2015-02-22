using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Security.Cryptography;
using System.Web;

namespace Market_International
{
    public class sql_object
    {
        string connetionString = null;
        SqlConnection connection;
        SqlCommand command;
        string sql = null;
        SqlDataReader dataReader;
        string admin_user = null;
        //initialized 
        private void initialize()
        {
            connetionString = "Data Source=SQL5006.Smarterasp.net;Initial Catalog=DB_9B7F5F_kaz;User Id=DB_9B7F5F_kaz_admin;Password=Admiral1;";
            admin_user = System.Web.HttpContext.Current.Session["admin"] == null ? "" : System.Web.HttpContext.Current.Session["admin"].ToString();
            

        }

        // Convert into hash 
        #region
        private string hash_function(string PassWrd)
        {
            //step 1 and 2
            byte[] data = System.Text.Encoding.Unicode.GetBytes(PassWrd);
            byte[] result;

            //step 3
            SHA1 sha = new SHA1CryptoServiceProvider();
            result = sha.ComputeHash(data);

            //step 4
            string storableHashResult = System.Text.Encoding.Unicode.GetString(result);

            return storableHashResult;
            // add your code here
        }
        #endregion

        // Get admin login 
        public Boolean admin_login(string log_user, string passwrd)
        {
            string hash_passwrd = hash_function(passwrd);  //admin_03_24_1963
            Boolean return_value = false;


            sql = "select id,user_name,password from admin_login where user_name = @user_name ";
            initialize();
            connection = new SqlConnection(connetionString);
            try
            {
                connection.Open();
                command = new SqlCommand(sql, connection);
                command.Parameters.Add(new SqlParameter("user_name", log_user));
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    if (dataReader.GetValue(2).ToString() == hash_passwrd)
                        return_value = true;

                }
            }
            catch (Exception ex)
            {
                string temp1 = ex.ToString();
            }

            dataReader.Close();
            command.Dispose();
            connection.Close();
            return return_value;
        }


        //Update Main Category
        public void MainCatUpd(int id, string value, int show)
        {
            sql = "update Category_Main set Category= @Category, show=@show where id = @id ";

            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
            command.Parameters.Add(new SqlParameter("id", id));
            command.Parameters.Add(new SqlParameter("Category", value));
            command.Parameters.Add(new SqlParameter("show", show));            
            command.ExecuteNonQuery();
            command.Dispose();
            connection.Close();
        }
        //Add Main Category
        public void MainCatAdd(string value, int show)
        {
            initialize();
            sql = "insert into Category_Main (Category,show,admin_user) values(@value,@show,@admin_user) ";
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
            command.Parameters.Add(new SqlParameter("value", value));
            command.Parameters.Add(new SqlParameter("show", show));
            command.Parameters.Add(new SqlParameter("admin_user", admin_user));
            command.ExecuteNonQuery();
            command.Dispose();
            connection.Close();
        }
        // show 
        public Boolean show(int id)
        {
            Boolean return_value = false;
            if (id == 0)
                sql = "select id,show from category_main  order by Category ";
            else
                sql = "select id,show from category_main where id=@id order by Category ";


            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);

            if (id > 0)
                command.Parameters.Add(new SqlParameter("id", id));

            dataReader = command.ExecuteReader();
            if (dataReader.Read())
            {
                if (Convert.ToInt32(dataReader.GetValue(1)) == 1)
                    return_value = true;

            }
            dataReader.Close();
            command.Dispose();
            connection.Close();
            return return_value;

        }
        //Delete main Category
        public void MainCatDel(int id)
        {
            sql = "delete from Category_Main where id = @id ";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
            command.Parameters.Add(new SqlParameter("id", id));
            command.ExecuteNonQuery();
            command.Dispose();
            connection.Close();

        }
        // Sub Category Add
        public void SubCatAdd(int id_category, string Cat_sub, int show)
        {

            initialize();
            sql = "insert into Category_Sub (id_category,Cat_sub,show,admin_user) values(@id_category,@Cat_sub,@show,@admin_user) ";
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
            command.Parameters.Add(new SqlParameter("id_category", id_category));
            command.Parameters.Add(new SqlParameter("Cat_sub", Cat_sub));
            command.Parameters.Add(new SqlParameter("show", show));
            command.Parameters.Add(new SqlParameter("admin_user", admin_user));
            command.ExecuteNonQuery();
            command.Dispose();
            connection.Close();
        }
        //Get First Category 
        public int GetFirstCat()
        {
            initialize();
            int lreturn = 0;
            if (admin_user == "admin")
                sql = "select Top 1 id from dbo.Category_Main order by Category";
            else
                sql = "select Top 1 id from dbo.Category_Main where admin_user = @admin_user order by Category";

            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
            if (admin_user != "admin")
                command.Parameters.Add(new SqlParameter("admin_user", admin_user));

            dataReader = command.ExecuteReader();
            if (dataReader.Read())
            {
                lreturn = Convert.ToInt32(dataReader.GetValue(0));
            }
            dataReader.Close();
            command.Dispose();
            connection.Close();
            return lreturn;
        }
        //Update SubCategory
        public void SubCatUpd(int id, string Cat_sub, int show)
        {
            sql = "update Category_Sub set Cat_sub = @Cat_sub, show=@show where id = @id ";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
            command.Parameters.Add(new SqlParameter("id", id));
            command.Parameters.Add(new SqlParameter("Cat_sub", Cat_sub));
            command.Parameters.Add(new SqlParameter("show", show));
            command.ExecuteNonQuery();
            command.Dispose();
            connection.Close();
        }
        // SubCat Delete
        public void SubCatDel(int id)
        {
            sql = "delete from Category_Sub where id = @id ";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
            command.Parameters.Add(new SqlParameter("id", id));
            command.ExecuteNonQuery();
            command.Dispose();
            connection.Close();

        }
        //Get Show Value 
        public Boolean SubShow(int id)
        {
            Boolean return_value = false;
            if (id == 0)
                sql = "select id,show from Category_Sub  order by Cat_sub ";
            else
                sql = "select id,show from Category_Sub where id=@id order by Cat_sub ";


            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);

            if (id > 0)
                command.Parameters.Add(new SqlParameter("id", id));

            dataReader = command.ExecuteReader();
            if (dataReader.Read())
            {
                if (Convert.ToInt32(dataReader.GetValue(1)) == 1)
                    return_value = true;

            }
            dataReader.Close();
            command.Dispose();
            connection.Close();
            return return_value;

        }

        //drop down category main
        public SqlDataReader get_category_query()
        {
            initialize();
            if (admin_user == "admin")
                sql = "select id,Category from category_main order by Category ";
            else
                sql = "select id,Category from category_main where admin_user = @admin_user order by Category  ";

            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
            if (admin_user != "admin")
                command.Parameters.Add(new SqlParameter("admin_user", admin_user));

            SqlDataReader dataReader = command.ExecuteReader();
            return dataReader;
        }
        // drop down subcategory
        public SqlDataReader get_sub_cat_query(int IdCatLoc)
        {
            initialize();
            if (admin_user == "admin")
                sql = "select id,Cat_sub from Category_Sub where id_category = @IdCatLoc order by Cat_sub  ";
            else
                sql = "select id,Cat_sub from Category_Sub where id_category = @IdCatLoc and admin_user = @admin_user order by Cat_sub  ";

            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
            command.Parameters.Add(new SqlParameter("IdCatLoc", IdCatLoc));
            if (admin_user != "admin")
                command.Parameters.Add(new SqlParameter("admin_user", admin_user));

            SqlDataReader dataReader = command.ExecuteReader();
            return dataReader;
        }


        // Close connection 
        public void close_connection()
        {
            command.Dispose();
            connection.Close();
            connection.Dispose();

            /* connection.Close();
            connection.Dispose(); */
        }
        //add Detail
        public void DetailAdd(int id_subcat, string Title, string SubTitle, string Desc1, string Desc2, string img1, string img2,
            string img3, string img4, string img5, int ScreenImg, int show)
        {
            sql = @"insert into Detail (id_subcat, Title, SubTitle,Desc1,Desc2,img1,img2,img3,img4,img5,ScreenImg,show,admin_user) values " +
                "(@id_subcat, @Title, @SubTitle,@Desc1,@Desc2,@img1,@img2,@img3,@img4,@img5,@ScreenImg,@show,@admin_user)";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();

            img1 = img1 == null?"":img1;
            img2 = img2 == null ? "" : img2;
            img3 = img3 == null ? "" : img3;
            img4 = img4 == null ? "" : img4;
            img5 = img5 == null ? "" : img5;
            command = new SqlCommand(sql, connection);
            command.Parameters.Add(new SqlParameter("id_subcat", id_subcat));
            command.Parameters.Add(new SqlParameter("Title", Title));
            command.Parameters.Add(new SqlParameter("SubTitle", SubTitle));
            command.Parameters.Add(new SqlParameter("Desc1", Desc1));
            command.Parameters.Add(new SqlParameter("Desc2", Desc2));
            command.Parameters.Add(new SqlParameter("img1", img1));
            command.Parameters.Add(new SqlParameter("img2", img2));
            command.Parameters.Add(new SqlParameter("img3", img3));
            command.Parameters.Add(new SqlParameter("img4", img4));
            command.Parameters.Add(new SqlParameter("img5", img5));
            command.Parameters.Add(new SqlParameter("ScreenImg", ScreenImg));
            command.Parameters.Add(new SqlParameter("show", show));
            command.Parameters.Add(new SqlParameter("admin_user", admin_user));



            command.ExecuteNonQuery();
            command.Dispose();
            connection.Close();

        }

        // Get Detail
        public List<DetailObject> GetDetail(int SubCategory)
        {
            List<DetailObject> ReturnObject = new List<DetailObject>();

            sql = "select id,id_subcat,title,subtitle,Desc1,Desc2,created,img1,img2,img3,img4,img5,ScreenImg,show from Detail  where id_subcat = @id_subcat order by title ";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);

            command.Parameters.Add(new SqlParameter("id_subcat", SubCategory));

            dataReader = command.ExecuteReader();
            while (dataReader.Read())
            {
                DetailObject ReturnRecord = new DetailObject();

                ReturnRecord.id = Convert.ToInt32(dataReader.GetValue(0));
                ReturnRecord.id_subcat = Convert.ToInt32(dataReader.GetValue(1));
                ReturnRecord.title = dataReader.GetValue(2).ToString();
                ReturnRecord.subtitle = dataReader.GetValue(3).ToString();
                ReturnRecord.Desc1 = dataReader.GetValue(4).ToString();
                ReturnRecord.Desc2 = dataReader.GetValue(5).ToString();
                ReturnRecord.created = Convert.ToDateTime(dataReader.GetValue(6));
                ReturnRecord.img1 = dataReader.GetValue(7).ToString();
                ReturnRecord.img2 = dataReader.GetValue(8).ToString();
                ReturnRecord.img3 = dataReader.GetValue(9).ToString();
                ReturnRecord.img4 = dataReader.GetValue(10).ToString();
                ReturnRecord.img5 = dataReader.GetValue(11).ToString();
                ReturnRecord.ScreenImg = Convert.ToInt32(dataReader.GetValue(12));
                ReturnRecord.show = Convert.ToInt32(dataReader.GetValue(13));
                ReturnObject.Add(ReturnRecord);
            }
            dataReader.Close();
            command.Dispose();
            connection.Close();
            return ReturnObject;
        }
        public DetailObject GetDetail(string id)
        {
            int LocalId = Convert.ToInt32(id); 
            DetailObject ReturnRecord = new DetailObject();

            sql = "select id,id_subcat,title,subtitle,Desc1,Desc2,created,img1,img2,img3,img4,img5,ScreenImg,show from Detail  where id = @id order by title ";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);

            command.Parameters.Add(new SqlParameter("id", LocalId));

            dataReader = command.ExecuteReader();
            if (dataReader.Read())
            {

                ReturnRecord.id = Convert.ToInt32(dataReader.GetValue(0));
                ReturnRecord.id_subcat = Convert.ToInt32(dataReader.GetValue(1));
                ReturnRecord.title = dataReader.GetValue(2).ToString();
                ReturnRecord.subtitle = dataReader.GetValue(3).ToString();
                ReturnRecord.Desc1 = dataReader.GetValue(4).ToString();
                ReturnRecord.Desc2 = dataReader.GetValue(5).ToString();
                ReturnRecord.created = Convert.ToDateTime(dataReader.GetValue(6));
                ReturnRecord.img1 = dataReader.GetValue(7).ToString();
                ReturnRecord.img2 = dataReader.GetValue(8).ToString();
                ReturnRecord.img3 = dataReader.GetValue(9).ToString();
                ReturnRecord.img4 = dataReader.GetValue(10).ToString();
                ReturnRecord.img5 = dataReader.GetValue(11).ToString();
                ReturnRecord.ScreenImg = Convert.ToInt32(dataReader.GetValue(12));
                ReturnRecord.show = Convert.ToInt32(dataReader.GetValue(13));
                
            }
            dataReader.Close();
            command.Dispose();
            connection.Close();
            return ReturnRecord;
        }
        // DetailUpdate
        public void DetailUpdate(int id, int id_subcat, string title, string subtitle, string desc1, string desc2, string img1, string img2,
            string img3, string img4, string img5, int screenImg, int show)
        {
            sql = "update Detail set id_subcat= @id_subcat, title=@title,subtitle = @subtitle,desc1 = @desc1,desc2 = @desc2,img1 = @img1, " +
                " img2 = @img2,img3 = @img3,img4 = @img4,img5 = @img5,screenImg = @screenImg,show = @show where id = @id ";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
            command.Parameters.Add(new SqlParameter("id", id));
            command.Parameters.Add(new SqlParameter("id_subcat", id_subcat));
            command.Parameters.Add(new SqlParameter("title", title));
            command.Parameters.Add(new SqlParameter("subtitle", subtitle));
            command.Parameters.Add(new SqlParameter("desc1", desc1));
            command.Parameters.Add(new SqlParameter("desc2", desc2));
            command.Parameters.Add(new SqlParameter("img1", img1));
            command.Parameters.Add(new SqlParameter("img2", img2));
            command.Parameters.Add(new SqlParameter("img3", img3));
            command.Parameters.Add(new SqlParameter("img4", img4));
            command.Parameters.Add(new SqlParameter("img5", img5));
            command.Parameters.Add(new SqlParameter("screenImg", screenImg));
            command.Parameters.Add(new SqlParameter("show", show));
            command.ExecuteNonQuery();
            command.Dispose();
            connection.Close();
        }
        public void DetailDelete(int id)
        {
            sql = "delete from Detail where id = @id ";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
            command.Parameters.Add(new SqlParameter("id", id));
            command.ExecuteNonQuery();
            command.Dispose();
            connection.Close();
        }
        public List<CategoryMainObject> GetCategoryMain()
        {

            List<CategoryMainObject> ReturnObject = new List<CategoryMainObject>();

            sql = "select id,Category from Category_Main where show = 1 order by Category ";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);


            dataReader = command.ExecuteReader();
            while (dataReader.Read())
            {
                CategoryMainObject ReturnRecord = new CategoryMainObject();
                ReturnRecord.id = Convert.ToInt32(dataReader.GetValue(0));
                ReturnRecord.Category = dataReader.GetValue(1).ToString();
                ReturnObject.Add(ReturnRecord);
            }
            dataReader.Close();
            command.Dispose();
            connection.Close();
            return ReturnObject;


        }


        public List<CategorySubObject> GetCategorySub(int id_category)
        {

            List<CategorySubObject> ReturnObject = new List<CategorySubObject>();

            sql = "select id,id_category,Cat_sub from Category_Sub where show = 1 and id_category = @id_category";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
            command.Parameters.Add(new SqlParameter("id_category", id_category));


            dataReader = command.ExecuteReader();
            while (dataReader.Read())
            {
                CategorySubObject ReturnRecord = new CategorySubObject();  
                ReturnRecord.id = Convert.ToInt32(dataReader.GetValue(0));
                ReturnRecord.id_category =  Convert.ToInt32(dataReader.GetValue(1));
                ReturnRecord.Cat_sub = dataReader.GetValue(2).ToString();
                ReturnObject.Add(ReturnRecord);
            }
            dataReader.Close();
            command.Dispose();
            connection.Close();
            return ReturnObject;


        }

        public List<DetailObject> GetDetailScroll()
        {
            List<DetailObject> ReturnObject = new List<DetailObject>();

            sql = "select id,id_subcat,title,subtitle,Desc1,Desc2,created,img1,img2,img3,img4,img5,ScreenImg,show from Detail  where ScreenImg = 1 and show = 1 order by title ";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);


            dataReader = command.ExecuteReader();
            while (dataReader.Read())
            {
                DetailObject ReturnRecord = new DetailObject();

                ReturnRecord.id = Convert.ToInt32(dataReader.GetValue(0));
                ReturnRecord.id_subcat = Convert.ToInt32(dataReader.GetValue(1));
                ReturnRecord.title = dataReader.GetValue(2).ToString();
                ReturnRecord.subtitle = dataReader.GetValue(3).ToString();
                ReturnRecord.Desc1 = dataReader.GetValue(4).ToString();
                ReturnRecord.Desc2 = dataReader.GetValue(5).ToString();
                ReturnRecord.created = Convert.ToDateTime(dataReader.GetValue(6));
                ReturnRecord.img1 = dataReader.GetValue(7).ToString();
                ReturnRecord.img2 = dataReader.GetValue(8).ToString();
                ReturnRecord.img3 = dataReader.GetValue(9).ToString();
                ReturnRecord.img4 = dataReader.GetValue(10).ToString();
                ReturnRecord.img5 = dataReader.GetValue(11).ToString();
                ReturnRecord.ScreenImg = Convert.ToInt32(dataReader.GetValue(12));
                ReturnRecord.show = Convert.ToInt32(dataReader.GetValue(13));
                ReturnObject.Add(ReturnRecord);
            }
            dataReader.Close();
            command.Dispose();
            connection.Close();
            return ReturnObject;
        }

        public List<DetailObject> GetDetailMain()
        {
            List<DetailObject> ReturnObject = new List<DetailObject>();

            sql = "select id,id_subcat,title,subtitle,Desc1,Desc2,created,img1,img2,img3,img4,img5,ScreenImg,show from Detail  where ScreenImg = 2 and show = 1 order by title ";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);


            dataReader = command.ExecuteReader();
            while (dataReader.Read())
            {
                DetailObject ReturnRecord = new DetailObject();

                ReturnRecord.id = Convert.ToInt32(dataReader.GetValue(0));
                ReturnRecord.id_subcat = Convert.ToInt32(dataReader.GetValue(1));
                ReturnRecord.title = dataReader.GetValue(2).ToString();
                ReturnRecord.subtitle = dataReader.GetValue(3).ToString();
                ReturnRecord.Desc1 = dataReader.GetValue(4).ToString();
                ReturnRecord.Desc2 = dataReader.GetValue(5).ToString();
                ReturnRecord.created = Convert.ToDateTime(dataReader.GetValue(6));
                ReturnRecord.img1 = dataReader.GetValue(7).ToString();
                ReturnRecord.img2 = dataReader.GetValue(8).ToString();
                ReturnRecord.img3 = dataReader.GetValue(9).ToString();
                ReturnRecord.img4 = dataReader.GetValue(10).ToString();
                ReturnRecord.img5 = dataReader.GetValue(11).ToString();
                ReturnRecord.ScreenImg = Convert.ToInt32(dataReader.GetValue(12));
                ReturnRecord.show = Convert.ToInt32(dataReader.GetValue(13));
                ReturnObject.Add(ReturnRecord);
            }
            dataReader.Close();
            command.Dispose();
            connection.Close();
            return ReturnObject;
        }

        public DataTable get_offer_query()
        {
            DataTable table = new DataTable(); 

            sql = "select id,customer_id,offer from offer ";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
            SqlDataReader dataReader = command.ExecuteReader();
            table.Load(dataReader);
            return table;
        }
        public void ClientAdd(string value, int show)
        {
            sql = "insert into Category_Main (Category,show) values(@value,@show) ";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
            command.Parameters.Add(new SqlParameter("value", value));
            command.Parameters.Add(new SqlParameter("show", show));
            command.ExecuteNonQuery();
            command.Dispose();
            connection.Close();
        }


    }
}