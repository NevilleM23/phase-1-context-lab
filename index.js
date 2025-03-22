/* Your Code Here */

function createEmployeeRecord([firstName, familyName, title, payPerHour]){
    return {
      firstName : firstName,
      familyName : familyName,
      title: title,
      payPerHour: payPerHour, 
      timeInEvents: [],
      timeOutEvents: [],
    }
} 
  
function createEmployeeRecords(arrayofArrays) {
      return arrayofArrays.map(employeeRecords => createEmployeeRecord(employeeRecords))
}  

function  createTimeInEvent(dateStamp){
    const [date,hour] = dateStamp.split(" ")
    const timeInEvent= {
        type : "TimeIn",
        date : date, 
        hour: parseInt(hour, 10)
    }
    
   this.timeInEvents.push(timeInEvent)
   return this
} 

function createTimeOutEvent(dateStamp){
    const [date, hour] = dateStamp.split(" ")
    const timeOutEvent= {
        type : 'TimeOut',
        date: date,
        hour: parseInt(hour, 10)
    }

    this.timeOutEvents.push(timeOutEvent)
    return this
}

 function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);

    const timeInHour = timeIn.hour;
    const timeOutHour = timeOut.hour;
    const hoursWorked = (timeOutHour - timeInHour) / 100;

    return hoursWorked;
} 

function wagesEarnedOnDate(date) {
    const hoursWorked = this.hoursWorkedOnDate(date);
    return hoursWorked * this.payPerHour;
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
} 

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employee) => totalPayroll + employee.allWagesFor(), 0);
}








/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

