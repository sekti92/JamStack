const fileRepos = async username => {
    const repos = await fetch(
        `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
    )
        .then(res => res.json())
        .catch(err => console.error(err))

    const markUp = repos
        .map(
            repo => `
            <li>
                <a href="${repo.html_url}">${repo.name}</a>
            </li>
        `
        )
        .join('');

    const content = document.getElementById('content');
    content.innerHTML = `<ul>${markUp}</ul>`;
}

fileRepos('sekti92');