// this is a partially revealing module pattern - just a variation on what we've already done

const myVM = (() => {
    // get the user buttons and fire off an async DB query with Fetch
    let userButtons = document.querySelectorAll('.u-link');

    function getUserData(event) {
        event.preventDefault();
        //debugger;
        //1,2 or 3 depending on which anchor tag you click
        let url = `/${this.getAttribute('href')}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch (err) => console.log(err));

    userButtons.forEach(button => button.addEventListener("click", getUserData))
    }

})();