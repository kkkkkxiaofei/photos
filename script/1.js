var fs = require('fs');
var sizeOf = require('image-size');

function wirteToXML(obj) {
    var data = JSON.stringify(obj.img);
    fs.writeFile('./photos.json', data, function (err) {
      if (err) return console.log(err);
    });
}

function readDir(dir, obj, key) {
    var stats = fs.statSync(dir);
    if(stats.isDirectory()) {
        var files = fs.readdirSync(dir);
        var key = dir.split('/').pop();
        obj[key] = {
            array: []
        };
        for(var i in files) {
            var path = dir + '/' + files[i];
            readDir(path, obj[key], key);
        }
    } else {
        var stat = fs.statSync(dir);
        var imgSize = sizeOf(dir); 
        if(dir.indexOf('DS_Store') == -1) {
            var date = new Date(stat.birthtime);
            var src = dir.substr(3);
            obj.array.push({
                'file_name': src,
                'created_at': key,
                'like': Math.floor(Math.random() * new Date().getMilliseconds()),
                'width': imgSize.width,
                'height': imgSize.height 
            });
        }
    }
    return obj;
}

wirteToXML(readDir('../img', {}));






