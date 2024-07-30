// Sample data (replace with actual data) const students = [
    { id: 1, name: 'John Doe', age: 20, major: 'Computer Science' },
    // ...other students
    ];
    const courses = [
    { id: 1, title: 'Introduction to Programming', instructor: 'Dr. Smith' },
    // ...other courses
    ];
    // Populate student list function populateStudentList() { const studentList = document.getElementById('student-list'); studentList.innerHTML = '';
    students.forEach(student => {
    const studentItem = document.createElement('div');
    studentItem.classList.add('student-item'); studentItem.innerHTML = `
    <h3>${student.name}</h3>
    <p>Age: ${student.age}</p>
    <p>Major: ${student.major}</p>
    `;
    studentList.appendChild(studentItem);
    });
    }
    // Populate course list function populateCourseList() { const courseList = document.getElementById('course-list'); courseList.innerHTML = '';
    courses.forEach(course => {
    const courseItem = document.createElement('div');
    courseItem.classList.add('course-item'); courseItem.innerHTML = `
    <h3>${course.title}</h3>
    <p>Instructor: ${course.instructor}</p>
    `;
    courseList.appendChild(courseItem);
    });
    }
    // Load data on page load window.onload = function() {
    populateStudentList();
    populateCourseList();
    };
    