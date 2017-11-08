// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    let headquarters=42
    let distances=pickup-headquarters
    distances = Math.abs(distances);
    return distances

}
function distanceFromHqInFeet(pickup){
  return distanceFromHqInBlocks(pickup) * 264;
}
function calculateVertical(){

}
