<%@ Page Title="" Language="C#" MasterPageFile="~/Admin.Master" AutoEventWireup="true" CodeBehind="Category.aspx.cs" Inherits="Market_International.Category" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script>
        document.getElementById("hidden_text").value = "false";

        function MessageBox(param) {
            var CheckConf;
            var confirmstr;
            confirmstr =  "Do you want to delete this record?";
            switch (param) {
                case "d":
                    confirmstr = "Do you want to delete this record?";
                    break;
                case "a":
                    confirmstr = "Do you want to add?";
                    break;
                case "e":
                    confirmstr = "Do you want to edit this record?";
                    break;
            }

            CheckConf = confirm(confirmstr);
            if (CheckConf == true) {
                document.getElementById("hidden_text").value = "true";
            } else {
                document.getElementById("hidden_text").value = "false";
            }                
        }
    </script>
    <style>
        .align-left {
            float:left;
        }

        label {
            width:20%;
            text-align:right;        }
        .margin-left_ass {
            margin-left:20%;
        }

        .drop_doen_style {
            width:20%; 
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    
    </br></br></br>
    <label  class="align-left">Main Category:</label>
    <asp:DropDownList  CssClass="drop_doen_style" ID="main_category" runat="server" AutoPostBack="True" OnSelectedIndexChanged="main_category_SelectedIndexChanged" OnLoad="main_category_Load">

    </asp:DropDownList>
    <asp:Button CssClass="CssBut" ID="ButEdit" runat="server" Text="Edit" OnClick="ButEdit_Click" OnClientClick="MessageBox('e')" />
    <asp:Button CssClass="CssBut" ID="ButAdd" runat="server" Text="Add"  OnClientClick="MessageBox('a')" OnClick="ButAdd_Click"/>
    <asp:Button CssClass="CssBut" ID="ButDel" runat="server" Text="Delete" OnClientClick="MessageBox('d')" OnClick="ButDel_Click" />
    </br></br>
    <asp:TextBox  CssClass="margin-left_ass" ID="TextMainCat" runat="server"></asp:TextBox> 
    <asp:Label ID="Label1"  CssClass="CheckBoxLabel" runat="server" Text="Show" />
    </asp:Label><asp:CheckBox CssClass="CssCheckBox" ID="CheckShow" runat="server" />                   
    <input id="hidden_text" name="hidden_text" type ="hidden"/>
    </br></br></br></br>


    <%--Sun Category--%>
    <label class="align-left">Sub Category:</label>
    <asp:DropDownList CssClass="drop_doen_style" ID="sub_category" runat="server" AutoPostBack="True" OnLoad="sub_category_Load" OnSelectedIndexChanged="sub_category_SelectedIndexChanged">
    </asp:DropDownList>
    <asp:Button CssClass="CssBut" ID="SubEdit" runat="server" Text="Edit" OnClientClick="MessageBox('e')" OnClick="SubEdit_Click" />
    <asp:Button CssClass="CssBut" ID="SubAdd" runat="server" Text="Add" OnClientClick="MessageBox('a')" OnClick="SubAdd_Click"  />
    <asp:Button CssClass="CssBut" ID="SubDel" runat="server"  Text="Delete" OnClientClick="MessageBox('d')" OnClick="SubDel_Click" />
    </br></br>
    <asp:TextBox CssClass="margin-left_ass" ID="SubText" runat="server"></asp:TextBox>
    <asp:Label CssClass="CheckBoxLabel" ID="SubLabl" runat="server" Text="Show"></asp:Label>
    <asp:CheckBox CssClass="CssCheckBox" ID="SubCheck" runat="server" AutoPostBack="True" />
    </br>

</asp:Content>
