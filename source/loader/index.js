const dependencies = {
  'ASAP-TIME': 'time.min.js',
}

window.addEventListener('load', () => {
  const source = window.asapSource || `${window.location.protocol}//unpkg.com/asap-components/lib/`
  const asapElements = Array.from(document.getElementsByTagName('*')).filter(e => e.tagName?.startsWith('ASAP-'));
  
  asapElements.forEach(element => {
    const tagName = element.tagName;
    const scriptId = `asap-script-${tagName}`;
    if (dependencies[tagName] && !document.getElementById(scriptId)) {
      const sc = document.createElement('script');
      const url = `${source}${dependencies[tagName]}`; 
      sc.src = url;
      sc.id = scriptId;
      document.head.appendChild(sc);
    }
  })
})





