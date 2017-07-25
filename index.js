'use strict';

const { exec } = require('child_process');

module.exports = {
    decrypt: function({ key, file }) {
        return new Promise((resolve, reject) => {
            exec(
                `openssl enc -aes-256-cbc -d -a -in ${file} -k ${key}`,
                (err, stdout, stderr) => {
                    if (err || stderr) {
                        reject(`exec error: ${err}`);
                        return;
                    }

                    resolve(stdout);
                }
            );
        });
    },
    encrypt: function({ key, file }) {
        return new Promise((resolve, reject) => {
            exec(
                `openssl enc -aes-256-cbc -salt -a -in ${file} -k ${key}`,
                (err, stdout, stderr) => {
                    if (err || stderr) {
                        reject(`exec error: ${err}`);
                        return;
                    }

                    resolve(stdout);
                }
            );
        });
    }
};