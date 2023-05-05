function calculateSleepCycles() {
    const wakeUpTime = document.getElementById('wakeUpTime').value;
    const wakeUpTimeInMinutes = timeToMinutes(wakeUpTime);
    const sleepCycleLength = 90; // minutes
    const bedtimes = [];
    for (let i = 3; i <= 6; i++) {
        const bedtimeInMinutes = wakeUpTimeInMinutes - (i * sleepCycleLength);
        const bedtime = minutesToTime(bedtimeInMinutes);
        bedtimes.push(bedtime);
        document.getElementById(`bedtime${i}`).innerHTML = bedtime;
    }
}

function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return (hours * 60) + minutes;
}

function minutesToTime(minutes) {
    const hours = Math.floor(Math.abs(minutes) / 60);
    const minutesFormatted = Math.abs(minutes % 60).toString().padStart(2, '0');
    const meridiem = hours < 12 ? 'AM' : 'PM';
    const hoursFormatted = Math.abs((hours % 12) || 12);
    return `${hoursFormatted}:${minutesFormatted} ${meridiem}`;
}