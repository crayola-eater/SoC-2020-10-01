# Birmingham Function Hospital

Below, we have a ward of poorly functions that need your attention, stat. 🏥 Channel your inner House, M.D. and fix the bugs in the functions below. 🦠💊💉 Remember that you can call your functions below where they're defined to test that your fixes cured what ailed them! 🩺

## Tasks:

👉 1. Fix the greet function so that it takes in a string as a parameter called name and logs the message correctly in the console using that name parameter. If no name is specified, have the function use the string "doctor" instead.

```js
const function = greet (
    let name = name;
    console.log('Hello, {name}!');
)
```

👉 2. Fix the greetAgain function so that it's a *fat arrow* function that takes in a string as a parameter called name and logs the message correctly in the console. Like the function above, if no name is specified, have the function use the string "doctor" instead.

```js
function greetAgain (name) => {
    let name = console.log("Hello again, {name}!")
}
```

👉 3a. Fix the areTheyPrepped function so that it takes two arguments (a string called name and a boolean called isScrubbed). It should then first log the message in the console correctly and then return the boolean that was handed in as the isScrubbed parameter.

👉 3b. Then make sure the function is called correctly and stored as the doctorStatus variable.

```js
function areTheyPrepped("name", "isScrubbed")
    let name = "name";
    let isScrubbed = "isScrubbed";
    return isScrubbed;
    if isScrubbed = true {
        console.log('$(name) is prepped!')
    } if else {
        console.log('Scrub up, $(name)!')
    }
}

let doctorStatus() = areTheyPrepped(Tony = true)
```

👉 4a. Fix the showRota function so that the function takes in an array as a parameter called onDuty. The function should then create an unordered list element. It should then append each doctor's name in the array to this unordered list element as a list item element.

👉 4b. Call the function below where you've defined it, using the array of doctors' names provided (todaysRota).

```js
function showRota([onDuty]) (
    const ul = DOM.querySelectorAll(li)
    const li = DOM.querySelector('ul');
    for (const i = onDuty.length, i < 0, i++) 
        li.innerText(onDuty.i)
        li = ul.appendChild
    }
)

let todaysRota = ['Dr. Chris', 'Dr. Ben', 'Dr. Mell', 'Dr. Tao', 'Dr. Liz']
```

🌟 See the bonus activities for this task below once you finish the rest of the tasks!

👉 5a. Fix the doSurgery function so that the function takes in as parameters two object properties (name, bodyPart) destructured in place from an object it's handed as an argument.

👉 5b. Call the function twice below where you've defined it, handing in the two objects provided (patient1, patient2). You should a) hand in the whole object and b) not make any changes to the objects themselves, and the function should log the correct message in the console both times.

```js
function doSurgery(name, bodyPart) {
    console.log("Operated on {name}'s {bodyPart}")

const patient1: {name: 'Terry', preexistingCondition: 'lethargy', bodyPart: 'leg', allergies: ['penicillin', 'iodine'], guardian: 'Mell'}

const patient2: {name: 'Darren', age: 63, symptoms: ['fuzziness', 'insomnia'], guardian: 'Mell', bodyPart: 'ears'}
```

👉 6a. Fix the examine function so that the function takes in a specimen and returns a string with 🔬 in front of that specimen (i.e. '🔬🦠').

👉 6b. Now fix the line where you use your function to map over each item in the unexaminedSpecimens array and create a new array, examinedSpecimens, where each of the specimen strings from the original unexaminedSpecimens array now has 🔬 in front of it.

```js
function examine = specimen = {
    '🔬'+'specimen'
}

let unexaminedSpecimens = ['🦠', '🧫', '⚗️', '🧬']

let examinedSpecimens = specimen.map(examine(specimen))
```

## Bonus:

🌟 Refactor task 4 to create a helper function that creates a list item and changes its inner text to whatever's handed into this function. Use this function in the showRota function.

🌟 Replace the for loop in task 4 with an array method so that the function still does the same thing that it did with the for loop.

🌟 Do some further experiments with task 6, experimenting with other array methods. Practice handing anonymous functions to these methods.