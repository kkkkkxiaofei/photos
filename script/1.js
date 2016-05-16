var fs = require('fs'), 
    js2xmlparser = require("js2xmlparser");

function wirteToXML(obj) {
    var data = js2xmlparser("root", obj);
    fs.writeFile('./1.xml', data, function (err) {
      if (err) return console.log(err);
    });
}

function readDir(dir, obj) {
    var stats = fs.statSync(dir);
    if(stats.isDirectory()) {
        var files = fs.readdirSync(dir);
        var key = dir.split('/').pop();
        obj[key] = {
            array: []
        };
        for(var i in files) {
            var path = dir + '/' + files[i];
            readDir(path, obj[key]);
        }
    } else {
        var stat = fs.statSync(dir);
        if(dir.indexOf('DS_Store') == -1) {
            var date = new Date(stat.birthtime);
            var src = dir.substr(3);
            obj.array.push({
                'file_name': src,
                'created_at': date.toLocaleDateString(),
                'like': Math.floor(Math.random() * 1000 + 1 )
            });
        }
    }
    return obj;
}

wirteToXML(readDir('../img', {}));






