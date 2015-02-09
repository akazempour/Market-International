<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login_admin.aspx.cs" Inherits="Market_International.login_admin" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Admin Login</title>
    <style>
        body {
            background-color:#3f3f3f;
        } 
        .login_input {
            float:left; 
        }

        #submit {
            left:10%;
            position:relative;
        }
    </style>

</head>
<body >
    <form id="form1" runat="server">
    <div>


           <br />
           <asp:Label ID="Login_error" runat="server"   Visible="false" Font-Size="X-Large"  ForeColor="Red" Text="Wrong password"></asp:Label>
           <br />
           <br />
           <br />
           <br />



           </br>
        <asp:Label ForeColor="White" ID="Label1" width="10%" CssClass="login_input" runat="server" Text="User Name:"></asp:Label>
        <asp:TextBox  placeholder="User" ID="TextBox1"   width="10%" CssClass="login_input" runat="server"></asp:TextBox>
           <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="TextBox1" ErrorMessage="****User name must be enterd." ForeColor="red">

           </asp:RequiredFieldValidator>
        <br />
        </br>
        <asp:Label ID="Label" ForeColor="White" runat="server" width="10%" CssClass="login_input" Text="Password:"></asp:Label>

        <asp:TextBox ID="TextBox2" placeholder="Password" width="10%" CssClass="login_input" runat="server" TextMode="Password"></asp:TextBox>


    
           <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="TextBox2" ErrorMessage="****Password name must be enterd." ForeColor="red"></asp:RequiredFieldValidator>



    
        <br />
        <br />
        <asp:Button ID="submit"  Width="10%" runat="server" Text="Login" OnClick="submit_Click" />



    
    </div>
    </form>
</body>
</html>
