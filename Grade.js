let marks = [88, 0, 9, 8];




console.log(calculateGrade(marks));

function calculateGrade(marks) {

    let average = calculateAvg(marks);
    //console.log(average);

    if (average < 60)
        return "F";
    if (average < 70)
        return "D";
    if (average < 80)
        return "C";
    if (average < 90)
        return "B";
    else
        return "A";


    // switch (true) {
    //     case average < 60:
    //         return "F";
    //         break;
    //     case average < 70:
    //         return "D";
    //         break;
    //     case average < 80:
    //         return "C";
    //         break;
    //     case average < 90:
    //         return "B";
    //         break;
    //     default:
    //         return "A";
    // }

    
}

function calculateAvg(marks){
    let sum = 0;

    for (let i of marks) {
      sum += i;
    }
  
    return sum / marks.length;
}
