<%@ Page Title="Market International" Language="C#" MasterPageFile="~/Mark_Int.Master" AutoEventWireup="true" CodeBehind="Mark_Detail.aspx.cs" Inherits="Market_International.Mark_Detail" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
            <style>
            em{
                font-size:xx-large;
                color:white;
            }
            </style>

            <script>
            jssor_slider1_starter('slider1_container');

            // Validate 
            function validate(id)
            {
                var labelid = "label" + id; 
                var FieldValidate = document.getElementById(id).value;
                if (FieldValidate == "")
                {
                    document.getElementById(labelid).style.visibility = "visible";
                    document.getElementById(labelid).innerHTML = "Please enter your offer.<br /> Empty offer is not permitted. ";
                    return;
                }
                if (isNaN(FieldValidate))
                {
                    document.getElementById(labelid).style.visibility = "visible";
                    document.getElementById(labelid).innerHTML = "incorrect format. <br />Decimal point and separator are not supported.";
                    return; 
                }
                var n = FieldValidate.indexOf(".");
                if (n>0)
                {
                    document.getElementById(labelid).style.visibility = "visible";
                    document.getElementById(labelid).innerHTML = "incorrect format. <br />Decimal point and separator are not supported.";
                    return;
                }

                n = FieldValidate.indexOf(",");
                if (n > 0) {
                    document.getElementById(labelid).style.visibility = "visible";
                    document.getElementById(labelid).innerHTML = "incorrect format. <br />Decimal point and separator are not supported.";
                    return;
                }
                document.getElementById('OfferId').value = id;
                $("#form1").submit();

            }
        </script>

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
                        Response.Write("<a  href=\"/MarkDetailZoom.aspx?id=" + item.id + "\">");
                        Response.Write("<img class=\"image_size\" src=\"image/"+item.img1 + "\" >");
                        Response.Write("</a>");
                        Response.Write("<br>");
                        Response.Write("<label style=\"font-size: xx-large;\" >" + item.title + "</label><br>");
                        Response.Write("<label style=\"font-size: x-large;\">" + item.subtitle + "</label>");
                        Response.Write("<br>");
                        Detail = item.Desc1.Replace("\r\n", "<br>");
                        
                        Response.Write("<label>" + Detail + "</label><br>");

                        string offer = "";
                        if (item.offer == 1)
                        {
                            offer = "<label>Offer:</label> <input type=\"text\" Title=\"Decimal point and separator are not supported.\"  name=\"" + item.id + "\" id=\"" + item.id + "\"><br /> " +
                            "<input type=\"button\"  value=\"Submit\" onclick=\" validate('" + item.id + "');\"><br />" +
                            "<label id=\"label" + item.id + "\" style=\"color:red; visibility:hidden;\"></label>";
                        }
                        else
                        {

                            offer = "<label><em>Price: " + item.itemprice + "</em></label><br /><input type=\"button\" Title=\"Place your order.\" value=\"Place your order\" onclick=\"Javascript: location.href='./OrderRegister.aspx?id=" + item.id + "';\"/>";
                        }
                        Response.Write(offer);

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
        <input  type="hidden" name="OfferId" id="OfferId" value="Submit" >
</asp:Content>
