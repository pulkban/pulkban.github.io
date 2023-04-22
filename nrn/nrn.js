journalDetails = {
	'NRN_Dhyaanam': 'NRN_Dhyaanam.html',
	'NRN_Dasakam_01': 'NRN_Dasakam_01.html',
	'NRN_Dasakam_02': 'NRN_Dasakam_02.html',
	'NRN_Dasakam_03': 'NRN_Dasakam_03.html',
	'NRN_Dasakam_04': 'NRN_Dasakam_04.html',
	'NRN_Dasakam_05': 'NRN_Dasakam_05.html',
	'NRN_Dasakam_06': 'NRN_Dasakam_06.html',
	'NRN_Dasakam_07': 'NRN_Dasakam_07.html',
	'NRN_Dasakam_08': 'NRN_Dasakam_08.html',
	'NRN_Dasakam_09': 'NRN_Dasakam_09.html',
	'NRN_Dasakam_10': 'NRN_Dasakam_10.html',
	'NRN_Dasakam_11': 'NRN_Dasakam_11.html',
	'NRN_Dasakam_12': 'NRN_Dasakam_12.html',
	'NRN_Dasakam_13': 'NRN_Dasakam_13.html',
	'NRN_Dasakam_14': 'NRN_Dasakam_14.html',
	'NRN_Dasakam_15': 'NRN_Dasakam_15.html',
	'NRN_Dasakam_16': 'NRN_Dasakam_16.html',
	'NRN_Dasakam_17': 'NRN_Dasakam_17.html',
	'NRN_Dasakam_18': 'NRN_Dasakam_18.html',
	'NRN_Dasakam_19': 'NRN_Dasakam_19.html',
	'NRN_Dasakam_20': 'NRN_Dasakam_20.html',
	'NRN_Dasakam_21': 'NRN_Dasakam_21.html',
	'NRN_Dasakam_22': 'NRN_Dasakam_22.html',
	'NRN_Dasakam_23': 'NRN_Dasakam_23.html',
	'NRN_Dasakam_24': 'NRN_Dasakam_24.html',
	'NRN_Dasakam_25': 'NRN_Dasakam_25.html',
	'NRN_Dasakam_26': 'NRN_Dasakam_26.html',
	'NRN_Dasakam_27': 'NRN_Dasakam_27.html',
	'NRN_Dasakam_28': 'NRN_Dasakam_28.html',
	'NRN_Dasakam_29': 'NRN_Dasakam_29.html',
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
document.getElementById("my-iframe").innerHTML = `<iframe src="${journalDetails['NRN_Dasakam_01']}" style="width: 100%; height: 100vh;"></iframe>`;

