var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function (
 {   
    if (intGradeOption===1)
{
    if(floatTotalPts >= 80)
    {
        stringFinalGrade = "Pass";
    }
    else
    {
        stringFinalGrade = "Fail";   
    }
}
 }
else
{
    if(floatTotalPts >= 90)
        {
            stringFinalGrade = "A";
        }
    else
    {
        if (floatTotalPts < 90 && floatTotalPts >= 80)
        {
            stringFinalGrade = "B";
        }
        else
        {
            if (floatTotalPts <80 && floatTotalPts >=70)
            {
                stringFinalGrade = "C";
            }
            else
            {
                if (floatTotalPts <70 && floatTotalPts >=60)
                {
                    stringFinalGrade = "D";
                }
                    else
                    {
                        stringFinalGrade = "F";
                    }
            }
        }
    }
}) 
{
    var floatHwPts, floatMidPts, floatFinPts, floatTotalPts, intGradeOption, stringFinalGrade;

    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts = parseFloat($("mid_pts").value);
    floatFinPts = parseFloat($("fin_pts").value);
    floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);
    intGradeOption = parseInt($("grade_option").value);
    stringFinalGrade = parseString($("final_grade").value);



window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};
var stringFinalGrade;

$("final_grade").value = stringFinalGrade;