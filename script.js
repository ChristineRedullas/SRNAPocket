document.getElementById('calculate-ebv').addEventListener('click', function() {
    const gender = document.getElementById('gender').value;
    let weight = parseFloat(document.getElementById('weight').value);
    const weightUnit = document.getElementById('weight-unit').value;
    

    if (gender === ""){
        alert("Please input gender.")
        return;
    }
    
    if (isNaN(weight) || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }



    // Convert weight to kg if in lb
    if (weightUnit === 'lb') {
        weight = weight * 0.453592;
    }
    
    // Calculate Estimated Blood Volume (EBV)
    let ebvAmount = 0;
    let ebvCalculationText = '';

    

    if (gender === 'female') {
        ebvAmount = weight * 65;
       
        ebvCalculationText = `Calculation: 65 mL/kg (for females)`;
    } else if (gender === 'male') {
        ebvAmount = weight * 75; 
        
        ebvCalculationText = `Calculation: 75 mL/kg (for males)`;
    }

    document.getElementById('ebv').textContent = ebvAmount.toFixed(2) + ' mL';
    document.getElementById('ebv-calculation').textContent = ebvCalculationText;

    
    //Lidocaine 
    const lidocaineMin = weight * 1; 
    const lidocaineMax = weight * 1.5; 
    document.getElementById('lidocaine').textContent = lidocaineMin.toFixed(2) + ' mg - ' + lidocaineMax.toFixed(2) + ' mg';

    //Propofol
    const propofolMin = weight * 1.5;
    const propofolMax = weight * 2.5;
    document.getElementById('propofol').textContent = propofolMin.toFixed(2) + ' mg - ' + propofolMax.toFixed(2) + ' mg';

    //Etomidate
    const etomidateMin = weight * 0.2;
    const etomidateMax = weight * 0.4;
    document.getElementById('etomidate').textContent = etomidateMin.toFixed(2) + ' mg - ' + etomidateMax.toFixed(2) + ' mg';

    //Ketamine
    const ketamineMin = weight * 1;
    const ketamineMax = weight * 2;
    document.getElementById('ketamine').textContent = ketamineMin.toFixed(2) + ' mg - ' + ketamineMax.toFixed(2) + ' mg';

    //Succinlycholine
    const succinlycholineMin = weight * 1;
    const succinlycholineMax = weight * 1.5;
    document.getElementById('succinlycholine').textContent = succinlycholineMin.toFixed(2) + ' mg - ' + succinlycholineMax.toFixed(2) + ' mg';

    //Rocuronium
    const rocuroniumMin = weight * 0.6;
    const rocuroniumMax = weight * 1.2;
    document.getElementById('rocuronium').textContent = rocuroniumMin.toFixed(2) + ' mg - ' + rocuroniumMax.toFixed(2) + ' mg';

    //Rocuronium Redose
    const rocuroniumredoseMin = weight * 0.1;
    const rocuroniumredoseMax = weight * 0.2;
    document.getElementById('rocuroniumredose').textContent = rocuroniumredoseMin.toFixed(2) + ' mg - ' + rocuroniumredoseMax.toFixed(2) + ' mg';

    //Neostigmine
    const neostigmineMin = weight * 0.02;
    const neostigmineMax = weight * 0.07;
    document.getElementById('neostigmine').textContent = neostigmineMin.toFixed(2) + ' mg - ' + neostigmineMax.toFixed(2) + ' mg';

});