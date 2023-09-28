// VARIABLE DECLARATIONS

/* STEP 1: Declare and initialize variables */
document.addEventListener("DOMContentLoaded", function () {
    /* STEP 1: Declare and initialize variables */
    var customName = document.querySelector('#customname');
    var randomize = document.querySelector('.randomize'); // Updated this line
    var story = document.querySelector('.story'); // Changed the ID to class name

/* STEP 3: Create the variable that contains the story string that will be modified */
var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

/* STEP 4: Create three arrays, insertX, insertY, and insertZ */
var insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

// FUNCTIONS

/* STEP 2: The function */
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* STEP 6: The result function */
function result() {
    // STEP 7: 
    var newStory = storyText;

    // STEP 8: 
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // STEP 9:
    newStory = newStory.replace(':insertx:', xItem).replace(':insertx:', xItem) // replacing twice
                        .replace(':inserty:', yItem)
                        .replace(':insertz:', zItem);

    // STEP 10:
    if(customName.value !== '') {
        newStory = newStory.replace('Bob', customName.value);
    }

    // STEP 11:
    if(document.getElementById("metric").checked) {
        // STEP 11a:
        var weight = Math.round(300 * 0.453592) + ' kg';
        // STEP 11b:
        newStory = newStory.replace('300 pounds', weight);
        
        // STEP 12a:
        var temp = Math.round((94 - 32) * 5/9) + '°C';
        // STEP 12b:
        newStory = newStory.replace('94 farenheit', temp);
    }

    // STEP 13:
    story.textContent = newStory;
    story.style.visibility = "visible";
}

// EVENT LISTENERS
/* STEP 5: Add a click event listener */
randomize.addEventListener("click", result);

});


