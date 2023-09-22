const scoreSpan = document.getElementsByClassName('score-span')[0];

class NoteSystem{
    nbNotes = 0;
    selected = -1;
    buttons = [];
    constructor(nbNotes){
        this.nbNotes = 5;
        for(let i = 0; i < this.nbNotes; i++){
            this.buttons.push(document.createElement('div'));
            this.buttons[i].classList.add('score-button');
            this.buttons[i].classList.add('circle');
            this.buttons[i].textContent = i + 1;
            this.buttons[i].addEventListener('click', () => {
                this.active(i);
            });
            scoreSpan.appendChild(this.buttons[i]);
        }
    }

    active(index){
        if(this.selected != -1){
            this.buttons[this.selected].classList.remove('active-score');
        }
        this.selected = index;
        this.buttons[this.selected].classList.add('active-score');
    }
}

var noteSystem = new NoteSystem(5);

//create Submit() function
function Submit(){
    if(noteSystem.selected == -1){
        alert('Please select a score');
        return;
    }
    document.querySelector('[id="eval-section"]').classList.remove('active-container');
    document.querySelector('[id="result-section"]').classList.add('active-container');

    document.querySelector('[id="given-note"]').textContent = noteSystem.selected + 1;
    document.querySelector('[id="nb-notes"]').textContent = noteSystem.nbNotes;
}
