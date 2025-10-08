window.onload = pagelond;

var menu = null
var sidebar = null
var closesidebar = null
var showsidebar = null
var sidebarIsOpen = fales

function hideshowsidebar(){
    if(window.innerWidth > 560){
        showsidebar.style.display = 'none'
    }
    else if(!sidebarIsOpen){
        showsidebar.style.display = 'flex'
    }
}

function pagelond(){
    menu = document.getElementById('menu')
    sidebar = document.getElementById('side-menubar')
    closesidebar = document.getElementById('closesidebar')
    showsidebar = document.getElementById('showsidebar')
    setInterval(hideshowsidebar, 50);
    initbtn()
}

function initbtn(){
    showsidebar.addEventListener("click" , () => {
        sidebar.style.display = 'flex'
        showsidebar.style.display = 'none'
        sidebarIsOpen = true
    })
    closesidebar.addEventListener("click" , () =>{
        sidebar.style.display = 'none'
        showsidebar.style.display = 'flex'
        sidebarIsOpen = fales

        if(window.innerWidth > 560){
            showsidebar.style.display = 'none'
        }
    })
}



