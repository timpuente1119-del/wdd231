// This module is used for modals

const modal = document.querySelector("#tdpCourseDetails");


export function showCourse(course){
    modal.innerHTML = `
        <button class="dialog-btn" id="close"></button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Description</strong>: ${course.description}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p><strong>Technology</strong>: ${course.technology}</p>
    `;
    modal.showModal();
    const closeModal = document.querySelector(".dialog-btn");
    closeModal.addEventListener('click',() => {
        modal.close();
    });

};
modal.addEventListener('click', (event) => {
    if (event.target === modal){
        modal.close();
    }
});