function addQuestion(question, user, date) {
    // alert("Adding question to database");
    fetch('/cgi-bin/JCW.py', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type:"add", question: question, user: user, date: date })
    })
    .then(res => res.json())
    .then(data => {
    console.log("Server response:", data.status, data.data);
    // alert(data.added);
    })
    .catch(error => {
        console.error('Error adding question:', error);
    });
}

async function getQuestions() {
    console.log('getquestions called')
    // return fetch('/cgi-bin/insert_QnA.py', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ type:"get", question: "n/a", user: "admin", date: Date.now() })
    // })
    // .then(res => res.json())
    // .then(data => {
    //     console.log("Server response:", data.status, data.data);
    //     return data.data;
    // })
    // .catch(error => {
    //     console.error('Error getting questions:', error);
    // });
    try{
        // console.log('trying to get questions...')
        const response = await fetch('/cgi-bin/JCW.py', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ type:"get", question: "n/a", user: "admin", date: Date.now() })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.status)
        }
        const data = await response.json();
        console.log("Server response:", data.status, data.data)
        return data.data
    } catch (error) {
        console.error('Error getting questions:', error)
        throw error;
    }
}

export { addQuestion, getQuestions }