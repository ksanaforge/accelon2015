var React=require("react/addons");
var E=React.createElement;
var PureRenderMixin=React.addons.PureRenderMixin;
var Reflux=require("reflux");
var ReactPanels=require("react-panels");
var Tab = ReactPanels.Tab;
var TabWrapperMixin = ReactPanels.Mixins.TabWrapper;
var Toolbar = ReactPanels.Toolbar;
var Content = ReactPanels.Content;
var Footer = ReactPanels.Footer;
var ToggleButton = ReactPanels.ToggleButton;
var store=require("../stores/toc");

var TocContent=require("../views/toccontent");

var TocTab=React.createClass({
	mixins: [Reflux.listenTo(store,"onData"),TabWrapperMixin,PureRenderMixin]
	,getInitialState:function() {
		return {toc:[]};
	}
	,onData:function(data) {
		this.setState({toc:data});
	}	
	,render:function() {
		return <Tab title="One">
        <Content><TocContent toc={this.state.toc} /></Content>
      </Tab>
	}
});

module.exports=TocTab;