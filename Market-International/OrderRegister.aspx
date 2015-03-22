<%@ Page Title="" Language="C#" MasterPageFile="~/Mark_Int.Master" AutoEventWireup="true" CodeBehind="OrderRegister.aspx.cs" Inherits="Market_International.OrderRegister" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
        <style>
        .Contact_text{
            float:left;
            width:15%;
            text-align:right;
        }

        .div_set{
            width:50%;
            margin:auto;
            font-size:xx-large;
        }
        .Button_Allign{
            margin-left:15%;
        }
    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
        <asp:Label ID="EmailErr" runat="server" CssClass="Button_Allign" ForeColor="Red" Font-Size="XX-Large" Visible="False"></asp:Label>
    <br /><br /><br />
    <div class="div_set">
        <label >Please validate your order.</label><br /><br />
        <label >You will be contacted by email.</label><br /><br />
    </div>
    <br />
    <label class="Contact_text">Article number:</label>
    <asp:TextBox ID="itemnum" runat="server"></asp:TextBox><br /><br />
    <label class="Contact_text">Product:</label>
    <asp:TextBox ID="Item" runat="server"></asp:TextBox><br /><br />
    <label class="Contact_text">Price:</label>
    <asp:TextBox ID="Order" runat="server" Enabled="False"></asp:TextBox>
        <br /><br />
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
    <asp:RadioButton ID="Male" runat="server" GroupName="gender"  Checked="true"/><br />
    <asp:Label ID="Label2"  CssClass="Contact_text" runat="server" Text="Female:"></asp:Label>
    <asp:RadioButton ID="Female" runat="server" GroupName="gender"  /><br /><br />
    <asp:Label ID="Label3" CssClass="Contact_text" runat="server" Text="Note:"></asp:Label>
    <asp:TextBox ID="Note" runat="server" Width="30%"  Height="50px" TextMode="MultiLine" ></asp:TextBox><br /><br />

    <br /><br />
    
    <asp:Button ID="Ok" runat="server" CssClass="Button_Allign" Text="Ok" Width="10%" OnClick="Ok_Click" />
    <asp:Button   ID="Cancel" runat="server" Text="Cancel" Width="10%" CausesValidation="False" OnClick="Cancel_Click" />
    <asp:HiddenField ID="Fieldid" runat="server" />

    
</asp:Content>
