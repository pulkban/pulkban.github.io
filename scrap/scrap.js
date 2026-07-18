journalDetails = {

	'Salesforce2': 'Salesforce2.html',
	'Salesforce': 'Salesforce.html',
	'qa_python': 'qa_python.html',
	'java': 'java.html',
	'java2': 'java2.html',
	'python': 'python.html',
	'learn_ai': 'learn_ai.html',
	'react': 'react.html',
	'angular': 'angular.html',
	'sql': 'sql.html',
	'VnVAutomotive': 'VnVAutomotive.html',

	
	'lingo': 'lingo.html',
	'scrap2': 'scrap2.html',
	'table': 'table.html',
	'Notes': 'Notes.html',
	
	'WordQuiz': 'WordQuiz.html',
	'C1 Exam': 'c1.html',
	'Salesforce Developer': 'sf.html',
	'Aura Code 1': 'AuraCode1.html',
	'LWC JS': 'lwc_js.html',
	'oldNewName': 'oldNewName.html'
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
document.getElementById("my-iframe").innerHTML = `<iframe src="${journalDetails['Notes']}" style="width: 100%; height: 100vh;"></iframe>`;

/**
 * CHEATSHEET CODE FORMATTER
 * Converts '--' comments to red sections and 'http/https' URLs to clickable links
 * Call this function after DOM is loaded on any cheatsheet HTML
 */
function formatCheatsheetCode() {
	document.querySelectorAll('pre code').forEach(function(codeEl) {
		var lines = codeEl.textContent.replace(/\r\n?/g, '\n').split('\n');
		codeEl.textContent = '';

		lines.forEach(function(line, index) {
			if (line.trimStart().startsWith('--') || /---+\s*$/.test(line)) {
				// Format comment lines in red
				var sectionLine = document.createElement('span');
				sectionLine.className = 'code-section';

				var markerIndexInComment = line.indexOf('**');
				if (markerIndexInComment === -1) {
					sectionLine.textContent = line;
				} else {
					var commentBeforeMarker = line.slice(0, markerIndexInComment);
					var commentBoldText = line.slice(markerIndexInComment + 2);

					if (commentBeforeMarker) {
						sectionLine.appendChild(document.createTextNode(commentBeforeMarker));
					}

					var commentStrongEl = document.createElement('strong');
					commentStrongEl.textContent = commentBoldText;
					sectionLine.appendChild(commentStrongEl);
				}

				codeEl.appendChild(sectionLine);
			} else if (line.indexOf('**') !== -1) {
				var markerIndex = line.indexOf('**');
				var beforeMarker = line.slice(0, markerIndex);
				var boldText = line.slice(markerIndex + 2);

				if (beforeMarker) {
					codeEl.appendChild(document.createTextNode(beforeMarker));
				}

				var strongEl = document.createElement('strong');
				strongEl.textContent = boldText;
				codeEl.appendChild(strongEl);
			} else if (/^https?:\/\//.test(line.trim())) {
				// Convert URL lines to clickable links
				var linkEl = document.createElement('a');
				linkEl.href = line.trim();
				linkEl.target = '_blank';
				linkEl.textContent = line;
				linkEl.style.color = '#1d4ed8';
				codeEl.appendChild(linkEl);
			} else {
				// Add regular text
				codeEl.appendChild(document.createTextNode(line));
			}

			// Add newline between lines
			if (index < lines.length - 1) {
				codeEl.appendChild(document.createTextNode('\n'));
			}
		});
	});
}
