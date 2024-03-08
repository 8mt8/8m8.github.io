const dynamicPilotFields = document.getElementById('dynamicFields');

for (let i = 1; i <= 10; i++) {
  const label = document.createElement('label');
  label.setAttribute('for', `p${i}`);
  label.textContent = `P${i}:`;
  
  const select = document.createElement('select');
  select.id = `p${i}`;
  select.name = `p${i}`;

  // Add default option
  select.appendChild(new Option('(select one)', ''));

  // Options array could be predefined or dynamically fetched
  const options = ['verstappen', 'perez', 'sainz', 'leclerc', 'russell', 'norris', 'hamilton', 'piastri', 'alonso', 'stroll', 'zhou', 'magnussen', 'ricciardo', 'tsunoda', 'albon', 'hulkenberg', 'ocon', 'gasly', 'bottas', 'sargeant'];

  // Create and append the options
  options.forEach(value => {
    const optionElement = document.createElement('option');
    optionElement.value = value;
    optionElement.textContent = value.charAt(0).toUpperCase() + value.slice(1);  // Capitalize the first letter
    select.appendChild(optionElement);
  });

  // Append the label and select to the container
  dynamicPilotFields.appendChild(label);
  dynamicPilotFields.appendChild(select);
}

