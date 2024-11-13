export default function createReportObject(employeesList) {
    return {
      allEmployees: { ...employeesList },
      getNumberOfDepartments(employeesLists) {
        return employeesLists.length;
      }
    };
  }