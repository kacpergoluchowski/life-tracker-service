async function addActivityToDb(data) {
    console.log(data);
    try {
        const user_nickname = localStorage.getItem('user-nickname');
        const activity_name = localStorage.getItem('activity-name');
        const activity_icon = localStorage.getItem('activity-icon');
        const connectionString = `add${data[0]}`
        console.log(connectionString);
        let newActivityData = [];
        if(data[0]==='Habit') {
            newActivityData = [user_nickname, activity_name, activity_icon, data[1], data[2], data[3]];
            console.log("HABIT: ", newActivityData);
        }
        else if(data[0]==='Goal') {
            newActivityData = [user_nickname, activity_name, activity_icon, data[1]];
            console.log("GOAL: ", newActivityData);
        }

        const query = await fetch(`http://127.0.0.1:5000/${connectionString}`, {
            method: 'POST',
            body: JSON.stringify({ activity: newActivityData }),
            headers: {
                'Content-type': 'application/json',
            },
        });

        if (!query.ok) {
            throw new Error('Failed to add activity to the database.');
        }
    } catch (error) {
        console.error('Error adding activity to the database:', error);
    }
}

export default addActivityToDb;
