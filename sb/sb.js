journalDetails = {
	'Durga_Aapaduttara_Stava': 'DurgaAapaduttara.html',
	'Shri_Guru_Stotram': 'GuruStotram.html',
	'Achyutasyashtakam': 'Achyutasyashtakam.html',
	'Shri_Rama_Stotram': 'ShriRamaStotram.html',
	'Shri_Guru_Padukaa_Stotram': 'ShriGuruPadukaaStotram.html',
	'Gurvashtakam': 'Gurvashtakam.html',
	'GuruDhyaanam': 'GuruDhyaanam.html',
	'HaraHaraShambo': 'HaraHaraShambo.html',
	'Seshadri_Giriyalli': 'Seshadri_Giriyalli.html',
	'Dasavatara_Stotram': 'Dasavatara_Stotram.html',
	'AntayuNeeve': 'AntayuNeeve.html',
	'ShriDattaStavam': 'ShriDattaStavam.html',
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
document.getElementById("my-iframe").innerHTML = `<iframe src="${journalDetails['Durga_Aapaduttara_Stava']}" style="width: 100%; height: 100vh;"></iframe>`;

