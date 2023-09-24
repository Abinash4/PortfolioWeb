const circles = document.querySelectorAll('.circle');

// Add a class to trigger the animation
setTimeout(() => {
    circles.forEach((circle, index) => {
        circle.classList.add('rotate');
    });
}, 100);


document.addEventListener("DOMContentLoaded", function () {
    const circle = document.querySelector(".circle");
    const divs = document.querySelectorAll(".circular-div");
    const totalDivs = divs.length;
    const degreesPerDiv = -360 / totalDivs;
    let currentAngle = 0;

    // Function to update the div positions and apply animations
    function updateDivPositions() {
        currentAngle += degreesPerDiv;

        divs.forEach((div, index) => {
            const newAngle = currentAngle + index * degreesPerDiv;
            const x = 468 * Math.cos((newAngle - 90) * (Math.PI / 180));
            const y = 273 * Math.sin((newAngle - 90) * (Math.PI / 180));
            
            const isVisible = newAngle >= 180 && newAngle <= 360 ? true:false;
            
            div.style.transition = "transform 3s ease-in-out, opacity 2s ease-in-out";
            div.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
            div.style.animation= "fadeOut 3s ease-in ";
            //div.style.opacity = 1; // Apply fade-in effect (change opacity to 1);
            //div.style.opacity = isVisible==true ? 1 : 0 +"!important"; 
            if (isVisible) {
                div.style.opacity = 1; // Div is visible
            } else {
                div.style.opacity = 0; // Div is hidden
            }
        });

        setTimeout(() => {
            divs.forEach((div) => {
                div.style.transition = "";
                 div.style.animation= "fadeIn 2s ease-in";
            });
        }, 3000); // Remove the transition after 2 seconds (animation duration)
    }

    // Call the function initially to set up the positions and animations
    updateDivPositions();

    // Set an interval to update the div positions and apply animations every 3 seconds
    setInterval(updateDivPositions, 4000);
});


// document.addEventListener("DOMContentLoaded", function () {
//     const circle = document.querySelector(".circle");
//     const divs = document.querySelectorAll(".circular-div");
//     const totalDivs = divs.length;
//     const degreesPerDiv = 360 / totalDivs;
//     let currentAngle = 0;

//     // Initialize the div positions
//     divs.forEach((div, index) => {
//         const newAngle = currentAngle + index * degreesPerDiv;
//         const x = 135 * Math.cos((newAngle - 90) * (Math.PI / 180));
//         const y = 135 * Math.sin((newAngle - 90) * (Math.PI / 180));

//         div.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
//         div.style.animation= "fadeIn 2s ease-in-out";
//         div.style.animation= "fadeIn 2s ease-in-out";
//     });

//     setInterval(() => {
//         currentAngle += degreesPerDiv;

//         divs.forEach((div, index) => {
//             const newAngle = currentAngle + index * degreesPerDiv;
//             const x = 135 * Math.cos((newAngle - 90) * (Math.PI / 180));
//             const y = 135 * Math.sin((newAngle - 90) * (Math.PI / 180));

//             div.style.transition = "transform 2s ease-in-out, opacity 1s ease-in-out";
//             div.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
//             div.style.opacity = 1; // Apply fade-in effect (change opacity to 1);
//             div.style.animation = "fadeIn 2s ease-in-out";
//         });

//         setTimeout(() => {
//             divs.forEach((div) => {
//                 div.style.animation = "fadeIn 2s ease-in-out";
//                 div.style.transition = "";
//             });
//         }, 2000); // Remove the transition after 2 seconds (animation duration)
//     }, 3000); // Move the divs every 3 seconds
// });





// document.addEventListener("DOMContentLoaded", function () {
//     const circle = document.querySelector(".circle");
//     const divs = document.querySelectorAll(".circular-div");
//     const totalDivs = divs.length;
//     const degreesPerDiv = 360 / totalDivs;
//     let currentAngle = 0;

//     setInterval(() => {
//         currentAngle += degreesPerDiv;

//         divs.forEach((div, index) => {
//             const newAngle = currentAngle + index * degreesPerDiv;
//             const x = 135 * Math.cos((newAngle - 90) * (Math.PI / 180));
//             const y = 135 * Math.sin((newAngle - 90) * (Math.PI / 180));

//             div.style.transition = "transform 2s ease-in-out";
//             div.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
//         });

//         setTimeout(() => {
//             divs.forEach((div) => {
//                 div.style.transition = "";
//             });
//         }, 2000); // Remove the transition after 2 seconds (animation duration)
//     }, 3000); // Move the divs every 3 seconds
// });

