let olhos=[...document.getElementsByClassName("pupila")]

window.addEventListener("mousemove",(enveto)=>{
    olhos.forEach((olho)=>{
        let olhoRect=olho.parentElement.getBoundingClientRect()
        let olhoX=olhoRect.left + olhoRect.width / 2
        let olhoY = olhoRect.top + olhoRect.height / 2;

        let deltaX=enveto.clientX - olhoX
        let deltaY=enveto.clientY - olhoY

        let angle=Math.atan2(deltaY,deltaX)

        let descolamentoX=Math.cos(angle)*30
        let descolamentoY=Math.sin(angle)*30


        olho.style.transform=`translate(${descolamentoX}px, ${descolamentoY}px)`
    })
})

