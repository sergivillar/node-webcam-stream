# Requiremetns

brew reinstall ffmpeg --with-libvpx

# Start streaming

`fmpeg -s 1280x720 -r 30 -f avfoundation -i "0" -f webm -codec:v libvpx -deadline realtime -b:v 600k -maxrate 600k -bufsize 1200k -qmin 10 -qmax 42 -threads 4 http://localhost:3000`
