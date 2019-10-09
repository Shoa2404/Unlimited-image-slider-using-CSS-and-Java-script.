window.onscroll = () => {

    /*********** Scroll Func. ***********/

    let ws = window.pageYOffset;
    
    
    
    /************* Lines ************/
    
    
    let lines = document.getElementsByClassName('h-l');
    
    for (let i = 0; i < lines.length; i++){
        if (ws > lines[i].offsetTop + lines[i].offsetHeight + 5){
            lines[i].style.left = '0';
            lines[i].style.left = '0';
        }
        else
        {
            if (i % 2 == 0){
                lines[i].style.left = '-50vw';
            }
            else
            {
                lines[i].style.left = '100vw';
                
            }
        }
    }
    
    
    /************* Infos **************/
    
    
    let infos = document.getElementsByClassName('info-main-container');
    
    for (let i = 0; i < infos.length; i++){
        if (ws > infos[i].offsetTop + infos[i].offsetHeight/2){
            infos[i].style.clipPath = 'circle(100%)';
            
        }
        else
        {
            infos[i].style.clipPath = 'circle(10%)';
            
        }
    }
    
    
    /************* Gallery ************/
    
    
    let anim_img = document.getElementsByClassName('anim-img');
    
    for (let i = 0; i < anim_img.length; i++){
        if (ws > anim_img[i].offsetTop + anim_img[i].offsetHeight/2){
            anim_img[i].style.clipPath = 'inset(0%)';
        }
        else
        {
            anim_img[i].style.clipPath = 'inset(35%)';
        }
    }
    
    
    /************* Opinions ************/
    
    
    let opinions = document.getElementsByClassName('op-div');
    
    for (let i = 0; i < opinions.length; i++){
        if (ws > opinions[i].offsetTop + opinions[i].offsetHeight/2){
            opinions[i].style.clipPath = 'inset(0% 0% 0% 0%)';
        }
        else
        {
            opinions[i].style.clipPath = 'inset(0% 50% 0% 50%)';
        }
    }
    
    
    
}


window.onload = () => {
    
    
    /*********** SlideShow ***********/
    
    let slides = document.getElementsByClassName('title-content');
    
    for (let i = 0; i < slides.length; i++){
        if (i !== 0){
            slides[i].style.left = (i * innerWidth) + 10 + 'px';
         }
         else
         {
             slides[i].style.left = '10px';
         }
           
    }
    
    /*********** Animation ************/
    
    setInterval(animateSlides, 2000);
    
    function animateSlides(){
        
        for (let i = 0; i < slides.length; i++){
            
            
            
            
            if (slides[i].offsetLeft < 0){
            
                slides[i].style.transition = '0s';
                slides[i].style.zIndex = '0';
                slides[i].style.left = (slides.length - 2) * innerWidth + 10 + 'px';
                
                
            }
            else
            {
                slides[i].style.left = slides[i].offsetLeft - innerWidth + 'px';
                slides[i].style.transition = '0.5s ease-in-out';
                
            }
            
            
        }
        
    }
    
    let index = 1;
    let c = document.getElementsByClassName('c');
    
    
    setInterval(activeClass, 2000);
    
    function activeClass(){


        
        
        if (index == 0){
            c[index].classList.add('active');
            c[1].classList.remove('active');
            c[2].classList.remove('active');
        }
        
        else if (index == 1){
            c[index].classList.add('active');
            c[0].classList.remove('active');
            c[2].classList.remove('active');
        }
        
        else if (index == 2){
            c[index].classList.add('active');
            c[0].classList.remove('active');
            c[1].classList.remove('active');
        }
        
        
        
        
        if(index < c.length - 1){
            index++;
        }
        else
        {
            index = 0;
        }
        
        
    }
    
    
    /************ Sidebar *************/
    
    
    
    menu_icon.addEventListener('click', () => {
        sidebar.style.left = '0';
        hidden_div.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
        
    });

    hidden_div.addEventListener('click', () => {
        sidebar.style.left = '-65vw';
        hidden_div.style.visibility = 'hidden';
        hidden_div.style.transition = '0s';
        document.body.style.overflow = 'scroll';
    });
    
    
    
    /************* H-L **************/
    
    let lines = document.getElementsByClassName('h-l');
    
    for (let i = 0; i < lines.length; i++){
        if (i % 2 == 0){
            lines[i].style.left = '-50vw';
        }
        else
        {
            lines[i].style.left = '100vw';
        }
    }
    
    
    /************* Set Bg ************/
    
    
    let infos = document.getElementsByClassName('info-main-container');
    let opinions = document.getElementsByClassName('opinion');
    
    let colors = ['#8BC34A', '#03A9F4', '#FFC107', '#F83600', '#FF6F69'];
    
    for (let i = 0; i < infos.length; i++){
        infos[i].style.background = colors[i];
    }
    
    for (let i = 2; i >= 0; i--){
        opinions[i].style.background = colors[i];
    }
    
    
    /************** Loader *************/
    
    loader_holder.style.display = 'none';
    document.body.style.overflow = 'scroll';
    
}


