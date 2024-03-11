function sleepDebtCalculator(actual, ideal) {
    const debt = actual - ideal;
    if (debt >= 0) {
        console.log ("You got enough sleep!");
    } else {
        console.log ("You need more sleep!");
        const debtPerNight = Math.abs (debt / 7);
        console.log (`You should get ${debtPerNight} more hours of sleep each night this week, to make up for the total sleep debt.`);
    }
}

const actualSleepHours = 0;
const idealSleepHours = 8;

sleepDebtCalculator(actualSleepHours, idealSleepHours);