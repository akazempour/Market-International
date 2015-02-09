<%@ Page Title="Market International" Language="C#" MasterPageFile="~/Mark_Int.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Market_International.Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link href="css/slider_style.css" rel="stylesheet" type="text/css" />

    <div id="slider1_container" style="position: relative; margin: 0 auto; top: 0px; left: 0px; width: 800px; height: 456px; background: #191919;">
        <div u="loading" style="position: absolute; top: 0px; left: 0px;">
            <div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; background-color: #000000; top: 0px; left: 0px; width: 100%; height: 100%;">
            </div>
            <div style="position: absolute; display: block; background: url(../img/loading.gif) no-repeat center center; top: 0px; left: 0px; width: 100%; height: 100%;">
            </div>
        </div>
        <div u="slides" style="cursor: move; position: absolute; left: 0px; top: 0px; width: 800px; height: 356px; overflow: hidden;">
            <div>
                <img u="image" src="img/01.jpg">
                <img u="thumb" src="img/thumb-01.jpg">
            </div>
            <div>
                <img u="image" src="img/02.jpg">
                <img u="thumb" src="img/thumb-02.jpg">
            </div>
            <div>
                <img u="image" src="img/03.jpg">
                <img u="thumb" src="img/thumb-03.jpg">
            </div>
            <div>
                <img u="image" src="img/04.jpg">
                <img u="thumb" src="img/thumb-04.jpg">
            </div>
            <div>
                <img u="image" src="img/05.jpg">
                <img u="thumb" src="img/thumb-05.jpg">
            </div>
            <div>
                <img u="image" src="img/06.jpg">
                <img u="thumb" src="img/thumb-06.jpg">
            </div>
            <div>
                <img u="image" src="img/07.jpg">
                <img u="thumb" src="img/thumb-07.jpg">
            </div>
            <div>
                <img u="image" src="img/08.jpg">
                <img u="thumb" src="img/thumb-08.jpg">
            </div>
            <div>
                <img u="image" src="img/09.jpg">
                <img u="thumb" src="img/thumb-09.jpg">
            </div>
            <div>
                <img u="image" src="img/10.jpg">
                <img u="thumb" src="img/thumb-10.jpg">
            </div>
            <div>
                <img u="image" src="img/11.jpg">
                <img u="thumb" src="img/thumb-11.jpg">
            </div>
            <div>
                <img u="image" src="img/12.jpg">
                <img u="thumb" src="img/thumb-12.jpg">
            </div>
        </div>
        <span u="arrowleft" class="jssora05l" style="width: 40px; height: 40px; top: 158px; left: 8px;"></span>
        <span u="arrowright" class="jssora05r" style="width: 40px; height: 40px; top: 158px; right: 8px"></span>
        <div u="thumbnavigator" class="jssort01" style="position: absolute; width: 800px; height: 100px; left: 0px; bottom: 0px;">
            <div u="slides" style="cursor: move;">
                <div u="prototype" class="p" style="position: absolute; width: 72px; height: 72px; top: 0; left: 0;">
                    <div class="w">
                        <div u="thumbnailtemplate" style="width: 100%; height: 100%; border: none; position: absolute; top: 0; left: 0;"></div>
                    </div>
                    <div class="c">
                    </div>
                </div>
            </div>
        </div>
        <script>
            jssor_slider1_starter('slider1_container');
        </script>
    </div>
    </br></br></br></br>
    <div>

        <div class="div_color">
            <div class="box2">
                <a target="_blank" href="klematis4_big.htm">
                    <img class="image_size" src="img/09.jpg" alt="Klematis">
                </a>
                <br>
                <label>aaaaaaaaaaaaaaaaaa</label><br>
                <label>aaaaaaaaaaaaaaaaaa</label>
            </div>

            <div class="box2">
                <a target="_blank" href="klematis4_big.htm">
                    <img class="image_size" src="img/08.jpg" alt="Klematis">
                </a>
                <br>
                <label>aaaaaaaaaaaaaaaaaa</label><br>
                <label>aaaaaaaaaaaaaaaaaa</label>

            </div>
        </div>
        </br>
        <div class="div_color">
            <div class="box2">
                <a target="_blank" href="klematis4_big.htm">
                    <img class="image_size" src="img/09.jpg" alt="Klematis">
                </a>
                <br>
                <label>aaaaaaaaaaaaaaaaaa</label><br>
                <label>aaaaaaaaaaaaaaaaaa</label>
            </div>

            <div class="box2">
                <a target="_blank" href="klematis4_big.htm">
                    <img class="image_size" src="img/08.jpg" alt="Klematis">
                </a>
                <br>
                <label>aaaaaaaaaaaaaaaaaa</label><br>
                <label>aaaaaaaaaaaaaaaaaa</label>

            </div>
        </div>


    </div>
    <div>
        <h1>this is a test</h1>
    </div>


    </br>
    <div id="maincon">
        <h1 align="center">These sites are onder </h1>
        <h1 align="center">aaaaaaaaaaaaaaaaaaaaaa</h1>
    </div>

</asp:Content>
