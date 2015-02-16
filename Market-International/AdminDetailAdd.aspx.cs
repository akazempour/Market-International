using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Market_International
{
    public partial class AdminDetailAdd : System.Web.UI.Page
    {
        //Page Load
        #region
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["admin"] != "admin_log")
                Response.Redirect("./login_admin.aspx");

            if (!IsPostBack)
            {
                string action = Request["action"];
                FieldAction.Value = action;

                if (action == "add")
                {
                    FieldId.Value = Request["id_subcat"];
                }
                else
                {
                    FieldId.Value = Request["id"];
                    Fieldid1.Value = Request["id_subcat"];
                }

                if (action == "edit")
                {
                    sql_object SqlObj = new sql_object();
                    DetailObject DetObj = SqlObj.GetDetail(Request["id"]);
                    TitleText.Text = DetObj.title;
                    SubTitleText.Text = DetObj.subtitle;
                    Desc1Text.Text = DetObj.Desc1;
                    Desc2Text.Text = DetObj.Desc2;
                    switch (DetObj.ScreenImg)
                    {
                       case 1:
                            Scroll.Checked = true; 
                            MainPage.Checked = false; 
                            DetailPage.Checked = false;
                            break;
                    case 2:
                            MainPage.Checked = true; 
                            Scroll.Checked = false; 
                            DetailPage.Checked = false;
                            break;
                        default:
                            DetailPage.Checked = true;
                            MainPage.Checked = false; 
                            Scroll.Checked = false; 
                            break;                    

                    }
                    Show.Checked = DetObj.show == 1 ? true : false;
                    ImgPrv1.ImageUrl = "~/image/" + DetObj.img1;
                    ImgPrv2.ImageUrl = "~/image/" + DetObj.img2;
                    ImgPrv3.ImageUrl = "~/image/" + DetObj.img3;
                    ImgPrv4.ImageUrl = "~/image/" + DetObj.img4;
                    ImgPrv5.ImageUrl = "~/image/" + DetObj.img5;
                    FieldImage1.Value = DetObj.img1;
                    FieldImage2.Value = DetObj.img2;
                    FieldImage3.Value  = DetObj.img3;
                    FieldImage4.Value = DetObj.img4;
                    FieldImage5.Value = DetObj.img5;

                }

            }
        }
        #endregion
        //Summit
        #region
        protected void Summit(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                string action = FieldAction.Value ;
                if (action == "add")
                    AddDetail();
                else
                    EditDetail();

                string url = "./Admin_Home.aspx";
                Response.Redirect(url); 

            }            
        }
        #endregion


        private void AddDetail()
        {

            string action = FieldAction.Value;

            int SubCatId = Convert.ToInt32(FieldId.Value);
            string myUniqueFileName1 = null;
            string myUniqueFileName2 = null;
            string myUniqueFileName3 = null;
            string myUniqueFileName4 = null;
            string myUniqueFileName5 = null;

            if (flupImage1.PostedFile != null && flupImage1.PostedFile.FileName != "")
            {
                string imgName1 = flupImage1.FileName;
                string ext = System.IO.Path.GetExtension(imgName1);
                myUniqueFileName1 = string.Format(@"{0}" + ext, Guid.NewGuid());
                string imgPath = "image/" + myUniqueFileName1;
                flupImage1.SaveAs(Server.MapPath(imgPath));
            }

            if (flupImage2.PostedFile != null && flupImage2.PostedFile.FileName != "")
            {
                string imgName1 = flupImage2.FileName;
                string ext = System.IO.Path.GetExtension(imgName1);
                myUniqueFileName2 = string.Format(@"{0}" + ext, Guid.NewGuid());
                string imgPath = "image/" + myUniqueFileName2;
                flupImage2.SaveAs(Server.MapPath(imgPath));
            }

            if (flupImage3.PostedFile != null && flupImage3.PostedFile.FileName != "")
            {
                string imgName1 = flupImage3.FileName;
                string ext = System.IO.Path.GetExtension(imgName1);
                myUniqueFileName3 = string.Format(@"{0}" + ext, Guid.NewGuid());
                string imgPath = "image/" + myUniqueFileName3;
                flupImage3.SaveAs(Server.MapPath(imgPath));
            }

            if (flupImage4.PostedFile != null && flupImage4.PostedFile.FileName != "")
            {
                string imgName1 = flupImage4.FileName;
                string ext = System.IO.Path.GetExtension(imgName1);
                myUniqueFileName4 = string.Format(@"{0}" + ext, Guid.NewGuid());
                string imgPath = "image/" + myUniqueFileName4;
                flupImage4.SaveAs(Server.MapPath(imgPath));
            }

            if (flupImage5.PostedFile != null && flupImage5.PostedFile.FileName != "")
            {
                string imgName1 = flupImage5.FileName;
                string ext = System.IO.Path.GetExtension(imgName1);
                myUniqueFileName5 = string.Format(@"{0}" + ext, Guid.NewGuid());
                string imgPath = "image/" + myUniqueFileName5;
                flupImage5.SaveAs(Server.MapPath(imgPath));
            }

                string Title = TitleText.Text;
                string SubTitle = SubTitleText.Text;
                int show = Show.Checked ? 1 : 0;
                string Desc1 = Desc1Text.Text;
                string Desc2 = Desc2Text.Text;
                int ScreenImage = 0;
                if (Scroll.Checked)
                    ScreenImage = 1;
                else if (MainPage.Checked)
                    ScreenImage = 2;
                else if (DetailPage.Checked)
                    ScreenImage = 3;

                sql_object sql_obj = new sql_object();
                sql_obj.DetailAdd(SubCatId, Title, SubTitle, Desc1, Desc2, myUniqueFileName1, myUniqueFileName2, myUniqueFileName3,
                    myUniqueFileName4, myUniqueFileName5, ScreenImage, show);

        }

        private void EditDetail()
        {

            string action = FieldAction.Value;

            int Id = Convert.ToInt32(FieldId.Value);
            int SubCatId =Convert.ToInt32(Fieldid1.Value);

            string myUniqueFileName1 = null;
            string myUniqueFileName2 = null;
            string myUniqueFileName3 = null;
            string myUniqueFileName4 = null;
            string myUniqueFileName5 = null;

            if (flupImage1.PostedFile != null && flupImage1.PostedFile.FileName != "")
            {
                string imgName1 = flupImage1.FileName;
                string ext = System.IO.Path.GetExtension(imgName1);
                myUniqueFileName1 = string.Format(@"{0}" + ext, Guid.NewGuid());
                string imgPath = "image/" + myUniqueFileName1;
                flupImage1.SaveAs(Server.MapPath(imgPath));
                imgPath = "image/" + FieldImage1.Value;
                if(File.Exists(Server.MapPath(imgPath)))
                {
                    File.Delete(Server.MapPath(imgPath));
                }
                FieldImage1.Value = myUniqueFileName1;
            }

            if (flupImage2.PostedFile != null && flupImage2.PostedFile.FileName != "")
            {
                string imgName1 = flupImage2.FileName;
                string ext = System.IO.Path.GetExtension(imgName1);
                myUniqueFileName2 = string.Format(@"{0}" + ext, Guid.NewGuid());
                string imgPath = "image/" + myUniqueFileName2;
                flupImage2.SaveAs(Server.MapPath(imgPath));
                imgPath = "image/" + FieldImage2.Value;
                if (File.Exists(Server.MapPath(imgPath)))
                {
                    File.Delete(Server.MapPath(imgPath));
                }
                FieldImage2.Value = myUniqueFileName2;
            }

            if (flupImage3.PostedFile != null && flupImage3.PostedFile.FileName != "")
            {
                string imgName1 = flupImage3.FileName;
                string ext = System.IO.Path.GetExtension(imgName1);
                myUniqueFileName3 = string.Format(@"{0}" + ext, Guid.NewGuid());
                string imgPath = "image/" + myUniqueFileName3;
                flupImage3.SaveAs(Server.MapPath(imgPath));
                imgPath = "image/" + FieldImage3.Value;
                if (File.Exists(Server.MapPath(imgPath)))
                {
                    File.Delete(Server.MapPath(imgPath));
                }
                FieldImage3.Value = myUniqueFileName3;
            }

            if (flupImage4.PostedFile != null && flupImage4.PostedFile.FileName != "")
            {
                string imgName1 = flupImage4.FileName;
                string ext = System.IO.Path.GetExtension(imgName1);
                myUniqueFileName4 = string.Format(@"{0}" + ext, Guid.NewGuid());
                string imgPath = "image/" + myUniqueFileName4;
                flupImage4.SaveAs(Server.MapPath(imgPath));
                imgPath = "image/" + FieldImage4.Value;
                if (File.Exists(Server.MapPath(imgPath)))
                {
                    File.Delete(Server.MapPath(imgPath));
                }
                FieldImage4.Value = myUniqueFileName4;
            }

            if (flupImage5.PostedFile != null && flupImage5.PostedFile.FileName != "")
            {
                string imgName1 = flupImage5.FileName;
                string ext = System.IO.Path.GetExtension(imgName1);
                myUniqueFileName5 = string.Format(@"{0}" + ext, Guid.NewGuid());
                string imgPath = "image/" + myUniqueFileName5;
                flupImage5.SaveAs(Server.MapPath(imgPath));
                imgPath = "image/" + FieldImage5.Value;
                if (File.Exists(Server.MapPath(imgPath)))
                {
                    File.Delete(Server.MapPath(imgPath));
                }
                FieldImage5.Value = myUniqueFileName5;
            }

            string Title = TitleText.Text;
            string SubTitle = SubTitleText.Text;
            int show = Show.Checked ? 1 : 0;
            string Desc1 = Desc1Text.Text;
            string Desc2 = Desc2Text.Text;
            int ScreenImage = 0;
            if (Scroll.Checked)
                ScreenImage = 1;
            else if (MainPage.Checked)
                ScreenImage = 2;
            else if (DetailPage.Checked)
                ScreenImage = 3;

            sql_object sql_obj = new sql_object();
            sql_obj.DetailUpdate(Id, SubCatId, Title, SubTitle, Desc1, Desc2, FieldImage1.Value, FieldImage2.Value, FieldImage3.Value,
                FieldImage4.Value, FieldImage5.Value, ScreenImage, show);

        }



    }
}