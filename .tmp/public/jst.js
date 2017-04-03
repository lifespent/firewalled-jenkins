this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/jenkinsHostJobs.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul data-api="' +
((__t = (api )) == null ? '' : __t) +
'" id="jenkins-jobs">\n';
    for (var i in data) {
        var job = data[i];
        var color = job.color

        var url = job.url;
        var split_array = url.split('/job/');
        var path = [];
        do {
            path.push(split_array.pop());
        }
        while (split_array.length > 1);
        var cleanPath = path.reverse();
        var i = cleanPath.length - 1;
        cleanPath[i] = cleanPath[i].replace(/\//g,'');
        cleanPathUrl = cleanPath.join('/job/')
        cleanPathID = cleanPath.join('_job_')
        cleanPathID = cleanPathID.replace(/%20/g,'SPACE');
        cleanPathID = cleanPathID.replace(/\(/g,'OPEN_PARA');
        cleanPathID = cleanPathID.replace(/\)/g,'CLOSE_PARA');
        cleanPathName = cleanPath.join(' &raquo; ')
        cleanPathName = cleanPathName.replace(/%20/g,' ');

        if (job.color !== undefined) {
            switch (color) {
                case 'red':
                    color = "#EF2929"
                    break;
                case 'blue':
                    color = "#4E9A06"
                    break;
                default:
                    color = "#333"
            }
;
__p += '\n            <li class="jenkins-job" id="' +
((__t = (cleanPathID)) == null ? '' : __t) +
'" style="border-left:3px solid ' +
((__t = (color )) == null ? '' : __t) +
'">\n                <span>&rarr;</span><span style="display:none">&darr;</span>&nbsp; ' +
((__t = (cleanPathName )) == null ? '' : __t) +
'\n                <span style="display:none;" class="builds_nav">&raquo; <em>Builds</em></span>\n                <button type="button" class="btn btn-success btn-sm btn-build" style="display:none;">Build ' +
((__t = (job.name )) == null ? '' : __t) +
'</button>\n                <button type="button" class="btn btn-primary btn-sm btn-refresh-builds" style="display:none;">Refresh Builds</button>\n                <ul style="display:none"></ul>\n                <textarea class="build-info-data" style="display:none"></textarea>\n            </li>\n';

            }
        }
;


}
return __p
};

this["JST"]["assets/templates/jenkinsHosts.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul id="list-apis-jenkins" class="jenkins-host-list">\n';

    for (var i in data.reverse()) {
        var api = data[i]
        api.url = api.url.split("/")
;
__p += '\n        <li>' +
((__t = (api.url[2] )) == null ? '' : __t) +
'\n            <ul id="' +
((__t = (api.id )) == null ? '' : __t) +
'" class="jenkins-host-list-options">\n                <li class="connect-to-api"><button type="button" class="btn btn-success btn-sm">Connect</button></li>\n                <li class="destroy-api"><button type="button" class="btn btn-danger btn-sm">Remove</button></li>\n            </ul>\n        </li>\n    ';
 } ;
__p += '\n</ul>';

}
return __p
};