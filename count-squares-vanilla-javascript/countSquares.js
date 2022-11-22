/**
 * Your goal is to implement this function.
 *
 * The count squares function takes 2 integers, a and b. It should then calculate the number of perfect squares which
 * exist between a and b.
 *
 * For example, if a is 1, and b is 26, then the function should return 5, because there are 5 perfect squares between 1
 * and 26:
 * 1 = 1 * 1
 * 4 = 2 * 2
 * 9 = 3 * 3
 * 16 = 4 * 4
 * 25 = 5 * 5
 *
 * Note that a and b are not necessarily in order - a may be less than b, or b may be less than a. Also, zero is a
 * perfect square.
 *
 * @param a One end of the range to test
 * @param b The other end of the range
 * @returns The number of perfect squares between a and b (inclusive).
 */

// function to check if a number is a perfect square
function isSquare(a) {
    return Number.isInteger(Math.sqrt(a))
}

function countSquares(a, b) {
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    
    //scenario 1: both a<0 and b <0: no perfect square
    if(max < 0) {
        return 0
    }
    /* otherwise, we have 2 scenarios
    1. both a and b are positive (>=0)
    2. one of a or b is negative
    take square root of the max number and round up
    */
    let sqrtMax = Math.floor(Math.sqrt(max))

    // scenario 2: both positives (incl zero)
    if(a>=0 && b>=0) {
        // if a === b, covering cases where a or b is and isn't a perfect square
        if(a === b) {
            // if a or b is a perfect square: 1 perfect square
            if(isSquare(a)) {
                return 1
            } else {
                // if a or b is not a perfect square: no perfect square
                return 0
            }
        }
        // if a !== b, 
        // if (sqrtMax < min) 
        if(sqrtMax < min) {
            return 0
        } else {
            // if (sqrtMax > min) 
            // add 1 to include min value
            return sqrtMax - min + 1
        }
    }

    // Scenario 3: one of a or b is negative, that means min will be negative, disregard the min value
    if((a>=0 && b<0) || (a<0 && b>=0)) {
        // add 1 to include zero 
        return sqrtMax + 1
    }

}

/**
 * The code below this point runs the tests that you see on the index.html page. You don't need to change anything below.
 */
function onload() {
    runTest(1, 0, 26, 6);
    runTest(2, 26, 0, 6);
    runTest(3, -1000, 26, 6);
    runTest(4, -1000, -1, 0);
    runTest(5, 4, 4, 1);
    runTest(6, 3, 3, 0);
    runTest(7, 0, 0, 1);
}

function runTest(testNum, a, b, expected) {
    const countSquaresResult = countSquares(a, b);
    const isPass = countSquaresResult === expected;
    const testResultText = isPass ? "Pass" : "Fail";

    document.getElementById("outputTest" + testNum).innerHTML = countSquaresResult;

    const resultTableCell = document.getElementById("resultTest" + testNum);
    resultTableCell.innerHTML = testResultText;

    if (isPass) {
        resultTableCell.classList.add("test-pass");
    } else {
        resultTableCell.classList.add("test-fail");
    }
}
