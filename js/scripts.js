// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}




// ---------- CHARTS ----------

// BAR CHART
var barChartoptions = {
  series: [{
  name: 'Months',
  type: 'column',
  data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
}, {
  name: 'Sales',
  type: 'line',
  data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
}],
  chart: {
  height: 350,
  type: 'line',
  toolbar: {
    show:false
  }
},
stroke: {
  width: [0, 4]
},
dataLabels: {
  enabled: true,
  enabledOnSeries: [1]
},
labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
xaxis: {
  type: 'datetime'
},
yaxis: [{
  

}, {
  opposite: true,
  
}]
};

var chart = new ApexCharts(document.querySelector("#bar-chart"), barChartoptions);
chart.render();


// AREA CHART
var areaChartOptions = {
  series: [{
    name: 'Purchase Orders',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Sales Orders',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();

//polar-area chart

var options = {
  series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
  chart: {
  type: 'polarArea',
},
stroke: {
  colors: ['#fff']
},
fill: {
  opacity: 0.8
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#polar-area-chart"), options);
chart.render();


///
var options = {
  series: [{
  data: [44, 55, 41, 64, 22, 43, 21]
}, {
  data: [53, 32, 33, 52, 13, 44, 32]
}],
  chart: {
  type: 'bar',
  height: 430
},
plotOptions: {
  bar: {
    horizontal: true,
    dataLabels: {
      position: 'top',
    },
  }
},
dataLabels: {
  enabled: true,
  offsetX: -6,
  style: {
    fontSize: '12px',
    colors: ['#fff']
  }
},
stroke: {
  show: true,
  width: 1,
  colors: ['#fff']
},
tooltip: {
  shared: true,
  intersect: false
},
xaxis: {
  categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
},
};

var chart = new ApexCharts(document.querySelector("#new-chart"), options);
chart.render();



    
var options = {
  series: [{
  data: data.slice()
}],
  chart: {
  id: 'realtime',
  height: 350,
  type: 'line',
  animations: {
    enabled: true,
    easing: 'linear',
    dynamicAnimation: {
      speed: 1000
    }
  },
  toolbar: {
    show: false
  },
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
title: {
  text: 'Dynamic Updating Chart',
  align: 'left'
},
markers: {
  size: 0
},
xaxis: {
  type: 'datetime',
  range: XAXISRANGE,
},
yaxis: {
  max: 100
},
legend: {
  show: false
},
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


window.setInterval(function () {
getNewSeries(lastDate, {
  min: 10,
  max: 90
})

chart.updateSeries([{
  data: data
}])
}, 1000)