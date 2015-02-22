<%@ Page Title="Market International" Language="C#" MasterPageFile="~/Mark_Int.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Market_International.Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link href="css/slider_style.css" rel="stylesheet" type="text/css" />

    <div id="slider1_container" style="position: relative; margin: 0 auto; top: 0px; left: 0px; width: 800px; height: 456px; background: #191919;">
        <div u="loading" style="position: absolute; top: 0px; left: 0px;">
            <div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; background-color: #000000; top: 0px; left: 0px; width: 100%; height: 100%;">
            </div>
            <div style="position: absolute; display: block; background: url(../img/loading.gif) no-repeat center center; top: 0px; left: 0px; width: 100%; height: 100%;">
            </div>
        </div>
        <div u="slides" style="cursor: move; position: absolute; left: 0px; top: 0px; width: 800px; height: 356px; overflow: hidden;">
            <%
                Market_International.sql_object SqlObj = new Market_International.sql_object();
                List<Market_International.DetailObject> DetailObj = SqlObj.GetDetailScroll();
                foreach (Market_International.DetailObject item in DetailObj)                    
                {
                    Response.Write("<div>");
                    Response.Write("<a href=\"/MarkDetailZoom.aspx?id=" + item.id + "\"> <img u=\"image\" src=\"image/" + item.img1 + "\"> </a>");
                    Response.Write("<img u=\"thumb\" src=\"image/"+item.img1+ "\"  style=\"width:68px; height:68px;\">");
                    Response.Write("</div>");
                }
                
                 %>


        </div>
        <span u="arrowleft" class="jssora05l" style="width: 40px; height: 40px; top: 158px; left: 8px;"></span>
        <span u="arrowright" class="jssora05r" style="width: 40px; height: 40px; top: 158px; right: 8px"></span>
        <div u="thumbnavigator" class="jssort01" style="position: absolute; width: 800px; height: 100px; left: 0px; bottom: 0px;">
            <div u="slides" style="cursor: move;">
                <div u="prototype" class="p" style="position: absolute; width: 72px; height: 72px; top: 0; left: 0;">
                    <div class="w">
                        <div u="thumbnailtemplate" style="width: 100%; height: 100%; border: none; position: absolute; top: 0; left: 0;"></div>
                    </div>
                    <div class="c">
                    </div>
                </div>
            </div>
        </div>
        <script>
            jssor_slider1_starter('slider1_container');
        </script>
    </div>
    </br></br></br></br>
    <div>
        <%
            List<Market_International.DetailObject> DetailMain = SqlObj.GetDetailMain();
            int counter = 0;
            string Detail = null;
            foreach (var item in DetailMain)
            {
                Detail = item.Desc1.Replace("\r\n", "<br>");
                if (counter==0)
                    Response.Write("<div class=\"div_color\">");             
             %>

            <div class="box2">
                <a target="_blank" href=<%="/MarkDetailZoom.aspx?id="+ item.id %>  >
                    <img class="image_size" src=<%="image/" + item.img1 %> alt="Klematis">
                </a>
                <br>
                <label><%=Detail %></label><br>
            </div>



        <%
                counter++;
                if(counter==2)
                {
                    Response.Write("</div>");
                    Response.Write("<br>");
                    counter = 0;
                }   
        }
        
                if(counter != 0)
                {
                    Response.Write("</div>");
                    Response.Write("<br>");                    
                }
        
        
        
             %>




    </div>



</asp:Content>
