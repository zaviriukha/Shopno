;(function ( $ ) {

  var pluginName = 'uttoMenu',
    defaults = {
      activeClass: 'js-active',
      menu: '[button-menu]',
      item: '[item]'
  };

  function Plugin( element, options ) {
        this.element = element;
        this.$element = $(element);

        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
  };

  Plugin.prototype.init = function () {
        this.$menu = $(this.options.menu);
        this.$item = $(this.options.item);
        this.initEvents();
  };
    
  Plugin.prototype.initEvents = function() {
        var self = this;
        
        self.$element.click(function() {
            if (self.$element.hasClass(self.options.activeClass)) {  
                self.$element.removeClass(self.options.activeClass);
                self.$menu.hide();
            }
            else {
                self.$element.addClass(self.options.activeClass);
                self.$menu.slideDown();
            }
        });
        self.$item.on('click', function() {
          self.$element.removeClass(self.options.activeClass);
          self.$menu.hide();
        });
  };

  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, 
          new Plugin( this, options ));
      }
    });
  };

})( jQuery );

