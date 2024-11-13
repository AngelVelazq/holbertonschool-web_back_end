export default function createReportObject(employeesList) {
    return {
      allEmployees: { ...employeesList },
      getNumberOfDepartments: function(employeesLists) {
        return employeesLists.length;
      }
    };
  }
