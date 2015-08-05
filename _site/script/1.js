var fs = require('fs'), 
    obj = {
        'us-photo': [],
        'family-photo': [],
        'life-photo': [],
        'favorite-photo': []
    },
    js2xmlparser = require("js2xmlparser");

vistAllFiles(obj);
function vistAllFiles(obj) {
    _storeDir('../img/us-photo', obj['us-photo'], _getLen('../img/life-photo'), function() {
        _storeDir('../img/family-photo', obj['family-photo'], _getLen('../img/family-photo'), function() {
            _storeDir('../img/life-photo', obj['life-photo'], _getLen('../img/life-photo'), function() {
                _storeDir('../img/favorite-photo', obj['favorite-photo'], _getLen('../img/favorite-photo'), function() {
                    _wirteToXML(obj);
                });
            });
        });
    });
}

function _getLen(dir) {
    var files = fs.readdirSync(dir);
    return files.length;
}

function _storeDir(dir, arr, count, callback) {
    fs.readdir(dir, function(err, items) {
        for (var i=0; i < items.length; i++) {
            var file = dir + '/' + items[i];
            fs.stat(file, (function(file, arr, index, callback) {
                return function(err, stats) {
                    if(file.indexOf('DS_Store') == -1) {
                        var date = new Date(stats.birthtime);
                        var src = file.substr(3);
                        arr.push({'file_name': src,'created_at': date.toLocaleDateString()});
                    }
                    if(index + 1 == count) {
                        callback();
                    }
                }
            })(file, arr, i, callback));
        }
    });
}

function _wirteToXML(obj) {
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











