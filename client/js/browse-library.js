retrieveData();

function retrieveData(){
    //use ajax top get data
    $.ajax({
        url: 'http://localhost:5200' + '/read-records',
        type: 'get',
        success: function(response) {
            var data = JSON.parse(response);
            if(data.msg === "SUCCESS") {
                createSSdesciption(data.game);
            }else{
                console.log(data.msg);
            }
            
        },
        error: function(err){
            alert(err);
        }
    });
}

function createSSdesciption(data){
    var descriptionHTML,nameHTML, developerHTML = "";
    i=4;

    descriptionHTML = data[i].description;
    $('#SSdescription').html(descriptionHTML);

    nameHTML = data[i].game_name;
    $('#SSname').html(nameHTML);
    
    developerHTML = "Developer: " + data[i].developer;
    $('#SSdeveloper').html(developerHTML);

    genreHTML = "Genre: " + data[i].genre_name;
    $('#SSgenre').html(genreHTML);


    imageHTML = '<img class="card-img-top mb-5 mb-md-0" src="..' + data[i].Image_link + '" alt="' + data[i].game_name + '" />';
    $('#SSimage').html(imageHTML);
}