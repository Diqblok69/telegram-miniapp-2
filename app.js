const tg = Telegram.WebApp
tg.ready()

async function verify() {
  const mc = document.getElementById('mc').value

  const res = await fetch('https://TUO_BACKEND.onrender.com/api/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      initData: tg.initData,
      minecraft: mc
    })
  })

  const data = await res.json()
  alert(data.ok ? 'Verificato' : data.error)
}
