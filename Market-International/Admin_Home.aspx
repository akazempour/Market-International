<%@ Page Title="" Language="C#" MasterPageFile="~/Admin.Master" AutoEventWireup="true" CodeBehind="Admin_Home.aspx.cs" Inherits="Market_International.Admin_Home" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style>
            label {
            float:left;
            width:20%;
            text-align:right;        
            }
            .drop_doen_style {
            width:20%; 
        }

    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <br /><br /><br /><br />
<label>Main Category:</label>
<asp:DropDownList CssClass="drop_doen_style" ID="main_category" runat="server" AutoPostBack="True" OnSelectedIndexChanged="main_category_SelectedIndexChanged" OnLoad="MainCategory_Load"></asp:DropDownList>
<br /><br />
<label>Sub Category:</label>
<asp:DropDownList CssClass="drop_doen_style" ID="sub_category" runat="server" AutoPostBack="True" OnSelectedIndexChanged="sub_category_SelectedIndexChanged"></asp:DropDownList>
<br />
<asp:Button ID="Button1" runat="server" Text="Add" OnClick="Button1_Click" />
<br /><br /><br /><br />

		<link rel="shortcut icon" type="image/png" href="img/favicon.png">
		<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="http://www.datatables.net/rss.xml">
		
		<link rel="stylesheet" type="text/css" href="css/site.css?_=0ba57ddc2cafde8c8ab1f1e71744c55c">
		<link rel="stylesheet" type="text/css" href="/css/dataTables.colReorder.css">
		
		<style type="text/css">
			
		</style>

		<script type="text/javascript" src="js/site.js?_=0de0e1537b385e5f374a75ddebb8f409"></script>
		<script type="text/javascript" language="javascript" src="js/dataTables.colReorder.js"></script>



		<script>
		    function initialized() {
		        $('.dataTables_filter input').attr("placeholder", "enter seach terms here");
		        var theTbl = document.getElementById('example');
		        var x = document.getElementById("example").rows.length;
		        var y = document.getElementById("example").rows[0].cells.length;
		        var temp = 0;
		        for (var i = 1; i < x; i++) {
		            for (var j = 1; j < y; j++) {
		                temp = theTbl.rows[i].cells[j].innerHTML;
		                if (!isNaN(temp)) {
		                    temp = temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		                    theTbl.rows[i].cells[j].innerHTML = temp;
		                }


		            }
		        }

		    }
		</script>

		<script type="text/javascript">

		    $(document).ready(function () {
		        $('#example').dataTable({
		            "dom": 'Rlfrtip',
		            "oLanguage": {
		                "sLengthMenu": 'Aantal regel <select>' +
                          '<option value="10">10</option>' +
                          '<option value="20">20</option>' +
                          '<option value="40">40</option>' +
                          '<option value="-1">Alles</option>' +
                          '</select>'
		            },
		            "pageLength": -1

		        });
		    });

		</script>

     
<script>
    initialized();
</script>
<p>
<table id="example" class="display" cellspacing="0" width="100%">
<thead>
<tr>
<th>Item#</th><th>Price</th><th>title</th><th>SubTitle</th><th>Desc1</th><th>Desc2</th><th>Image Location</th><th>Offer-Order</th><th>created</th><th>Img1</th><th>Img2</th><th>Img3</th><th>Img4</th><th>Img5</th><th>Edit</th><th>Delete</th>
</thead>
<tfoot>
<tr>
<th>Item#</th><th>Price</th><th>title</th><th>SubTitle</th><th>Desc1</th><th>Desc2</th><th>Image Location</th><th>Offer-Order</th><th>created</th><th>Img1</th><th>Img2</th><th>Img3</th><th>Img4</th><th>Img5</th><th>Edit</th><th>Delete</th>

</tr>
</tfoot>
<tbody>

<%
    int sub = sub_category.Text=="" ? 0: Convert.ToInt32(sub_category.Text);
    Market_International.sql_object Sql_Obj = new Market_International.sql_object();
    List<Market_International.DetailObject> DetailRecord = Sql_Obj.GetDetail(sub);
    string Desc1 = null;
    string Desc2 = null;
    string edit = null;
    string delete = null;
    string imagelocation = null;
    foreach (Market_International.DetailObject item in DetailRecord)
    {
        Desc1 = item.Desc1.Length > 21 ? item.Desc1.Substring(0, 20) : item.Desc1;
        Desc2 = item.Desc2.Length > 21 ? item.Desc2.Substring(0, 20) : item.Desc2;
        switch (item.ScreenImg)
	{
            case 1: imagelocation = "Main Image Scroll";
                break;
            case 2: imagelocation = "Main Page";
                break; 
            case 3: imagelocation = "Page Detail";
                break;
 break;
	}
        
        
            
        edit = "<a href=\"./AdminDetailAdd.aspx?action=edit&id=" + item.id + "&id_subcat=" + sub + "\">Edit</a>";
        delete = "<a href=\"./Admin_Home.aspx?action=delete&id=" + item.id + "\">Delete</a>";
          
     %>
       <tr><th><%=item.itemnum %></th><th><%= item.itemprice==null?0:item.itemprice%></th><td><%=item.title %></td><td><%=item.subtitle %></td><td><%= Desc1 %></td><td><%= Desc2 %></td><td><%=imagelocation %></td><th><%=item.offer == 1 ? "Ofer" : "Order"%></th><td><%=item.created %></td><td><%=item.img1==null || item.img1==""?"No":"Yes"%></td>
           <td><%=item.img2==null || item.img2==""?"No":"Yes" %></td><td><%=item.img3==null || item.img3==""?"No":"Yes"%></td>
           <td><%=item.img4==null || item.img4==""?"No":"Yes" %></td><td><%=item.img5==null || item.img5==""?"No":"Yes" %></td><td><%=edit %></td><td><%=delete %></td></tr>
<%} %>
</tbody></table></p>


</asp:Content>
