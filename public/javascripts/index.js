/** @jsx React.DOM */
var React = require('react');
var TodoApp = require('./../../components/index.js');

var App = function() {
  this.start = function(props) {
   setTimeout(function() { 

      //Split must be done within the {} otherwise it's just a string
      React.renderComponent(
        <TodoApp items={props.items} />,
        document.getElementById('example')
      );
      var id = $("#example div:first").attr('data-react-checksum');
      $(".same span.after").text(id);

      React.renderComponent(
        <TodoApp items={props.items + ",Test 3"} />,
        document.getElementById('example2')
      );

      var id = $("#example2 div:first").attr('data-react-checksum');
      $(".different span.after").text(id);
    }, 1000)
  }
} 

window.App = App;
