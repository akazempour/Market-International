<%@ Page Title="Market International" Language="C#" MasterPageFile="~/Mark_Int.Master" AutoEventWireup="true" CodeBehind="Mark_Detail.aspx.cs" Inherits="Market_International.Mark_Detail" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    </br></br></br></br>
    <div>
        <div class="div_color">
            <%
                int counter = 0;
                string Detail = null;
                int subid = Convert.ToInt32(Request["subcat"]);
                Market_International.sql_object SqlObj = new Market_International.sql_object();
                List<Market_International.DetailObject> DetailObj = SqlObj.GetDetail(subid);
                foreach (Market_International.DetailObject item in DetailObj)
                {
                    if (item.ScreenImg == 3)
                    {
                        counter++;
                        Response.Write("<div class=\"box2\">");
                        Response.Write("<a target=\"_blank\" href=\"/MarkDetailZoom.aspx?id=" + item.id + "\">");
                        Response.Write("<img class=\"image_size\" src=\"image/"+item.img1 + "\" >");
                        Response.Write("</a>");
                        Response.Write("<br>");
                        Response.Write("<label style=\"font-size: xx-large;\" >" + item.title + "</label><br>");
                        Response.Write("<label style=\"font-size: x-large;\">" + item.subtitle + "</label>");
                        Response.Write("<br>");
                        Detail = item.Desc1.Replace("\r\n", "<br>");
                        
                        Response.Write("<label>" + Detail + "</label>");
                        Response.Write("</div>");
                        if (counter == 2)
                        {
                            Response.Write("</div>");
                            Response.Write("</br>");
                            counter = 0;
                        }
                    }
                }
                if (counter != 0)
                {
                    Response.Write("</div>");
                    Response.Write("</br>");
                }
                
            %>
        </div>


        <br />
</asp:Content>
