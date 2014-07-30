var React = require('react');
var path = require('path');

require('node-jsx').install();

exports.index = function(req, res){
  var component = require(path.resolve('./components/index'));
  var props = {text: "", items: ["Test 1", "Test 2"].join(',')};

  res.render('index', {props: props, 
  						component_same: React.renderComponentToString(component(props)),
  						component_different: React.renderComponentToString(component(props))
  					});
};


