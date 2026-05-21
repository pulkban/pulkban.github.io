const journalDetails = {

	'Falling Words': 'fallingWords.html',
	'Falling Words 2': 'fallingWords2.html',
	'Falling Pics': 'fallingPics.html',
	'Falling Table': 'fallingTables.html',
	'Clock': 'clock.html',
	
	'Falling 2E GK': 'falling2E.html',
	'Falling 6A GK': 'falling6A.html',
	'falling2EHindi': 'falling2EHindi.html',
	'olympiad_comp': 'olympiad_comp.html',
	'Q Pranev 3H': 'q.html',
	
	//--Pranev
	'sep01':'Pranev',
	'vup_gk': 'vup_gk.html',
	'vup_maths': 'vup_maths.html',

};



// keep a global reference to iframe as it will be needed multiple times
const myIframe = document.getElementById("my-iframe");

function populateNavbar()
{
    // get reference to navbar
    var myNavbar = document.getElementById("my-navbar");
    for (var person in journalDetails)
    {
        // add a button for each person
        // make it call main on click with event
		if(person.startsWith("sep")) {
			console.log('you saw sep');
            myNavbar.innerHTML += `<b>${journalDetails[person]}</b>`;
			
		} else {
            myNavbar.innerHTML += `<a class='exam-link' href='${journalDetails[person]}' onclick='showIframe(event)'>${person}</a>`;
		}
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
    if (lastEvent) {
        lastEvent.target.classList.remove("active");
    }

    // apply highlight to current clicked name
    currentEvent.target.classList.add("active");

    // store current event as last event
    lastEvent = currentEvent;
    
    // load iframe of this person's journal
    myIframe.innerHTML = `<iframe src="${journalDetails[person]}"></iframe>`;

    // prevent link from opening
    currentEvent.preventDefault();
}

// populate navbar on pageload
populateNavbar()

// show first shloka by default
document.getElementById("my-iframe").innerHTML = `<iframe src="${journalDetails['Quiz']}"></iframe>`;

