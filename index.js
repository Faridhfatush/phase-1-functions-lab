// Code your solution in this file!
// Code your solution in this file!


function distanceFromHqInBlocks(pickupLocation) {
    const hq = 42;
    return Math.abs(pickupLocation - hq);
  }
  
function distanceFromHqInFeet(pickupLocation){
        const hq = 42;
        const blockDistance = Math.abs(pickupLocation - hq);
        return blockDistance * 264;
      }
      



function distanceTravelledInFeet(start, destination){
    const blocksTravelled = Math.abs(destination - start);
  return blocksTravelled * 264;

}


    function calculatesFarePrice(start, destination) {
        const feet = Math.abs(destination - start) * 264;
      
        if (feet <= 400) {
          return 0;
        } else if (feet > 400 && feet <= 2000) {
          return (feet - 400) * 0.02;
        } else if (feet > 2000 && feet <= 2500) {
          return 25;
        } else {
          return 'cannot travel that far';
        }
      }
      

