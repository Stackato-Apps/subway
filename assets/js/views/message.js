var MessageView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  className: 'message',

  render: function() {
    $(this.el).html(this.model.get('text'));
    return this;
  },

});
