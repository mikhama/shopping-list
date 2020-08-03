'use strict';

let deferredInstallPrompt = null;
const installButton = document.getElementById('install-button');
installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

/**
 * Event handler for beforeinstallprompt event.
 *   Saves the event & shows install button.
 *
 * @param {Event} event
 */
function saveBeforeInstallPromptEvent(event) {
  deferredInstallPrompt = event;
  installButton.removeAttribute('hidden');
}


/**
 * Event handler for install-button - Does the PWA installation.
 *
 * @param {Event} event
 */
function installPWA(event) {
  deferredInstallPrompt.prompt();
  event.currentTarget.setAttribute('hidden', true);

  deferredInstallPrompt.userChoice
    .then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt', choice);
      } else {
        console.log('User dismissed the A2HS prompt', choice);
      }
      deferredInstallPrompt = null;
    });
}

window.addEventListener('appinstalled', logAppInstalled);

/**
 * Event handler for appinstalled event.
 *   Log the installation to analytics or save the event somehow.
 *
 * @param {Event} event
 */
function logAppInstalled(event) {
  console.log('Groceries List was installed.', event);
}
