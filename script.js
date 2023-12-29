const url = 'https://raw.githubusercontent.com/Cloud-Dark/simple-json/main/simple-json-for-table.json';

function showLoading() {
  const dataTable = document.getElementById('data-table');
  const loadingMessage = document.getElementById('loading-message');
  dataTable.style.display = 'none';
  loadingMessage.style.display = 'block';
}

function hideLoading() {
  const loadingMessage = document.getElementById('loading-message');
  loadingMessage.style.display = 'none';
}

function fetchData() {
  const dataTable = document.getElementById('data-table');
  const loadingMessage = document.getElementById('loading-message');
  dataTable.style.display = 'none';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const count = data.count;
      const entries = data.entries;
      const dataCountElement = document.getElementById('data-count');
      const dataTableBody = document.getElementById('data-body');

      dataCountElement.textContent = `Jumlah data: ${count}`;
      dataTableBody.innerHTML = '';

      entries.forEach(entry => {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = entry.API;
        row.appendChild(titleCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = entry.Description;
        row.appendChild(descriptionCell);

        const linkCell = document.createElement('td');
        const linkAnchor = document.createElement('a');
        linkAnchor.href = entry.Link;
        linkAnchor.textContent = entry.Link;
        linkCell.appendChild(linkAnchor);
        row.appendChild(linkCell);

        const categoryCell = document.createElement('td');
        categoryCell.textContent = entry.Category;
        row.appendChild(categoryCell);
        dataTableBody.appendChild(row);
        dataTable.style.display = 'block';
      });

      hideLoading();
    })
    .catch(error => {
      hideLoading();
      console.error('Error:', error);
    });
}

fetchData();
