const b=document.querySelector('.burger'),m=document.getElementById('menu');
b.onclick=()=>b.setAttribute('aria-expanded',m.classList.toggle('open'));
m.onclick=e=>{if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded',false)}};
document.getElementById('yr').textContent=new Date().getFullYear();
document.getElementById('form').onsubmit=e=>{e.preventDefault();const f=e.target,n=document.getElementById('note');
if(!f.checkValidity()){n.textContent='Please fill in your name, a valid email and a message.';return}
const s=encodeURIComponent('Message from '+f.name.value),
t=encodeURIComponent(f.msg.value+'\n\nFrom: '+f.name.value+' ('+f.email.value+')');
location.href='mailto:thunderplayzz289@gmail.com?subject='+s+'&body='+t;
n.textContent='Opening your email app to send the message.';};
