const menuBar = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2,nav3,nav4,nav5]

// Control Nav
function navAnimation(dir1, dir2){
    navItems.forEach((nav,i) => {
        nav.classList.replace(`slide-${dir1}-${i+1}`, `slide-${dir2}-${i+1}`)
    })
}

function toggleNav() {
    //Toggle our menu bars open/closed
    menuBar.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        // Animate In- Oerlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        // Animate - In 
        navAnimation('out', 'in')
    } else {
        // ANimate Out - Overlay
        overlay.classList.replace('overlay-slide-right','overlay-slide-left')
        // Animate Out - Nav Items
        navAnimation('in', 'out')
    }
}

// Event Listeners
menuBar.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav)
})