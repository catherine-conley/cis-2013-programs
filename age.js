 var floatMiles, floatGallons, floatMpg, floatAge, floatDays, intWeeks, floatMonths, intFortnights
     floatMiles = parseFloat (prompt("Enter miles driven"));
     floatGallons = parseFloat (prompt("Enter gallons of gas used"));
     floatMpg = parseFloat(floatMiles/floatGallons).toFixed(2);
     floatAge = parseFloat (prompt("Enter Age"));
     floatDays = parseFloat(floatAge * 365.25);
     floatMonths= parseFloat(floatAge * 12);
     intWeeks= parseInt(floatDays/7);
     intFortnights= parseInt(floatDays/14);
     alert("Age= " +floatAge);
     alert("Miles per gallon = " +floatMpg);
