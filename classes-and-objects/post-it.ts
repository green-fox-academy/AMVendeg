/* Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"
*/

// I am not sure the task say, I practice to create class object or I need to create new PostIt, new instance

class PostItExample {
    backgroundColor: 'turquoise';
    textOnIt: 'thjis is the text on the postit';
    textColor: 'black';
}

class postIExample1 {
    backgroundColor: 'orange';
    textOnIt: 'Idea 1';
    textColor: 'blue';
}

class postItExample2 {
    backgroundColor: 'pink';
    textOnIt: 'Awesome';
    textColor: 'black';
}

class postItExample3 {
    backgroundcolor: 'yellow';
    textOnIt: "Superb";
    textColor: 'green';
}


// // I am not sure the task say, I practice to create class object or I need to create new PostIt, new instance

class PostIt {
    backgroundColor: string;
    textOnIt: string;
    textColor: string;

    constructor (backgroundColor: string, textOnIt: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.textOnIt = textOnIt;
        this.textColor = textColor;
    }
}

let postitmyversion = new PostIt('turquoise', 'This is on the post it', 'white');

let postitGreenfox1 = new PostIt('orange', 'Idea 1', 'blue');
let postitGreenfox2 = new PostIt('pink', 'Awesome', 'black');
let postitGreenfox3 = new PostIt('yellow', 'Superb', 'green');
