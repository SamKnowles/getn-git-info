const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const client_id = "3tzPytTYEEwct2e";
const client_secret = "ddcb645aee669564615269b63f9ef415dc504fa4";

const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
    
    const data = await api_call.json();
    return { data: data }
};

const showData = () => {
    fetchUsers(inputValue.value).then((res) => {

        nameContainer.innerHTML = `Name: <span class='main__profile-value'>${res.data.name}</span`;

        unContainer.innerHTML = `Name: <span class='main__profile-value'>${res.data.login}</span`;

        reposContainer.innerHTML = `Name: <span class='main__profile-value'>${res.data.public_repos}</span`;

        urlContainer.innerHTML = `Name: <span class='main__profile-value'>${res.data.html_url}</span`;

    })
}




searchButton.addEventListener('click', () => {
    showData();
})
