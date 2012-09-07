//boilerplate
jQuery(document).ready(function(){

/*
 * UTILITY FUNCTIONS
 */

  //splits on space for class delineation
  class_list = function(html_obj) {
    classes = html_obj.attr("class").split(" ");
    return classes;
  }

  //converts list to object
  make_object = function(list) {
    obj = {};
    for(var i = 0; i < list.length; i++) {
      obj[list[i]] = '';
    }
    return obj;
  }

  //tests list membership by converting to obj
  //first
  list_has = function(list, item) {
    obj = make_object(list);
    boo = (item in obj);
    return boo;
  }

  //takes an html object and test for a given class
  has_class = function(html, _class) {
    classes = class_list(html);
    return list_has(classes, _class);
  }

  //gets the position of an item based on its class
  get_position = function(html) {
    classes = class_list(html);
    obj = make_object(classes);
    var pos = "";
    for(i in obj) {
      if(i.match("position")) {
        pos = i.split("position")[1];
      }
    }
    return pos;
  }

/*
 * INTERACTIVITY
 */

  //replace a table element with a text box
  jQuery("td").click(function() {
    //is it data, is it a header?
    _this = jQuery(this);
    is_data = has_class(_this, "data");
    is_header = has_class(_this, "header");

    _this.html("<input type='text' name='textbox' />");

    if(is_data) {
      position_arr = get_position(_this).split(",");
      posx = parseInt(position_arr[0]);
      posy = parseInt(position_arr[1]);
      _this.addClass("data");
      _this.addClass("position" + posx + "," + posy);
    }

    if(is_header) {
      position = get_position(_this).split(",");
      pos = parseInt(position);
      _this.addClass("header");
      _this.addClass("position" + pos);
    }

  });

  //when focus leaves a td, then we get rid of the text box
  jQuery("td").focusout(function() {
    _this = jQuery(this);
    is_data = has_class(_this, "data");
    is_header = has_class(_this, "header");

    //something to get the contents of the cell so that we can
    //save it
  });

});
