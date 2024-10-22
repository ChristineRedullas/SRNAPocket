document.getElementById('calculate-ebv').addEventListener('click', function() {
    const gender = document.getElementById('gender').value;
    let weight = parseFloat(document.getElementById('weight').value);
    const weightUnit = document.getElementById('weight-unit').value;
    
    // Convert weight to kg if in lb
    if (weightUnit === 'lb') {
        weight = weight * 0.453592;
    }
    
    // Calculate Estimated Blood Volume (EBV)
    let ebvAmount = 0;
    if (gender === 'female') {
        ebvAmount = weight * 65; // Females get 65mL per kg
    } else if (gender === 'male') {
        ebvAmount = weight * 75; // Males get 75mL per kg
    }
    document.getElementById('ebv').textContent = ebvAmount.toFixed(2) + ' mL';
    
    // Calculate Lidocaine Range
    const lidocaineMin = weight * 1; // 1mg per kg
    const lidocaineMax = weight * 1.5; // 1.5mg per kg
    document.getElementById('lidocaine').textContent = lidocaineMin.toFixed(2) + ' mg - ' + lidocaineMax.toFixed(2) + ' mg';
});