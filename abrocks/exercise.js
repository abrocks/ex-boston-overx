var exercise = {};

exercise.salaries = null;
exercise.salary = null;

// load salary and data
exercise.load = function(salary, boston){
    exercise.salaries = boston.data;
    exercise.salary = salary;
    //salary is a number
};

// get salaries larger than given salary
exercise.findBiggerSalaries = function(){
    //var num_salaries = 0;
    //var dataLength = exercise.salaries.length;
    //for (var i = 0; i < dataLength; i++) {
      //  if(Number(exercise.salaries[i]) > salary){num_salaries += 1
        //}
        if(exercise.largerSalary (item) === "TRUE"){
            return exercise.salaries[i]
        ;}

   
    //return num_salaries;
    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a filtered list of salaries.
    //     Return salaries larger than exercise.salary
    //
    //     Example: salaries larger than 300K is 8
    // ---------------------------------------------------
};

exercise.largerSalary = function largerSalary(item){
    var item = exercise.salaries[i];
    dataLength = exercise.salaries.length;
    for (var i = 0; i < dataLength; i++) {return Boolean(item>salary)};
    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a boolean (true/false) if item
    //     is larger than exercise.salary
    // ---------------------------------------------------

};