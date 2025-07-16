const intercepts = [
"LOC:43.7,19.2|SIG:A1B2C3|NOTE:Tkfzb uif tqpu mjlft opujoh qbsuz",
"LOC:34.1,45.3|SIG:X7Y8Z9|NOTE:Nfoubm jnqbjsnfou jousvejoh",
"LOC:22.0,90.5|SIG:L0L0L0|NOTE:Uifo uifz tbej uif xbset"
];

function parseIntercept(intercept) {
    let objectIntercept = {};

    const parts = intercept.split("|");

    for (let part of parts) {
        const [key, value] = part.split(":");
        objectIntercept[key] = value;
    }

    return objectIntercept;
}

console.log(parseIntercept(intercepts[0]));