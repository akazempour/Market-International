using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Market_International
{
    public partial class OfferRegister : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack == false)
            {
                if (Request["id"] != null)
                {
                    string id = Request["id"].ToString();
                    string OfferRound = Request["amount"].ToString();
                    decimal amount = Convert.ToDecimal(OfferRound);
                    sql_object SqlObj = new sql_object();
                    DetailObject DetailObj = SqlObj.GetDetail(id);
                    itemnum.Text = DetailObj.itemnum; 
                    Item.Text = DetailObj.title;
                    Offer.Text = amount.ToString();
                    Fieldid.Value = id;
                }
            }
        }
        protected void Ok_Click(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                if (Email.Text == Email1.Text )
                {
                    
                    string CurentCurr = Curency.Text == "Euro" ? "E" : "D"; 
                    EmailErr.Visible = false;
                    sql_object SqlObj = new sql_object();
                    string Gender = Male.Checked == true ? "M" : "F";
                    SqlObj.AddOffer(Convert.ToInt32(Fieldid.Value), Convert.ToDecimal(Offer.Text),0, FirstName.Text, LastName.Text,
                        Address.Text, Email.Text, Gender, CurentCurr,Note.Text);

                    OfferEmailConform(Convert.ToInt32(Fieldid.Value),LastName.Text, Email.Text, Gender, Offer.Text, Item.Text, itemnum.Text,CurentCurr);
                    Response.Redirect("~/Default.aspx");
                }
                else if (Email.Text != Email1.Text)
                {
                    EmailErr.Text = "Emails are not the same.";
                    EmailErr.Visible = true;
                }
            }

        }

        private void OfferEmailConform(int id ,string name,string email,string gender,string amount,string ItemTitle,string itemnum,string Curency)
        {
            string OdderAmount = Curency == "E" ? "&#8364;" : "&#36;";
            OdderAmount = OdderAmount + amount; 
            string content = File.ReadAllText(Server.MapPath("~/img/OfferNotification.html"));
            string ReplaceGender = gender == "M" ? "Mr." : "Mrs.";
            content = content.Replace("{gender}", ReplaceGender);
            content = content.Replace("{lname}", name);
            string articlenumber = "<a href=http://www.market-international.com/MarkDetailZoom.aspx?id=" + id + ">Article number:" + itemnum + "</a>";

            content = content.Replace("{itemnum}", articlenumber);
            content = content.Replace("{product}", ItemTitle);
            content = content.Replace("{amount}", OdderAmount);
            string OfferEmail = email + ",info@Market-International.com,akazempour@hotmail.com";  //,hamid-par@hotmail.com
            
            System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
            mail.To.Add(OfferEmail);
            mail.From = new MailAddress("info@market-international.com", "Market International", System.Text.Encoding.UTF8);
            mail.Subject = "Offer Confirmation ";
            mail.SubjectEncoding = System.Text.Encoding.UTF8;
            mail.Body = content;
            mail.BodyEncoding = System.Text.Encoding.UTF8;
            mail.IsBodyHtml = true;
            mail.Priority = MailPriority.High;
            SmtpClient client = new SmtpClient();
            client.Credentials = new System.Net.NetworkCredential("info@market-international.com", "Admiral1@");
            client.Port = 25;
            client.Host = "mail.market-international.com";
            client.EnableSsl = false;
            try
            {
                client.Send(mail);
                //Page.RegisterStartupScript("UserMsg", "<script>alert('Successfully Send...');if(alert){ window.location='SendMail.aspx';}</script>");
            }
            catch (Exception ex)
            {
                Exception ex2 = ex;
                string errorMessage = string.Empty;
                while (ex2 != null)
                {
                    errorMessage += ex2.ToString();
                    ex2 = ex2.InnerException;
                }
                Page.RegisterStartupScript("UserMsg", "<script>alert('Sending Failed...');if(alert){ window.location='SendMail.aspx';}</script>");
            }



        }


        protected void Cancel_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/Default.aspx");
        }


    }
}