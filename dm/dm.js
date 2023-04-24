journalDetails = {
	'Instructions': 'Instructions.html',
	'00_1_DeviKavacham': '00_1_DeviKavacham.html',
	'00_2_ArgalaStotram': '00_2_ArgalaStotram.html',
	'00_3_KeelakaStotram': '00_3_KeelakaStotram.html',
	'01_Chapter_1': '01_Chapter_1.html',
	'02_Chapter_2': '02_Chapter_2.html',
	'03_Chapter_3': '03_Chapter_3.html',
	'04_Chapter_4': '04_Chapter_4.html',
	'05_Chapter_5': '05_Chapter_5.html',
	'06_Chapter_6': '06_Chapter_6.html',
	'07_Chapter_7': '07_Chapter_7.html',
	'08_Chapter_8': '08_Chapter_8.html',
	'09_Chapter_9': '09_Chapter_9.html',
	'10_Chapter_10': '10_Chapter_10.html',
	'11_Chapter_11': '11_Chapter_11.html',
	'12_Chapter_12': '12_Chapter_12.html',
	'13_Chapter_13': '13_Chapter_13.html',
	'97_DeviSuktam': '97_DeviSuktam.html',
	'98_1_Pradhanika_Rahasyam': '98_1_Pradhanika_Rahasyam.html',
	'98_2_Vaikrutikam_Rahasyam': '98_2_Vaikrutikam_Rahasyam.html',
	'98_3_Moorthi_Rahasyam': '98_3_Moorthi_Rahasyam.html',
	'99_Kshama_Prartana': '99_Kshama_Prartana.html',

};

// keep a global reference to iframe as it will be needed multiple times
myIframe = document.getElementById("my-iframe");

function populateNavbar()
{
    // get reference to navbar
    var myNavbar = document.getElementById("my-navbar");
    for (var person in journalDetails)
    {
        // add a button for each person
        // make it call main on click with event
        myNavbar.innerHTML += `<a href='${journalDetails[person]}' onclick='showIframe(event)'>${person}</a><br>`
    }
}

// we want to highlight which name was just clicked, to keep track of where in the index we currently are
// to implement it we will have to clear this hightlight from previously clicked name
// so keep last event handy to modify its highlight
var lastEvent = null;

function showIframe(currentEvent)
{
    // find title of button which was pressed
    var person = currentEvent.target.textContent;

    // clear highlight of last clicked name
    if (lastEvent)
    {
        lastEvent.target.style.color = "#8ab4f8";
        lastEvent.target.style.backgroundColor = "transparent";
    }

    // apply highlight to current clicked name
    currentEvent.target.style.color = "black";
    currentEvent.target.style.backgroundColor = "#8ab4f8";

    // store current event as last event
    lastEvent = currentEvent;
    
    // load iframe of this person's journal
    myIframe.innerHTML = `<iframe src="${journalDetails[person]}" style="width: 100%; height: 100vh;"></iframe>`;

    // prevent link from opening
    currentEvent.preventDefault();
}

// populate navbar on pageload
populateNavbar()

// show first person's journal automatically
document.getElementById("my-iframe").innerHTML = `<iframe src="${journalDetails['Instructions']}" style="width: 100%; height: 100vh;"></iframe>`;

