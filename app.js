(function(){
const list=document.getElementById('list');
if(list && window.__teacherChunks){ list.innerHTML=window.__teacherChunks.join(''); }
const input=document.getElementById('search');
const clear=document.getElementById('clear');
const cards=[...document.querySelectorAll('.teacher')];
const none=document.getElementById('none');
function normalize(s){
return (s||'').toLocaleLowerCase('ru-RU').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ё/g,'е').trim();
}
function update(){
const q=normalize(input.value);
let visible=0;
for(const c of cards){
const found=!q || normalize(c.dataset.haystack).includes(q);
c.classList.toggle('hide', !found);
if(found) visible++;
}
none.classList.toggle('hide', visible!==0);
clear.hidden=!q;
}
input.addEventListener('input', update);
clear.addEventListener('click', ()=>{ input.value=''; update(); input.focus(); });
update();
})();