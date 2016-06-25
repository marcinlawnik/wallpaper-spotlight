!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./blueimp-gallery"],t):t(window.jQuery,window.blueimp.Gallery)}(function(t,o){"use strict";t.extend(o.prototype.options,{useBootstrapModal:!0});var e=o.prototype.close,n=o.prototype.imageFactory,i=o.prototype.videoFactory,r=o.prototype.textFactory;t.extend(o.prototype,{modalFactory:function(t,o,e,n){if(!this.options.useBootstrapModal||e)return n.call(this,t,o,e);var i=this,r=this.container.children(".modal"),a=r.clone().show().on("click",function(t){(t.target===a[0]||t.target===a.children()[0])&&(t.preventDefault(),t.stopPropagation(),i.close())}),c=n.call(this,t,function(t){o({type:t.type,target:a[0]}),a.addClass("in")},e);return a.find(".modal-title").text(c.title||String.fromCharCode(160)),a.find(".modal-body").append(c),a[0]},imageFactory:function(t,o,e){return this.modalFactory(t,o,e,n)},videoFactory:function(t,o,e){return this.modalFactory(t,o,e,i)},textFactory:function(t,o,e){return this.modalFactory(t,o,e,r)},close:function(){this.container.find(".modal").removeClass("in"),e.call(this)}})});
//# sourceMappingURL=bootstrap-image-gallery.min.js.map
document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {
            index: link, event: event,
            onslide: function (index, slide) {

                self = this;
                var initializeAdditional = function (index, data, klass, self) {
                    var text = self.list[index].getAttribute(data),
                        node = self.container.find(klass);
                    node.empty();
                    if (text) {
                        node[0].appendChild(document.createTextNode(text));
                    }
                };
                initializeAdditional(index, 'data-description', '.description', self);
                initializeAdditional(index, 'data-example', '.example', self);
            }
        },
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};