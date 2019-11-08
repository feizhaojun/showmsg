/*
 * showMsg 基于 jQuery
 * 
 */
(function($) {
    $.extend({
        showMsg: function(opt) {
            var defaults = {
                title: '',
                id: 'show-msg-' + (new Date()).valueOf() + parseInt(Math.random()*1000),
                content: '',
                closeBtn: true,
                callback: null
            }
            opt = $.extend(defaults,opt)
            var tpl = '<div class="show-msg-component"' + (opt.id && ' id="' + opt.id + '"') + '>\
                    <div class="show-msg-box">\
                        ' + (opt.title && '<h2 class="show-msg-title">' + opt.title + '</h2>') + '\
                        <div class="show-msg-content">' + opt.content + '</div>\
                        <a class="close-btn" href="javascript:;"></a>\
                    </div>\
                </div>'
            $("body").append(tpl)

            var setCoverHeight = function() {
                $("body > .show-msg-component").css({ "height": $(document).height() })
            }
            setCoverHeight()
            $(window).on({
                'resize': setCoverHeight
            })

            opt.callback && opt.callback()

            var that = $('#' + opt.id)
            return {
                el: that,
                show: function(callback) {
                    that.fadeIn()
                    that.children('.show-msg-box').css({
                        "margin-left": -that.children('.show-msg-box').width()/2 + "px",
                        "margin-top": -that.children('.show-msg-box').height()/2 + "px"
                    })
                    that.find('.close-btn').on('click', function() {
                        that.remove()
                    })
                    callback && callback()
                },
                remove: function() {
                    that.remove()
                }
            }
        }
    })
})($ || jQuery)