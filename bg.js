journalDetails = {

	'BG_Prayer': 'bg/BG_Prayer.html',

	'BG_01_Chapter': 'bg/BG_01_Chapter.html',
	'BG_02_Chapter': 'bg/BG_02_Chapter.html',
	'BG_03_Chapter': 'bg/BG_03_Chapter.html',
	'BG_04_Chapter': 'bg/BG_04_Chapter.html',
	'BG_05_Chapter': 'bg/BG_05_Chapter.html',
	'BG_06_Chapter': 'bg/BG_06_Chapter.html',
	'BG_07_Chapter': 'bg/BG_07_Chapter.html',
	'BG_08_Chapter': 'bg/BG_08_Chapter.html',
	'BG_09_Chapter': 'bg/BG_09_Chapter.html',
	'BG_10_Chapter': 'bg/BG_10_Chapter.html',
	'BG_11_Chapter': 'bg/BG_11_Chapter.html',
	'BG_12_Chapter': 'bg/BG_12_Chapter.html',
	'BG_13_Chapter': 'bg/BG_13_Chapter.html',
	'BG_14_Chapter': 'bg/BG_14_Chapter.html',
	'BG_15_Chapter': 'bg/BG_15_Chapter.html',
	'BG_16_Chapter': 'bg/BG_16_Chapter.html',
	'BG_17_Chapter': 'bg/BG_17_Chapter.html',
	'BG_18_Chapter': 'bg/BG_18_Chapter.html',
	'BGEndingPrayer': 'bg/BGEndingPrayer.html',
	'BGAarti': 'bg/BGAarti.html',
	'BG_SapthaShloki': 'bg/BG_SapthaShloki.html',
	'BG_Mahatmyam': 'bg/BG_Mahatmyam.html',
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
document.getElementById("my-iframe").innerHTML = `<iframe src="${journalDetails['BG_Prayer']}" style="width: 100%; height: 100vh;"></iframe>`;

