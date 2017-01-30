
#!/bin/sh
cd ../Edpcore
grunt build --verbose
cd ../Sponsor
cd dashboard
grunt build --verbose
cd ..
cd prm
grunt build --verbose
cd ..
grunt --verbose