// const express = require('express');
// const externalModule = require('../logger/logger.js')
// const externalModule1 = require('../util/helper.js')
// const externalModule2 = require('../validator/formatter.js')

// const router = express.Router();

// router.get('/test-me', function (req, res) {

//     externalModule.problem1()
//     externalModule.welcome()

//     externalModule1.empty()
//     externalModule1.problem2()
//     externalModule1.printDate()
//     externalModule1.printMonth()
//     externalModule1.getBatchInfo()

//     externalModule2.empty()
//     externalModule2.problem3()
//     externalModule2.trim()
//     externalModule2.lowercase()
//     externalModule2.uppercase()
//     externalModule2.empty()



//     res.send('My first ever api!')
// });



module.exports = router;
const express = require('express');
const router = express.Router();
router.get("/miss-num", function(req, res) {
    let arr = [1, 2, 3, 5, 6, 7]
    let total = 0;
    for (vari in arr) {
        total += arr[i];
    }
    let lastDigital = arr.pop()
    let conseculativeSum = lastDigit(lastDigit + 1) / 2
    let lastDigit = arr.pop()
    letconsecutiveSum = consecutiveSum - total
    res.send({
        data: missingNumber
    });
});
router.get('/miss-num2', function(req, res) {
            let arr2 = [33, 34, 35, 37, 38]
            let len2 = arr2.length

            let total2 = 0;
            for (var i in arr2) {
                total2 += arr2[i]; //
            }
            let firstDigit2 = arr2[0]
            let lastDigit2 = arr2.pop()
            let consecutiveSum2 = (let2 + 1) * (firstDigit2 + lastDigit2) / 2
            let missingNumber2 = consecutiveSum2 - total12
            res.sen({ data: missingNumber2 });



            // });
            // module.exports = routers;