export function DIRECTIONS() {
  const NORTH = {
    id: 'N',
    propertyAxis: 'y',
    forwardAxis: 1
  };
  const EAST = {
    id: 'E',
    propertyAxis: 'x',
    forwardAxis: 1
  };
  const SOUTH = {
    id: 'S',
    propertyAxis: 'y',
    forwardAxis: -1
  };
  const WEST = {
    id: 'W',
    propertyAxis: 'x',
    forwardAxis: -1
  };

  NORTH.right = EAST;
  NORTH.left = WEST;
  EAST.right = SOUTH;
  EAST.left = NORTH;
  SOUTH.right = WEST;
  SOUTH.left = EAST;
  WEST.right = NORTH;
  WEST.left = SOUTH;

  this.getDirectionBy = id => {
    if (NORTH.id === id) return NORTH;
    else if (SOUTH.id === id) return SOUTH;
    else if (WEST.id === id) return WEST;
    else if (EAST.id === id) return EAST;
  };
}
