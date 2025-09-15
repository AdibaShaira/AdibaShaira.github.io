// Dark mode toggle + last updated + year
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);
  const light = () => { root.setAttribute('data-theme','light'); localStorage.setItem('theme','light'); btn.textContent='🌙 Dark'; btn.setAttribute('aria-pressed','false'); };
  const dark = () => { root.setAttribute('data-theme','dark'); localStorage.setItem('theme','dark'); btn.textContent='☀️ Light'; btn.setAttribute('aria-pressed','true'); };
  btn.addEventListener('click', ()=>{
    const cur = root.getAttribute('data-theme') || 'light';
    (cur==='light'?dark:light)();
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  const d = new Date(document.lastModified);
  document.getElementById('lastUpdated').textContent = d.toLocaleDateString(undefined, {year:'numeric', month:'short', day:'2-digit'});
})();