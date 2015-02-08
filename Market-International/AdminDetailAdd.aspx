<%@ Page Title="" Language="C#" MasterPageFile="~/Admin.Master" AutoEventWireup="true" CodeBehind="AdminDetailAdd.aspx.cs" Inherits="Market_International.AdminDetailAdd" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style>
        label {
            float: left;
            width: 20%;
            text-align: right;
        }

        .leftassign {
            margin-left: 20%;
        }
    </style>

    <script src="//code.jquery.com/jquery-1.10.2.min.js" type="text/javascript"></script>

    <script type="text/javascript">
        function ShowpImagePreview(input, FileId) {
            FileId = '#' + FileId;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $(FileId).attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
    </script>


</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <label>Show:</label><asp:CheckBox ID="Show" runat="server" Checked="True" />

    <br />
    <br />
    <label>Title:</label><asp:TextBox ID="TitleText" runat="server"></asp:TextBox>
    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ForeColor="Red"  ControlToValidate="TitleText" ErrorMessage="***Title is require"></asp:RequiredFieldValidator>
    <br />
    <br />
    <label>SubTitle:</label><asp:TextBox ID="SubTitleText" runat="server"></asp:TextBox>
    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ForeColor="Red"  ControlToValidate="SubTitleText" ErrorMessage="***Subtitle is require"></asp:RequiredFieldValidator>

    <br />
    <br />
    <label>Desc1</label><asp:TextBox ID="Desc1Text" runat="server" Height="155px" TextMode="MultiLine" Width="399px"></asp:TextBox>
    <br />
    <br />
    <label>Desc2:</label><asp:TextBox ID="Desc2Text" Height="155px" Width="399px" runat="server" TextMode="MultiLine"></asp:TextBox>
    <br />
    <br />
    <asp:RadioButton ID="Scroll" Text="Main Image Scroll" GroupName="PageControl" runat="server" />
    <br />
    <asp:RadioButton ID="MainPage" Text="Main page" GroupName="PageControl" runat="server" />
    <br />
    <asp:RadioButton ID="DetailPage" Text="Page detail" GroupName="PageControl" runat="server"  Checked="true"/>
    <br />
    <br />
    <br />


    <label>Image1:</label><asp:Image ID="ImgPrv1" Height="155px" Width="399px" runat="server" /><br />
    <asp:FileUpload CssClass="leftassign" ID="flupImage1" runat="server" onchange="ShowpImagePreview(this,'ContentPlaceHolder1_ImgPrv1');" />
    <br /><br />
    <label>Image2:</label><asp:Image ID="ImgPrv2" Height="155px" Width="399px" runat="server" /><br />
    <asp:FileUpload CssClass="leftassign" ID="flupImage2" runat="server" onchange="ShowpImagePreview(this,'ContentPlaceHolder1_ImgPrv2');" />
    <br /><br />
    <label>Image3:</label><asp:Image ID="ImgPrv3" Height="155px" Width="399px" runat="server" /><br />
    <asp:FileUpload CssClass="leftassign" ID="flupImage3" runat="server" onchange="ShowpImagePreview(this,'ContentPlaceHolder1_ImgPrv3');" />
    <br /><br />
    <label>Image4:</label><asp:Image ID="ImgPrv4" Height="155px" Width="399px" runat="server" /><br />
    <asp:FileUpload CssClass="leftassign" ID="flupImage4" runat="server" onchange="ShowpImagePreview(this,'ContentPlaceHolder1_ImgPrv4');" />
    <br /><br />
    <label>Image5:</label><asp:Image ID="ImgPrv5" Height="155px" Width="399px" runat="server" /><br />
    <asp:FileUpload CssClass="leftassign" ID="flupImage5" runat="server" onchange="ShowpImagePreview(this,'ContentPlaceHolder1_ImgPrv5');" />
    <br /><br /><br />
    <asp:Button CssClass="leftassign" ID="Submit"  runat="server" Text="Upload" OnClick="Summit" />


    <br />
    <asp:HiddenField ID="FieldAction"  runat="server" />
    <asp:HiddenField ID="FieldId"  runat="server" />


</asp:Content>
