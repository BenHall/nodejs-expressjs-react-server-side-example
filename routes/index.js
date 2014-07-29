var React = require('react');
var path = require('path');

require('node-jsx').install();

exports.index = function(req, res){
  var component = require(path.resolve('./components/index'));
  var props = {text: "Server", items: ["Test 1", "Test 2"]};

  res.render('index', {props: props, component: React.renderComponentToString(component(props))});
};


