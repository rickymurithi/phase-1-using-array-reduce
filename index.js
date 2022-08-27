const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code!
var totalBatteries = batteryBatches.reduce(function(totals, accumulator) {
    return (totals + accumulator);
})
