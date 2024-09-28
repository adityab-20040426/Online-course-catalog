const courses = [
    { id: 1, name: "Java Programming", description: "Learn Java from scratch." },
    { id: 2, name: "Web Development", description: "Build websites using HTML, CSS, and JavaScript." },
    { id: 3, name: "Data Science", description: "Analyze data using Python." },
];

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("course-list")) {
        const courseList = document.getElementById("course-list");
        courses.forEach(course => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="course-details.html?id=${course.id}">${course.name}</a>`;
            courseList.appendChild(li);
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');

    if (courseId) {
        const course = courses.find(c => c.id == courseId);
        if (course) {
            // Course Details in the course-details.html
            if (document.getElementById("course-details")) {
                document.getElementById("course-details").innerHTML = `
                    <h2>${course.name}</h2>
                    <p>${course.description}</p>
                    <a href="enrollment.html?id=${course.id}">Enroll Now</a>
                `;
            }

            // Enrollment section
            if (document.getElementById("enrollment-details")) {
                document.getElementById("enrollment-details").innerHTML = `
                    <h2>${course.name}</h2>
                    <p>${course.description}</p>
                `;
                document.getElementById("enrollment-form").style.display = "block";
            }
        }
    }
});
