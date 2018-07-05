# Requiremetns

## MacOS

`brew install ffmpeg --with-libvpx``

## Linux (Raspbian)

### Install livbpx (VP8/VP9)

```
git clone --depth 1 https://chromium.googlesource.com/webm/libvpx.git
cd libvpx
./configure
make
make install
```

### Install ffmpeg
```
wget https://ffmpeg.org/releases/ffmpeg-4.0.1.tar.bz2
tar -xvf ffmpeg-4.0.1.tar.bz2
cd ffmpeg-4.0.1.tar.bz2
./configure  --enable-libvpx
make
```


# Start streaming

`fmpeg -s 1280x720 -r 30 -f avfoundation -i "0" -f webm -codec:v libvpx -deadline realtime -b:v 600k -maxrate 600k -bufsize 1200k -qmin 10 -qmax 42 -threads 4 http://localhost:3000`
