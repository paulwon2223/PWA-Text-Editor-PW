const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferrerdPrompt = event;
  butInstall.classList.toggle = ('hidden', false);

});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferrerdPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  window.deferrerdPrompt = null;

  butInstall.classList.toggle('hidden', true);
})


// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
    textHeader.textContent = 'Successfully installed!';
    console.log('👍', 'appinstalled', event);
});
