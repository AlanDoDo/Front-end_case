window.addEventListener('load', function () {
  const line = document.querySelector('.line');
  for (let i = 0; i <= line.offsetHeight / 20; i++) {
    let hr = document.createElement('hr');
    hr.style.position = 'absolute';
    hr.style.border = '0px';
    hr.style.height = '1px';
    hr.style.width = line.offsetWidth + 'px';
    hr.style.top = (i - 1) * 20 + 'px';
    hr.style.backgroundColor = 'rgba(228, 14, 116)';
    hr.style.marginTop = '20px';
    line.appendChild(hr);
  }

  for (let i = 0; i <= line.offsetWidth / 20; i++) {
    let hr = document.createElement('hr');
    hr.style.position = 'absolute';
    hr.style.border = '0px';
    hr.style.height = line.offsetHeight + 'px';
    hr.style.width = '1px'
    hr.style.left = (i - 1) * 20 + 'px';
    hr.style.top = '0px';
    hr.style.backgroundColor = 'rgba(228, 14, 116)';
    hr.style.marginLeft = '20px';
    hr.style.marginTop = '0px';
    line.appendChild(hr);
  }

  let div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.left = '50%';
  div.style.bottom = '100px';
  div.style.color = 'red';
  div.style.fontSize = '50px';
  document.body.appendChild(div);
  div.style.transform = 'translate(-50%,0)';

  window.addEventListener('keydown', ({ code }) => {
    div.innerText = code
  })
})



