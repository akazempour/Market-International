<%@ Page Title="" Language="C#" MasterPageFile="~/Mark_Int.Master" AutoEventWireup="true" CodeBehind="iptest.aspx.cs" Inherits="Market_International.iptest" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <input id="ip" name="ip" type="hidden" />
    <input id="latitude" name="latitude" type="hidden" />
    <input id="longitude" name="longitude" type="hidden" />
    <input id="country" name="country" type="hidden" />
    <input id="country_code" name="country_code" type="hidden" />
    <input id="city" name="city" type="hidden" />

    <input id="area_code" name="area_code" type="hidden" />
    <input id="Postal_code" name="Postal_code" type="hidden" />
    <input id="isp" name="isp" type="hidden" />
    <input id="visit_Time_zone" name="visit_Time_zone" type="hidden" />


    
<script type="application/javascript">
    function getgeoip(json) {

        document.getElementById("ip").value = json.ip;
        document.getElementById("latitude").value = json.latitude;
        document.getElementById("longitude").value = json.longitude;
        document.getElementById("country").value = json.country;
        document.getElementById("country_code").value = json.country_code;
        document.getElementById("city").value = json.city;
        document.getElementById("area_code").value = json.area_code;
        document.getElementById("Postal_code").value = json.postal_code;
        document.getElementById("isp").value = json.isp;
        document.getElementById("visit_Time_zone").value = json.timezone;
        document.getElementById("form1").submit();



    	document.getElementById("form1").submit();
    }
</script>

<script type="application/javascript" src="http://www.telize.com/geoip?callback=getgeoip"></script>







</asp:Content>
