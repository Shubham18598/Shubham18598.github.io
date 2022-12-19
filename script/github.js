// GitHubCalendar(".calendar", "Shubham18598", { responsive: true });
        
// Use a proxy
GitHubCalendar(".calendar", "Shubham18598", {
    proxy(username) {
        return fetch(`https://your-proxy.com/github?user=${username}`)
    }
})