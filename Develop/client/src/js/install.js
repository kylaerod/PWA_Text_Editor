const butInstall = document.getElementById('buttonInstall');
let deferredPrompt; 

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {

    // Prevent automatic prompt display
    event.preventDefault();
  
    // Store the prompt for later use
    deferredPrompt = event;
  
    // Update the button UI to enable installation
    butInstall.style.display = 'block'
});


butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
        // Trigger the prompt manually
        deferredPrompt.prompt();
    
        // Await user's choice
        const { outcome } = await deferredPrompt.userChoice;
    
        if (outcome === 'accepted') {
          console.log('PWA installation accepted!');
         
        } else {
          console.log('PWA installation declined.');
        }
    
        deferredPrompt = null;
      } else {
        console.log('Unable to trigger prompt.');
}});
window.addEventListener('appinstalled', (event) => {
    console.log('PWA has been installed!');
});
