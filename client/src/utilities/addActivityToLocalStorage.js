function addActivityToLocalStorage(activity_data) {
    console.log(activity_data)
    localStorage.setItem('activity-id', activity_data._id)
    localStorage.setItem('activity-name', activity_data.activityName);
    localStorage.setItem('activity-icon', activity_data.activityIcon);
    localStorage.setItem('activity-frequency', activity_data.activityFrequency);
    localStorage.setItem('activity-timeForRealization', activity_data.activityTime);
    localStorage.setItem('activity-unit', activity_data.activityUnit)
    localStorage.setItem('activity-progress', activity_data.activityProgress)
}

export default addActivityToLocalStorage;