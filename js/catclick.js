


function NumIncreaseButton(numclicks,buttonid,catname,picurl){
	this.catname = catname;
	this.picurl = picurl;
	this.buttonid = buttonid;
	this.numclicks = numclicks;
	this.buttonaction = function(){
		  	numclicks ++;
		  	var div = document.getElementById("num");
		  	console.log('current number of click is ' + numclicks + ' time(s)');
		  	div.textContent = numclicks;
		  	$("#catpic").empty();
		  	$('#catpic').append('<img src=' + picurl + '>');
	}
};

var loading95Button = new NumIncreaseButton(0,'#loading95','loading95%','images/loading95%meme.jpg')
var lunchmemeButton = new NumIncreaseButton(0,'#lunchmeme','lunchmeme','images/lunchmeme.jpg')
var flexibleButton = new NumIncreaseButton(0,'#flexible','flexible','images/I-am-totally-flexible-Funny-Cat-memes.jpg')
var alwaysfitButton = new NumIncreaseButton(0,'#airplane','alwaysfit','images/I-dont-always-fits-but-when-I-do-I-sits.jpg')
var airplaneButton = new NumIncreaseButton(0,'#airplane','airplane','images/airplanememe.jpg')


$('#loading95').on('click',loading95Button.buttonaction);
$('#lunchmeme').on('click',lunchmemeButton.buttonaction);
$('#flexible').on('click',flexibleButton.buttonaction);
$('#alwaysfit').on('click',alwaysfitButton.buttonaction);
$('#airplane').on('click',airplaneButton.buttonaction);

//test UPDATE ON May 26