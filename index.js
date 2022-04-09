const employee = {
    streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmp = {...employee}

    newEmp[key] = value

    return newEmp
}
console.log(updateEmployeeWithKeyAndValue({}, "name", "Sam"));

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    const newObj = {...employee}
    return newObj
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue({}, 'streetAddress', '12 Broadway'));

function deleteFromEmployeeByKey(employee, key='name'){
    const newEmployee = {...employee}
    delete newEmployee[key];
    return newEmployee
}
console.log(deleteFromEmployeeByKey({}));

function destructivelyDeleteFromEmployeeByKey(employee, key='name'){
    employee[key] = "value";
    const newEmployee = {...employee}
    delete newEmployee[key]
    delete employee[key]
    return employee
}
console.log(destructivelyDeleteFromEmployeeByKey({}));

