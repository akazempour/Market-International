<%@ Page Title="Market International" Language="C#" MasterPageFile="~/Mark_Int.Master" AutoEventWireup="true" CodeBehind="market_zoom_one.aspx.cs" Inherits="Market_International.market_zoom_one" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="zoom-wrapper">
        <div class="zoom-left">
            <img style="border: 1px solid #e8e8e6;" id="zoom_01" src="img/08.jpg"
                data-zoom-image="img/08.jpg"
                width="700" />
            <h1>aaaaaaaaaaaaaaaaaaaaaa</h1>
        </div>


        <script type="text/javascript">
            $(document).ready(function () {
                $("#zoom_01").elevateZoom();
            });
        </script>
    </div>

    <script type="text/javascript">
        $(document).ready(function () {

        });
    </script>

    </br>



</asp:Content>
