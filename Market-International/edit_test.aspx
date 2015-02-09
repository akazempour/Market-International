<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="edit_test.aspx.cs" Inherits="Market_International.edit_test" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
    </div>
        <asp:TextBox ID="TextBox1"  TextMode="MultiLine" runat="server" Height="336px" OnTextChanged="TextBox1_TextChanged" Width="635px"></asp:TextBox>
        <asp:Button ID="Button1" runat="server"  OnClick="Page_Load" Text="Button" />
    </form>
</body>
</html>
