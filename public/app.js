//This appends our data to localhost:3000/about.html..................................
$.ajax('api/about')
	.done(function(about){
		//console.log(about[0]._id);
		appendAboutMe(about);
	});
//Edit.....................................................................................


//Code for index.html form..........................................................
function clearForm(){
	$('#Bio').val('');
	$('#Origin').val('');
	$('#Hobbies').val('');
	$('#DreamJob').val('');	
	$('#CodeHistory').val('');
	$('#Occupation').val('');
	$('#CurrentMusic').val('');

}
//This function appends the data to index.html
function appendAboutMe(aboutData){
	var contentIndex = 0;
	$('#bio').append(aboutData[contentIndex].bio);
	$('#origin').append(aboutData[contentIndex].origin);
	$('#hobbies').append(aboutData[contentIndex].hobbies);
	$('#dreamJob').append(aboutData[contentIndex].dreamJob);
	$('#codeHistory').append(aboutData[contentIndex].codeHistory);
	$('#occupation').append(aboutData[contentIndex].occupation);
	$('#currentMusic').append(aboutData[contentIndex].currentMusic);
}
function save(content){
//console.log(content);
	$.ajax({
		type:'POST',
		url:'api/about',
		data:content,
		success:function(){

			alert('Your Data has Been Sent');
		},
	});
}

function validate(content){
var errorCount = 0;
	for(var prop in content){

		if(!content[prop].length){

			errorCount+=1;

		}
	}
	if(errorCount>0){

		alert('IM SORRY YOU MUST FILL OUT ALL TEXT FIELDS');
		return false;
	}
	return true;
}
function saveEdit(editContent){
	$.ajax({
		type:'PUT',
		dataType:'json',
		url:'api/about/582c9fc764ca19789feed032',
		data:editContent,
		success:function(){

			alert('Your edit has Been Sent');
		},
	});
}

$( "#submit" ).click(function(event) {
	event.preventDefault();
	var content = {
		bio:$('#Bio').val(),
		origin:$('#Origin').val(),
		hobbies:$('#Hobbies').val(),
		dreamJob:$('#DreamJob').val(),
		codeHistory:$('#CodeHistory').val(),
		occupation:$('#Occupation').val(),
		currentMusic:$('#CurrentMusic').val()
	}
	if(validate(content)===true){

		save(content);
	}

	clearForm();

});

$("#edit").click(function(event){
	event.preventDefault();
	var editContent = {
		bio:$('#Bio').val(),
		origin:$('#Origin').val(),
		hobbies:$('#Hobbies').val(),
		dreamJob:$('#DreamJob').val(),
		codeHistory:$('#CodeHistory').val(),
		occupation:$('#Occupation').val(),
		currentMusic:$('#CurrentMusic').val()
	}

	if(validate(editContent)===true){

		saveEdit(editContent);
	}
	clearForm();
});





