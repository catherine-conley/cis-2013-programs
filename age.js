 var floatAge, floatDays, intWeeks, floatMonths, intFortnights
     floatAge = parseFloat (prompt("Enter Age"));
     floatDays = parseFloat(floatAge * 365.25);
     floatMonths= parseFloat(floatAge * 12);
     intWeeks= parseInt(floatDays/7);
     intFortnights= parseInt(floatDays/14);
     alert("Age= " +floatAge);
     alert("Days= " +floatDays);
     alert("Months= " +floatMonths);
     alert("Weeks= " +intWeeks);
     alert("Fortnights= " +intFortnights);

