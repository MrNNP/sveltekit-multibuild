#!/bin/sh

# Decrypt the file
# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$GPG_DECRYPTION_KEY" \
--output browser-extention.pem ./.github/secrets/browser-extention.pem.gpg