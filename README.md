brew reinstall ffmpeg --with-libvpx

ffmpeg -f avfoundation -framerate 30 -i "0" -r 25 -f webm -codec:v libvpx -quality good -cpu-used 0 -b:v 600k -maxrate 600k -bufsize 1800k -qmin 10 -qmax 42 http://localhost:3000
