/** @jsx React.DOM */

var CHARTS = {
    LINE: 'line',
    BAR: 'bar',
    RADAR: 'radar',
    POLARAREA: 'polararea',
    PIE: 'pie',
    DOUGHNUT: 'doughnut',
};

var LEGAL_CHART_NAMES = [
    CHARTS.LINE,
    CHARTS.BAR,
    CHARTS.RADAR,
    CHARTS.POLARAREA,
    CHARTS.PIE,
    CHARTS.DOUGHNUT,
];

var LABELLED_CHARTS = [
    CHARTS.LINE,
    CHARTS.BAR,
    CHARTS.RADAR,
];

var UNLABELLED_CHARTS = [
    CHARTS.POLARAREA,
    CHARTS.PIE,
    CHARTS.DOUGHNUT,
];

var APP_CONFIGURATION = {
    OPTION_CATEGORY_LAYOUTS: [
        {
            title: "Display",
            charts_affected: [CHARTS.LINE, CHARTS.BAR, CHARTS.RADAR, CHARTS.DOUGHNUT],
            options: [
                {
                    key: "datasetFill",
                    description: "Fill dataset",
                    type: "boolean",
                },
                {
                    key: "pointDot",
                    description: "Show point dots",
                    type: "boolean",
                },
                {
                    key: "pointDotRadius",
                    description: "Point dot radius",
                    type: "number",
                },
                {
                    key: "pointDotStrokeWidth",
                    description: "Point dot stroke width",
                    type: "number",
                },
                {
                    key: "angleShowLineOut",
                    description: "Show angle line out",
                    type: "boolean",
                },
                {
                    key: "angleLineColor",
                    description: "Angle line color",
                    type: "color",
                },
                {
                    key: "angleLineWidth",
                    description: "Angle line width",
                    type: "number",
                },
                {
                    key: "barDatasetSpacing",
                    description: "Dataset spacing",
                    type: "number",
                },
                {
                    key: "barValueSpacing",
                    description: "Bar value spacing",
                    type: "number",
                },
                {
                    key: "bezierCurve",
                    description: "Fit lines to curve",
                    type: "boolean",
                },
                {
                    key: "percentageInnerCutout",
                    description: "Inner cutout percentage",
                    type: "number",
                }
            ],
        },

        {
            title: "Scale",
            charts_affected: [CHARTS.LINE, CHARTS.BAR, CHARTS.RADAR, CHARTS.POLARAREA],
            options: [
                {
                    key: "pointLabelFontColor",
                    description: "Point label font color",
                    type: "color",
                },
                {
                    key: "pointLabelFontFamily",
                    description: "Point label font family",
                    type: "select",
                    choices: ["Arial", "Courier", "Georgia", "Impact", "Monaco", "Tahoma", "Times", "Verdana"],
                },
                {
                    key: "pointLabelFontSize",
                    description: "Point label font size",
                    type: "number",
                },
                {
                    key: "pointLabelFontStyle",
                    description: "Point label font style",
                    type: "select",
                    choices: ["Normal", "Bold", "Italic"],
                },
                {
                    key: "scaleFontColor",
                    description: "Font color",
                    type: "color",
                },
                {
                    key: "scaleFontFamily",
                    description: "Font family",
                    type: "select",
                    choices: ["Arial", "Courier", "Georgia", "Impact", "Monaco", "Tahoma", "Times", "Verdana"],
                },
                {
                    key: "scaleFontSize",
                    description: "Font size",
                    type: "number",
                },
                {
                    key: "scaleFontStyle",
                    description: "Font style",
                    type: "select",
                    choices: ["Normal", "Bold", "Italic"],
                },
                {
                    key: "scaleLineColor",
                    description: "Line color",
                    type: "color",
                },
                {
                    key: "scaleLineWidth",
                    description: "Line width",
                    type: "number",
                },
                {
                    key: "scaleShowLabelBackdrop",
                    description: "Show label backdrop",
                    type: "boolean",
                },
                {
                    key: "scaleBackdropColor",
                    description: "Backdrop color",
                    dependency_key: "scaleShowLabelBackdrop",
                    type: "color",
                },
                {
                    key: "scaleBackdropPaddingX",
                    description: "Backdrop horizontal padding",
                    dependency_key: "scaleShowLabelBackdrop",
                    type: "number",
                },
                {
                    key: "scaleBackdropPaddingY",
                    description: "Backdrop vertical padding",
                    dependency_key: "scaleShowLabelBackdrop",
                    type: "number",
                },
                {
                    key: "scaleShowLine",
                    description: "Show scale line",
                    type: "boolean",
                },
                {
                    key: "scaleShowGridLines",
                    description: "Show grid lines",
                    type: "boolean",
                },
                {
                    key: "scaleGridLineWidth",
                    description: "Grid line width",
                    dependency_key: "scaleShowGridLines",
                    type: "number",
                },
                {
                    key: "scaleGridLineColor",
                    description: "Grid line color",
                    dependency_key: "scaleShowGridLines",
                    type: "color",
                },
                {
                    key: "scaleOverlay",
                    description: "Overlay scale",
                    type: "boolean",
                },
                {
                    key: "scaleShowLabels",
                    description: "Show scale labels",
                    type: "boolean",
                },
                {
                    key: "scaleOverride",
                    description: "Override default scale",
                    type: "boolean",
                },
                {
                    key: "scaleStartValue",
                    description: "Start value",
                    type: "number",
                },
                {
                    key: "scaleStepWidth",
                    description: "Step width",
                    type: "number",
                },
                {
                    key: "scaleSteps",
                    description: "Number of steps",
                    type: "number",
                },
            ]
        },

        {
            title: "Stroke",
            charts_affected: [CHARTS.LINE, CHARTS.BAR, CHARTS.RADAR, CHARTS.POLARAREA, CHARTS.PIE, CHARTS.DOUGHNUT],
            options: [
                {
                    key: "datasetStroke",
                    description: "Show dataset stroke",
                    type: "boolean",
                },
                {
                    key: "datasetStrokeWidth",
                    description: "Stroke width",
                    dependency_key: "datasetStroke",
                    type: "number",
                },
                {
                    key: "segmentShowStroke",
                    description: "Show segment stroke",
                    type: "boolean",
                },
                {
                    key: "segmentStrokeColor",
                    description: "Stroke color",
                    dependency_key: "segmentShowStroke",
                    type: "color",
                },
                {
                    key: "segmentStrokeWidth",
                    description: "Stroke width",
                    dependency_key: "segmentShowStroke",
                    type: "number",
                },
                {
                    key: "barShowStroke",
                    description: "Show bar stroke",
                    type: "boolean",
                },
                {
                    key: "barStrokeWidth",
                    description: "Stroke width",
                    dependency_key: "barShowStroke",
                    type: "number",
                },
            ]
        },

        {
            title: "Animation",
            charts_affected: [CHARTS.LINE, CHARTS.BAR, CHARTS.RADAR, CHARTS.POLARAREA, CHARTS.PIE, CHARTS.DOUGHNUT],
            options: [
                {
                    key: "animation",
                    description: "Animate when loaded",
                    type: "boolean",
                },
                {
                    key: "animationEasing",
                    description: "Animation easing function",
                    dependency_key: "animation",
                    type: "select",
                    choices: ["easeInSine", "easeOutSine", "easeInOutSine", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeInBack", "easeOutBack", "easeInOutBack", "easeInElastic", "easeOutElastic", "easeInOutElastic", "easeInBounce", "easeOutBounce", "easeInOutBounce"],
                },
                {
                    key: "animationSteps",
                    description: "Animation steps",
                    type: "number",
                },
                {
                    key: "animateRotate",
                    description: "Animate rotation",
                    type: "boolean",
                },
                {
                    key: "animateScale",
                    description: "Animate scaling",
                    type: "boolean",
                }
            ]
        },
    ],
};

var App = React.createClass({

    getInitialState: function () {

        // The state to use if nothing is found in local storage.
        var DEFAULT_APP_STATE = {

            ACTIVE_CHART: CHARTS.LINE,

            DIMENSIONS: {
                'line': {
                    width: 700,
                    height: 300
                },
                'bar': {
                    width: 700,
                    height: 300
                },
                'radar': {
                    width: 300,
                    height: 300
                },
                'polararea': {
                    width: 300,
                    height: 300
                },
                'pie': {
                    width: 300,
                    height: 300
                },
                'doughnut': {
                    width: 300,
                    height: 300
                }
            },

            OPTIONS: {
                polararea: {
                    scaleOverlay : true,
                    scaleOverride : false,
                    scaleSteps : 10,
                    scaleStepWidth : 5,
                    scaleStartValue : 0,
                    scaleShowLine : true,
                    scaleLineColor : "rgba(0,0,0,.1)",
                    scaleLineWidth : 1,
                    scaleShowLabels : true,
                    scaleLabel : "<%=value%>",
                    scaleFontFamily : "'Arial'",
                    scaleFontSize : 12,
                    scaleFontStyle : "normal",
                    scaleFontColor : "#666",
                    scaleShowLabelBackdrop : true,
                    scaleBackdropColor : "rgba(255,255,255,0.75)",
                    scaleBackdropPaddingY : 2,
                    scaleBackdropPaddingX : 2,
                    segmentShowStroke : true,
                    segmentStrokeColor : "#fff",
                    segmentStrokeWidth : 2,
                    animation : false,
                    animationSteps : 100,
                    animationEasing : "easeOutBounce",
                    animateRotate : true,
                    animateScale : false,
                },
                radar: {
                    scaleOverlay : false,
                    scaleOverride : false,
                    scaleSteps : 10,
                    scaleStepWidth : 5,
                    scaleStartValue : 0,
                    scaleShowLine : true,
                    scaleLineColor : "rgba(0,0,0,.1)",
                    scaleLineWidth : 1,
                    scaleShowLabels : false,
                    scaleLabel : "<%=value%>",
                    scaleFontFamily : "'Arial'",
                    scaleFontSize : 12,
                    scaleFontStyle : "normal",
                    scaleFontColor : "#666",
                    scaleShowLabelBackdrop : true,
                    scaleBackdropColor : "rgba(255,255,255,0.75)",
                    scaleBackdropPaddingY : 2,
                    scaleBackdropPaddingX : 2,
                    angleShowLineOut : true,
                    angleLineColor : "rgba(0,0,0,.1)",
                    angleLineWidth : 1,
                    pointLabelFontFamily : "'Arial'",
                    pointLabelFontStyle : "normal",
                    pointLabelFontSize : 12,
                    pointLabelFontColor : "#666",
                    pointDot : true,
                    pointDotRadius : 3,
                    pointDotStrokeWidth : 1,
                    datasetStroke : true,
                    datasetStrokeWidth : 2,
                    datasetFill : true,
                    animation : false,
                    animationSteps : 60,
                    animationEasing : "easeOutQuart",
                },
                pie: {
                    segmentShowStroke : true,
                    segmentStrokeColor : "#fff",
                    segmentStrokeWidth : 2,
                    animation : false,
                    animationSteps : 100,
                    animationEasing : "easeOutBounce",
                    animateRotate : true,
                    animateScale : false,
                },
                doughnut: {
                    segmentShowStroke : true,
                    segmentStrokeColor : "#fff",
                    segmentStrokeWidth : 2,
                    percentageInnerCutout : 50,
                    animation : false,
                    animationSteps : 100,
                    animationEasing : "easeOutBounce",
                    animateRotate : true,
                    animateScale : false,
                },
                line: {
                    scaleOverlay : false,
                    scaleOverride : false,
                    scaleSteps : 10,
                    scaleStepWidth : 5,
                    scaleStartValue : 0,
                    scaleLineColor : "rgba(0,0,0,.1)",
                    scaleLineWidth : 1,
                    scaleShowLabels : true,
                    scaleLabel : "<%=value%>",
                    scaleFontFamily : "'Arial'",
                    scaleFontSize : 12,
                    scaleFontStyle : "normal",
                    scaleFontColor : "#666",
                    scaleShowGridLines : true,
                    scaleGridLineColor : "rgba(0,0,0,.05)",
                    scaleGridLineWidth : 1,
                    bezierCurve : true,
                    pointDot : true,
                    pointDotRadius : 4,
                    pointDotStrokeWidth : 2,
                    datasetStroke : true,
                    datasetStrokeWidth : 2,
                    datasetFill : true,
                    animation : false,
                    animationSteps : 60,
                    animationEasing : "easeOutQuart",
                },
                bar: {
                    scaleOverlay : false,
                    scaleOverride : false,
                    scaleSteps : 10,
                    scaleStepWidth : 5,
                    scaleStartValue : 0,
                    scaleLineColor : "rgba(0,0,0,.1)",
                    scaleLineWidth : 1,
                    scaleShowLabels : true,
                    scaleLabel : "<%=value%>",
                    scaleFontFamily : "'Arial'",
                    scaleFontSize : 12,
                    scaleFontStyle : "normal",
                    scaleFontColor : "#666",
                    scaleShowGridLines : true,
                    scaleGridLineColor : "rgba(0,0,0,.05)",
                    scaleGridLineWidth : 1,
                    barShowStroke : true,
                    barStrokeWidth : 2,
                    barValueSpacing : 5,
                    barDatasetSpacing : 1,
                    animation : false,
                    animationSteps : 60,
                    animationEasing : "easeOutQuart",
                }
            },

            DATA: {
                polararea: [
                    {
                        value : 30,
                        color: "#D97041"
                    },
                    {
                        value : 90,
                        color: "#C7604C"
                    },
                    {
                        value : 24,
                        color: "#21323D"
                    },
                    {
                        value : 58,
                        color: "#9D9B7F"
                    },
                    {
                        value : 82,
                        color: "#7D4F6D"
                    },
                    {
                        value : 8,
                        color: "#584A5E"
                    }
                ],
                radar: {
                    labels : ["Eating","Drinking","Sleeping","Designing","Coding","Partying","Running"],
                    datasets : [
                    {
                        visible: true,
                        fillColor : "rgba(220,220,220,0.5)",
                        strokeColor : "rgba(220,220,220,1)",
                        pointColor : "rgba(220,220,220,1)",
                        pointStrokeColor : "#fff",
                        data : [65,59,90,81,56,55,40]
                    },
                    {
                        visible: true,
                        fillColor : "rgba(151,187,205,0.5)",
                        strokeColor : "rgba(151,187,205,1)",
                        pointColor : "rgba(151,187,205,1)",
                        pointStrokeColor : "#fff",
                        data : [28,48,40,19,96,27,100]
                    }
                    ],
                },
                pie: [
                    {
                        value: 30,
                        color:"#F38630"
                    },
                    {
                        value : 50,
                        color : "#E0E4CC"
                    },
                    {
                        value : 100,
                        color : "#69D2E7"
                    }
                ],
                doughnut: [
                    {
                        value: 30,
                        color:"#F7464A"
                    },
                    {
                        value : 50,
                        color : "#E2EAE9"
                    },
                    {
                        value : 100,
                        color : "#D4CCC5"
                    },
                    {
                        value : 40,
                        color : "#949FB1"
                    },
                    {
                        value : 120,
                        color : "#4D5360"
                    }
                ],
                line: {
                    labels : ["January","February","March","April","May","June","July"],
                    datasets : [
                    {
                        visible: true,
                        fillColor : "rgba(220,220,220,0.5)",
                        strokeColor : "rgba(220,220,220,1)",
                        pointColor : "rgba(220,220,220,1)",
                        pointStrokeColor : "#fff",
                        data : [65,59,90,81,56,55,40]
                    },
                    {
                        visible: true,
                        fillColor : "rgba(151,187,205,0.5)",
                        strokeColor : "rgba(151,187,205,1)",
                        pointColor : "rgba(151,187,205,1)",
                        pointStrokeColor : "#fff",
                        data : [28,48,40,19,96,27,100]
                    }
                    ]
                },
                bar: {
                    labels : ["January","February","March","April","May","June","July"],
                    datasets : [
                    {
                        visible: true,
                        fillColor : "rgba(220,220,220,0.5)",
                        strokeColor : "rgba(220,220,220,1)",
                        data : [65,59,90,81,56,55,40]
                    },
                    {
                        visible: true,
                        fillColor : "rgba(151,187,205,0.5)",
                        strokeColor : "rgba(151,187,205,1)",
                        data : [28,48,40,19,96,27,100]
                    }
                    ]
                },
            }
        };

        // Attempt to fetch an application state from local storage.
        var LOCAL_STORAGE_APP_STATE = JSON.parse(localStorage.getItem('easy_graphs_state'));

        var APP_STATE;

        if (LOCAL_STORAGE_APP_STATE) {
            // Use app state from local storage if it's there.
            APP_STATE = LOCAL_STORAGE_APP_STATE;
        } else {
            // Resort to default application state if there was nothing in local storage.
            APP_STATE = DEFAULT_APP_STATE

            // Store the app state in local storage.
            localStorage.setItem('easy_graphs_storage', JSON.stringify(APP_STATE));
        }

        // return APP_STATE;
        return DEFAULT_APP_STATE;
    },

    change_active_chart_F: function (new_chart_name) {
        this.setState({
            ACTIVE_CHART: new_chart_name,
        });
    },

    // Returns a shallow copy of the state object.
    get_state_copy: function () {
        return $.extend({}, this.state);
    },

    add_label_F: function (new_label_text) {
        var new_model = this.get_state_copy();

        new_model.DATA[new_model.ACTIVE_CHART].labels.push(new_label_text);

        var chart_datasets = new_model.DATA[new_model.ACTIVE_CHART].datasets;
        chart_datasets.forEach(function (dataset, index) {
        	var data_array = dataset.data;
        	data_array.push(1);
        });

        this.setState(new_model);
    },

    remove_label_F: function (label_index) {
        var new_model = this.get_state_copy();

        new_model.DATA[new_model.ACTIVE_CHART].labels.splice(label_index, 1);

        var chart_datasets = new_model.DATA[new_model.ACTIVE_CHART].datasets;
        chart_datasets.forEach(function (dataset, index) {
        	var data_array = dataset.data;
        	data_array.splice(label_index, 1);
        });

        this.setState(new_model);
    },

    update_label_F: function (label_index, new_label_text) {
        var new_model = this.get_state_copy();

        new_model.DATA[new_model.ACTIVE_CHART].labels[label_index] = new_label_text;

        this.setState(new_model);
    },

    add_dataset_F: function () {
    	var new_model = this.get_state_copy();

    	var new_dataset_values = new_model.DATA[new_model.ACTIVE_CHART].labels.map(function () {
    		return 1;
    	});

    	// TODO: If this is a bar chart, it doesn't need point colors...
    	var new_dataset = {
	        visible: true,
	        fillColor : "rgba(220,220,220,0.5)",
	        strokeColor : "rgba(220,220,220,1)",
	        pointColor : "rgba(220,220,220,1)",
	        pointStrokeColor : "#fff",
	        data : new_dataset_values,
    	};

    	new_model.DATA[new_model.ACTIVE_CHART].datasets.push(new_dataset);
    	this.setState(new_model);
    },

    remove_dataset_F: function (dataset_index) {
    	var new_model = this.get_state_copy();

    	var datasets = new_model.DATA[new_model.ACTIVE_CHART].datasets;
    	datasets.splice(dataset_index, 1)

    	this.setState(new_model);
    },

    update_dataset_value_F: function (dataset_index, value_index, new_value) {
    	var new_model = this.get_state_copy();

    	var data_array = new_model.DATA[new_model.ACTIVE_CHART].datasets[dataset_index].data;
    	data_array[value_index] = new_value;

    	this.setState(new_model);
    },

    update_dataset_color_F: function (dataset_index, option_key, new_color) {
    	var new_model = this.get_state_copy();

    	var dataset = new_model.DATA[new_model.ACTIVE_CHART].datasets[dataset_index];
    	dataset[option_key] = new_color;

    	this.setState(new_model);
    },

    toggle_dataset_visibility_F: function (dataset_index) {
    	var new_model = this.get_state_copy();

    	var dataset = new_model.DATA[new_model.ACTIVE_CHART].datasets[dataset_index];
    	dataset.visible = !dataset.visible;

    	this.setState(new_model);
	},

    add_datum_F: function () {
        var new_model = this.get_state_copy();

        // The 'blank' datum which will be added to the set.
        // TODO: It's probably more appealing to add a copy of the last one.
        var new_datum = {
            color: '#000',
            value: 1,
        };

        new_model.DATA[new_model.ACTIVE_CHART].push(new_datum);
        this.setState(new_model);
    },

    remove_datum_F: function (datum_index) {
        var new_model = this.get_state_copy();
        var datum_array = new_model.DATA[new_model.ACTIVE_CHART];

        if (datum_array.length !== 1) {
        	datum_array.splice(datum_index, 1)
        }

        this.setState(new_model);
    },

    update_datum_color_F: function (datum_index, new_datum_color) {
        var new_model = this.get_state_copy();

        new_model.DATA[new_model.ACTIVE_CHART][datum_index].color = new_datum_color;
        this.setState(new_model);
    },

    update_datum_value_F: function (datum_index, new_datum_value) {
        var new_model = this.get_state_copy();

        new_model.DATA[new_model.ACTIVE_CHART][datum_index].value = new_datum_value;
        this.setState(new_model);
    },

    update_option_F: function (option_key, new_option_value) {
        var new_model = this.get_state_copy();
        var options = new_model.OPTIONS[new_model.ACTIVE_CHART];

        options[option_key] = new_option_value === undefined ? !options[option_key] : new_option_value;

        this.setState(new_model);
    },

    update_chart_width_F: function (new_width) {
        var new_model = this.get_state_copy();
        var active_chart = new_model.ACTIVE_CHART;
        var dimensions = new_model.DIMENSIONS;

        dimensions[active_chart].width = new_width;

        this.setState(new_model);
    },

    update_chart_height_F: function (new_height) {
        var new_model = this.get_state_copy();
        var active_chart = new_model.ACTIVE_CHART;
        var dimensions = new_model.DIMENSIONS;

        dimensions[active_chart].height = new_height;

        this.setState(new_model);
    },

    // Store application state in local storage each time it changes.
    componentDidUpdate: function () {
        localStorage.setItem('easy_graphs_storage', JSON.stringify(this.state));
    },

    render: function () {
        var active_chart = this.state.ACTIVE_CHART;
        var chart_data = this.state.DATA[active_chart];

        var controls_row;
        var labels;
        var datasets;

        var options = <Options active_chart={this.state.ACTIVE_CHART}
        					   chart_option_set={this.state.OPTIONS[active_chart]}
                               option_catgeory_layouts={this.props.OPTION_CATEGORY_LAYOUTS}
                               update_option_F={this.update_option_F}
                               dimensions={this.state.DIMENSIONS}
                               update_chart_width_F={this.update_chart_width_F}
                               update_chart_height_F={this.update_chart_height_F}/>;

        if ($.inArray(active_chart, LABELLED_CHARTS) > -1) {

            labels = (
                <div className="col-sm-2">
                    <Labels chart_labels={chart_data.labels}
                            add_label_F={this.add_label_F}
                            remove_label_F={this.remove_label_F}
                            update_label_F={this.update_label_F}/>
                </div>
            );

            datasets = (
            	<Datasets active_chart={this.state.ACTIVE_CHART}
		              	  chart_data={chart_data.datasets}
            			  add_dataset_F={this.add_dataset_F}
            			  remove_dataset_F={this.remove_dataset_F}
            			  update_dataset_value_F={this.update_dataset_value_F}
            			  update_dataset_color_F={this.update_dataset_color_F}
            			  toggle_dataset_visibility_F={this.toggle_dataset_visibility_F}>
            	</Datasets>
            );

            controls_row = (
                <div className="row">
                    {labels}
                    {datasets}
                    {options}
                </div>
            );

        } else if ($.inArray(active_chart, UNLABELLED_CHARTS) > -1) {
            controls_row = (
                <div className="row">
                    <Data chart_data={chart_data}
                          add_datum_F={this.add_datum_F}
                          remove_datum_F={this.remove_datum_F}
                          update_datum_color_F={this.update_datum_color_F}
                          update_datum_value_F={this.update_datum_value_F}/>
                    {options}
                </div>
            );
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <ChartButtons active_chart={active_chart}
                                      change_active_chart_F={this.change_active_chart_F}/>
                    </div>
                    <div className="col-sm-8">
                        <ChartArea active_chart={active_chart}
                                   chart_options={this.state.OPTIONS[active_chart]}
                                   chart_data={chart_data}
                                   chart_dimensions={this.state.DIMENSIONS[active_chart]}/>
                    </div>
                    <div className="col-sm-2">
                        <div className="btn-group-vertical btn-block">
                            <div className="btn btn-default">Save PNG</div>
                            <div className="btn btn-default">Copy URL</div>
                            <div className="btn btn-default">Get Code</div>
                            <div className="btn btn-default">Presentation mode</div>
                        </div>
                    </div>
                </div>
                <hr/>
                {controls_row}
            </div>
        );
    }
});

var ChartButtons = React.createClass({
    render: function () {
        var active_chart = this.props.active_chart;

        var buttons = [
            {chart_name: CHARTS.LINE,      button_text: 'Line'},
            {chart_name: CHARTS.BAR,       button_text: 'Bar'},
            {chart_name: CHARTS.RADAR,     button_text: 'Radar'},
            {chart_name: CHARTS.POLARAREA, button_text: 'Polar Area'},
            {chart_name: CHARTS.PIE,       button_text: 'Pie'},
            {chart_name: CHARTS.DOUGHNUT,  button_text: 'Doughnut'},
        ];

        var change_active_chart_F= this.props.change_active_chart_F;

        var buttonNodes = buttons.map(function (button) {
            var is_button_active = (active_chart === button.chart_name);

            var set_this_chart_active_F = function () {
                change_active_chart_F(button.chart_name);
            };

            return <ChartButton button_text={button.button_text}
                                is_button_active={is_button_active}
                                set_this_chart_active_F={set_this_chart_active_F}/>;
        });

        return (
            <div className="panel panel-default">
                <div className="panel-heading text-center">
                    <h3 className="panel-title">Chart Types</h3>
                </div>
                <div className="panel-body">
                    <div className="btn-group-vertical btn-block">
                        {buttonNodes}
                    </div>
                </div>
            </div>
        );
    }
});

var ChartButton = React.createClass({
    render: function () {
        var button_class = (this.props.is_button_active) ? 'btn btn-default active' : 'btn btn-default';

        return (
            <a className={button_class}
               onClick={this.props.set_this_chart_active_F}>
               {this.props.button_text}
            </a>
        );
    },

});

var ChartArea = React.createClass({
    // TODO: Perhaps clicking on the canvas triggers the animation, compared to
    // having an "Animate" button.
    render: function () {
        return <canvas></canvas>;
    },

    componentDidMount: function () {
        this.load_chart();
    },

    componentDidUpdate: function () {
        this.load_chart();
    },

    // Load the appropriate chart onto the canvas using the ChartJS library.
    load_chart: function() {
        var chart_name = this.props.active_chart;
        var chart_options = this.props.chart_options;

        if ($.inArray(chart_name, UNLABELLED_CHARTS) > -1) {
	        chart_data = this.props.chart_data;
        } else if ($.inArray(chart_name, LABELLED_CHARTS) > -1) {
	        chart_data = $.extend({}, this.props.chart_data);

	        chart_data.datasets = chart_data.datasets.filter(function(dataset) {
	        	return dataset.visible;
	        });
        }

        var chart_dimensions = this.props.chart_dimensions;

        var $DOMNode = $(this.getDOMNode());

        $DOMNode.attr('width', chart_dimensions.width);
        $DOMNode.attr('height', chart_dimensions.height);

        var chart = new Chart($DOMNode.get(0).getContext("2d"));

        switch (chart_name) {
            case CHARTS.LINE:
                chart.Line(chart_data, chart_options);
                break;
            case CHARTS.BAR:
                chart.Bar(chart_data, chart_options);
                break;
            case CHARTS.RADAR:
                chart.Radar(chart_data, chart_options);
                break;
            case CHARTS.POLARAREA:
                chart.PolarArea(chart_data, chart_options);
                break;
            case CHARTS.PIE:
                chart.Pie(chart_data, chart_options);
                break;
            case CHARTS.DOUGHNUT:
                chart.Doughnut(chart_data, chart_options);
                break;
        }
    }
});

var Labels = React.createClass({
    add_label_F: function (event) {
        var $add_label_button = $(event.target);
        var $input_field = $add_label_button.closest('div').find('input');
        var new_label_text = $input_field.val();

        // Remove focus from the button
        $add_label_button.blur();

        this.props.add_label_F(new_label_text);

        $input_field.val("");
    },

    render: function () {
        var remove_label_F = this.props.remove_label_F;
        var update_label_F = this.props.update_label_F;

        var label_nodes = this.props.chart_labels.map(function (label_text, label_index) {

            var remove_this_label_F = function() {
                remove_label_F(label_index);
            };

            var update_this_label_F = function(new_label_text) {
                update_label_F(label_index, new_label_text);
            };

            return <Label label_text={label_text}
                          remove_this_label_F={remove_this_label_F}
                          update_this_label_F={update_this_label_F}/>;
        });

        return (
            <div className="panel panel-default">
                <div className="panel-heading text-center">
                    <h3 className="panel-title">Labels</h3>
                </div>

                <div className="panel-body">
                    <div className="input-group input-group-sm">
                        <input type="text" className="form-control" placeholder="New Label..."/>
                        <span className="input-group-btn">
                            <span onClick={this.add_label_F} className="btn btn-default" type="button">
                                <strong>+</strong>
                            </span>
                        </span>
                    </div>
                </div>

                <ul className="list-group text-center">
                {label_nodes}
                </ul>
            </div>
        );
    },
});

var Label = React.createClass({
    remove_this_label: function (event) {
        event.preventDefault();

        $(event.target).blur();

        this.props.remove_this_label_F();
    },

    handle_change: function (event) {
        event.preventDefault();

        var new_label_text = event.target.value;

        this.props.update_this_label_F(new_label_text);
    },

    render: function () {
        return (
            <li className="list-group-item">
                <div className="input-group input-group-sm">
                    <span className="input-group-btn">
                        <span onClick={this.remove_this_label} className="btn btn-default" type="button">
                            <span className="glyphicon glyphicon-remove"></span>
                        </span>
                    </span>
                    <input onChange={this.handle_change}
                           type="text"
                           className="form-control"
                           value={this.props.label_text}/>
                </div>
            </li>
        );
    },
});

var Datasets = React.createClass({

	getInitialState: function  () {
		return {dataset_index_shown: 0};
	},

	change_dataset_shown_F: function (new_index) {
		this.setState({dataset_index_shown: new_index});
	},

	handle_add_dataset_F: function () {
		this.props.add_dataset_F();
		this.setState({dataset_index_shown: this.props.chart_data.length - 1});
	},

	handle_remove_dataset_F: function () {
		if (this.props.chart_data.length !== 1) {
			this.setState({dataset_index_shown: Math.max(0, this.state.dataset_index_shown - 1)});
			this.props.remove_dataset_F(this.state.dataset_index_shown);
		}
	},

	handle_toggle_visibility_F: function () {
		this.props.toggle_dataset_visibility_F(this.state.dataset_index_shown);
	},

	render: function () {
		var dataset_index_shown = this.state.dataset_index_shown;

		var change_dataset_shown_F = this.change_dataset_shown_F;

		var update_dataset_value_F = this.props.update_dataset_value_F;

		var update_this_datasets_value_F = function (value_index, new_value) {
			update_dataset_value_F(dataset_index_shown, value_index, new_value);
		};

		var view_button_nodes = this.props.chart_data.map(function (dataset, index) {
			var button_class = (dataset_index_shown === index) ? "btn btn-default btn-sm active" : "btn btn-default btn-sm";

			var show_this_dataset_F = function () {
				change_dataset_shown_F(index);
			};

			return (
	            <span key={index} onClick={show_this_dataset_F} className={button_class} type="button">
	                {index + 1}
	            </span>
	        );
		});

		var value_row_nodes = this.props.chart_data[this.state.dataset_index_shown].data.map(function (value, index) {

			var update_this_value_F = function (new_value) {
				update_this_datasets_value_F(index, new_value);
			};

			return (
		        <li className="list-group-item row">
		            <div className="col-sm-6 col-sm-offset-3">
			            <NumberInput value={value}
			            			 update_number_F={update_this_value_F}>
			            </NumberInput>
		            </div>
		        </li>
			);
		});

		var update_dataset_color_F = this.props.update_dataset_color_F;

		var update_this_datasets_color_F = function (option_key, new_color) {
			update_dataset_color_F(dataset_index_shown, option_key, new_color);
		};

		var color_controls;

		var update_this_datasets_fill_color_F = function (new_color) {
			update_this_datasets_color_F("fillColor", new_color);
		};

		var update_this_datasets_stroke_color_F = function (new_color) {
			update_this_datasets_color_F("strokeColor", new_color);
		};

		var update_this_datasets_point_color_F = function (new_color) {
			update_this_datasets_color_F("pointColor", new_color);
		};

		var update_this_datasets_pointstroke_color_F = function (new_color) {
			update_this_datasets_color_F("pointStrokeColor", new_color);
		};

		var current_fill_color = this.props.chart_data[this.state.dataset_index_shown]["fillColor"]
		var current_stroke_color = this.props.chart_data[this.state.dataset_index_shown]["strokeColor"]
		var current_point_color = this.props.chart_data[this.state.dataset_index_shown]["pointColor"]
		var current_pointstroke_color = this.props.chart_data[this.state.dataset_index_shown]["pointStrokeColor"]

		if (this.props.active_chart === CHARTS.BAR) {
			color_controls = (
                <li className="list-group-item text-left">
                	<div className="row">
					    <div className="col-md-6">
					    	<ColorInput color={current_fill_color}
					    				update_color_F={update_this_datasets_fill_color_F}/>
					    	Fill
					    </div>
					    <div className="col-md-6">
					    	<ColorInput color={current_stroke_color}
					    				update_color_F={update_this_datasets_stroke_color_F}/>
					    	Stroke
					    </div>
				    </div>
                </li>
            );
		} else {
			color_controls = (
                <li className="list-group-item text-left">
                	<div className="row">
					    <div className="col-md-6">
					    	<ColorInput color={current_fill_color}
					    				update_color_F={update_this_datasets_fill_color_F}/>
					    	Fill
					    </div>
					    <div className="col-md-6">
					    	<ColorInput color={current_stroke_color}
					    				update_color_F={update_this_datasets_stroke_color_F}/>
					    	Stroke
					    </div>
				    </div>
                	<div className="row">
					    <div className="col-md-6">
					    	<ColorInput color={current_point_color}
					    				update_color_F={update_this_datasets_point_color_F}/>
					    	Point
					    </div>
					    <div className="col-md-6">
					    	<ColorInput color={current_pointstroke_color}
					    				update_color_F={update_this_datasets_pointstroke_color_F}/>
					    	Point Stroke
					    </div>
				    </div>
                </li>
            );
		}

		return (
	        <div className="col-sm-4">
	            <div className="panel panel-default">
	                <div className="panel-heading text-center">
	                    <h3 className="panel-title">Datasets</h3>
	                </div>
	                <div className="panel-body">
	                    <div className="pull-left">
	                    	{view_button_nodes}
	                    </div>
	                    <span onClick={this.handle_add_dataset_F} className="btn btn-default btn-sm pull-right" type="button">
	                        Add Dataset
	                    </span>
	                </div>
	                <ul className="list-group text-center">
	                    <div className="container">
		                    {value_row_nodes}
	                    </div>
	                    {color_controls}
	                    <li className="list-group-item">
	                        <span onClick={this.handle_toggle_visibility_F} className="btn btn-default btn-block">Toggle Dataset Visiblity</span>
	                        <span onClick={this.handle_remove_dataset_F} className="btn btn-default btn-block">Delete This Dataset</span>
	                    </li>
	                </ul>
	            </div>
	        </div>
        );
	},
});

var Data = React.createClass({

    add_datum: function (event) {
        event.preventDefault();

        this.props.add_datum_F();
    },

    render: function() {
        var remove_datum_F = this.props.remove_datum_F;
        var update_datum_value_F = this.props.update_datum_value_F;
        var update_datum_color_F = this.props.update_datum_color_F;

        var datumNodes = this.props.chart_data.map(function(datum, index) {

            var remove_this_datum_F = function () {
                remove_datum_F(index);
            };

            var update_this_datum_value_F = function (new_datum_value) {
                update_datum_value_F(index, new_datum_value);
            };

            var update_this_datum_color_F = function (new_datum_color) {
                update_datum_color_F(index, new_datum_color);
            };

            return <Datum remove_this_datum_F={remove_this_datum_F}
                          update_this_datum_value_F={update_this_datum_value_F}
                          datum_value={datum.value}
                          update_this_datum_color_F={update_this_datum_color_F}
                          datum_color={datum.color}/>;
        });

        return (
            <div className="col-sm-4 col-sm-offset-2">
                <div className="panel panel-default">
                    <div className="panel-heading text-center">
                        <h3 className="panel-title">{"Data"}</h3>
                    </div>
                    <div className="panel-body text-center">
                        <span onClick={this.add_datum} className="btn btn-default col-sm-6 col-sm-offset-3">Add Value</span>
                    </div>
                    <ul className="list-group">
                    <div className="container">
                        {datumNodes}
                    </div>
                    </ul>
                </div>
            </div>
        );
    },
});

var Datum = React.createClass({

    render: function () {
        return (
            <li className="list-group-item row">
                <div className="col-sm-2">
                    <div className="input-group input-group-sm">
                        <span className="input-group-btn">
                            <span onClick={this.props.remove_this_datum_F} className="btn btn-default" type="button">
                                <span className="glyphicon glyphicon-remove"></span>
                            </span>
                        </span>
                    </div>
                </div>

                <div className="col-sm-4 text-right">
                    <ColorInput color={this.props.datum_color}
                                update_color_F={this.props.update_this_datum_color_F}/>
                </div>

                <div className="col-sm-6">
                    <NumberInput value={this.props.datum_value}
                                 update_number_F={this.props.update_this_datum_value_F}/>
                </div>
            </li>
        );
    },
});

var Options = React.createClass({
    render: function () {
        var chart_option_set = this.props.chart_option_set;
        var update_option_F = this.props.update_option_F;
        var active_chart = this.props.active_chart;
        var chart_dimensions = this.props.dimensions[active_chart];

        var legal_categories = this.props.option_catgeory_layouts.filter(function (category) {
        	return $.inArray(active_chart, category.charts_affected) > -1;
        });

        var category_nodes = legal_categories.map(function (category, index) {
            return (
                <OptionCategory category_title={category.title}
                                category_layout={category}
                                chart_option_set={chart_option_set}
                                update_option_F={update_option_F}
                                category_index={index}
                                key={index}/>
            );
        });

        return (
            <div className="col-sm-6">
                <div className="panel panel-default">
                    <div className="panel-heading text-center">
                        <h3 className="panel-title">Options</h3>
                    </div>
                    <div className="panel-body">
                        <div className="panel-group" id="accordion">
	                        <DimensionsOptionCategory width={chart_dimensions.width}
	                        						  height={chart_dimensions.height}
	                        						  change_width_F={this.props.update_chart_width_F}
	                        						  change_height_F={this.props.update_chart_height_F}>
	                        </DimensionsOptionCategory>
                        {category_nodes}
                        </div>
                    </div>
                </div>
            </div>
        );
    },
});

var DimensionsOptionCategory = React.createClass({
    render: function () {
    	var width = this.props.width;
    	var height = this.props.height;
    	var change_width_F = this.props.change_width_F;
    	var change_height_F = this.props.change_height_F;
        var accordian_id = "collapseDimensions";
        var accordian_href = "#" + accordian_id;

        var cell_option_object = {float:"none", display:"table-cell"};
        cell_option_object['vertical-align'] = 'middle';


        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <span className="glyphicon glyphicon-chevron-down pull-right"></span>
                    <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href={accordian_href}>
                            Dimensions
                        </a>
                    </h4>
                </div>
                <div id={accordian_id} className="panel-collapse collapse">

		            <div className="panel-body" style={{display:"table"}}>
		                <div className="col-sm-8" style={cell_option_object}>
		                    Width
		                </div>
		                <div className="col-sm-4 text-right" style={cell_option_object}>
			                <NumberInput value={width}
			                             update_number_F={change_width_F}/>
		                </div>
		            </div>
		            <div className="panel-body" style={{display:"table"}}>
		                <div className="col-sm-8" style={cell_option_object}>
		                    Height
		                </div>
		                <div className="col-sm-4 text-right" style={cell_option_object}>
			                <NumberInput value={height}
			                             update_number_F={change_height_F}/>
		                </div>
		            </div>

                </div>
            </div>
        );
    },
});

var OptionCategory = React.createClass({
    render: function () {
        var chart_option_set = this.props.chart_option_set;
        var update_option_F = this.props.update_option_F;
        var category_index = this.props.category_index;
        var accordian_id = "collapse" + category_index;
        var accordian_href = "#collapse" + category_index;

        // Filter out options that don't apply to this chart type
        // TODO this should be figured out in OPTION_CATEGORY_LAYOUTS:
        var legal_options = this.props.category_layout.options.filter(function (option) {
            return option.key in chart_option_set;
        });

        var option_nodes = legal_options.map(function (option) {

            // TODO: Use select_options and dependency_key
            var option_key = option.key;
            var option_value = chart_option_set[option_key];
            var select_options = option.choices;
            var dependency_key = option.dependency_key;

            var update_this_option_F = function (new_option_value) {
                update_option_F(option_key, new_option_value);
            };

            return <SingleOption option_type={option.type}
                                 option_description={option.description}
                                 update_this_option_F={update_this_option_F}
                                 option_value={option_value}
                                 select_options={select_options}/>;
        });


        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <span className="glyphicon glyphicon-chevron-down pull-right"></span>
                    <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href={accordian_href}>
                            {this.props.category_title}
                        </a>
                    </h4>
                </div>
                <div id={accordian_id} className="panel-collapse collapse">
                    {option_nodes}
                </div>
            </div>
        );
    },
});

var SingleOption = React.createClass({

    // TODO: This will be contained in a CheckboxInput eventually
    handle_checkbox_toggle: function (event) {
        this.props.update_this_option_F();
    },

    render: function  () {
        var option_control;

        if (this.props.option_type === "boolean") {

            option_control = (
                <input checked={this.props.option_value} onChange={this.handle_checkbox_toggle} type="checkbox"/>
            );

        } else if (this.props.option_type === "number") {

            option_control = (
                <NumberInput value={this.props.option_value}
                             update_number_F={this.props.update_this_option_F}/>
            );

        } else if (this.props.option_type === "color") {

            option_control = (
                <ColorInput color={this.props.option_value}
                            update_color_F={this.props.update_this_option_F}/>
            );

        } else if (this.props.option_type === "select") {

            option_control = (
                <SelectInput select_options={this.props.select_options}
                             update_value_F={this.props.update_this_option_F}/>
            );

        }

        var cell_option_object = {float:"none", display:"table-cell"};
        cell_option_object['vertical-align'] = 'middle';
        return (
            <div className="panel-body" style={{display:"table"}}>
                <div className="col-sm-8" style={cell_option_object}>
                    {this.props.option_description}
                </div>
                <div className="col-sm-4 text-right" style={cell_option_object}>
                    {option_control}
                </div>
            </div>
       );
    },
});

var SelectInput = React.createClass({
	handle_option_change: function (event) {
		this.props.update_value_F(event.target.value);
	},
	render: function () {
		var option_nodes = this.props.select_options.map(function (option) {
			return (
			    <option value={option}>{option}</option>
	        );
		});
		return (
			<select onChange={this.handle_option_change}>
				{option_nodes}
			</select>
		);
	},
});

var ColorInput = React.createClass({

    handle_color_change: function ($value_field) {
        // Function from owner which updates the appropriate color App's state.
        var update_color_F = this.props.update_color_F;

        // New color value as rgba string.
        var new_color = spectrum_input_rgba_string($value_field);

        // Update App state with new color.
        update_color_F(new_color);
    },

    render: function () {
        return <input type="text" className="btn form-control" value={this.props.color}/>;
    },

    componentDidUpdate: function () {
        this.initialize_spectrum();
    },

    componentDidMount: function () {
        this.initialize_spectrum();
    },

    // Initialize the "Spectrum" color picker plugin on the <input>.
    initialize_spectrum: function () {
        var $input_field = $(this.getDOMNode());
        var initial_color = this.props.color;
        var color_change_F = this.handle_color_change;

        $input_field.spectrum({
            color: initial_color,
            showAlpha: true,
            showInput: false,
            showInitial: true,
            preferredFormat: "rgb",
            clickoutFiresChange: true,
            change: function () {
                color_change_F($(this));
            },
        });
    },
});

var HelpTooltip = React.createClass({
	render: function () {
		return (
		    <span className="glyphicon glyphicon-question-sign">
		    </span>
        );
	},

    componentDidMount: function () {
    	var tooltip_text = this.props.tooltip_text;
        $(this.getDOMNode()).tooltip({
            placement: 'right',
            container: 'body',
            title: tooltip_text,
        });
    },
});

var NumberInput = React.createClass({
    render: function () {
        return (
            <div className="input-group input-group-sm">
                <span className="input-group-btn">
                    <span onClick={this.decrement_value} className="btn btn-default" type="button"><strong>-</strong>
                    </span>
                </span>

                <input type="number" onChange={this.handle_value_change} className="value_input form-control text-center" value={this.props.value}/>

                <span className="input-group-btn">
                    <span onClick={this.increment_value} className="btn btn-default" type="button"><strong>+</strong>
                    </span>
                </span>
            </div>
        );
    },

    handle_value_change: function (event) {
        var field_value = event.target.value;
        field_value = field_value.replace(/[^\d.]/g, "");

        var to_update_with;

        if (field_value === "") {
            to_update_with = 0;
        } else {
            to_update_with = parseInt(field_value, 10);
        }

        this.props.update_number_F(to_update_with);
    },

    increment_value: function () {
        var field_value = $(this.getDOMNode()).find('input.value_input').val();
        field_value = field_value.replace(/[^\d.]/g, "");

        var to_update_with;

        if (field_value === "") {
            to_update_with = 0;
        } else {
            to_update_with = parseInt(field_value, 10) + 1;
        }

        this.props.update_number_F(to_update_with);
    },

    decrement_value: function () {
        var field_value = $(this.getDOMNode()).find('input.value_input').val();
        field_value = field_value.replace(/[^\d.]/g, "");

        var to_update_with;

        if (field_value === "") {
            to_update_with = 0;
        } else {
            to_update_with = Math.max(0, parseInt(field_value, 10) - 1);
        }

        this.props.update_number_F(to_update_with);
    },
})

React.renderComponent(
    App(APP_CONFIGURATION),
    document.getElementById('content')
);

var spectrum_input_rgba_string = function (input_jq) {
    var color_object = input_jq.spectrum("get");
    var rgba_object = color_object.toRgb();
    rgba_object['a'] = color_object.getAlpha();
    return "rgba(" + rgba_object['r'] + "," +
                     rgba_object['g'] + "," +
                     rgba_object['b'] + "," +
                     rgba_object['a'] + ")";
};

