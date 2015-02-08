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
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                string action = Request["action"];
                FieldAction.Value = action;
                FieldId.Value = Request["id_subcat"];
                if (action == "edit")
                {
                    string ssss = "aaa";  
                }

            }
        }

        protected void Summit(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                string action = FieldAction.Value ;
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

                if (action == "add")
                {
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

                string url = "./Admin_Home.aspx";
                Response.Redirect(url); 

            }
        }


    }
}