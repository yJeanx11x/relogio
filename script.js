let horas=document.getElementById('horas')
let minutos=document.getElementById('minutos')
let segundos=document.getElementById('segundos')


setInterval(()=>{
        const tempo=new Date()
        const temp1=tempo
        horas.innerHTML=`${temp1.getHours()}`,
        minutos.innerHTML=`${temp1.getMinutes()}`,
        segundos.innerHTML=`${temp1.getSeconds()}`

        
},1000)


