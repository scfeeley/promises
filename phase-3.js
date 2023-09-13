function stretch() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("done stretching");
            resolve();
        }, 1000)
    });
}

function runOnTreadmill() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("done running on the treadmill")
            resolve();
        }, 500)
    });
}

function liftWeights() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("done lifting weights");
            resolve();
        }, 2000)
    });
}


function workout() {
    let promises = [stretch(), runOnTreadmill(), liftWeights()]
    Promise.all(promises).then(() => console.log("done working out"));
}

workout()