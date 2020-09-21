 var floatAge, floatDays, intWeeks, floatMonths, intFortnights
 /*This program will calculate age in days, months, weeks, and fortnights*/
     floatAge = parseFloat (prompt("Enter Age"));
     floatDays = parseFloat(floatAge * 365.25).toFixed(2);
     floatMonths= parseFloat(floatAge * 12).toFixed(2);
     intWeeks= parseInt(floatDays/7);
     intFortnights= parseInt(floatDays/14);
     alert("Age= " +floatAge+
           "Days= " +floatDays+
           "Months= " +floatMonths+
           "Weeks= " +intWeeks+
           "Fortnights= " +intFortnights);

