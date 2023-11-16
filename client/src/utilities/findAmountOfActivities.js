export function findAmountOfHabits(type, activities) {
    let amount = 0;
    for(let i = 0; i < activities.length; i++)
      if(activities[i].activityType === type)
        amount++;
    return amount;
  }