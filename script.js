window.onload = function() {
    populateDrivers();
    populateTeams();
};

function populateDrivers() {
    const drivers = ['Max Verstappen', 'Lewis Hamilton', 'Charles Leclerc', 'Carlos Sainz', 'Daniel Ricciardo', 'Lando Norris', 'Fernando Alonso', 'Esteban Ocon', 'Valtteri Bottas', 'George Russell', 'Sergio Perez', 'Pierre Gasly', 'Yuki Tsunoda', 'Nicholas Latifi', 'Alex Albon', 'Sebastian Vettel', 'Lance Stroll', 'Kevin Magnussen', 'Mick Schumacher', 'Robert Kubica'];
    const driverGuessesFieldset = document.getElementById('driverGuesses');

    for (let i = 1; i <= 10; i++) {
        const container = document.createElement('div');

        const label = document.createElement('label');
        label.setAttribute('for', `p${i}`);
        label.textContent = `P${i}:`;

        const select = document.createElement('select');
        select.id = `p${i}`;
        select.name = `p${i}`;
        select.appendChild(new Option('(select one)', ''));

        drivers.forEach(driver => {
            const optionElement = document.createElement('option');
            optionElement.value = driver.toLowerCase().replace(/\s+/g, '_');
            optionElement.textContent = driver;
            select.appendChild(optionElement);
        });

        container.appendChild(label);
        container.appendChild(select);
        driverGuessesFieldset.appendChild(container);
    }
}

function populateTeams() {
    const teams = ['Mercedes', 'Red Bull Racing', 'Ferrari', 'McLaren', 'Alpine', 'AlphaTauri', 'Aston Martin', 'Williams', 'Alfa Romeo', 'Haas'];
    const teamGuessesFieldset = document.getElementById('teamGuesses');

    for (let i = 1; i <= 10; i++) {
        const container = document.createElement('div');

        const label = document.createElement('label');
        label.setAttribute('for', `t${i}`);
        label.textContent = `T${i}:`;

        const select = document.createElement('select');
        select.id = `t${i}`;
        select.name = `t${i}`;
        select.appendChild(new Option('(select one)', ''));

        teams.forEach(team => {
            const optionElement = document.createElement('option');
            optionElement.value = team.toLowerCase().replace(/\s+/g, '_');
            optionElement.textContent = team;
            select.appendChild(optionElement);
        });

        container.appendChild(label);
        container.appendChild(select);
        teamGuessesFieldset.appendChild(container);
    }
}
