
#!/bin/sh
npm config set proxy http://web-proxy.ind.hp.com:8080
npm config set https-proxy http://web-proxy.ind.hp.com:8080

git config --global core.gitproxy http://web-proxy.ind.hp.com:8080
git config --global http.proxy http://web-proxy.ind.hp.com:8080
git config --global https.proxy https://web-proxy.ind.hp.com:8080

