<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FileUpload.aspx.cs" Inherits="Market_International.FileUpload" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

</head>
<body>
    <form id="form1" runat="server" enctype="multipart/form-data">
    <div>
        <img id="uploadPreview" style="width: 100px; height: 100px;" />
<input id="uploadImage" type="file" name="uploadImage" onchange="PreviewImage('uploadPreview','uploadImage');" />
<script type="text/javascript">

    function PreviewImage(preview,inputbox) {
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById(inputbox).files[0]);

        oFReader.onload = function (oFREvent) {
            document.getElementById(preview).src = oFREvent.target.result;
        };
    };

</script>


        <br />
        <br />
        <br />
        <asp:Button ID="btnUpload" runat="server" Text="Upload" OnClick="btnUploadClick" />


    </div>
    </form>
</body>
</html>
