// Creating variables
var nodes = [
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0]
];

function bfs( start ) {
    var listToExplore = [ start ];

    nodes[ start ].visited = true;

    while ( listToExplore.length > 0 ) {
        var nodeIndex = listToExplore.shift();
        nodes[ nodeIndex ].links.forEach( function( childIndex ) {
            if ( !nodes[ childIndex ].visited ) {
                nodes[ childIndex ].visited = true;
                listToExplore.push( childIndex );
            }
        } );
    }
};

function update() {
 console.log(bfs(nodes));
}

    
       
    

function draw() {
	
}
  
function keydown(key) {
	
}
function mouseup() {
	
}

