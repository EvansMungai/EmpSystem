const  employeeController= require('../controllers/employeeController');

module.exports = (app) => {
    app.get('/employee', employeeController.homepage);
    app.get('/employee/assignedtasks', employeeController.showAssignedTasks);
}