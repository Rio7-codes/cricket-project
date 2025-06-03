function generateComputerChoice() {
    let rand=Math.round(Math.random()*3);
    if (rand>=0 && rand<=1) {
        return 'Bat';
    } else if (rand>1 && rand<=2) {
        return 'Ball';
    } else {
        return 'Stumps';
    }
}
function getResult(user,comp) {
    if (user==='Bat') {
        if (comp==='Bat') {
            return `It's a DRAW!!!`;
        } else if (comp==='Ball') {
            return 'You have WON!!!';
        } else if (comp==='Stumps') {
            return `You have LOST!!!`;
        }
    } else if (user==='Ball') {
        if (comp==='Bat') {
            return `You have LOST!!!`;
        } else if (comp==='Ball') {
            return `It's a DRAW!!!`;
        } else if (comp==='Stumps') {
            return 'You have WON!!!';
        }
    } else {
        if (comp==='Bat') {
            return `You have WON!!!`;
        } else if (comp==='Ball') {
            return 'You have LOST!!!';
        } else if (comp==='Stumps') {
            return `It's a DRAW!!!`;
        }
    }
}
function showResult(userMove,computerMove,result) {
    alert(`You chose ${userMove}. Computer has chosen ${computerMove}. ${result}`);
}
