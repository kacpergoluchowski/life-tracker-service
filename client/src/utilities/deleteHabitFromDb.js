export default async function deleteHabitFromDb(id) {
    const nickname = localStorage.getItem('user-nickname');

    await fetch(`http://127.0.0.1:5000/deleteHabit`, {
        method: "POST",
        body: JSON.stringify({habitId: id, nickname: nickname}),
        headers: {
            "Content-type":"application/json"
        }
    });
}