// This is a plugin to use Dialigitys form backend
export default (context, inject) => {

    const _chbf_setCookie = function(cname, cvalue, exdays) {
        if (typeof exdays !== "undefined") {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        } else {
            document.cookie = cname + "=" + cvalue + ";path=/";
        }
    }
    const _chbf_getCookie = function(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    const _chbf_guidGenerator = function() {
        var S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }
    const dialogityFormsSubmit = function(uuid, form_id, data, calback_fn) {
        
        function _chbf_response() {
            //console.log(this);
            var resp = JSON.parse(this.response);
            if ("cid" in resp) {
                _chbf_setCookie("wtid", resp["cid"], 365);
            }
            if (calback_fn) calback_fn(this.status);
        }
    
        var cid_to_send = "new";
        var cid = _chbf_getCookie("wtid");
        if (cid) cid_to_send = cid;
    
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", _chbf_response);
        oReq.open("POST", "https://api2.dialogity.com/api/forms/" + uuid + "/" + cid_to_send + "/" + form_id, true);
        oReq.setRequestHeader("Content-Type", "application/json");
        oReq.send(JSON.stringify(data));
    }


    // Inject $dialogityFormsSubmit(uuid, form_id, data, calback_fn) in Vue, context and store.
    inject('dialogityFormsSubmit', dialogityFormsSubmit);
    // For Nuxt <= 2.12, also add 👇
    context.$dialogityFormsSubmit = dialogityFormsSubmit;
}