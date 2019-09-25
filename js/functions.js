//temps
$("#tempF").change(function()
{
    let f = $("#tempF").val();
    console.log(f);
    if (!$.isNumeric(f))
    {
        //alert("oops");
        $("#q1_feedback").css("display","block");
    } 
    else 
    {
        let c = (f - 32) * (5/9);
        $("#tempC").val(c.toFixed(3));
        $("#q1_feedback").css("display","none");
    }
});

$("#tempC").change(function()
{
    let c = $("#tempC").val();
    if (!$.isNumeric(c))
    {
        $("#q1_feedback").css("display","block");
    }    
    else 
    {
        let f = (c * (9 / 5)) + 32;
        $("#tempF").val(f.toFixed(3));
        $("#q1_feedback").css("display","none");
    }

});

//liquid
var liquidButton = document.querySelector('#liquidButton');
liquidButton.addEventListener('click', function()
{
    let valIn = $("#liquidIn").val();
    let measureIn = $("#liquidMeasures").val();
    let outVal1;
    let outMeasure1;
    let out2Val2;
    let outMeasure2;
    
    if (measureIn == "Cup") 
    {
        outMeasure1="Ounce(s)";
        outVal1=valIn*8.115;
        
        outMeasure2="Liter(s)";
        outVal2=(valIn/(4.167)).toFixed(3);
    } 
    else if (measureIn == "Ounce") 
    {
        outMeasure1="Cup(s)";
        outVal1=(valIn/8.115).toFixed(3);

        outMeasure2="Liter(s)";
        outVal2=(valIn/33.814).toFixed(3);
    } 
    else 
    {//Litre
        outMeasure1="Cup(s)";
        outVal1=(valIn*4.167).toFixed(3);
        
        outMeasure2="Ounce(s)";
        outVal2=(valIn*33.814).toFixed(3);
    }
    stringRes = "";
    stringRes += "<div>" + outVal1 + " " + outMeasure1 + "\<div>";
    stringRes += "<div>" + outVal2 + " " + outMeasure2 + "\<div>";
    $("#liquidOut").html(stringRes);
});

//distance
$("#distanceButton").on("click",function()
{
    let distanceVal = $("#distanceIn").val();
    let distanceMeasure = $("input[name=distance]:checked").val();
    let dValOut;
    let dMeasureOut;
    if (distanceMeasure == "mi")
    {
        dMeasureOut = "kilometer";
        dValOut = (distanceVal * 1.609).toFixed(3);
    } 
    else 
    {
        dMeasureOut = "mile";
        dValOut = ( distanceVal / 1.609).toFixed(3);
    }
    stringRes = "";
    stringRes += "<div>" + dValOut + " " + dMeasureOut + "(s)</div>";
    $("#distanceOut").html(stringRes);
});