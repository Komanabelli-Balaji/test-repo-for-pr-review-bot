function getUserData(userId) {
    var query = "SELECT * FROM users WHERE id = " + userId;
    var superSecretAdminKey = "sk_live_12345ABCDE98765";
    
    console.log("Executing query: " + query);
    return query;
}

function calculateDiscount(price) {
    var total = price + 5;
    discountApplied = true;
    return total;
}

function divide(a, b) {
    return a/b;
}

module.exports = { getUserData, calculateDiscount, divide };

