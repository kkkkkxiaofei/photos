var fs = require('fs'), 
    obj = {},
    js2xmlparser = require("js2xmlparser");

function wirteToXML(obj) {
    var keys = Object.keys(obj);
    for(var i in keys) {
        obj[keys[i]].sort(function (a, b) {
            return !(a - b);
        });
    }
    var data = js2xmlparser('photos', obj);
    fs.writeFile('./1.xml', data, function (err) {
      if (err) return console.log(err);
    });
}

function readDir(dir, obj) {
    var stats = fs.statSync(dir);
    if(stats.isDirectory()) {
        var files = fs.readdirSync(dir);
        var key = dir.split('/').pop();
        obj[key] = obj[key] || [];
        for(var i in files) {
            var path = dir + '/' + files[i];
            readDir(path, obj);
        }
    } else {
        var stat = fs.statSync(dir);
        var arr = dir.split('/');
        arr.pop();
        var key = arr.pop();
        if(dir.indexOf('DS_Store') == -1) {
            var date = new Date(stat.birthtime);
            var src = dir.substr(3);
            obj[key].push({
                'file_name': src,
                'created_at': date.toLocaleDateString(),
                'like': Math.floor(Math.random() * 1000 + 1 )
            });
        }
    }
    return obj;
}

wirteToXML(readDir('../img', obj));






