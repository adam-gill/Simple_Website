var start = document.getElementById("errorbox")

// all data stored as such: [data for row 1, data for row 2, etd] for each category

var gallons = []
var pricepergallon = []
var miles = []
var milespergallon = []
var pricepermile = []

function inputandcalc () {
    start.remove()

    // determine how many rows of data are being inputed with a user prompt
    let iterations = Math.round(Number(prompt("Enter the number of rows to input data for: ", "i.e. 6")))
    error(iterations)

    // takes in input for each data category for number of rows user entered
    for (var i = 0; i < iterations; i++) {
        gallons.push(Number(prompt("Enter number of gallons for row " + (i + 1), "")))
        error(gallons[i])
        pricepergallon.push(Number(prompt("Enter price per gallon for  row " + (i + 1), "")))
        error(pricepergallon[i])
        miles.push(Number(prompt("Enter number of miles for row " + (i + 1), "")))
        error(miles[i])
    }

    // calculates miles per gallon and rounds it to two decimal places
    for (var i = 0; i < miles.length; i++) {
        milespergallon.push(Math.round(((miles[i] / gallons[i]) * 100.0)) / 100.0)
    }

    // calculate price per mile and rounds it to two decimal places
    for (var i = 0; i < miles.length; i++) {
        pricepermile.push(Math.round((((gallons[i] * pricepergallon[i]) / miles[i]) * 100.0)) / 100.0)
    }


    /*
        "<tr class=\"cells\">
        <th class=\"cells\">" + gallons[i] + "</th>
        <th class=\"cells\">$" + pricepergallon[i] + "/gal</th>
        <th class=\"cells\">" + miles[i] + "</th>
        <th class=\"calccells\">" + milespergallon[i] + "</th>
        <th class=\"calccells\">$" + pricepermile[i] + "</th>
        </tr>"
    */
    // prints out all data into the table
    for (var i = 0; i < iterations; i++) {
        document.getElementById("table").innerHTML += "<tr class=\"cells\"><td class=\"cells\">" + gallons[i] + "</td><td class=\"cells\">$" + pricepergallon[i] + "/gal</td><td class=\"cells\">" + miles[i] + "</td><td class=\"calccells\">" + milespergallon[i] + "</td><td class=\"calccells\">$" + pricepermile[i] + "</td></tr>"
        
    }

    // averages heading 
    document.getElementById("table").innerHTML += "<tr class=\"header\"><td class=\"header\" colspan=\"5\">Averages</td></tr>"  
    

    var totals = []
    var sum = 0
    
    
    
    for (var i = 0; i < gallons.length; i++) {
        sum += gallons[i]
    }
    totals.push(round(sum / gallons.length))
    sum = 0

    for (var i = 0; i < pricepergallon.length; i++) {
        sum += pricepergallon[i]
    }
    totals.push(round(sum / pricepergallon.length))
    sum = 0

    for (var i = 0; i < miles.length; i++) {
        sum += miles[i]
    }
    totals.push(round(sum / miles.length))
    sum = 0

    for (var i = 0; i < milespergallon.length; i++) {
        sum += milespergallon[i]
    }
    totals.push(round(sum / milespergallon.length))
    sum = 0

    for (var i = 0; i < pricepermile.length; i++) {
        sum += pricepermile[i]
    }
    totals.push(round(sum / pricepermile.length))
    sum = 0

    console.log(gallons)
    console.log(pricepergallon)
    console.log(miles)
    console.log(milespergallon)
    console.log(pricepermile)
    console.log(totals)




    // prints out averages
    document.getElementById("table").innerHTML += "<tr class=\"calccells\"><td class=\"calccells\">" + totals[0] + "</td><td class=\"calccells\">$" + totals[1] + "/gal</td><td class=\"calccells\">" + totals[2] + "</td><td class=\"calccells\">" + totals[3] + "</td><td class=\"calccells\">$" + totals[4] + "</td></tr>"
    
    
}

// checks if there is an input error
function error (x) {
    if (isNaN(x) || x == 0) {
        document.getElementById("table").innerHTML += "<th class=\"error\">Input Error</th>"
        exit()
    }
}

function round (x) {
    return Math.round((x * 100.0)) / 100.0
}