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
    public partial class Contact : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Ok_Click(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                if (Email.Text == Email1.Text)
                {
                    ContactEmailConform();
                    Response.Redirect("~/Default.aspx");
                }
                else if (Email.Text != Email1.Text)
                {
                    EmailErr.Text = "Emails are not the same.";
                    EmailErr.Visible = true;
                }

            }

        }

        protected void Cancel_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/Default.aspx");
        }

        private void ContactEmailConform()
        {
            string Gender = Male.Checked == true ? "Mr." : "Mrs.";

            string content = File.ReadAllText(Server.MapPath("~/img/ContactNotification.html"));
            content = content.Replace("{lname}", LastName.Text);
            content = content.Replace("{fname}", FirstName.Text);
            content = content.Replace("{gender}", Gender);
            content = content.Replace("{email}", Email.Text);
            string note = Note.Text.ToString().Replace("\r\n", "<br>");
            content = content.Replace("{note}", note);
            string OfferEmail = Email.Text + ",info@Market-International.com,akazempour@hotmail.com";  //,hamid-par@hotmail.com

            System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
            mail.To.Add(OfferEmail);
            mail.From = new MailAddress("info@market-international.com", "Market International", System.Text.Encoding.UTF8);
            mail.Subject = "Contact Confirmation ";
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

    }
}