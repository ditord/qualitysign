
document.addEventListener("DOMContentLoaded",()=>{
    const images = [document.getElementById('embed_image_1'),document.getElementById('embed_image_2'),document.getElementById('embed_image_3')]
    images.forEach((item,index)=>{
        item.addEventListener('click',(event)=>toggleEmbedActive(index,event))
    })
})

function toggleEmbedActive(id,event){
    const items = [document.getElementById('embed_body_1'),document.getElementById('embed_body_2'),document.getElementById('embed_body_3')]
    
    items.forEach((item)=>item.classList.remove('active'))
    if(items[id]){
        items[id].classList.toggle('active')
    }
    if(event)event.stopPropagation();
}
document.addEventListener('click',(event)=>{
    const items = [document.getElementById('embed_body_1'),document.getElementById('embed_body_2'),document.getElementById('embed_body_3')]
    let contain = false
    
    if(! items.some(item => item.contains(event.target))){
        toggleEmbedActive(-1)
    }
    
})

function copyEmbedCode(id,event){
    const textarea = document.getElementById(id)
    navigator.clipboard.writeText(textarea.textContent).then(()=>{
        event.target.classList.add('success')
        textarea.classList.add('success')
        setTimeout(()=>{
            event.target.classList.remove('success')
            textarea.classList.remove('success')
        },1000)
    })
    
}