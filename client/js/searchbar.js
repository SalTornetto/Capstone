//Playing around with search bar


let suggestions = [
    "Minecraft",
    "Fortnite",
    "GTA V",
    "Overwatch",
    "Skyrim",
    "Pokemon: Legends Arceus",
    "Potter",
    "Polymer",
    "Popcorn"

];


// getting all required elements
// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            // Set webLink to game_page and then find out if what they typed is in the array. if yes send them to the page if no send them to a new page titled search
            // userData = userData.toLowerCase();


            // webLink = `https://www.google.com/search?q=${userData}`;
           clickerF(4);
            webLink = 'game_page';
            linkTag.setAttribute("href", webLink);
            linkTag.click();
            
            console.log("this one");
        }//end onclick
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); 
        showSuggestions(emptyArray);
       
        let allList = suggBox.querySelectorAll("li"); 
         
        //for (let n = 0; n < 2; n++){}
        for (let i = 0; i < allList.length; i++) { 
            
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); 
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        //make sure to copy all code from the other section to both to make sure it works properly
        // linearSearch(selectData)
        clickerF(linearSearch(selectData));      
        webLink = 'game_page';
        linkTag.setAttribute("href", webLink);
        linkTag.click();
        console.log("yo dawg")
    }//end onclick
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else if(list.length >= 3){
        let maxLength = 3;
        let newArray = [];
        for (var n = 0; n < maxLength; n++){
            newArray.push(list[n]);
        }
        listData = newArray.join('');
    }
    else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

function clickerD(id){  
    localStorage.setItem("id", id);

    console.log("hello sal" + id);
}
//having issue trying to get the program to only show 3 results instead of all

function linearSearch( key){
    for(let i = 0; i < suggestions.length; i++){
        if(suggestions[i] === key){
            return i
        }
    }
    return -1
}