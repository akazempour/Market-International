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
<asp:DropDownList CssClass="drop_doen_style" ID="main_category" runat="server" AutoPostBack="True" OnSelectedIndexChanged="main_category_SelectedIndexChanged"></asp:DropDownList>
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
<th>Title</th><th>SubTitle</th><th>Desc1</th><th>Desc2</th><th>Img1</th><th>Img2</th><th>Img3</th><th>Img4</th><th>Img5</th><th>Edit</th><th>Delete</th></tr>
</thead>
<tfoot>
<tr>
<th>Title</th><th>SubTitle</th><th>Desc1</th><th>Desc2</th><th>Img1</th><th>Img2</th><th>Img3</th><th>Img4</th><th>Img5</th><th></th><th></th></tr>
</tfoot>
<tbody>
<tr><td>1</td><td>SubTitle</td><td>Desc1</td><td>Desc2</td><td>Img1</td><td>Img2</td><td>Img3</td><td>Img4</td><td>Img5</td><td>Edit</td><td>Delete</td></tr>
<tr><td>2</td><td>SubTitle</td><td>Desc1</td><td>Desc2</td><td>Img1</td><td>Img2</td><td>Img3</td><td>Img4</td><td>Img5</td><td>Edit</td><td>Delete</td></tr>

</tbody></table></p>


</asp:Content>
