<%@ Page Title="" Language="C#" MasterPageFile="~/Mark_Int.Master" AutoEventWireup="true" CodeBehind="MarkDetailZoom.aspx.cs" Inherits="Market_International.MarkDetailZoom" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="js/jquery.min.js" type="text/javascript"></script> 
<script src="js/jquery.elevatezoom.min.js" type="text/javascript"></script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">




<div class="zoom-wrapper">

<%
    Market_International.sql_object SqlObj = new Market_International.sql_object();
    string id = Request["id"];
    Market_International.DetailObject DetailObj = SqlObj.GetDetail(id);
    
    if(DetailObj.img1 != "")
    {
       Response.Write("<div class=\"zoom-left\">");
       Response.Write("<img style=\"border:1px solid #e8e8e6;\" id=\"zoom_01\" src=\"image/" + 
       DetailObj.img1+  "\" data-zoom-image=\"image/" + DetailObj.img1 + "\" width=\"500px\"  >");
       Response.Write("</div>");        
    }

    if (DetailObj.img2 != "")
    {
        Response.Write("<div class=\"zoom-left\">");
        Response.Write("<img style=\"border:1px solid #e8e8e6;\" id=\"zoom_02\" src=\"image/"+DetailObj.img2+"\" data-zoom-image=\"image/" +
            DetailObj.img2 + "\" width=\"411px\" height=\"274px\" >");
        Response.Write("</div>");
    }

    if (DetailObj.img3 != "")
    {
        Response.Write("<div class=\"zoom-left\">");
        Response.Write("<img style=\"border:1px solid #e8e8e6;\" id=\"zoom_03\" src=\"image/" + DetailObj.img3 +
            "\" data-zoom-image=\"image/" + DetailObj.img3 + "\" width=\"411px\" height=\"274px\" >");
        Response.Write("</div>");
    }

    if (DetailObj.img4 != "")
    {
        Response.Write("<div class=\"zoom-left\">");
        Response.Write("<img style=\"border:1px solid #e8e8e6;\" id=\"zoom_04\" src=\"image/" + DetailObj.img4 +
            "\" data-zoom-image=\"image/" + DetailObj.img4 + "\" width=\"411px\" height=\"274px\" >");
        Response.Write("</div>");
    }

    if (DetailObj.img5 != "")
    {
        Response.Write("<div class=\"zoom-left\">");
        Response.Write("<img style=\"border:1px solid #e8e8e6;\" id=\"zoom_05\" src=\"image/" + DetailObj.img5 +
        "\" data-zoom-image=\"image/" + DetailObj.img5 + "\" width=\"411px\" height=\"274px\" >");
        Response.Write("</div>");
    }

    string Detail = DetailObj.Desc2 == null?"":DetailObj.Desc2.Replace("\r\n", "<br>");
     %>
    <br />
    <label style="font-size:xx-large"; ><%=DetailObj.title %></label><br />
    <label style="font-size:x-large"; ><%=DetailObj.subtitle %></label><br />
    <label><%=Detail %></label><br />


    

    
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    
    
    
    
    
    
    
    
    
<div style="clear:both;"></div>
<script type="text/javascript">
$(document).ready(function () {
$("#zoom_01").elevateZoom({tint:true, tintColour:'#F90', tintOpacity:0.5});
$("#zoom_02").elevateZoom({tint:true, tintColour:'red', tintOpacity:0.5, zoomWindowPosition: 6});
$("#zoom_03").elevateZoom({tint:true, tintColour:'black', tintOpacity:0.5, zoomWindowPosition: 6});
$("#zoom_04").elevateZoom({tint:true, tintColour:'green', tintOpacity:0.5, zoomWindowPosition: 6}); 
$("#zoom_05").elevateZoom({tint:true, tintColour:'yellow', tintOpacity:0.5, zoomWindowPosition: 6}); 

}); 
</script>      
    
    
    
    
    
 
    
    
    
<script type="text/javascript">
$(document).ready(function () {
$("#zoom_03").elevateZoom({gallery:'gallery_01', cursor: 'pointer', galleryActiveClass: "active", imageCrossfade: true, loadingIcon: "http://www.elevateweb.co.uk/spinner.gif"}); 

$("#zoom_03").bind("click", function(e) {  
  var ez =   $('#zoom_03').data('elevateZoom');
  ez.closeAll(); //NEW: This function force hides the lens, tint and window	
	$.fancybox(ez.getGalleryList());
  return false;
}); 

}); 

</script>




</div>   
    
    
     
    
<script type="text/javascript">
$(document).ready(function () {
$("#zoom_01").elevateZoom(); 
}); 
</script>  
</div>

<script type="text/javascript">
$(document).ready(function () {
 
}); 
</script>






</asp:Content>
