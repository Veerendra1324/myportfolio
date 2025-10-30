// Removed particle animation for static background
const themeToggle=document.getElementById('theme-toggle');
themeToggle?.addEventListener('click',()=>{
  document.documentElement.classList.toggle('light-mode');
  themeToggle.textContent=document.documentElement.classList.contains('light-mode')?'☀️':'🌙';
});
document.getElementById('menu-toggle')?.addEventListener('click',()=>{
  document.querySelector('.nav-links')?.classList.toggle('open');
});
const scrollBtn=document.getElementById('scroll-top');
scrollBtn?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
const cursor=document.querySelector('.cursor');
document.addEventListener('mousemove',e=>{
  if(cursor){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';}
});
