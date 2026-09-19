const form = document.getElementById("progressForm");

const studentNameInput = document.getElementById("studentName");
const courseNameInput = document.getElementById("courseName");
const completionInput = document.getElementById("completionPercentage");

const progressList = document.getElementById("progressList");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const studentName = studentNameInput.value;
    const courseName = courseNameInput.value;
    const completionPercentage = Number(completionInput.value);

    const progressData = {
        studentName: studentName,
        courseName: courseName,
        completionPercentage: completionPercentage
    };

    console.log("Sending data:", progressData);

    try {
        const response = await fetch("http://localhost:3000/progress", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(progressData)
        });

        const data = await response.json();

        console.log("Backend response:", data);

        responseMessage.textContent = data.message;

        form.reset();

    } catch (error) {
        console.log(error);

        responseMessage.textContent =
            "Something went wrong. Please try again.";
    }
});

async function fetchProgress() {
    try {
        const response = await fetch("http://localhost:3000/progress");

        const progressData = await response.json();

        console.log("Progress data:", progressData);

        progressList.innerHTML = "";

        progressData.forEach(function(progress) {

            const card = document.createElement("div");

            card.className = "progress-card";

            card.innerHTML = `
                <h3>${progress.studentName}</h3>
                <p>Course: ${progress.courseName}</p>
                <p>Completion: ${progress.completionPercentage}%</p>
                <p>Last Updated: ${new Date(progress.lastUpdated).toLocaleString()}</p>
            `;

            progressList.appendChild(card);
        });

    } catch (error) {
        console.log("Failed to fetch progress:", error);
    }
}

fetchProgress();