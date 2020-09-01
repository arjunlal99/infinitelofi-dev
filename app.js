var HLSServer = require('hls-server')
var http = require('http')
//var fs = require('fs')
//var arrays = require('async-arrays')
var server = http.createServer()
var hls = new HLSServer(server, {
  path: '/stream',     // Base URI to output HLS streams
  dir: '/home/ubuntu/ininitelofi-dev/output'  // Directory that input files are stored
})
server.listen(8000)
/*
var ffmpeg = require('fluent-ffmpeg')
 
function callback() { // do something when encoding is done 
}
 
// Below is FFMPEG converting MP4 to HLS with reasonable options.
// https://www.ffmpeg.org/ffmpeg-formats.html#hls-2

ffmpeg('/mnt/d/infinitelofi/test.mp3', { timeout: 432000 }).addOptions([
    '-profile:v baseline', // baseline profile (level 3.0) for H264 video codec
    '-level 3.0', 
    '-s 640x360',          // 640px width, 360px height output video dimensions
    '-start_number 0',     // start the first .ts segment at index 0
    '-hls_time 10',        // 10 second segment duration
    '-hls_list_size 6',    // Maxmimum number of playlist entries (0 means all entries/infinite)
    '-f hls'               // HLS format
  ]).output('/home/arjun/hls/output.m3u8').on('end', callback).run()

fs.readdir('/mnt/d/infinitelofi',function(err,files){
    if (err){
        console.log(err)
    }
    else{
        arrays.forEach(files, function(file,index,done){
            console.log(file)
        }, function(){
            console.log('were done')
        }) 
    }
})

*/