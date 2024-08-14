const insert = document.getElementById("display");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class="color" style="border:2px solid white">
      <table>
        <tr>
          <th>Key</th>
          <th>Keycode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === " " ? "Space" : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});
