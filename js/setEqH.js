/**
 * Created by Linfeng on 2017/3/15.
 */
;(function ($) {
    $.fn.extend({
        setEqH: function () {
            var $thisLi = $(this).children();
            var eqH = [];
            var maxH = '';
            $thisLi.each(function () {
                var h = $(this).outerHeight();
                eqH.push(h)

            });
            var maxH = Math.max.apply(null, eqH);
            $thisLi.outerHeight(maxH);
            return this;
        }
    })
})(jQuery);
