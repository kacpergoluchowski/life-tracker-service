export default function fillHabitsArray(type, activities) {
    const activitiesArray = new Array();
    let index = 0;
  
    for(let i = 0; i < activities.length; i++) {
      if(activities[i].activityType === type) {
        activitiesArray[index] = activities[i];
        index++;  
        if(index==2)
          return activitiesArray;
      }
    }
  
    return activitiesArray;
  }