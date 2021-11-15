# kyku.me - remake
## Installing
Make you you have installed Nodejs and npm on your's machine.

```sh
git clone https://github.com/marszello/kyku.me-remake.git
cd kyku.me-remake && npm install
```

## Running
Simple, just run `node index.js` or use `pm2 start index.js --name kyku.me` (if you have this on your's machine)

## Configuration
There is no configuration here, but you can change this `diskInfo.getDiskInfoSync()[0].capacity` to another, in Linux use `df -h` and look for `/dev/sda` or something like that. Then count in from up to down starting from zero.

## Live demo
[Click here](https://ex.oskarvik.me/)