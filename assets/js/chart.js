// line chart

Highcharts.chart('linechart', {
    chart: {
        type: 'line'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
    },
    yAxis: {
        title: {
            text: 'Year wise Published (%)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Years',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }]
});
// Build the chart
Highcharts.chart('piechart', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Social Sites',
        colorByPoint: true,
        data: [{
            name: 'Twitter',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Google+',
            y: 11.84
        }, {
            name: 'News/Blogs',
            y: 10.85
        }, {
            name: 'Images/Videos',
            y: 4.67
        }, {
            name: 'Facebook',
            y: 4.18
        }, {
            name: 'Forums',
            y: 7.05
        }]
    }]
});
