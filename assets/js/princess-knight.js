(function(){
  // Lazy-load iframe when poster is clicked
  function onClick(e){
    var el = e.target.closest && e.target.closest('.iframe-poster');
    if(!el) return;
    var src = el.getAttribute('data-src');
    if(!src) return;
    var parent = el.parentElement;
    var iframe = document.createElement('iframe');
    iframe.className = 'absolute inset-0 w-full h-full';
    iframe.loading = 'lazy';
    iframe.src = src;
    iframe.setAttribute('allow', 'fullscreen');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('webkitallowfullscreen', '');
    iframe.setAttribute('mozallowfullscreen', '');
    parent.appendChild(iframe);
    el.remove();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('click', onClick);
  } else {
    document.addEventListener('click', onClick);
  }
})();
