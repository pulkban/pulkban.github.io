var oldIndex;
var newQuoteIndex;
var shlokas;
var shlokas_12, shlokas_15, shlokas_16, shlokas_1, shlokas_2;

function loadWords() {
	if(window.localStorage.getItem("bg-chapter") != '')  { document.getElementById('chapters').value = window.localStorage.getItem("bg-chapter") };
	determineChapter()
	nextQuote();
}

function nextQuote() {
	determineChapter();
	randomize();
	var strword = document.getElementById("word");
	strword.innerHTML = "Tell: " + shlokas[newQuoteIndex].chapter_number + '.' + shlokas[newQuoteIndex].shloka_number;
}
function nextParagraph() {
	determineChapter();
	randomize();
	var strword = document.getElementById("word");
	strQuestionArray = shlokas[newQuoteIndex].verse.split(",");
	strQuestion = strQuestionArray[Math.floor((Math.random()*strQuestionArray.length))];
	strword.innerHTML = 'Which one where?: ' + strQuestion;
}
function showAll() {
	determineChapter();
	var bgtable = document.getElementById("bgtable");
	var strFullTableContents = '<table class="table table-striped  text-black"><thead><tr><th>#</th><th>Shlokam</th></tr></thead><tbody>';
	
	shlokas.forEach(function(obj) { 
		//console.log(obj.shloka_number);
		strFullTableContents = strFullTableContents + '<tr><td>' + obj.shloka_number + '</td><td>' + obj.verse + '</td></tr>';
	});
	strFullTableContents = strFullTableContents + '</tbody></table>';
	
	bgtable.innerHTML = strFullTableContents;
}

//JS: helper Functions
function determineChapter() {
	var cmbChapter = document.getElementById("chapters");
	if (cmbChapter.value == 12) shlokas = shlokas_12;
	if (cmbChapter.value == 15) shlokas = shlokas_15;
	if (cmbChapter.value == 16) shlokas = shlokas_16;
	if (cmbChapter.value == 1) shlokas = shlokas_1;
	if (cmbChapter.value == 2) shlokas = shlokas_2;
	window.localStorage.setItem("bg-chapter", cmbChapter.value);
}
function randomize() {
	var answer = document.getElementById("answer");
	answer.innerHTML = "";
	do{
		newQuoteIndex = Math.floor(Math.random() * shlokas.length);
	} while ((newQuoteIndex == oldIndex));
	oldIndex = newQuoteIndex;
}
function showAnswer() {
	var answer = document.getElementById("answer");
	//shlokas[newQuoteIndex].verse.replace("
	var strAnswer = shlokas[newQuoteIndex].chapter_number + '.' + shlokas[newQuoteIndex].shloka_number + "<br/>" + 
		shlokas[newQuoteIndex].verse;
	answer.innerHTML = strAnswer;
}

//================Shlokas
shlokas_15 = [
{"verse": "श्रीभगवानुवाच  ऊर्ध्वमूलमध:शाखm , aश्वत्थं प्राहुरव्ययम्  , छन्दांसि यस्य पर्णानि , यस्तं वेदस वेदवित् ","chapter_number":15,"shloka_number": 1},
{"verse": "अधश्चोर्ध्वं प्रसृतास्तस्य शाखा: , गुणप्रवृद्धा विषयप्रवाला: ,  अधश्च मूलान्यनु सन्त तानि , कर्मानु बन्धीनि मनुष्य लोके ","chapter_number":15,"shloka_number": 2},
{"verse": "न रूपम स्येह तथोपलभ्यते , नान्तो न चादिर्न च सम्प्र तिष्ठा । , अश्वत्थ मेनं सुविरूढ मूलm , aसङ्ग शस्त्रेण दृढेन छित्त्वा ॥ ३ ॥","chapter_number":15,"shloka_number": 3},
{"verse": "तत: पदं तत्परि मार्गितव्यं , यस्मिन्गता न निवर्तन्ति भूय: ।  , तमेव चाद्यं पुरुषं प्रपद्ये , यत: प्रवृत्ति: प्रसृता पुराणी ॥ ४ ॥","chapter_number":15,"shloka_number": 4},
{"verse": "निर्मानमोहा जितसङ्गदोषा: , अध्यात्मनित्या विनिवृत्तकामा: । , द्वन्द्वैर्वि मुक्ता: सुखदु:खसंज्ञै: , gaच्छन्त्यमूढा: पदमव्ययं तत् ॥ ५ ॥","chapter_number":15,"shloka_number": 5},
{"verse": "न तद्भ‍ासयते सूर्य: , न शशाङ्को न पावक: । , यद्ग‍त्वा न निवर्तन्ते , तद्धाम परमं मम ॥ ६ ॥","chapter_number":15,"shloka_number": 6},
{"verse": "ममैवांशो जीवलोके , जीवभूत: सनातन: । ,  मन:षष्ठा नीन्द्रियाणि , प्रकृतिस्थानि कर्षति ॥ ७ ॥","chapter_number":15,"shloka_number": 7},
{"verse": "शरीरं यदवाप्‍नोति , यच्च‍ाप्युत्क्राम तीश्वर: । , गृहीत्वैतानि स-ai-याति , वायुर्गन्धानि वाशयात् ॥ ८ ॥","chapter_number":15,"shloka_number": 8},
{"verse": "श्रोत्रं चक्षु: स्पर्शनं च , रसनं घ्राणमेव च । , अधिष्ठाय मनश्चायं , विषयानुप सेवते ॥ ९ ॥","chapter_number":15,"shloka_number": 9},
{"verse": "उत्क्रामन्तं स्थितं वाऽपि , भुञ्जानं वा गुणान्वितम् । , विमूढा नानुपश्यन्ति , पश्यन्ति-ज्ञानचक्षुष: ॥ १० ॥","chapter_number":15,"shloka_number": 10},
{"verse": "यतन्तो योगिनश्चैनं , पश्यन्त्यात्मन्य वस्थितम् । , यतन्तोऽप्य कृतात्मान: , नैनं पश्यन्त्यचेतस: ॥ ११ ॥","chapter_number":15,"shloka_number": 11},
{"verse": "यदादित्यगतं तेज: , जगद्भ‍ासयतेऽखिलम् । , यच्च‍न्द्रमसि यच्च‍ाग्न‍ौ , तत्तेजो विद्धि मामकम् ॥ १२ ॥","chapter_number":15,"shloka_number": 12},
{"verse": "गामाविश्य च भूतानि , धारयाम्य हमोजसा । , पुष्णामि चौषधी: सर्वा: , सोमो भूत्वा रसात्मक: ॥ १३ ॥","chapter_number":15,"shloka_number": 13},
{"verse": "अहं वैश्वानरो भूत्वा , प्राणिनां देहमाश्रित: । , प्राणा पान समायुक्त: , पचाम्यन्नं चतुर्विधम् ॥ १४ ॥","chapter_number":15,"shloka_number": 14},
{"verse": "सर्वस्य चाहं हृदि सन्निविष्ट: , मत्त: स्मृतिर्ज्ञान मपोहनं च । , वेदैश्च सर्वैरहमेव वेद्य: , वेदान्तकृद्वेद विदेव चाहम् ॥ १५ ॥","chapter_number":15,"shloka_number": 15},
{"verse": "द्वाविमौ पुरुषौ लोके , क्षरश्चाक्षर एव च ।, क्षर: सर्वाणि भूतानि , कूटस्थोऽक्षर उच्यते ॥ १६ ॥","chapter_number":15,"shloka_number": 16},
{"verse": "उत्तम: पुरुषस्त्वन्य: , परमात्मे त्युदाहृत: । ,  यो लोकत्र यमाविश्य , बिभर्त्यव्यय ईश्वर: ॥ १७ ॥","chapter_number":15,"shloka_number": 17},
{"verse": "यस्मात्क्षर मतीतोऽहm , aक्षरादपि चोत्तम: ।, अतोऽस्मि लोके वेदे च , प्रथित: पुरुषोत्तम: ॥ १८ ॥","chapter_number":15,"shloka_number": 18},
{"verse": "यो मामेव मसम्मूढ: , जानाति पुरुषोत्तमम् । , स सर्वविद्भ‍जति मां , सर्व भावेन भारत ॥ १९ ॥","chapter_number":15,"shloka_number": 19},
{"verse": "इति गुह्यतमं शास्त्रm , eदमुक्तं मयानघ । , एतद्‍बुद्ध्वा बुद्धिमान्स्याth , कृतकृत्यश्च भारत ॥ २० ॥","chapter_number":15,"shloka_number": 20},
];

shlokas_12 = [
{"verse": "अर्जुन उवाच एवं सततयुक्ता ये , भक्तास्त्वां पर्युपासते ।, ये चाप्यक्षरमव्यक्तं , तेषां के योगवित्तमा: ॥ १ ॥ 1","chapter_number":12,"shloka_number": 1},
{"verse": "श्रीभगवानुवाच मय्यावेश्य मनो ये मां, नित्ययुक्ता उपासते । , श्रद्धया परयोपेता: , ते मे युक्ततमा मता: ॥ २ ॥ 2","chapter_number":12,"shloka_number": 2},
{"verse": "ये त्वक्षर मनिर्देश्यम , aव्यक्तं पर्युपासते । , सर्वत्रगमचिन्त्यं च , कूटस्थमचलं ध्रुवम् ॥ ३ ॥ 3","chapter_number":12,"shloka_number": 3},
{"verse": "सन्नियम्येन्द्रियग्रामं , सर्वत्र समबुद्धय: । , ते प्राप्‍नुवन्ति मामेव , सर्वभूतहिते रता: ॥ ४ ॥ 4","chapter_number":12,"shloka_number": 4},
{"verse": "क्ल‍ेशोऽधिक तरस्तेषाम्  , aव्यक्ता सक्त चेतसाम् ।, अव्यक्ता हि गतिर्दु:खं , देहवद्भ‍िर वाप्यते ॥ ५ ॥ 5","chapter_number":12,"shloka_number": 5},
{"verse": "ये तु सर्वाणि कर्माणि , मयि सन्न्यस्य मत्परा: ।, अनन्येनैव योगेन मां , ध्यायन्त उपासते ॥ ६ ॥ 6","chapter_number":12,"shloka_number": 6},
{"verse": "तेषामहं समुद्धर्ता , मृत्युसंसार सागरात् । , भवामि न चिरात्पार्थ , मय्यावेशित चेतसाम् ॥ ७ ॥ 7","chapter_number":12,"shloka_number": 7},
{"verse": "मय्येव मन आधत्स्व , मयि बुद्धिं निवेशय ।,  निवसिष्यसि मय्येव , अत ऊर्ध्वं न संशय: ॥ ८ ॥ 8","chapter_number":12,"shloka_number": 8},
{"verse": "अथ चित्तं समाधातुं , न शक्न‍ोषि मयि स्थिरम् ।,  अभ्यास योगेन तत:  , मामिच्छाप्‍तुं धनञ्जय ॥ ९ ॥ 9","chapter_number":12,"shloka_number": 9},
{"verse": "अभ्यासेऽप्य-समर्थोऽसि , मत्कर्मपरमो भव ।,  मदर्थमपि कर्माणि , कुर्वन्सिद्धिम वाप्स्यसि ॥ १० ॥ 10","chapter_number":12,"shloka_number": 10},
{"verse": "अथैत दप्यशक्तोऽसि , कर्तुं मद्योगमाश्रित: ।, सर्वकर्म फलत्यागं , तत: कुरु यतात्मवान् ॥ ११ ॥ 11","chapter_number":12,"shloka_number": 11},
{"verse": "श्रेयो हिज्ञानमभ्यासाth , ज्ज्ञानाद्ध्यानं विशिष्यते ।,  ध्यानात्कर्मफलत्याग:  , thyaगाच्छान्ति रनन्तरम् ॥ १२ ॥ 12","chapter_number":12,"shloka_number": 12},
{"verse": "अद्वेष्टा  सर्वभूतानां , मैत्र: करुण एव च ।,  निर्ममो निरहङ्कार: , समदु:खसुख:क्षमी ॥ १३ ॥ 13","chapter_number":12,"shloka_number": 13},
{"verse": "सन्तुष्ट: सततं योगी , यतात्मा दृढनिश्चय: ।,  मय्यर्पितम नोबुद्धि: , र्यो मद्भ‍क्त: स मे प्रिय: ॥ १४ ॥ 14","chapter_number":12,"shloka_number": 14},
{"verse": "यस्मान्नो द्विजते लोक: , लोकान्नोद्विजते च य: । , हर्षामर्ष भयोद्वेगै: , र्मुक्तो य: स च मे प्रिय: ॥ १५ ॥ 15","chapter_number":12,"shloka_number": 15},
{"verse": "अनपेक्ष: श‍ुचिर्दक्ष:  , उदासीनो गतव्यथ: ।,  सर्वारम्भ परित्यागी , यो मद्भ‍क्त: स मे प्रिय: ॥ १६ ॥ 16","chapter_number":12,"shloka_number": 16},
{"verse": "यो न हृष्यति न द्वेष्टि , न शोचति न काङ्‍क्षति ।, श‍ुभाश‍ुभ परित्यागी , भक्तिमान्य: स मे प्रिय: ॥ १७ ॥ 17","chapter_number":12,"shloka_number": 17},
{"verse": "सम: शत्रौ च मित्रे च , तथा मानापमानयो: ।, शीतोष्ण सुखदु:खेषु , सम: सङ्ग विवर्जित: ॥ १८ ॥ 18","chapter_number":12,"shloka_number": 18},
{"verse": "तुल्य निन्दास्तु तिर्मौनी , सन्तुष्टो येन केनचित् ।, अनिकेत: स्थिरमति: , र्भक्तिमान्मे प्रियो नर: ॥ १९ ॥ 19","chapter_number":12,"shloka_number": 19},
{"verse": "ये तु धर्माya मृतमिदं , यथोक्तं पर्युपासते । ,  श्रद्दधाना मत्परमा: , भक्तास्तेऽ तीव मे प्रिया: ॥ २० ॥ 20","chapter_number":12,"shloka_number": 20},
];


shlokas_16 = [
{"verse": "श्रीभगवानुवाच । अभयं सत्त्वसंशुद्धि: , र्ज्ञानयोग व्यवस्थितिः । , दानं दमश्च यज्ञश्च , स्वाध्या यस्तप आर्जवम् ॥ १६-१॥ 16.1","chapter_number":16,"shloka_number": 1},
{"verse": "Ahimsaa अहिंसा सत्य मक्रोध: , thyaaगः शान्तिर पैशुनम् । , दया भूतेष्व लोलुप्त्वं , मार्दवं ह्रीर चापलम् ॥ १६-२॥ 16.2","chapter_number":16,"shloka_number": 2},
{"verse": "Thejah तेजः(h) क्षमा धृतिः शौचm , aद्रोहो नातिमानिता ।,  भवन्ति सम्पदं दैवीm , aभिजातस्य भारत ॥ १६-३॥ 16.3","chapter_number":16,"shloka_number": 3},
{"verse": "dhambho  दम्भो दर्पोऽभिमानश्च , क्रोधः पारुष्यमेव च ।, अज्ञानं(agnaanam) चाभि जातस्य , पार्थ सम्पदमासुरीम् ॥ १६-४॥ 16.4","chapter_number":16,"shloka_number": 4},
{"verse": "Dhaiveem दैवी सम्पद्वि मोक्षाय , निबन्धायासुरी मता ।, मा शुचः सम्पदं दैवीm , aभिजातोऽसि पाण्डव ॥ १६-५॥ 16.5","chapter_number":16,"shloka_number": 5},
{"verse": "Dhwow द्वौ भूतसर्गौ लोकेऽस्मिn, दैव आसुर एव च ।,  दैवो विस्तरशः प्रोक्त: , आसुरं पार्थ मे शृणु ॥ १६-६॥ 16.6","chapter_number":16,"shloka_number": 6},
{"verse": "Pravruthin  प्रवृत्तिं च निवृत्तिं च , जना न विदुरासुराः ।,  न शौचnनापि चाचार: , न सत्यं तेषु विद्यते ॥ १६-७॥ 16.7","chapter_number":16,"shloka_number": 7},
{"verse": "Asathya असत्य मप्रतिष्ठं ते , जगदाहुर नीश्वरम् ।, अपरस्पर सम्भूतं , किमन्यत्काम हैतुकम् ॥ १६-८॥ 16.8","chapter_number":16,"shloka_number": 8},
{"verse": "Yethaam एतां दृष्टिम वष्टभ्य , नष्टात्मानोऽल्प बुद्धयः ।, प्रभवन्त्युग्र कर्माणः , क्षयाय जगतोऽहिताः ॥ १६-९॥ 16.9","chapter_number":16,"shloka_number": 9},
{"verse": "Kaama  काममाश्रित्य दुष्पूरं , दम्भमान मदान्विताः ।,  मोहाद्गृहीत्वा सद्ग्राहाn, प्रवर्तन्तेऽ शुचिव्रताः ॥ १६-१०॥ 16.10","chapter_number":16,"shloka_number": 10},
{"verse": "Chinthaa चिन्ता मपरिमेयां च , प्रलयान्ता मुपाश्रिताः ।, कामोपभोग परमा: , एतावदिति निश्चिताः ॥ १६-११॥ 16.11","chapter_number":16,"shloka_number": 11},
{"verse": "Aashaa  आशापाश शतैर्बद्धाः , कामक्रोध परायणाः ।, ईहन्ते कामभोगार्थm, aन्यायेनार्थ सञ्चयान् ॥ १६-१२॥ 16.12","chapter_number":16,"shloka_number": 12},
{"verse": "Idhamadhya  इदमद्य मया लब्धm , eमं प्राप्स्ये मनोरथम् । , इदमस्तीद मपिमे , भविष्यति पुनर्धनम् ॥ १६-१३॥ 16.13","chapter_number":16,"shloka_number": 13},
{"verse": "Asow  असौ मया हतः शत्रु: ,- हनिष्ये चापरानपि । , ईश्वरोऽहमहं भोगी , सिद्धोऽहं बलवान्सुखी ॥ १६-१४॥ 16.14","chapter_number":16,"shloka_number": 14},
{"verse": "Aadyo  आढ्योऽभिजन वानस्मि , कोऽन्योऽस्ति सदृशो मया ।, यक्ष्ये दास्यामि मोदिष्ये , इत्यज्ञानवि मोहिताः ॥ १६-१५॥ 16.15","chapter_number":16,"shloka_number": 15},
{"verse": "Aneka अनेकचित्त विभ्रान्ता: , मोहजालस मावृताः ।, प्रसक्ताः कामभोगेषु  ,पतन्ति नरकेऽशुचौ ॥ १६-१६॥ 16.16","chapter_number":16,"shloka_number": 16},
{"verse": "Aathma आत्म सम्भाविताः स्तब्धा: , धनमान मदान्विताः । ,यजन्ते नामयज्ञैस्ते , दम्भेनावि धिपूर्वकम् ॥ १६-१७॥ 16.17","chapter_number":16,"shloka_number": 17},
{"verse": "Ahankaram अहङ्कारं बलं दर्पं , कामं क्रोधं च संश्रिताः ।, मामात्म परदेहेषु , प्रद्विषन्तोऽभ्य सूयकाः ॥ १६-१८॥ 16.18","chapter_number":16,"shloka_number": 18},
{"verse": "thaanaham तानहं द्विषतः क्रूराn , संसारेषु नराधमान् । , क्षिपाम्य जस्र मशुभाn , आसुरीष्वेव योनिषु ॥ १६-१९॥ 16.19","chapter_number":16,"shloka_number": 19},
{"verse": "Aasureem आसुरीं योनिमापन्ना: , मूढा जन्मनि जन्मनि । , मामप्राप्यैव कौन्तेय , ततो यान्त्यधमां गतिम् ॥ १६-२०॥ 16.20","chapter_number":16,"shloka_number": 20},
{"verse": "thrividham त्रिविधं नरकस्येदं , द्वारं नाशनमात्मनः ।,  कामः क्रोधस्तथा लोभ: , thaस्मादेतत्त्रयं त्यजेत् ॥ १६-२१॥ 16.21","chapter_number":16,"shloka_number": 21},
{"verse": "Yethair  एतैर्विमुक्तः कौन्तेय , तमोद्वारै स्त्रिभिर्नरः । , आचरत्यात्मनः श्रेय: , thaतो याति परां गतिम् ॥ १६-२२॥ 16.22","chapter_number":16,"shloka_number": 22},
{"verse": "Yash यः शास्त्रविधि , मुत्सृज्य वर्तते कामकारतः ।, न स सिद्धिम वाप्नोति , न सुखं न परां गतिम् ॥ १६-२३॥ 16.23","chapter_number":16,"shloka_number": 23},
{"verse": "thasmaa तस्माच्छास्त्रं प्रमाणं ते , कार्याकार्यव्य वस्थितौ ।,  ज्ञात्वा शास्त्रविधानोक्तं , कर्म कर्तुमि हार्हसि ॥ १६-२४॥ 16.24","chapter_number":16,"shloka_number": 24},
];

shlokas_1 = [
{"verse": "धृतराष्ट्र उवाच  धर्मक्षेत्रे कुरुक्षेत्रे,  समवेता युयुत्सव: ।  , मामका: पाण्डवाश्चैव , किमकुर्वत सञ्जय ॥ १ ॥","chapter_number":1,"shloka_number": 1},
{"verse": "सञ्जय उवाच  दृष्ट्वा तु पाण्डवानीकं, व्यूढं दुर्योधनस्तदा ।,  आचार्य मुपसङ्गम्य, राजा वचनमब्रवीत् ॥ २ ॥", "chapter_number":1,"shloka_number": 2},
{"verse": "pashyai पश्यैतां पाण्डुपुत्राणाm, aaचार्य महतीं चमूम् । , व्यूढां द्रुपदपुत्रेण, तव शिष्येण धीमता ॥ ३ ॥","chapter_number":1,"shloka_number": 3},
{"verse": "athra अत्र श‍ूरा महेष्वासा: , भीमार्जुन समा युधि । , युयुधानो विराटश्च,  द्रुपदश्च महा रथः ॥ ४ ॥","chapter_number":1,"shloka_number": 4},
{"verse": "dhrushta धृष्टकेतुश्चेकितानः , काशि राजश्च वीर्यवान् ।,  पुरुजित्कुन्ति भोजश्च, शैब्यश्च नरपुङ्गवः ॥ ५ ॥","chapter_number":1,"shloka_number": 5},
{"verse": "yudhaa युधामन्युश्च विक्रान्त:, उत्तमौजाश्च वीर्यवान् ।,  सौभद्रो द्रौपदेयाश्च,  सर्व एव महारथाः ॥ ६ ॥","chapter_number":1,"shloka_number": 6},
{"verse": "asmakam अस्माकं तु विशिष्टा ये, तान्निबोध-द्विजोत्तम ।,  नायका मम सैन्यस्य,  संज्ञार्थm तान्ब्रवीमि ते ॥ ७ ॥","chapter_number":1,"shloka_number": 7},
{"verse": "bhavaan भवान्भीष्मश्च कर्णश्च,  कृपश्च समितिंजयः ।, अश्वत्थामा विकर्णश्च, सौमदत्तिस्त थैव च ॥ ८ ॥","chapter_number":1,"shloka_number": 8},
{"verse": "anye अन्ये च बहवः श‍ूरा:, मदर्थेत्यक्त जीविताः ।,  नानाशस्त्र-प्रहरणाः , सर्वे युद्ध विशारदाः ॥ ९ ॥","chapter_number":1,"shloka_number": 9},
{"verse": "aparya अपर्याप्त‍ं तदस्माकं,  बलं भीष्माभिरक्षितम् ।,  पर्याप्त‍ं त्विदमेतेषां , बलं भीमाभिरक्षितम् ॥ १० ॥","chapter_number":1,"shloka_number": 10},
{"verse": "ayaneshu अयनेषु च सर्वेषु , यथा भागव मस्थिताः ।, भीष्म मेवाभि रक्षन्तु , भवन्तः सर्व एव हि ॥ ११ ॥","chapter_number":1,"shloka_number": 11},
{"verse": "thasya तस्य सञ्जन यन्हर्षं,  कुरुवृद्धः पितामहः ।, सिंहनादं विनद्योच्च‍ैः , शङ्खं दध्मौ प्रतापवान् ॥ १२ ॥","chapter_number":1,"shloka_number": 12},
{"verse": "thathash shanka ततः शङ्खाश्च भेर्यश्च, पणवान कगोमुखाः ।,  सहसैवाभ्य हन्यन्त,  स शब्दस्तु मुलोऽभवत् ॥ १३ ॥","chapter_number":1,"shloka_number": 13},
{"verse": "Thatha-sh shve IMP ततः श्वेतैर्ह यैर्युक्ते,  महति स्यन्दने स्थितौ ।,  माधवः पाण्डवश्चैव , दिव्यौ शङ्खौ प्रदध्मतुः ॥ १४ ॥","chapter_number":1,"shloka_number": 14},
{"verse": "paancha पाञ्चजन्यं हृषीकेश: , देवदत्तं धनञ्जयः ।,  पौण्ड्रं दध्मौ महाशङ्खं , भीमकर्मा वृकोदरः ॥ १५ ॥","chapter_number":1,"shloka_number": 15},
{"verse": "anantha अनन्तविजयं राजा,  कुन्तीपुत्रो युधिष्ठिरः । , नकुलः सहदेवश्च , सुघो षमणि पुष्पकौ ॥ १६ ॥","chapter_number":1,"shloka_number": 16},
{"verse": "kaashya काश्यश्च परमेष्वास:, शिखण्डी च महारथ: ।,  धृष्टद्युम्न‍ो विराटश्च, सात्यकिश्‍चाप राजित: ॥ १७ ॥","chapter_number":1,"shloka_number": 17},
{"verse": "drupadho द्रुपदो द्रौपदेयाश्च,  सर्वश: पृथिवीपते ।, सौभद्रश्च महाबाहु: , शङ्खान्दध्मु: पृथक्पृथक् ॥ १८ ॥","chapter_number":1,"shloka_number": 18},
{"verse": "sagosho स घोषो धार्तराष्ट्राणां , हृदयानि व्यदारयत् ।, नभश्च पृ धिवीं चैव , तुमुलोऽvyaनुनादयन् ॥ १९ ॥","chapter_number":1,"shloka_number": 19},
{"verse": "athavya vasthi अथ व्यवस्थितान्दृष्ट्वा , धार्तराष्ट्रा न्कपिध्वजः । , प्रवृत्ते शस्त्रसम्पाते , धनुरुद्यम्य पाण्डवः । ॥ २० ॥","chapter_number":1,"shloka_number": 20},
{"verse": "hrushi हृषीकेशं तदा वाक्यm , eदमाह महीपते ,  अर्जुन उवाच  सेनयोरुभयोर्मध्ये , रथं-स्थापय मेऽच्युत । ॥ २१ ॥","chapter_number":1,"shloka_number": 21},
{"verse": "yaava dhe यावदेतान्निरीक्षेऽहं योद्‍धु ,कामान वस्थितान् , कैर्मया सह योद्धव्यm , aस्मिन्‍रण समुद्यमे ॥ २२ ॥","chapter_number":1,"shloka_number": 22},
{"verse": "yothsya योत्स्य मानान वेक्षेऽहं , य एतेऽत्र समागताः । , धार्तराष्ट्रस्य दुर्बुद्धे: , र्युद्धे प्रियचि-कीर्षवः ॥ २३ ॥","chapter_number":1,"shloka_number": 23},
{"verse": "Eva muktho सञ्जय उवाच एवमुक्तो हृषीकेश:, गुडाकेशेन भारत ।,  सेन योरुभयो र्मध्ये , स्थाप यित्वा रथोत्तमम् ॥ २४ ॥","chapter_number":1,"shloka_number": 24},
{"verse": "Bheeshma भीष्मद्रोण-प्रमुखतः , सर्वेषां च महीक्षिताम् ।,  उवाच पार्थ पश्यैताn, समवेताn कुरूनिति ॥ २५ ॥ 25","chapter_number":1,"shloka_number": 25},
{"verse": "Thathraa तत्रापश्य-त्स्थितान्पार्थः , पितॄ नथ पितामहान्।, आचार्या न्मातुलान्भ्रातॄn , puत्रान्पौत्रान्सखींस्तथा। ॥ २६ ॥ 26","chapter_number":1,"shloka_number": 26},
{"verse": "Shwashu श्वश‍ुरान्सुहृ दश्चैव , सेनयोरु भयोरपि  , तान्समीक्ष्य स कौन्तेयः , सर्वान्बन्धून वस्थितान् ।27","chapter_number":1,"shloka_number": 27},
{"verse": "Krupayaa कृपया परयाविष्ट: , विषी दन्निद मब्रवीत् , अर्जुन उवाच दृष्ट्वेमं स्वजनं कृष्ण , युयुत्सुं समुपस्थितम् । 28","chapter_number":1,"shloka_number": 28},
{"verse": "Seedhanthi सीदन्ति मम गात्राणि , मुखं च परिश‍ुष्यति ,  वेपथुश्च शरीरे मे , रोमहर्षश्च जायते । 29","chapter_number":1,"shloka_number": 29},
{"verse": "Gaandeevam गाण्डीवं स्रंसते हस्ताth , त्त्वक्च‍ैव परिदह्यते ,  न च शक्न‍ोम्य वस्थातुं , भ्रमतीव च मे मनः 30","chapter_number":1,"shloka_number": 30},
{"verse": "Nimithaani-cha निमित्तानि च पश्यामि , विपरीतानि केशव ,न च श्रेयोऽनु पश्यामि , हत्वा स्वजनमाहवे । 31","chapter_number":1,"shloka_number": 31},
{"verse": "NaKaankshe न काङ्क्षे विजयं कृष्ण , न च राज्यं सुखानि च , किं नो राज्येन गोविन्द , किं भोगैर्जी वितेन वा । 32","chapter_number":1,"shloka_number": 32},
{"verse": "Yeshaa Marthe येषामर्थे काङ्‍क्षितn , न: राज्यं भोगाः सुखानि च  , त इमेऽवस्थिता युद्धे , प्राणांस्त्यक्त्वा धनानि च । 33","chapter_number":1,"shloka_number": 33},
{"verse": "Aachaaryaaf pitharaf आचार्याः पितरः पुत्रा: ,thaथैव च पितामहाः , मातुलाः श्वश‍ुराः पौत्राः , श्यालाः सम्बन्धि नस्तथा । 34","chapter_number":1,"shloka_number": 34},
{"verse": "Yethaanna Hanthu एतान्न-हन्तु मिच्छामि , घ्न‍तोऽपि मधु-सूदन  , अपि त्रैलोक्य राज्यस्य , हेतोः किं नु महीकृते । 35","chapter_number":1,"shloka_number": 35},
{"verse": "Nihathya निहत्य धार्तराष्ट्रान्नः , का-प्रीतिः स्याज्ज‍नार्दन ,  पापमेवाश्रयेदस्माn , हत्वैताना ततायिनः । 36","chapter_number":1,"shloka_number": 36},
{"verse": "Thasmaan Naarha तस्मान्नार्हा वयं हन्तुं , धार्त राष्ट्राnस्व बान्धवान् ।,  स्वजनं हिकथं हत्वा , सुखिनः स्याम माधव ॥ 37 ॥","chapter_number":1,"shloka_number": 37},
{"verse": "Yadhyap yethe यद्यप्येते न पश्यन्ति , लोभोपहतचेतसः ।, कुलक्षयकृतं दोषं , मित्रद्रोहे च पातकम् ॥ 38 ॥","chapter_number":1,"shloka_number": 38},
{"verse": "Kadhan Nagneye कधn-नज्ञेय मस्माभिः , पापादस्मa-न्निवर्तितुम् ।, कुलक्षय-कृतं दोषं , प्रपश्यद्भ‍िr र्जनार्दन ॥ 39 ॥","chapter_number":1,"shloka_number": 39},
{"verse": "Kulakshaye कुलक्षये-प्रणश्यन्ति , कुलधर्माः सनातनाः ।, धर्मे नष्टे कुलं कृत्स्नm , aधर्मोऽ भिभवत्युत ॥ 40 ॥","chapter_number":1,"shloka_number": 40},
{"verse": "Adharmaa अधर्माभिभवात्कृष्ण , प्रदुष्यन्ति कुलस्त्रियः ।, स्त्रीषु दुष्टासु वार्ष्णेय , जायते वर्णसङ्करः ॥ 41 ॥","chapter_number":1,"shloka_number": 41},
{"verse": "Sankaro Nara सङ्करो नरकायैव , कुलघ्न‍ानां कुलस्य च ।, पतन्ति पितरो ह्येषां , लुप्त पिण्डोद कक्रियाः ॥ 42 ॥","chapter_number":1,"shloka_number": 42},
{"verse": "Dhoshai Rethai दोषैरेतैः कुलघ्न‍ानां , वर्ण सङ्कर कारकैः ।, उत्साद्यन्ते जातिधर्माः , कुलधर्माश्च शाश्वताः ॥ 43 ॥","chapter_number":1,"shloka_number": 43},
{"verse": "Uthsanna उत्सन्न कुलधर्माणां , मनुष्याणां जनार्दन ।, नरके नियतं वास: , भवतीत्य नुश‍ुश्रुम ॥ 44 ॥","chapter_number":1,"shloka_number": 44},
{"verse": "Aho Batha अहो बत महत्पापं , कर्तुं व्यवसिता वयम् ।,  यद्राज्यसुख लोभेन , हन्तुं स्वजन मुद्यताः ॥ 45 ॥","chapter_number":1,"shloka_number": 45},
{"verse": "Yadhi Maamap-prathee यदि मामप्रतीकारm , aशस्त्रं शस्त्रपाणयः । , धार्तराष्ट्रा रणे हन्यु: ,thaन्मे क्षेमतरं भवेत् ॥ 46 ॥","chapter_number":1,"shloka_number": 46},
{"verse": "Eva mukthvaa सञ्जय उवाच एव मुक्त्वार्जुनः संख्ये , रथोपस्थ उपाविशत् । , विसृज्य सशरं चापं , शोकसं विग्न‍मानसः ॥ 47 ॥","chapter_number":1,"shloka_number": 47}

]

shlokas_2 = [

{"verse": "Tham Thathaa सञ्जय उवाच । तं तथा कृपयाविष्टm,aश्रुपूर्णा कुलेक्षणम् ।, विषीदन्तमिदं वाक्यm, उवाच मधुसूदनः ॥ २-१॥ 2.1","chapter_number":2,"shloka_number": 1},
{"verse": "Kuthasthvaa श्रीभगवानुवाच । कुतस्त्वा कश्मलमिदं , विषमे समुपस्थितम् ।, अनार्यजुष्ट मस्वर्ग्यm, aकीर्तिकर मर्जुन ॥ २-२॥ 2.2","chapter_number":2,"shloka_number": 2},
{"verse": "Klaibyam क्लैब्यं मास्म गमः पार्थ ,- नैतत्त्वय्युप पद्यते ।, क्षुद्रं हृदय दौर्बल्यं , त्यक्त्वोत्तिष्ठ परन्तप ॥ २-३॥ 2.3","chapter_number":2,"shloka_number": 3},
{"verse": "Katham bheeshma अर्जुन उवाच । कथं भीष्ममहं सङ्ख्ये , द्रोणं च मधुसूदन ।, इषुभिः प्रतियोत्स्यामि , पूजार्हा वरिसूदन ॥ २-४॥ 2.4","chapter_number":2,"shloka_number": 4},
{"verse": "Guru-na hathwaa गुरूनहत्वा हि महानुभावान् , श्रेयो भोक्तुं भैक्ष्य-मपीह लोके ।, हत्वार्थ कामांस्तु गुरूनिहैव ,  भुञ्जीय भोगान् रुधिरप्र दिग्धान् ॥ २-५॥ 2.5","chapter_number":2,"shloka_number": 5},
{"verse": "Nachaitha dhvidhmah न चैत द्विद्मः कतरन्नो गरीय: ,  यद्वाजयेम यदि वानो-जयेयुः ।,  यानेव हत्वा न जिजीविषाम: , तेऽवस्थिताः प्रमुखे धार्तराष्ट्राः ॥ २-६॥ 2.6","chapter_number":2,"shloka_number": 6},
{"verse": "kaarpanya कार्पण्यदोषो पहतस्वभावः,  पृच्छा मित्वां धर्म सम्मूढचेताः ।,  यच्छ्रेयः स्यान्निश्चितं ब्रूहि तन्मे,  शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम् ॥ २-७॥ 2.7","chapter_number":2,"shloka_number": 7},
{"verse": "nahiprapash नहि-प्रपश्यामि ममापनुद्याद् ,  यच्छोक मुच्छोषण मिन्द्रियाणाम् । , अवाप्य भूमा वसपत्नमृद्धं , राज्यं सुराणा मपि चाधिपत्यम् ॥ २-८॥ 2.8","chapter_number":2,"shloka_number": 8},
{"verse": "Eva mukthaa सञ्जय उवाच । एवमुक्त्वा हृषीकेशं , गुडाकेशः परन्तप: । , नयोत्स्य इति गोविन्दm , उक्त्वा तूष्णीं बभूव ह ॥ २-९॥ 2.9","chapter_number":2,"shloka_number": 9},
{"verse": "thamuvaacha तमुवाच हृषीकेशः , प्रहसन्निव भारत । , सेनयोरु भयोर्मध्ये , विषीदन्तमिदं वचः ॥ २-१०॥ 2.10","chapter_number":2,"shloka_number": 10},
{"verse": "Ashochyaa nanva श्रीभगवानुवाच । अशोच्यानन्व शोचस्त्वं , प्रज्ञावादांश्च भाषसे । , गतासून गतासूंश्च , नानुशोचन्ति पण्डिताः ॥ २-११॥ 2.11","chapter_number":2,"shloka_number": 11},
{"verse": "Nathvevaaham न त्वेवाहं जातु नासं , न त्वं नेमे जनाधिपाः । , न चैव न भविष्यामः , सर्वे वयमतः परम् ॥ २-१२॥ 2.12","chapter_number":2,"shloka_number": 12},
{"verse": "Dhehino sminya देहिनोऽस्मिन्यथा देहे , कौमारं यौवनं जरा । , तथा देहान्तरप्राप्ति: , र्धीरस्तत्र न मुह्यति ॥ २-१३॥ 2.13","chapter_number":2,"shloka_number": 13},
{"verse": "maathraas मात्रास्पर्शास्तु कौन्तेय , शीतोष्ण सुखदुःखदाः ।, आगमा पायिनोऽनित्या: , तांस्तितिक्षस्व भारत ॥ २-१४॥ 2.14","chapter_number":2,"shloka_number": 14},
{"verse": "Yam hi navyatha यं हि नव्यथ यन्त्येते , पुरुषं पुरुषर्षभ । , समदुःखसुखं धीरं , सोऽमृतत्वाय कल्पते ॥ २-१५॥ 2.15","chapter_number":2,"shloka_number": 15},
{"verse": "Naasatho नासतो विद्यते भाव: , नाभावो विद्यते सतः ।  ,  उभयोरपि दृष्टोऽन्त: , त्वनयोस्तत्त्व दर्शिभिः ॥ २-१६॥ 2.16","chapter_number":2,"shloka_number": 16},
{"verse": "Avinaashi अविनाशि तु तद्विद्धि , येन सर्वमिदं ततम् ।, विनाशमव्य यस्यास्य , न कश्चित्कर्तुमर्हति ॥ २-१७॥ 2.17","chapter_number":2,"shloka_number": 17},
{"verse": "Anthavantha अन्तवन्त इमे देहा: , नित्यस्योक्ताः शरीरिणः । , अनाशिनोऽप्रमेयस्य , तस्माद्युध्यस्व भारत ॥ २-१८॥ 2.18","chapter_number":2,"shloka_number": 18},
{"verse": "Ya Yenam य एनं वेत्ति हन्तारं , यश्चैनं मन्यते हतम् । , उभौ तौ न विजानीत: , नायं हन्ति न हन्यते ॥ २-१९॥ 2.19","chapter_number":2,"shloka_number": 19},
{"verse": "najaaya न जायते म्रियते वा कदाचिth , नायं भूत्वा भविता वान भूयः । , अजो नित्यः शाश्वतोऽयं पुराण: , न हन्यते हन्यमाने शरीरे ॥ २-२०॥ 2.20","chapter_number":2,"shloka_number": 20},
{"verse": "vedha वेदा विनाशिनं नित्यं , य एनमज मव्ययम् । , कथं स पुरुषः पार्थ , कं घातयति हन्ति कम् ॥ २-२१॥ 2.21","chapter_number":2,"shloka_number": 21},
{"verse": "vaasaamsi वासांसि जीर्णानि यथा विहाय,  नवानि गृह्णाति(grunhaathi) नरोऽपराणि । , तथा शरीराणि विहाय जीर्णाni , aन्यानि सैयाति नवानि देही ॥ २-२२॥ 2.22","chapter_number":2,"shloka_number": 22},
{"verse": "nainam नैनं छिन्दन्ति शस्त्राणि , नैनं दहति पावकः । , न चैनं क्लेदयन्त्या प: , न शोषयति मारुतः ॥ २-२३॥ 2.23","chapter_number":2,"shloka_number": 23},
{"verse": "achchedhyo अच्छेद्योऽयम दाह्योऽयm, aक्लेद्योऽशोष्य एव च । , नित्यः सर्वगतः स्थाणु: a, चलोऽयं सनातनः ॥ २-२४॥ 2.24","chapter_number":2,"shloka_number": 24},
{"verse": "avyaktho अव्यक्तोऽयम चिन्त्योऽयm , aविकार्योऽय मुच्यते । , तस्मादेवं विदित्वैनं , नानुशोचितु मर्हसि ॥ २-२५॥ 2.25","chapter_number":2,"shloka_number": 25},
{"verse": "atha chainam अथ चैनं नित्यजातं , नित्यं वा मन्यसे मृतम् । , तथापित्वं महाबाहो , नैवं शोचितु मर्हसि ॥ २-२६॥ 2.26","chapter_number":2,"shloka_number": 26},
{"verse": "jaathasya जातस्य हिध्रुवो मृत्यु: , र्ध्रुवं जन्म मृतस्य च । , तस्माद परिहार्येऽर्थे , नत्वं शोचितु मर्हसि ॥ २-२७॥ 2.27","chapter_number":2,"shloka_number": 27},
{"verse": "avyaktha dheeni अव्यक्तादीनि भूतानि , व्यक्त मध्यानि भारत । , अव्यक्त निधनान्येव , तत्र का परिदेवना ॥ २-२८॥ 2.28","chapter_number":2,"shloka_number": 28},
{"verse": "aashcharya आश्चर्य वत्पश्यति कश्चिदेनm , आश्चर्य वद्वदति तथैव चान्यः । , आश्चर्य वच्चैनमन्यः शृणोति , श्रुत्वाप्येनं वेद नचैव कश्चित् ॥ २-२९॥ 2.29","chapter_number":2,"shloka_number": 29},
{"verse": "Dhehi देही नित्यम वध्योऽयं , देहे सर्वस्य भारत । , तस्मात्सर्वाणि भूतानि , नत्वं शोचितु मर्हसि ॥ २-३०॥ 2.30","chapter_number":2,"shloka_number": 30},
{"verse": "Swadharma स्वधर्मम पि चावेक्ष्य , नवि कम्पितु मर्हसि । , धर्म्याद्धि युद्धाच्छ्रेयोऽन्यत् ,  क्षत्रियस्य न विद्यते ॥ २-३१॥ 2.31","chapter_number":2,"shloka_number": 31},
{"verse": "Yadhruschaya यदृच्छया (yadhrushchayaa) चोपपन्नं , स्वर्गद्वार मपावृतम् । , सुखिनः क्षत्रियाः पार्थ , लभन्ते युद्धमीदृशम् ॥ २-३२॥ 2.32","chapter_number":2,"shloka_number": 32},
{"verse": "Atha Chethva अथ चेत्त्वमिमं धर्म्यं , सङ्ग्रामं न करिष्यसि ।, ततः स्वधर्मं कीर्तिं च - , हित्वा पापम वाप्स्यसि ॥ २-३३॥ 2.33","chapter_number":2,"shloka_number": 33},
{"verse": "Akeerthim अकीर्तिं चापि भूतानि , कथ यिष्यन्ति तेऽव्ययाम् ।, सम्भावितस्य चाकीर्ति: , मरणाद तिरिच्यते ॥ २-३४॥ 2.34","chapter_number":2,"shloka_number": 34},
{"verse": "Bhayaadhra naadhu भयाद्रणा दुपरतं , मnस्यन्ते त्वां महारथाः ।, येषां च त्वं बहुमत: , भूत्वा यास्यसि लाघवम् ॥ २-३५॥ 2.35","chapter_number":2,"shloka_number": 35},
{"verse": "Avaachya vaadhaamshcha अवाच्यवादांश्च बहूn , vaदिष्यन्तित वाहिताः । , निन्दन्तस्तव सामर्थ्यं , ततो दुःखतरं नुकिम् ॥ २-३६॥ 2.36","chapter_number":2,"shloka_number": 36},
{"verse": "Hatho Vaa  हतो वा प्राप्स्यसि स्वर्गं , जित्वा वा भोक्ष्यसे महीम् । , तस्मादुत्तिष्ठ कौन्तेय , युद्धाय कृतनिश्चयः ॥ २-३७॥ 2.37","chapter_number":2,"shloka_number": 37},
{"verse": "Sukha Dhuhkhe  सुखदुःखे समे कृत्वा , लाभालाभौ जयाजयौ ।,  ततो युद्धाय युज्यस्व , नैवं पापम वाप्स्यसि ॥ २-३८॥ 2.38","chapter_number":2,"shloka_number": 38},
{"verse": "Yeshaa TheBhihiThaa एषा तेऽभिहिता साङ्ख्ये , बुद्धिर्योगे त्विमां शृणु । , बुद्ध्या युक्तो यया पार्थ , कर्मबन्धं प्रहास्यसि ॥ २-३९॥ 2.39","chapter_number":2,"shloka_number": 39},
{"verse": "Nehaa नेहाभिक्रम नाशोऽस्ति , प्रत्यवायो न विद्यते । , स्वल्प मप्यस्य धर्मस्य , त्रायते महतो भयात् ॥ २-४०॥ 2.40","chapter_number":2,"shloka_number": 40},
{"verse": "vyavasaa व्यवसा यात्मिका बुद्धि: , yeकेह कुरुनन्दन ।, बहुशाखा ह्यनन्ताश्च , बुद्धयोऽव्यव सायिनाम् ॥ २-४१॥ 2.41","chapter_number":2,"shloka_number": 41},
{"verse": "Yaamimaam  यामिमां पुष्पितां वाचं , - प्रवदन्त्यविपश्चितः । , वेदवादरताः पार्थ , नान्यदस्तीति वादिनः ॥ २-४२॥ 2.42","chapter_number":2,"shloka_number": 42},
{"verse": "Kaamathmaana कामात्मानः स्वर्गपरा: , जन्मकर्म फलप्रदाम् ।, क्रियाविशेष बहुलां , भोगैश्वर्य गतिं प्रति ॥ २-४३॥ 2.43","chapter_number":2,"shloka_number": 43},
{"verse": "Bhogaishvarya भोगैश्वर्य प्रसक्तानां , तयापहृत चेतसाम् । , व्यवसा यात्मिका बुद्धिः , समाधौ न विधीयते ॥ २-४४॥ 2.44","chapter_number":2,"shloka_number": 44},
{"verse": "Thrigunya त्रैगुण्य विषया वेदा: , निस्त्रै गुण्यो भवार्जुन । , निर्द्वन्द्वो नित्य सत्त्वस्थ: , निर्यो गक्षेम आत्मवान् ॥ २-४५॥ 2.45","chapter_number":2,"shloka_number": 45},
{"verse": "Yaavaanartha यावानर्थ उदपाने , सर्वतः सम्प्लुतोदके । , तावान्सर्वेषु वेदेषु , ब्राह्मणस्य विजानतः ॥ २-४६॥ 2.46","chapter_number":2,"shloka_number": 46},
{"verse": "Karmanye कर्मण्ये वाधिकारस्ते , मा फलेषु कदाचन ।, मा कर्म फलहेतुर्भू: , र्माते सङ्गोऽस्त्व कर्मणि ॥ २-४७॥ 2.47","chapter_number":2,"shloka_number": 47},
{"verse": "Yogasthah योगस्थः कुरु कर्माणि , सङ्गं त्यक्त्वा धनञ्जय ।, सिद्ध्य: सिद्ध्योः समो भूत्वा , समत्वं योग उच्यते ॥ २-४८॥ 2.48","chapter_number":2,"shloka_number": 48},
{"verse": "Dhoorenahyavaram दूरेण ह्यवरं कर्म , बुद्धि योगाद्धनञ्जय ।, बुद्धौ शरण मन्विच्छ , कृपणाः फलहेतवः ॥ २-४९॥ 2.49","chapter_number":2,"shloka_number": 49},
{"verse": "Buddhiyuktho बुद्धियुक्तो जहातीह , उभे सुकृत दुष्कृते ।, तस्माद्योगाय युज्यस्व योगः , कर्मसु कौशलम् ॥ २-५०॥ 2.50","chapter_number":2,"shloka_number": 50},
{"verse": "Karmajam  कर्मजं बुद्धियुक्ता हि , फलं त्यक्त्वा मनीषिणः ।, जन्मबन्ध विनिर्मुक्ताः , पदं गच्छन्त्य नामयम् ॥ २-५१॥ 2.51","chapter_number":2,"shloka_number": 51},
{"verse": "Yadhaa  यदा तेमोह कलिलं , बुद्धिर्व्यतित रिष्यति ।, तदा गन्तासि निर्वेदं , श्रोतव्यस्य श्रुतस्य च ॥ २-५२॥ 2.52","chapter_number":2,"shloka_number": 52},
{"verse": "Shruthi  श्रुतिविप्रति पन्ना ते , यदा स्थास्यति निश्चला ।, समाधा वचला बुद्धि: , thaदा योगम वाप्स्यसि ॥ २-५३॥ 2.53","chapter_number":2,"shloka_number": 53},
{"verse": "SthithaPrangyasya अर्जुन उवाच । स्थितप्रज्ञस्य का भाषा , समाधिस्थस्य केशव ।, स्थितधीः किं प्रभाषेत , किमासीतव्र जेत किम् ॥ २-५४॥ 2.54","chapter_number":2,"shloka_number": 54},
{"verse": "Praja  श्रीभगवानुवाच । प्रजहाति यदा कामाn , saर्वान्पार्थ मनोगतान् ।,  आत्मन्ये वात्मना तुष्टः , स्थितप्रज्ञस्त दोच्यते ॥ २-५५॥ 2.55","chapter_number":2,"shloka_number": 55},
{"verse": "Dhukke दुःखेष्व नुद्विग्न मनाः , - सुखेषु विगतस्पृहः । , वीतराग भयक्रोधः , स्थित धीर्मुनि रुच्यते ॥ २-५६॥ 2.56","chapter_number":2,"shloka_number": 56},
{"verse": "Yassarvathraana यः सर्वत्रान भिस्नेह: , तत्तत्प्राप्य शुभाशुभम् ।, नाभिनन्दति न द्वेष्टि , तस्य प्रज्ञाप्र तिष्ठिता ॥ २-५७॥ 2.57","chapter_number":2,"shloka_number": 57},
{"verse": "Yadhaa Samharathe यदा संहरते चायं , कूर्मोऽङ्गा नीव सर्वशः ।, इन्द्रियाणीन्द्रि यार्थेभ्य:  , thaस्य प्रज्ञा प्रतिष्ठिता ॥ २-५८॥ 2.58","chapter_number":2,"shloka_number": 58},
{"verse": "Vishayaa विषया विनिवर्तन्ते , निराहारस्य देहिनः ।, रसवर्जं रसोऽप्यस्य , परं दृष्ट्वा निवर्तते ॥ २-५९॥ 2.59","chapter_number":2,"shloka_number": 59},
{"verse": "Yathatho  यततो ह्यपि कौन्तेय , पुरुषस्य विपश्चितः ।, इन्द्रियाणि प्रमाथीनि , हरन्ति प्रसभं मनः ॥ २-६०॥ 2.60","chapter_number":2,"shloka_number": 60},
{"verse": "Thaani  तानि सर्वाणि सyyaम्य , युक्त आसीत मत्परः ।, वशे हि यस्येन्द्रियाणि , तस्य प्रज्ञा प्रतिष्ठिता ॥ २-६१॥ 2.61","chapter_number":2,"shloka_number": 61},
{"verse": "Dhyaayatho ध्यायतो विषयान्पुंसः , सङ्गस्तेषू पजायते ।, सङ्गात्सञ्जा यते कामः , कामात्क्रोधोऽ भिजायते ॥ २-६२॥ 2.62","chapter_number":2,"shloka_number": 62},
{"verse": "KroDhaadh  क्रोधाद्भवति सम्मोहः , सम्मोहात्स्मृति विभ्रमः । , स्मृतिभ्रंशाद् बुद्धिनाश: , बुद्धि नाशात्प्रणश्यति ॥ २-६३॥ 2.63","chapter_number":2,"shloka_number": 63},
{"verse": "Raagadhveshavi रागद्वेषवि मुक्तैस्तु , विषया निन्द्रि-यैश्चरन्  , आत्म वश्यैर्विधे , यात्मा प्रसादमधि गच्छति ॥ २-६४॥ 2.64","chapter_number":2,"shloka_number": 64},
{"verse": "Prasaadhe प्रसादे सर्वदुःखानां , हानि रस्योप जायते ।, प्रसन्नचेतसो ह्याशु , बुद्धिः पर्यव तिष्ठते ॥ २-६५॥ 2.65","chapter_number":2,"shloka_number": 65},
{"verse": "Naasthi नास्ति बुद्धिरयुक्तस्य , न चायुक्तस्य भावना ।,  न चाभावयतः शान्ति: , aशान्तस्य कुतः सुखम् ॥ २-६६॥ 2.66","chapter_number":2,"shloka_number": 66},
{"verse": "Indhriyaanaam इन्द्रियाणां हि चरतां , यन्मनोऽनु विधीयते ।, तदस्य हरति प्रज्ञां , वायुर्नावमि वाम्भसि ॥ २-६७॥ 2.67","chapter_number":2,"shloka_number": 67},
{"verse": "Thasmaadhyasya तस्माद्यस्य महाबाहो , निगृहीतानि सर्वशः ।, इन्द्रियाणीन्द्रि यार्थेभ्य: , तस्य प्रज्ञा प्रतिष्ठिता ॥ २-६८॥ 2.68","chapter_number":2,"shloka_number": 68},
{"verse": "Yaa nishaa या निशा सर्वभूतानां , तस्यां जागर्ति सय्यमी ।, यस्यां जाग्रति भूतानि , सा निशा पश्य तो मुनेः ॥ २-६९॥ 2.69","chapter_number":2,"shloka_number": 69},
{"verse": "Aaparya maana आपूर्यमाण मचलप्रतिष्ठं ,  समुद्रमापः प्रविशन्ति यद्वत् । , तद्वत्कामा यं प्रविशन्ति सर्वे ,  स शान्ति माप्नोति न कामकामी ॥ २-७०॥ 2.70","chapter_number":2,"shloka_number": 70},
{"verse": "Vihaaya विहाय कामान्यः सर्वाn , पुमांश्चरति निःस्पृहः । , निर्ममो निरहङ्कारः , स शान्ति मधिगच्छति ॥ २-७१॥ 2.71","chapter_number":2,"shloka_number": 71},
{"verse": "Yeshaa Braamhi एषा ब्राह्मी स्थितिः पार्थ , नैनां प्राप्य विमुह्यति । , स्थित्वा स्यामन्त कालेऽपि , ब्रह्मनिर्वाण मृच्छति ॥ २-७२॥ 2.72","chapter_number":2,"shloka_number": 72},

]