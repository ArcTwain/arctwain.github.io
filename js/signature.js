var mySignature = document.getElementById('signature');

var waypoint = new Waypoint({ 
    element: mySignature,
    handler: function (direction) {
        mySignature.classList.add('animate')
    },
    offset: 'bottom-in-view'
})
