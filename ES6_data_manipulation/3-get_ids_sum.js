import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(students) {
    return students.reduce((sum, student) => sum + student.id, 0);
}

  console.log(getStudentIdsSum(getListStudents()));