// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


const topics = document.querySelector('.topics');

function topicTab(item) {
    const tab = document.createElement('div');

    tab.classList.add('tab');

    tab.textContent = item;

    return tab;
}


axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response =>{
    //console.log(response);

    const topicArray = response.data.topics;
    topicArray.forEach(item =>{
        topics.appendChild(topicTab(item))
    })
    
})
.catch(error =>{
    console.log(error)
})
