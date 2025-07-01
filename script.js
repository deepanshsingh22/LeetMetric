document.addEventListener("DOMContentLoaded",function(){
    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress ");
    const hardProgressCircle = document.querySelector(".hard-progress ");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-cards");

    function validateUsername(username){
        if(username.trim ===""){
            alert("Username cannot be empty!");
            return false;
        }

        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching){
            alert("Invalid Username format");
        }
        return isMatching;
    }

    async function fetchUserDetails(username){
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;

        try{
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const response = await fetch(url);

            if(!response.ok){
                throw new Error("Unable to fetch User Details")
            }

            const data = await response.json(response);

            console.log("Logging Data: ",data);

            displayUserData(data);
        }

        catch(error){
            statsContainer.innerHTML = `<p>No Data found</p>`
        }

        finally{
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }
    function updateProgress(solved, total, label, circle) {                                                                      
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }

    function displayUserData(data){
        //const totalQues = data.totalQuestions;
        // console.log(totalQues);
        const easySolved = data.easySolved;
        const totalEasy = data.totalEasy;

        updateProgress(easySolved,totalEasy,easyLabel,easyProgressCircle);

        updateProgress(data.mediumSolved,data.totalMedium,mediumLabel,mediumProgressCircle);

        updateProgress(data.hardSolved,data.totalHard,hardLabel,hardProgressCircle);
        

        

    }






    searchButton.addEventListener('click',function(){
        const username = usernameInput.value ;
        console.log("Logging username: ",username);
        if(validateUsername(username)){
            fetchUserDetails(username);
        }
    })









})


