using System;
using System.Collections.Generic;
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

        //initialized 
        #region 
        private void initialize()
        {
            connetionString = "Data Source=SQL5006.Smarterasp.net;Initial Catalog=DB_9B7F5F_kaz;User Id=DB_9B7F5F_kaz_admin;Password=Admiral1;";

        }
        #endregion

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
        #region 
        public Boolean admin_login(string log_user, string passwrd)
        {
            string hash_passwrd = hash_function(passwrd);  //admin_03_24_1963
            Boolean return_value = false;


            sql = "select * from admin_login where user_name = @user_name ";
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
                string temp1 = ex.ToString() ; 
            }

            dataReader.Close();
            command.Dispose();
            connection.Close();
            return return_value;
        }
        #endregion


        //Update Main Category
        #region
        public void MainCatUpd(int id, string value,int show)
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
        #endregion
        //Add Main Category
        #region
        public void MainCatAdd(string value,int show)
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
        #endregion
        // show 
        #region 
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

            if(id>0)
                command.Parameters.Add(new SqlParameter("id", id));

            dataReader = command.ExecuteReader();
            if (dataReader.Read())
            {
                if (Convert.ToInt32(dataReader.GetValue(1)) == 1 )
                    return_value = true;

            }
            dataReader.Close();
            command.Dispose();
            connection.Close();
            return return_value;

        }
        #endregion
        //Delete main Category
        #region
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
        #endregion
        // Sub Category Add
        #region 
        public void SubCatAdd(int id_category, string Cat_sub, int show)
        {
            sql = "insert into Category_Sub (id_category,Cat_sub,show) values(@id_category,@Cat_sub,@show) ";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
            command.Parameters.Add(new SqlParameter("id_category", id_category));
            command.Parameters.Add(new SqlParameter("Cat_sub", Cat_sub));
            command.Parameters.Add(new SqlParameter("show", show));
            command.ExecuteNonQuery();
            command.Dispose();
            connection.Close();
        }
        #endregion
        //Get First Category 
        #region
        public int GetFirstCat()
        {
            int lreturn = 0 ;
            sql = "select Top 1 id from dbo.Category_Main order by Category";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
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
        #endregion
        //Update SubCategory
        #region 
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
        #endregion
        // SubCat Delete
        #region
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
        #endregion
        //Get Show Value 
        #region 
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
        #endregion

        //drop down category main
        #region
        public SqlDataReader get_category_query()
        {
            sql = "select id,Category from category_main order by Category ";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
            SqlDataReader dataReader = command.ExecuteReader();
            return dataReader;
        }
        #endregion
        // drop down subcategory
        #region 
        public SqlDataReader get_sub_cat_query(int IdCatLoc)
        {
            sql = "select id,Cat_sub from Category_Sub where id_category = @IdCatLoc order by Cat_sub  ";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();
            command = new SqlCommand(sql, connection);
            command.Parameters.Add(new SqlParameter("IdCatLoc", IdCatLoc));
            SqlDataReader dataReader = command.ExecuteReader();
            return dataReader;
        }
        #endregion 


        // Close connection 
        #region
        public void close_connection()
        {
            command.Dispose();
            connection.Close();
            connection.Dispose();

            /* connection.Close();
            connection.Dispose(); */
        }
        #endregion

        public void DetailAdd(int id_subcat, string Title, string SubTitle, string Desc1, string Desc2, string img1, string img2,
            string img3, string img4, string img5, int ScreenImg, int show)
        {
            sql = @"insert into Detail (id_subcat, Title, SubTitle,Desc1,Desc2,img1,img2,img3,img4,img5,ScreenImg,show) values " +
                "(@id_subcat, @Title, @SubTitle,@Desc1,@Desc2,@img1,@img2,@img3,@img4,@img5,@ScreenImg,@show)";
            initialize();
            connection = new SqlConnection(connetionString);
            connection.Open();

            command = new SqlCommand(sql, connection);
            command.Parameters.Add(new SqlParameter("id_subcat", id_subcat));
            command.Parameters.Add(new SqlParameter("Title", Title));
            command.Parameters.Add(new SqlParameter("SubTitle", SubTitle));
            command.Parameters.Add(new SqlParameter("Desc1",Desc1));
            command.Parameters.Add(new SqlParameter("Desc2", Desc2));
            command.Parameters.Add(new SqlParameter("img1", img1));
            command.Parameters.Add(new SqlParameter("img2", img2));
            command.Parameters.Add(new SqlParameter("img3", img3));
            command.Parameters.Add(new SqlParameter("img4", img4));
            command.Parameters.Add(new SqlParameter("img5", img5));
            command.Parameters.Add(new SqlParameter("ScreenImg", ScreenImg));
            command.Parameters.Add(new SqlParameter("show", show));


            command.ExecuteNonQuery();
            command.Dispose();
            connection.Close();

        }
    }
}