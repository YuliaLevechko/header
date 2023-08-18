// if (!localStorage.theme) localStorage.theme = "light";
// document.body.className = localStorage.theme;

// const toggle = document.querySelector('.switch-input[type="checkbox"]');

// toggle.onclick = () => {
//     document.body.classList.toggle("dark");

//     localStorage.theme = document.body.className || "light";
// }




//     const toggle = document.querySelector('.switch input[type="checkbox"]');
// let  storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
// if(storedTheme) {
//  document.documentElement.setAttribute('data-theme', storedTheme)
// }
// toggle.onclick = function() {
//     let  currentTheme = document.documentElement.getAttribute("data-theme");
//     let  targetTheme = "light";

//     if (currentTheme === "light") {
//         targetTheme = "dark";
//     }
//  document.documentElement.setAttribute('data-theme', targetTheme)
//     localStorage.setItem('theme', targetTheme);
// };



const toggle = document.querySelector('.switch-input[type="checkbox"]');

        function setTheme(themeName) {
            localStorage.setItem('theme', themeName);
            document.body.className = themeName;
        }

        function toggleTheme() {
            if (localStorage.getItem('theme') === "light") {
                setTheme("dark");
            } else {
                setTheme("light");
            }
        }

        (function () {
            if (localStorage.getItem('theme') === "light") {
                setTheme("light");
                document.getElementById('slider').checked = false;
            } else {
                setTheme("dark");
                document.getElementById('slider').checked = true;
            }
        })();







