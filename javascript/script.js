console.log('its working')

let theme= localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}


let themeDots = document.getElementsByClassName('theme-dot')

for(var i=0;themeDots.length>i;i++){
    themeDots[i].addEventListener('click',function(){
       let mode = this.dataset.mode
        console.log('Option click',mode)
        setTheme(mode)
    })
}

function setTheme(mode){
        
    if(mode=='blue'){
        document.getElementById('theme-style ') .href = '/css/default.css'
    }
    if(mode=='green'){
        document.getElementById('theme-style ') .href = '/css/green.css'
    }
    if(mode=='light'){
        document.getElementById('theme-style ') .href = '/css/white.css'
    }
    if(mode=='pink'){
        document.getElementById('theme-style ') .href = '/css/pink.css'
    }


    localStorage.setItem('theme',mode)

}

