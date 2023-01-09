var buttons = document.getElementsByTagName('button');


for (let i = 0; i < buttons.length; i++)
{
  buttons[i].addEventListener('click', e => {
    var name = e.target.textContent;
    localStorage.setItem('sort', name);
    document.location.href = "Visualization.html";
  });
}
