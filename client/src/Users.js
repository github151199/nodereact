export async function APIgetAllUsers() {
    const response = await fetch('/server/users');
    return await response.json();
}

export async function APIcreateUser(data) {
    const response = await fetch(`/server/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: data })
    })
    return await response.json();
}
