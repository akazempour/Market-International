<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="Market_International.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>

        <asp:Login ID="Login1" runat="server" Height="144px" OnAuthenticate="Login1_Authenticate" Width="397px">

        </asp:Login>


    </div>
    </form>
</body>
</html>
