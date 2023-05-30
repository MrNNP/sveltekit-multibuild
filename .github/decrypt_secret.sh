#!/bin/sh

# Decrypt the file
# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$GPG_DECRYPTION_KEY" \
--output browser-extension.pem .//.github/secrets/browser-extension.pem.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$GPG_DECRYPTION_KEY" \
--output ios_distribution.p12 .//.github/secrets/ios_distribution.p12.gpg
gpg --quiet --batch --yes --decrypt --passphrase="$GPG_DECRYPTION_KEY" \
--output SvelteKit_Multibuild_Provision.mobileprovisi .//.github/secrets/SvelteKit_Multibuild_Provision.mobileprovisi.gpg