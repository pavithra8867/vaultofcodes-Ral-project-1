function verifyStudent() {
  const id = document.getElementById('identifier').value.trim();
  const result = document.getElementById('result');
  const spinner = document.querySelector('.spinner');

  if (!id) return alert('Please enter an ID or Email');

  spinner.style.display = 'block';
  result.innerHTML = '';

  setTimeout(() => {
    const student = studentData[id];
    spinner.style.display = 'none';

    if (!student) {
      result.innerHTML = '<p>No student found</p>';
      return;
    }

    result.innerHTML = `
      <div class="card">
        <h3>${student.name}</h3>
        <p>Email: ${student.email}</p>
        <p>Mobile: ${student.mobile}</p>
        <p>Domain: ${student.domain}</p>
        <p>College: ${student.college}</p>
        <p>Start Date: ${student.start}</p>
        <p>Duration: ${student.duration}</p>
        <a href="${student.certificate}" target="_blank">View Certificate</a>
      </div>
    `;

    showToast("✅ Student data loaded!");
  }, 1000);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = "toast show";
  setTimeout(() => toast.className = "toast", 3000);
}
