
let tdee = 3000
let calorieDeficit = tdee - 500;


function getActivityValue() {

    const genderValue = document.querySelector('input[name="gender"]:checked').value;
    const weightValue = parseFloat(document.getElementById("weight").value);
    const heightValue = parseFloat(document.getElementById("height").value);
    const ageValue = parseFloat(document.getElementById("age").value);
    const activityValue = parseFloat(document.getElementById("activity").value);
    let bmrSum;
    let tdeeSum;
    let tdeeLV1;
    let tdeeLV2;
    let tdeeLV3;
    let tdeeLV4;
    let tdeeLV5;
    let bmiStatus;
    let leftPercent;
    let weightToGain;
    let weightToLose;

    
    

    if (isNaN(genderValue) || isNaN(weightValue) || isNaN(heightValue) || isNaN(ageValue) || isNaN(activityValue)) {
        alert("กรอกข้อมูลให้ครบ")
        return;
    }

    let bmiSum = weightValue / Math.pow((heightValue / 100), 2);
    let weightMin = 18.5 * Math.pow(heightValue / 100, 2);
    let weightMax = 18.5 * Math.pow(heightValue / 100, 2);
    let PI = weightValue / Math.pow((heightValue / 100), 3);
 
    if (bmiSum <= 18.5) {
        bmiStatus = "ผอมเกินไป"
        leftPercent = 10;
    }
    else if (bmiSum > 18.5 && bmiSum <= 22.9) {
        bmiStatus = "น้ำหนักปกติ เหมาะสม"
        leftPercent = 40;
    }
    else if (bmiSum > 22.9 && bmiSum <= 24.9) {
        bmiStatus = "น้ำหนักเกิน";
        leftPercent = 60;
    } 
    else if (bmiSum > 24.9 && bmiSum <= 29.9) {
        bmiStatus = "อ้วนระดับ 1";
        leftPercent = 75;
    } 
    else {
        bmiStatus = "อ้วนระดับ 2";
        leftPercent = 90;
    }

    if (bmiSum < 18.5){
        let minWeight = 18.5 * Math.pow(heightValue / 100, 2);
        weightToGain = minWeight - weightValue;
        document.getElementById("weight-Gain").innerHTML = (weightToGain).toFixed(1).toLocaleString() + " kgs";
        document.getElementById("weight-Lose").innerHTML = "-";
    } else if (bmiSum > 25){
        let maxWeight = 25 * Math.pow(heightValue / 100, 2);
        weightToLose = weightValue - maxWeight;
        document.getElementById("weight-Gain").innerHTML = "-"; 
        document.getElementById("weight-Lose").innerHTML = (weightToLose).toFixed(1).toLocaleString() + " kgs";
    } else if (bmiSum >= 18.5 || bmiStatus <= 25){
        document.getElementById("weight-Gain").innerHTML = " - "; 
        document.getElementById("weight-Lose").innerHTML = " - ";
    }

    if (genderValue == 1) {
        bmrSum = 88.362 + (13.397 * weightValue) + (4.799 * heightValue) - (5.677 * ageValue)
    }
    else if (genderValue == 0) {
        bmrSum = 447.593 + (9.247 * weightValue) + (3.098 * heightValue) - (4.330 * ageValue)
    }

    

    tdeeSum = bmrSum * activityValue
    tdeeLV1 = tdeeSum * 0.56;
    tdeeLV2 = tdeeSum * 0.78;
    tdeeLV3 = tdeeSum * 0.89;
    tdeeLV4 = tdeeSum * 1.00;
    tdeeLV5 = tdeeSum * 1.11;
    tdeeLV6 = tdeeSum * 1.22;
    tdeeLV7 = tdeeSum * 1.44;


    document.getElementById("bmi").innerHTML = (bmiSum).toFixed(1).toLocaleString() + " kg/m<sup>2</sup>";
    document.getElementById("bmr").innerHTML = Math.round(bmrSum).toLocaleString() + " แคลอรี่ต่อวัน";
    document.getElementById("weightGood").innerHTML = (weightMin).toFixed(1).toLocaleString() + " kg/m<sup>2</sup> - " + (weightMax).toFixed(1).toLocaleString()+ " kg/m<sup>2</sup>";
    document.getElementById("piStatus").innerHTML = (PI).toFixed(2).toLocaleString() + " kg/m<sup>3</sup>";
    document.getElementById("bmiGood").innerHTML = "18.5 kg/m<sup>2</sup> - 25 kg/m<sup>2</sup>";
    document.getElementById("bmiID").innerHTML = bmiStatus;
    document.getElementById("tdee").innerHTML = Math.round(tdeeSum).toLocaleString() + " cal/day";
    document.getElementById("tdee1").innerHTML = Math.round(tdeeLV1).toLocaleString() + " cal/day";
    document.getElementById("tdee2").innerHTML = Math.round(tdeeLV2).toLocaleString() + " cal/day";
    document.getElementById("tdee3").innerHTML = Math.round(tdeeLV3).toLocaleString() + " cal/day";
    document.getElementById("tdee4").innerHTML = Math.round(tdeeLV4).toLocaleString() + " cal/day";
    document.getElementById("tdee5").innerHTML = Math.round(tdeeLV5).toLocaleString() + " cal/day";
    document.getElementById("tdee6").innerHTML = Math.round(tdeeLV6).toLocaleString() + " cal/day";
    document.getElementById("tdee7").innerHTML = Math.round(tdeeLV7).toLocaleString() + " cal/day";
    document.getElementById('bmiPointer').style.left = leftPercent + '%';


}

function calculateBMI() {


}


// function getActivityValue() {
//     const selected = document.querySelector('input[name="activity"]:checked');
//     if (selected) {
//       alert("ค่าที่เลือกคือ: " + selected.value);
//       // หรือ return selected.value เพื่อใช้คำนวณต่อ
//     } else {
//       alert("กรุณาเลือกกิจกรรมก่อน");
//     }
//   }