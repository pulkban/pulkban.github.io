journalDetails = {
	'SK_Dhyaanam': 'SK_Dhyaanam.html',
	'SK_Sargam_01': 'SK_Sargam_01.html',
	'SK_Sargam_02': 'SK_Sargam_02.html',
	'SK_Sargam_03': 'SK_Sargam_03.html',
	'SK_Sargam_04': 'SK_Sargam_04.html',
	'SK_Sargam_05': 'SK_Sargam_05.html',
	'SK_Sargam_06': 'SK_Sargam_06.html',
	'SK_Sargam_07': 'SK_Sargam_07.html',
	'SK_Sargam_08': 'SK_Sargam_08.html',
	'SK_Sargam_09': 'SK_Sargam_09.html',
	'SK_Sargam_10': 'SK_Sargam_10.html',
	'SK_Sargam_11': 'SK_Sargam_11.html',
	'SK_Sargam_12': 'SK_Sargam_12.html',
	'SK_Sargam_13': 'SK_Sargam_13.html',
	'SK_Sargam_14': 'SK_Sargam_14.html',
	'SK_Sargam_15': 'SK_Sargam_15.html',
	'SK_Sargam_16': 'SK_Sargam_16.html',
	'SK_Sargam_17': 'SK_Sargam_17.html',
	'SK_Sargam_18': 'SK_Sargam_18.html',
	'SK_Sargam_19': 'SK_Sargam_19.html',
	'SK_Sargam_20': 'SK_Sargam_20.html',
	'SK_Sargam_21': 'SK_Sargam_21.html',
	'SK_Sargam_22': 'SK_Sargam_22.html',
	'SK_Sargam_23': 'SK_Sargam_23.html',
	'SK_Sargam_24': 'SK_Sargam_24.html',
	'SK_Sargam_25': 'SK_Sargam_25.html',
	'SK_Sargam_26': 'SK_Sargam_26.html',
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
document.getElementById("my-iframe").innerHTML = `<iframe src="${journalDetails['SK_Dhyaanam']}" style="width: 100%; height: 100vh;"></iframe>`;

