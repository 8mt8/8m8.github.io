const dynamicPilotFields = document.getElementById('dynamicPilotFields');

for (let i = 1; i <= 10; i++) {
  const container = document.createElement('div');

  const label = document.createElement('label');
  label.setAttribute('for', `p${i}`);
  label.textContent = `P${i}:`;

  const select = document.createElement('select');
  select.id = `p${i}`;
  select.name = `p${i}`;
  select.appendChild(new Option('(select one)', ''));

  const options = ['verstappen', 'perez', 'sainz', 'leclerc', 'russell', 'norris', 'hamilton', 'piastri', 'alonso', 'stroll', 'zhou', 'magnussen', 'ricciardo', 'tsunoda', 'albon', 'hulkenberg', 'ocon', 'gasly', 'bottas', 'sargeant'];

  options.forEach(value => {
    const optionElement = document.createElement('option');
    optionElement.value = value;
    optionElement.textContent = value.charAt(0).toUpperCase() + value.slice(1);
    select.appendChild(optionElement);
  });

  container.appendChild(label);
  container.appendChild(select);
  dynamicPilotFields.appendChild(container);
}
