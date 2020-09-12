// Code your solutions in this file
function writeCards (people, wishes){
    let answer = [];
    for (let i=0; i<people.length; i++){
        answer.push(`Thank you, ${people[i]}, for the wonderful ${wishes} gift!`);
    }
    return answer;
}

function countDown(num){
    let i = num;
    while (i>=0){
        console.log(i);
        i--;
    }

}