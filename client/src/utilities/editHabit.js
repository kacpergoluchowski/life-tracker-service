export default async function editHabit(progress) {
    const newData = [localStorage.getItem('user-nickname'), localStorage.getItem('activity-id'), progress.current.value];

    await fetch('http://127.0.0.1:5000/editHabit', {
        method: "POST",
        body: JSON.stringify({progressData: newData}),
        headers: {
            "Content-type":"application/json"
        }
    })
}