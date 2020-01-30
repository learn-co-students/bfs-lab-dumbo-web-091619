function bfs(rootNode, vertices, edges){
    rootNode.distance = 0
    let found = [rootNode]
    let newOrder = [rootNode]

    while (!!found.length){
        let currentNode = found.shift()
        let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
        newOrder = newOrder.concat(adjacentNodes)
        markDistanceAndPredecessor(currentNode, adjacentNodes)
        found = found.concat(adjacentNodes)
    }
    return newOrder
}

function findAdjacent(nodeName, vertices, edges){
    return edges.filter(edge => {
        return edge.includes(nodeName)
    }).map(edge => {
        return edge.filter( node => {
            return (node !== nodeName)
        })[0]
    }).map(name => {
        return findNode(name, vertices)
    }).filter(node => {
        return node.distance === null
    })
}

function markDistanceAndPredecessor(predecessor, adjacentNodes){
    adjacentNodes.map(node => {
        node.distance = predecessor.distance + 1
        node.predecessor = predecessor
    })
}

// helper func
function findNode(nodeName, vertices){
    return vertices.find(function(vertex){
      return vertex.name == nodeName
    })
  }

