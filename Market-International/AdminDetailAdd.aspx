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
    <style>
        .spin{
            width:3%;
        }
    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <label>Item #:</label><asp:TextBox ID="ItemNum" runat="server"></asp:TextBox><br /><br />
    <label>Price:</label><asp:TextBox ID="Price" runat="server"></asp:TextBox><br /><br />

    <label>Show:</label><asp:CheckBox ID="Show" runat="server" Checked="True" ToolTip="Checked: will be shown." />

    <br />
    <br />
    <label>Title:</label><asp:TextBox ID="TitleText" runat="server" ToolTip="Title"></asp:TextBox>
    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ForeColor="Red"  ControlToValidate="TitleText" ErrorMessage="***Title is require"></asp:RequiredFieldValidator>
    <br />
    <br />
    <label>SubTitle:</label><asp:TextBox ID="SubTitleText" runat="server" ToolTip="Sub Title"></asp:TextBox>
    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ForeColor="Red"  ControlToValidate="SubTitleText" ErrorMessage="***Subtitle is require"></asp:RequiredFieldValidator>

    <br />
    <br />
    <label>Desc1</label><asp:TextBox ID="Desc1Text" runat="server" Height="155px" TextMode="MultiLine" Width="399px" ToolTip="Main Page and Detail page"></asp:TextBox>
    <br />
    <br />
    <label>Desc2:</label><asp:TextBox ID="Desc2Text" Height="155px" Width="399px" runat="server" TextMode="MultiLine" ToolTip="Multi page or last page"></asp:TextBox>
    <br />
    <br />
    <asp:RadioButton ID="Scroll" Text="Main Image Scroll" GroupName="PageControl" runat="server" ToolTip="First photo will be shown in scroll"/>
    <br />
    <asp:RadioButton ID="MainPage" Text="Main page" GroupName="PageControl" runat="server"  ToolTip="First photo will be shown in main page"/>
    <br />
    <asp:RadioButton ID="DetailPage" Text="Page detail" GroupName="PageControl" runat="server"  Checked="true" ToolTip="First photo will be shown in detail page"/>
    <br />
    <br />
    <asp:RadioButton ID="DetailOffer" GroupName="PageOffer" Text="Offer" runat="server" Checked="True" /><br />
    <asp:RadioButton ID="Detailorder" GroupName="PageOffer" Text="Order" runat="server" /><br />

    <br />
    <br />
    <br />


    <label>Image1:</label><asp:Image ID="ImgPrv1" Height="155px" Width="399px" runat="server" ToolTip="Best result:width:800 height:356" /><br />
    <asp:FileUpload CssClass="leftassign" ID="flupImage1" runat="server" onchange="ShowpImagePreview(this,'ContentPlaceHolder1_ImgPrv1');" />
        <input  class="spin" type="number" name="img1w" id="img1w" min="0"  step="1" value="0" title="Width">
        <input class="spin" type="number" name="img1h" id="img1h" min="0"  step="1" value="0" title="Height">
        <span>Default Size:</span><asp:CheckBox ID="img1chk" runat="server" Checked="True" />

    <br /><br />
    <label>Image2:</label><asp:Image ID="ImgPrv2" Height="155px" Width="399px" runat="server" ToolTip="Best result:width:800 height:356" /><br />
    <asp:FileUpload CssClass="leftassign" ID="flupImage2" runat="server" onchange="ShowpImagePreview(this,'ContentPlaceHolder1_ImgPrv2');" />
    <input  class="spin" type="number" name="img2w" id="img2w" min="0"  step="1" value="0" title="Width">
    <input class="spin" type="number" name="img2h" id="img2h" min="0"  step="1" value="0" title="Height">
    <span>Default Size:</span><asp:CheckBox ID="img2chk" runat="server" Checked="True" />

    <br /><br />
    <label>Image3:</label><asp:Image ID="ImgPrv3" Height="155px" Width="399px" runat="server" ToolTip="Best result:width:800 height:356" /><br />
    <asp:FileUpload CssClass="leftassign" ID="flupImage3" runat="server" onchange="ShowpImagePreview(this,'ContentPlaceHolder1_ImgPrv3');" />
    <input  class="spin" type="number" name="img3w" id="img3w" min="0"  step="1" value="0" title="Width">
    <input class="spin" type="number" name="img3h" id="img3h" min="0"  step="1" value="0" title="Height">
    <span>Default Size:</span><asp:CheckBox ID="img3chk" runat="server" Checked="True" />

    <br /><br />
    <label>Image4:</label><asp:Image ID="ImgPrv4" Height="155px" Width="399px" runat="server" ToolTip="Best result:width:800 height:356"/><br />
    <asp:FileUpload CssClass="leftassign" ID="flupImage4" runat="server" onchange="ShowpImagePreview(this,'ContentPlaceHolder1_ImgPrv4');" />
    <input  class="spin" type="number" name="img4w" id="img4w" min="0"  step="1" value="0" title="Width">
    <input class="spin" type="number" name="img4h" id="img4h" min="0"  step="1" value="0" title="Height">
    <span>Default Size:</span><asp:CheckBox ID="img4chk" runat="server" Checked="True" />

    <br /><br />
    <label>Image5:</label><asp:Image ID="ImgPrv5" Height="155px" Width="399px" runat="server" ToolTip="Best result:width:800 height:356"/><br />
    <asp:FileUpload CssClass="leftassign" ID="flupImage5" runat="server" onchange="ShowpImagePreview(this,'ContentPlaceHolder1_ImgPrv5');" />
    <input  class="spin" type="number" name="img5w" id="img5w" min="0"  step="1" value="0" title="Width">
    <input class="spin" type="number" name="img5h" id="img5h" min="0"  step="1" value="0" title="Height">
    <span>Default Size:</span><asp:CheckBox ID="img5chk" runat="server" Checked="True" />

    <br /><br /><br />
    <asp:Button CssClass="leftassign" ID="Submit"  runat="server" Text="Upload" OnClick="Summit" />


    <br />
    <asp:HiddenField ID="FieldAction"  runat="server" />
    <asp:HiddenField ID="FieldId"  runat="server" />
    <asp:HiddenField ID="FieldImage1" runat="server" />
    <asp:HiddenField ID="FieldImage2" runat="server" />
    <asp:HiddenField ID="FieldImage3" runat="server" />
    <asp:HiddenField ID="FieldImage4" runat="server" />
    <asp:HiddenField ID="FieldImage5" runat="server" />
    <asp:HiddenField ID="Fieldid1" runat="server" />


</asp:Content>
