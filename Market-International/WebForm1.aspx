<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="Market_International.WebForm1" %>

<!DOCTYPE html>

 <html xmlns="http://www.w3.org/1999/xhtml">
<head  runat="server">
    <title>Show image preview before image upload</title>
</head>
<body>
    <form id="form1" runat="server">





    <div>
                    <script src="//code.jquery.com/jquery-1.10.2.min.js" type="text/javascript"></script>

    <script type="text/javascript">
        function ShowpImagePreview(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#ImgPrv').attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
    </script>

            <asp:Image ID="ImgPrv" Height="150px" Width="240px" runat="server" /><br />
            <asp:FileUpload ID="flupImage" runat="server" onchange="ShowpImagePreview(this);" />
            </div>
    </form>
</body>
</html>
