/* Ismlar va matnlarni shu yerda o'zgartiring */
var FAMILY=[
 {n:"Bobom",r:"Uyimizning kattasi",t:"Siz bilan har kunimiz barakalidir."},
 {n:"Buvim",r:"Uyimizning parisi",t:"Sizning har so'zingizda mehr bor."}
 {n:"Dadam",r:"Oilamizning tayanchi",t:"Sizning mehnatingiz va sabringiz bizga doim o‘rnak."},
 {n:"Onam",r:"Uyimizning yuragi",t:"Sizning duoyingiz va mehringiz bilan hammamiz kuchlimiz."},
 {n:"Katta ukam",r:"Ko'makchim",t:"Har doim yordaming uchun rahmat."},
 {n:"Katta ukam",r:"Ikkinchi ko'makchim",t:"Doim quvnoq va xushchaqchaq bo'lgansan."},
 {n:"Singlim",r:"Uyimizning quvonchi",t:"Sening kulginging uyimizni yoritadi."},
 
];
var THANKS=[
 "Rahmat, mening yonimda bo‘lganingiz uchun.",
 "Sizlar bo‘lganingiz uchun men hech qachon yolg‘iz emasman.",
 "Har bir qiyin kunimda yonimda turganingiz uchun rahmat.",
 "Sizlardan o‘rgangan mehr va sabr eng katta boyligim.",
 "Oilam borligi uchun o‘zimni juda baxtli his qilaman."
];
var box=document.getElementById("members");
FAMILY.forEach(function(p){
 var d=document.createElement("div");d.className="m rv";d.style.transitionDelay=(box.children.length*.12)+"s";
 d.innerHTML="<b></b><span></span><p></p>";
 d.children[0].textContent=p.n;d.children[1].textContent=p.r;d.children[2].textContent=p.t;
 box.appendChild(d);
});
var i=-1,thx=document.getElementById("thx");
function hearts(el){var r=el.getBoundingClientRect();for(var k=0;k<7;k++){var h=document.createElement("div");h.className="heart";h.textContent=["❤","💛","💙"][k%3];h.style.left=(r.left+r.width/2+(Math.random()*60-30))+"px";h.style.top=r.top+"px";h.style.setProperty("--dx",(Math.random()*80-40)+"px");h.style.animationDelay=(k*.06)+"s";document.body.appendChild(h);setTimeout(function(x){x.remove()},1900,h);}}
function next(){i=(i+1)%THANKS.length;thx.textContent=THANKS[i];hearts(document.getElementById("more"));}
function confetti(){var c=["#e9a63b","#b3263e","#2a9d9f","#1f2a5a"];for(var k=0;k<60;k++){var e=document.createElement("div");e.className="piece";e.style.left=(Math.random()*100)+"vw";e.style.background=c[k%4];e.style.setProperty("--dx",(Math.random()*160-80)+"px");e.style.animationDuration=(2+Math.random()*2)+"s";e.style.animationDelay=(Math.random()*.5)+"s";document.body.appendChild(e);setTimeout(function(x){x.remove()},5000,e);}}
function reveal(){var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target);}});},{threshold:.15});document.querySelectorAll(".rv").forEach(function(n){io.observe(n);});}
document.getElementById("more").onclick=next;
document.getElementById("open").onclick=function(){
 var cv=document.getElementById("cover");cv.classList.add("go");confetti();
 setTimeout(function(){cv.style.display="none";var s=document.getElementById("site");s.style.display="block";s.className="on";window.scrollTo(0,0);reveal();},800);
};
