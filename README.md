# sveltekit-multibuild

Base project created using [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Create android apps, web sites, desktop apps, and chrome extentions automatically

To build an IPA or publish to the app store for **iOS devices**, you will need an apple developer account and a Mac with xcode installed. Clone the repo, install the dependencies, and run `npx cap sync` in the ionic folder. Then open the project in xcode and build the app using xcode.

## Developing

Clone or fork this repo and make your program. Push or merge to the main branch and Github Actions will build all your binaries and bundles

### How to create a certificate for the chrome extention.

1. Open chrome/a chromium derivative (brave, edge, etc) and go to the extensions page. Enable developer mode and click "Pack extension".
1. Select the `browser-extension` folder in the root of this project and leave the key field blank. This will create a key for you.
1. Encrypt the key with AES256 using `gpg`, and replace browser-extension.pem.gpg in .github/secrets with the one you created.
1. Save the password you used to encrypt the key as a secret in the repo named `GPG_DECRYPTION_KEY`.

Github actions will decrypt the key and use it to build the chrome extension. You can install the .crx file in chrome by dragging it into the extensions page or upload the zip file to the chrome web store.

You can also change the icons in the browser-extensions folder, and the AppID in the ionic folder.
