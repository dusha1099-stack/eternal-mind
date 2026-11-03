const places = {
  yol: {title:"Ёлын ам", text:"Говийн дундах сэрүүн хавцал. Өндөр хад, нарийн жим, улирлаас хамааран тогтох мөс нь энэ газрын онцгой уур амьсгалыг бүрдүүлнэ."},
  steppe: {title:"Уудам тал", text:"Тэнгэр газар нийлсэн мэт харагдах Монголын тал нутаг. Алсын зам, салхи, нам гүмийг мэдрэх аяллын эхлэл."},
  mountain: {title:"Өндөр уулс", text:"Монголын өндөрлөг бүсийн оргил, уулын зам, байгалийн сүр хүчийг нээх аяллын чиглэл."}
};
const detail=document.getElementById("placeDetail");
document.querySelectorAll("[data-place]").forEach(btn=>btn.addEventListener("click",()=>{
  const p=places[btn.dataset.place]; document.getElementById("detailTitle").textContent=p.title;
  document.getElementById("detailText").textContent=p.text; detail.hidden=false;
  detail.scrollIntoView({behavior:"smooth",block:"start"});
}));
document.getElementById("closeDetail").addEventListener("click",()=>{detail.hidden=true;document.getElementById("discover").scrollIntoView({behavior:"smooth"});});
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}
let installPrompt=null;const installBtn=document.getElementById("installBtn");
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();installPrompt=e;installBtn.hidden=false;});
installBtn.addEventListener("click",async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;installBtn.hidden=true;});
