<%@ Page Title="" Language="C#" MasterPageFile="~/Mark_Int.Master" AutoEventWireup="true" CodeBehind="test.aspx.cs" Inherits="Market_International.test" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <asp:ListView ID="ListView1" runat="server" DataSourceID="SqlDataSource1" style="margin-left: 0px"  >
        <LayoutTemplate>
 <table border="0" cellpadding="1">
  <tr style="background-color:#E5E5FE">
   <th align="left"><asp:LinkButton ID="lnkId" runat="server" CommandName="LinkButton1_Click" CommandArgument="TestArgument" PostBackUrl='~/test.aspx?test=aaaa'>Id</asp:LinkButton></th>
   <th align="left"><asp:LinkButton ID="lnkName" runat="server">Name</asp:LinkButton></th>
   <th align="left"><asp:LinkButton ID="lnkType" runat="server">Type</asp:LinkButton></th>
   <th></th>
  </tr>
  <tr id="itemPlaceholder" runat="server"></tr>
 </table>
</LayoutTemplate>


        <ItemTemplate>
        <%# Eval("id") %>,<%# Eval("fname") %>, <%# Eval("lname") %>
        </ItemTemplate>


        <AlternatingItemTemplate>
        <div style="border:dotted 1px gray;background-color:silver;">
        <%# Eval("id") %>,<%# Eval("fname") %>, <%# Eval("lname") %>
        </div>
        </AlternatingItemTemplate>


        <EmptyDataTemplate>
        Sorry, no data to display.
</EmptyDataTemplate>


    </asp:ListView> 

    



    

<asp:SqlDataSource ID="SqlDataSource1" runat="server"
ConnectionString="Data Source=SQL5006.Smarterasp.net;Initial Catalog=DB_9B7F5F_kaz;User Id=DB_9B7F5F_kaz_admin;Password=Admiral1;" 
SelectCommand="SELECT id,fname,lname FROM [client]">

</asp:SqlDataSource>



</asp:Content>
