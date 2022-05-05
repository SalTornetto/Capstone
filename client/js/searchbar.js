/*
Some of the code on this page is a snippit from CodingNepal, specifically this post here
https://www.codingnepalweb.com/search-bar-autocomplete-search-suggestions-javascript/
modifications were made to better suit my projects function/design
*/

let suggestions = [
    "Minecraft",
    "Fortnite",
    "GTA V",
    "Overwatch",
    "Skyrim",
    "Pokemon: Legends Arceus",
    "Kirby and the Forgotten Land",
    "ERROR" //This is just for demo purposes and brings you to spinning wheel simulator

];

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
            let check = linearSearch(userData.toLowerCase());
            if(check === -1){
                webLink = 'search'; 
                localStorage.setItem("searchLabel", `Oops! No results for  '${userData}'`);
               
            }else{
                clickerF(check);
                webLink = 'game_page'; 
            }
            linkTag.setAttribute("href", webLink);
            linkTag.click();
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
        // clickerF(linearSearch(selectData.toLowerCase()));      
        // webLink = 'game_page';
        // linkTag.setAttribute("href", webLink);
        // linkTag.click();
        let check = linearSearch(selectData.toLowerCase());
        if(check === -1){
            webLink = 'search'; 
            localStorage.setItem("searchLabel", `Oops! No results for  '${selectData}'`);
           
        }else{
            clickerF(check);
            webLink = 'game_page'; 
        }
        linkTag.setAttribute("href", webLink);
        linkTag.click();
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

// function clickerD(id){  
//     localStorage.setItem("id", id);

//     console.log("hello sal" + id);
// }
// //having issue trying to get the program to only show 3 results instead of all

function linearSearch(key){
    for(let i = 0; i < suggestions.length; i++){
        if(suggestions[i].toLowerCase() === key){
            return i
        }
    }
    return -1
}