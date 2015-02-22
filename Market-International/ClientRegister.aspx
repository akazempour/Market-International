<%@ Page Title="" Language="C#" MasterPageFile="~/Mark_Int.Master" AutoEventWireup="true" CodeBehind="ClientRegister.aspx.cs" Inherits="Market_International.ClientRegister" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style>
        .Contact_text{
            float:left;
            width:15%;
            text-align:right;
        }
        .Button_Allign{
            margin-left:15%;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:Label ID="EmailErr" runat="server" CssClass="Button_Allign" ForeColor="Red" Font-Size="XX-Large" Visible="False"></asp:Label>
    <br /><br /><br />
    <asp:Label ID="Labelfname"  CssClass="Contact_text" runat="server" Text="First Name:"></asp:Label>
    <asp:TextBox ID="FirstName" runat="server" Width="30%"></asp:TextBox>
    <asp:RequiredFieldValidator ID="RequiredFieldValidator1"  ForeColor="Red" ControlToValidate="FirstName" runat="server" ErrorMessage="***First name is required."></asp:RequiredFieldValidator>
    <br /><br />
    <asp:Label ID="Labellname" CssClass="Contact_text" runat="server" Text="Last Name:"></asp:Label>
    <asp:TextBox ID="LastName" runat="server" Width="30%"></asp:TextBox>
    <asp:RequiredFieldValidator ID="RequiredFieldValidator2"  ForeColor="Red" ControlToValidate="LastName" runat="server" ErrorMessage="***Last name is required."></asp:RequiredFieldValidator>
    <br /><br />
    <asp:Label ID="Labeladd" CssClass="Contact_text" runat="server" Text="Address:"></asp:Label>
    <asp:TextBox ID="Address" runat="server" Width="30%"  Height="50px" TextMode="MultiLine" ></asp:TextBox><br /><br />
    <asp:Label ID="LabelEmail"  CssClass="Contact_text" runat="server" Text="Email:"></asp:Label>
    <asp:TextBox ID="Email" runat="server" Width="30%"></asp:TextBox>
    <asp:RequiredFieldValidator ID="RequiredFieldValidator3"  ForeColor="Red" ControlToValidate="Email" runat="server" ErrorMessage="***Email is required."></asp:RequiredFieldValidator>
    <br /><asp:RegularExpressionValidator CssClass="Button_Allign" ID="RegularExpressionValidator1"  ControlToValidate="Email" runat="server" ValidationExpression="\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" ForeColor="Red" ErrorMessage="Email does not exist. Please try again. "></asp:RegularExpressionValidator>
    <br />
    <asp:Label ID="LabelEmail1"  CssClass="Contact_text" runat="server" Text="Retype email:"></asp:Label>
    <asp:TextBox ID="Email1" runat="server" Width="30%"></asp:TextBox>
    <asp:RequiredFieldValidator ID="RequiredFieldValidator4"  ForeColor="Red" ControlToValidate="Email1" runat="server" ErrorMessage="***Email retype is required."></asp:RequiredFieldValidator>
    <br /><asp:RegularExpressionValidator CssClass="Button_Allign" ID="RegularExpressionValidator2"  ControlToValidate="Email1" runat="server" ValidationExpression="\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" ForeColor="Red" ErrorMessage="Email does not exist. Please try again. "></asp:RegularExpressionValidator>
    <br />
    <asp:Label ID="Label1"  CssClass="Contact_text" runat="server" Text="Male:"></asp:Label>
    <asp:RadioButton ID="RadioButton1" runat="server" GroupName="gender"  Checked="true"/><br />
    <asp:Label ID="Label2"  CssClass="Contact_text" runat="server" Text="Female:"></asp:Label>
    <asp:RadioButton ID="RadioButton2" runat="server" GroupName="gender"  /><br /><br />
    <asp:Label ID="LabelPassword"  CssClass="Contact_text" runat="server"   Text="Password:"></asp:Label>
    <asp:TextBox ID="Password"  TextMode="Password" runat="server"></asp:TextBox>    
    <asp:RequiredFieldValidator ID="RequiredFieldValidator6"  ForeColor="Red" ControlToValidate="Password" runat="server" ErrorMessage="***Password is required."></asp:RequiredFieldValidator>
    <br /><br />
    <asp:Label ID="LabelPassword1"  CssClass="Contact_text" runat="server" Text="Retype password:"></asp:Label>
    <asp:TextBox ID="Password1"  TextMode="Password" runat="server"></asp:TextBox>    
    <asp:RequiredFieldValidator ID="RequiredFieldValidator5"  ForeColor="Red" ControlToValidate="Password1" runat="server" ErrorMessage="***Password is required."></asp:RequiredFieldValidator>
    <br /><br />
    
    <asp:Button ID="Ok" runat="server" CssClass="Button_Allign" Text="Ok" Width="10%" OnClick="Ok_Click" />
    <asp:Button   ID="Cancel" runat="server" Text="Cancel" Width="10%" CausesValidation="False" />


</asp:Content>
