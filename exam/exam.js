const journalDetails = {


	//--Udhay
	'sep02':'Udhay',
	'sf_admin': 'sf_admin.html',
	'sf_pd2': 'sf_pd2.html',
	'sf_sales': 'sf_sales.html',
	'sf_service': 'sf_service.html',
	'sf_integ': 'sf_integ.html',
	'sf_sharing': 'sf_sharing.html',
	'sf_data': 'sf_data.html',
	'sf_b2b': 'sf_b2b.html',
	'sf_xp': 'sf_xp.html',
	'sf_cpq': 'sf_cpq.html',
	


};



// keep a global reference to iframe as it will be needed multiple times
const myIframe = document.getElementById("my-iframe");

function renderWelcomeFrame() {
    myIframe.innerHTML = `
        <div class="exam-placeholder">
            <div>
                <h2>Practice Salesforce Model Questions</h2>
                <p>Select a topic from the left menu to begin.</p>
            </div>
        </div>
    `;
}

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
            myNavbar.innerHTML += `<a class='exam-link' data-key='${person}' href='${journalDetails[person]}' onclick='showIframe(event)'>${person}</a>`;
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

// show a welcome panel by default; load quiz only when user clicks a menu item
renderWelcomeFrame();

